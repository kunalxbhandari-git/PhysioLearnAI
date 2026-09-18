"use client";

import { useMemo, useRef, useState } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import type { OrbitControls as OrbitControlsImpl } from "three-stdlib";

/**
 * Detailed stylized 3D skeleton. Every body region is clickable, highlights
 * on hover, and the camera glides to whatever region is selected.
 * Fully procedural — no downloaded model assets.
 */

export type RegionId =
  | "head"
  | "shoulder"
  | "arm"
  | "thorax"
  | "spine"
  | "hip"
  | "knee"
  | "ankle";

const BONE = "#e8e2d6";
const BONE_DARK = "#cfc7b6";
const ACTIVE = "#0e9aa7";
const HOVER = "#2cc7d4";

const Y_OFF = -1.25; // skeleton group offset

/** World-space focus point for the camera per region. */
export const REGION_FOCUS: Record<RegionId, [number, number, number]> = {
  head: [0, 3.0 + Y_OFF, 0],
  shoulder: [0, 2.5 + Y_OFF, 0],
  arm: [0.55, 1.7 + Y_OFF, 0],
  thorax: [0, 2.15 + Y_OFF, 0.1],
  spine: [0, 1.9 + Y_OFF, -0.05],
  hip: [0, 1.1 + Y_OFF, 0],
  knee: [0, 0.3 + Y_OFF, 0.02],
  ankle: [0, -0.45 + Y_OFF, 0.08],
};

interface RegionProps {
  id: RegionId;
  selected: RegionId | null;
  onSelect: (id: RegionId) => void;
  onHover?: (id: RegionId | null) => void;
  children: (color: string) => React.ReactNode;
}

function Region({ id, selected, onSelect, onHover, children }: RegionProps) {
  const [hovered, setHovered] = useState(false);
  const color = selected === id ? ACTIVE : hovered ? HOVER : BONE;
  return (
    <group
      onClick={(e) => {
        e.stopPropagation();
        onSelect(id);
      }}
      onPointerOver={(e) => {
        e.stopPropagation();
        setHovered(true);
        onHover?.(id);
        document.body.style.cursor = "pointer";
      }}
      onPointerOut={() => {
        setHovered(false);
        onHover?.(null);
        document.body.style.cursor = "default";
      }}
    >
      {children(color)}
    </group>
  );
}

/** Cylinder "bone" between two points, slightly tapered with rounded ends. */
function B({ from, to, r = 0.05, color, ends = true }: { from: [number, number, number]; to: [number, number, number]; r?: number; color: string; ends?: boolean }) {
  const { position, quaternion, length } = useMemo(() => {
    const a = new THREE.Vector3(...from);
    const b = new THREE.Vector3(...to);
    const dir = b.clone().sub(a);
    const len = dir.length();
    const mid = a.clone().add(b).multiplyScalar(0.5);
    const q = new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir.clone().normalize());
    return { position: mid, quaternion: q, length: len };
  }, [from, to]);
  return (
    <group>
      <mesh position={position} quaternion={quaternion}>
        <cylinderGeometry args={[r, r * 0.82, length, 12]} />
        <meshStandardMaterial color={color} roughness={0.55} />
      </mesh>
      {ends && (
        <>
          <mesh position={from}>
            <sphereGeometry args={[r * 1.15, 12, 12]} />
            <meshStandardMaterial color={color} roughness={0.55} />
          </mesh>
          <mesh position={to}>
            <sphereGeometry args={[r * 1.0, 12, 12]} />
            <meshStandardMaterial color={color} roughness={0.55} />
          </mesh>
        </>
      )}
    </group>
  );
}

function J({ p, r = 0.09, color }: { p: [number, number, number]; r?: number; color: string }) {
  return (
    <mesh position={p}>
      <sphereGeometry args={[r, 18, 18]} />
      <meshStandardMaterial color={color} roughness={0.5} />
    </mesh>
  );
}

/** A vertebra: body + spinous process hint. */
function Vertebra({ p, size, color }: { p: [number, number, number]; size: number; color: string }) {
  return (
    <group position={p}>
      <mesh>
        <cylinderGeometry args={[size, size, size * 0.9, 12]} />
        <meshStandardMaterial color={color} roughness={0.55} />
      </mesh>
      <mesh position={[0, 0, -size * 1.3]}>
        <boxGeometry args={[size * 0.5, size * 0.6, size * 1.2]} />
        <meshStandardMaterial color={color} roughness={0.55} />
      </mesh>
    </group>
  );
}

function Skeleton({
  selected,
  onSelect,
  onHover,
}: {
  selected: RegionId | null;
  onSelect: (id: RegionId) => void;
  onHover?: (id: RegionId | null) => void;
}) {
  const shared = { selected, onSelect, onHover };
  return (
    <group position={[0, Y_OFF, 0]}>
      {/* ── Head & cervical spine ── */}
      <Region id="head" {...shared}>
        {(c) => (
          <>
            {/* Cranium (slightly ovoid) */}
            <mesh position={[0, 3.1, -0.02]} scale={[0.92, 1.06, 1.08]}>
              <sphereGeometry args={[0.33, 28, 28]} />
              <meshStandardMaterial color={c} roughness={0.55} />
            </mesh>
            {/* Face / maxilla */}
            <mesh position={[0, 2.9, 0.16]}>
              <boxGeometry args={[0.3, 0.24, 0.2]} />
              <meshStandardMaterial color={c} roughness={0.55} />
            </mesh>
            {/* Eye sockets */}
            {[0.09, -0.09].map((x) => (
              <mesh key={x} position={[x, 3.03, 0.28]}>
                <sphereGeometry args={[0.05, 10, 10]} />
                <meshStandardMaterial color={BONE_DARK} roughness={0.8} />
              </mesh>
            ))}
            {/* Mandible */}
            <mesh position={[0, 2.72, 0.1]} rotation={[0.18, 0, 0]}>
              <boxGeometry args={[0.26, 0.13, 0.26]} />
              <meshStandardMaterial color={c} roughness={0.55} />
            </mesh>
            {/* Cervical vertebrae C1–C7 */}
            {[0, 1, 2, 3].map((i) => (
              <Vertebra key={i} p={[0, 2.6 - i * 0.075, 0.02]} size={0.05} color={c} />
            ))}
          </>
        )}
      </Region>

      {/* ── Shoulder complex ── */}
      <Region id="shoulder" {...shared}>
        {(c) => (
          <>
            {/* Clavicles (S-curve hint) */}
            <B from={[0.04, 2.5, 0.1]} to={[0.3, 2.545, 0.06]} r={0.032} color={c} ends={false} />
            <B from={[0.3, 2.545, 0.06]} to={[0.55, 2.53, -0.01]} r={0.032} color={c} />
            <B from={[-0.04, 2.5, 0.1]} to={[-0.3, 2.545, 0.06]} r={0.032} color={c} ends={false} />
            <B from={[-0.3, 2.545, 0.06]} to={[-0.55, 2.53, -0.01]} r={0.032} color={c} />
            {/* Glenohumeral joints */}
            <J p={[0.58, 2.48, -0.02]} r={0.1} color={c} />
            <J p={[-0.58, 2.48, -0.02]} r={0.1} color={c} />
            {/* Scapulae (blade + spine ridge) */}
            {[1, -1].map((s) => (
              <group key={s} position={[s * 0.42, 2.3, -0.16]} rotation={[0.12, 0, s * 0.3]}>
                <mesh>
                  <boxGeometry args={[0.26, 0.34, 0.035]} />
                  <meshStandardMaterial color={c} roughness={0.55} />
                </mesh>
                <mesh position={[0, 0.12, -0.03]} rotation={[0.25, 0, 0]}>
                  <boxGeometry args={[0.28, 0.05, 0.05]} />
                  <meshStandardMaterial color={c} roughness={0.55} />
                </mesh>
              </group>
            ))}
          </>
        )}
      </Region>

      {/* ── Arms: elbow, wrist & hand ── */}
      <Region id="arm" {...shared}>
        {(c) => (
          <>
            {[1, -1].map((s) => (
              <group key={s}>
                {/* Humerus */}
                <B from={[s * 0.58, 2.42, -0.01]} to={[s * 0.67, 1.9, 0.02]} r={0.052} color={c} />
                {/* Elbow */}
                <J p={[s * 0.67, 1.86, 0.02]} r={0.075} color={c} />
                {/* Radius + ulna */}
                <B from={[s * 0.63, 1.82, 0.03]} to={[s * 0.7, 1.36, 0.1]} r={0.032} color={c} />
                <B from={[s * 0.7, 1.82, 0.015]} to={[s * 0.76, 1.37, 0.09]} r={0.026} color={c} />
                {/* Wrist carpals */}
                <J p={[s * 0.73, 1.31, 0.1]} r={0.055} color={c} />
                {/* Palm */}
                <mesh position={[s * 0.74, 1.2, 0.13]} rotation={[0.32, 0, 0]}>
                  <boxGeometry args={[0.12, 0.14, 0.045]} />
                  <meshStandardMaterial color={c} roughness={0.55} />
                </mesh>
                {/* Fingers */}
                {[-0.035, 0, 0.035].map((dx, fi) => (
                  <B
                    key={fi}
                    from={[s * 0.74 + dx, 1.13, 0.16]}
                    to={[s * 0.74 + dx * 1.6, 1.0, 0.21]}
                    r={0.014}
                    color={c}
                    ends={false}
                  />
                ))}
                {/* Thumb */}
                <B from={[s * 0.69, 1.2, 0.13]} to={[s * 0.63, 1.12, 0.17]} r={0.016} color={c} ends={false} />
              </group>
            ))}
          </>
        )}
      </Region>

      {/* ── Ribcage & sternum ── */}
      <Region id="thorax" {...shared}>
        {(c) => (
          <>
            {[0, 1, 2, 3, 4, 5, 6].map((i) => (
              <mesh
                key={i}
                position={[0, 2.42 - i * 0.105, 0]}
                rotation={[Math.PI / 2 + 0.12 + i * 0.015, 0, Math.PI / 2 - 0.55]}
                scale={[1, 0.74, 1]}
              >
                <torusGeometry args={[0.33 + Math.min(i, 4) * 0.025, 0.02, 8, 30, Math.PI * 1.6]} />
                <meshStandardMaterial color={c} roughness={0.55} />
              </mesh>
            ))}
            {/* Sternum */}
            <mesh position={[0, 2.22, 0.315]} rotation={[0.1, 0, 0]}>
              <boxGeometry args={[0.09, 0.5, 0.04]} />
              <meshStandardMaterial color={c} roughness={0.55} />
            </mesh>
          </>
        )}
      </Region>

      {/* ── Thoracolumbar spine ── */}
      <Region id="spine" {...shared}>
        {(c) => (
          <>
            {/* Thoracic T1–T12 (smaller) */}
            {[0, 1, 2, 3, 4, 5, 6].map((i) => (
              <Vertebra key={i} p={[0, 2.42 - i * 0.105, -0.04 + Math.sin(i * 0.4) * 0.02]} size={0.055} color={c} />
            ))}
            {/* Lumbar L1–L5 (larger) */}
            {[0, 1, 2, 3, 4].map((i) => (
              <Vertebra key={i} p={[0, 1.66 - i * 0.115, 0.01 + i * 0.012]} size={0.072} color={c} />
            ))}
          </>
        )}
      </Region>

      {/* ── Pelvis & hip ── */}
      <Region id="hip" {...shared}>
        {(c) => (
          <>
            {/* Iliac wings */}
            {[1, -1].map((s) => (
              <mesh key={s} position={[s * 0.19, 1.16, -0.03]} rotation={[0.25, s * -0.5, s * 0.28]} scale={[1, 1.15, 0.55]}>
                <sphereGeometry args={[0.17, 18, 18, 0, Math.PI]} />
                <meshStandardMaterial color={c} roughness={0.55} side={THREE.DoubleSide} />
              </mesh>
            ))}
            {/* Sacrum */}
            <mesh position={[0, 1.06, -0.08]} rotation={[0.35, 0, 0]}>
              <coneGeometry args={[0.11, 0.26, 4]} />
              <meshStandardMaterial color={c} roughness={0.55} />
            </mesh>
            {/* Pubic ring front */}
            <mesh position={[0, 1.0, 0.1]} rotation={[Math.PI / 2 + 0.3, 0, 0]} scale={[1, 0.7, 0.6]}>
              <torusGeometry args={[0.15, 0.045, 10, 20, Math.PI]} />
              <meshStandardMaterial color={c} roughness={0.55} />
            </mesh>
            {/* Hip joints + femurs */}
            <J p={[0.27, 1.0, 0]} r={0.095} color={c} />
            <J p={[-0.27, 1.0, 0]} r={0.095} color={c} />
            {[1, -1].map((s) => (
              <group key={s}>
                {/* Femoral neck angle */}
                <B from={[s * 0.27, 1.0, 0]} to={[s * 0.32, 0.9, 0.01]} r={0.045} color={c} ends={false} />
                <B from={[s * 0.32, 0.9, 0.01]} to={[s * 0.3, 0.4, 0.02]} r={0.055} color={c} />
              </group>
            ))}
          </>
        )}
      </Region>

      {/* ── Knee & lower leg ── */}
      <Region id="knee" {...shared}>
        {(c) => (
          <>
            {[1, -1].map((s) => (
              <group key={s}>
                {/* Femoral condyles */}
                <mesh position={[s * 0.3, 0.34, 0]} scale={[1.35, 0.9, 1.1]}>
                  <sphereGeometry args={[0.075, 14, 14]} />
                  <meshStandardMaterial color={c} roughness={0.55} />
                </mesh>
                {/* Patella */}
                <J p={[s * 0.3, 0.36, 0.11]} r={0.045} color={c} />
                {/* Tibia (with plateau) + fibula */}
                <mesh position={[s * 0.3, 0.27, 0.01]}>
                  <cylinderGeometry args={[0.075, 0.05, 0.06, 12]} />
                  <meshStandardMaterial color={c} roughness={0.55} />
                </mesh>
                <B from={[s * 0.3, 0.24, 0.01]} to={[s * 0.32, -0.38, 0.02]} r={0.045} color={c} />
                <B from={[s * 0.37, 0.2, -0.02]} to={[s * 0.38, -0.37, 0]} r={0.022} color={c} />
              </group>
            ))}
          </>
        )}
      </Region>

      {/* ── Ankle & foot ── */}
      <Region id="ankle" {...shared}>
        {(c) => (
          <>
            {[1, -1].map((s) => (
              <group key={s}>
                {/* Malleoli + talus */}
                <J p={[s * 0.33, -0.43, 0.02]} r={0.06} color={c} />
                {/* Calcaneus */}
                <mesh position={[s * 0.33, -0.52, -0.05]}>
                  <boxGeometry args={[0.11, 0.1, 0.16]} />
                  <meshStandardMaterial color={c} roughness={0.55} />
                </mesh>
                {/* Midfoot + metatarsals */}
                <mesh position={[s * 0.33, -0.55, 0.14]} rotation={[-0.12, 0, 0]}>
                  <boxGeometry args={[0.13, 0.07, 0.24]} />
                  <meshStandardMaterial color={c} roughness={0.55} />
                </mesh>
                {/* Toes */}
                {[-0.04, 0, 0.04].map((dx, ti) => (
                  <B
                    key={ti}
                    from={[s * 0.33 + dx, -0.57, 0.26]}
                    to={[s * 0.33 + dx, -0.585, 0.35]}
                    r={0.016}
                    color={c}
                    ends={false}
                  />
                ))}
              </group>
            ))}
          </>
        )}
      </Region>

      {/* Ground disc */}
      <mesh position={[0, -0.63, 0.05]} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[1.15, 44]} />
        <meshStandardMaterial color={BONE_DARK} transparent opacity={0.16} />
      </mesh>
    </group>
  );
}

/** Glides the orbit target to the selected region. */
function CameraRig({ selected, controls }: { selected: RegionId | null; controls: React.RefObject<OrbitControlsImpl | null> }) {
  const target = useMemo(() => new THREE.Vector3(0, 0.2, 0), []);
  useFrame(() => {
    const c = controls.current;
    if (!c) return;
    const focus = selected ? REGION_FOCUS[selected] : ([0, 0.2, 0] as [number, number, number]);
    target.set(...focus);
    c.target.lerp(target, 0.06);
    c.update();
  });
  return null;
}

export default function AnatomyCanvas({
  selected,
  onSelect,
  onHover,
}: {
  selected: RegionId | null;
  onSelect: (id: RegionId) => void;
  onHover?: (id: RegionId | null) => void;
}) {
  const controls = useRef<OrbitControlsImpl | null>(null);
  return (
    <Canvas dpr={[1, 2]} camera={{ position: [1.7, 0.7, 4.4], fov: 40 }} gl={{ alpha: true, antialias: true }}>
      <ambientLight intensity={0.9} />
      <directionalLight position={[4, 6, 4]} intensity={1.35} />
      <directionalLight position={[-3, 2, -4]} intensity={0.35} />
      <pointLight position={[-4, 0, 3]} intensity={10} color="#2cc7d4" />
      <Skeleton selected={selected} onSelect={onSelect} onHover={onHover} />
      <CameraRig selected={selected} controls={controls} />
      <OrbitControls
        ref={controls}
        enablePan={false}
        minDistance={1.6}
        maxDistance={7}
        autoRotate={selected === null}
        autoRotateSpeed={0.8}
        target={[0, 0.2, 0]}
      />
    </Canvas>
  );
}
