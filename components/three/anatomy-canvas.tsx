"use client";

import { useMemo, useRef, useState } from "react";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

/**
 * Interactive stylized 3D skeleton. Every body region is clickable and
 * highlights on hover. Fully procedural — no downloaded model assets.
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

const BONE = "#e6e0d3";
const BONE_DARK = "#cfc7b6";
const ACTIVE = "#0e9aa7";
const HOVER = "#2cc7d4";

interface RegionProps {
  id: RegionId;
  selected: RegionId | null;
  onSelect: (id: RegionId) => void;
  children: (color: string) => React.ReactNode;
}

function Region({ id, selected, onSelect, children }: RegionProps) {
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
        document.body.style.cursor = "pointer";
      }}
      onPointerOut={() => {
        setHovered(false);
        document.body.style.cursor = "default";
      }}
    >
      {children(color)}
    </group>
  );
}

/** Cylinder "bone" between two points. */
function B({ from, to, r = 0.05, color }: { from: [number, number, number]; to: [number, number, number]; r?: number; color: string }) {
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
    <mesh position={position} quaternion={quaternion}>
      <cylinderGeometry args={[r, r * 0.85, length, 10]} />
      <meshStandardMaterial color={color} roughness={0.55} />
    </mesh>
  );
}

/** Sphere "joint". */
function J({ p, r = 0.09, color }: { p: [number, number, number]; r?: number; color: string }) {
  return (
    <mesh position={p}>
      <sphereGeometry args={[r, 16, 16]} />
      <meshStandardMaterial color={color} roughness={0.5} />
    </mesh>
  );
}

function Skeleton({ selected, onSelect }: { selected: RegionId | null; onSelect: (id: RegionId) => void }) {
  return (
    <group position={[0, -1.25, 0]}>
      {/* Head & cervical spine */}
      <Region id="head" selected={selected} onSelect={onSelect}>
        {(c) => (
          <>
            <mesh position={[0, 3.06, 0]}>
              <sphereGeometry args={[0.34, 24, 24]} />
              <meshStandardMaterial color={c} roughness={0.55} />
            </mesh>
            <mesh position={[0, 2.76, 0.07]}>
              <boxGeometry args={[0.28, 0.17, 0.24]} />
              <meshStandardMaterial color={c} roughness={0.55} />
            </mesh>
            {[0, 1, 2].map((i) => (
              <J key={i} p={[0, 2.62 - i * 0.075, 0.02]} r={0.055} color={c} />
            ))}
          </>
        )}
      </Region>

      {/* Shoulder complex */}
      <Region id="shoulder" selected={selected} onSelect={onSelect}>
        {(c) => (
          <>
            <B from={[0.04, 2.5, 0.09]} to={[0.53, 2.54, 0]} r={0.035} color={c} />
            <B from={[-0.04, 2.5, 0.09]} to={[-0.53, 2.54, 0]} r={0.035} color={c} />
            <J p={[0.57, 2.5, 0]} r={0.1} color={c} />
            <J p={[-0.57, 2.5, 0]} r={0.1} color={c} />
            {/* Scapula hints */}
            <mesh position={[0.42, 2.32, -0.14]} rotation={[0.15, 0, 0.35]}>
              <boxGeometry args={[0.24, 0.3, 0.04]} />
              <meshStandardMaterial color={c} roughness={0.55} />
            </mesh>
            <mesh position={[-0.42, 2.32, -0.14]} rotation={[0.15, 0, -0.35]}>
              <boxGeometry args={[0.24, 0.3, 0.04]} />
              <meshStandardMaterial color={c} roughness={0.55} />
            </mesh>
          </>
        )}
      </Region>

      {/* Arms: elbow, wrist, hand */}
      <Region id="arm" selected={selected} onSelect={onSelect}>
        {(c) => (
          <>
            {[1, -1].map((s) => (
              <group key={s}>
                <B from={[s * 0.57, 2.42, 0]} to={[s * 0.66, 1.92, 0.02]} r={0.05} color={c} />
                <J p={[s * 0.66, 1.88, 0.02]} r={0.075} color={c} />
                <B from={[s * 0.66, 1.84, 0.02]} to={[s * 0.74, 1.38, 0.08]} r={0.04} color={c} />
                <B from={[s * 0.62, 1.84, 0.02]} to={[s * 0.7, 1.38, 0.08]} r={0.028} color={c} />
                <J p={[s * 0.73, 1.33, 0.09]} r={0.06} color={c} />
                <mesh position={[s * 0.74, 1.18, 0.12]} rotation={[0.3, 0, 0]}>
                  <boxGeometry args={[0.12, 0.22, 0.05]} />
                  <meshStandardMaterial color={c} roughness={0.55} />
                </mesh>
              </group>
            ))}
          </>
        )}
      </Region>

      {/* Ribcage & thorax */}
      <Region id="thorax" selected={selected} onSelect={onSelect}>
        {(c) => (
          <>
            {[0, 1, 2, 3, 4].map((i) => (
              <mesh key={i} position={[0, 2.38 - i * 0.13, 0]} rotation={[Math.PI / 2, 0, Math.PI / 2 - 0.6]} scale={[1, 0.72, 1]}>
                <torusGeometry args={[0.36 + i * 0.02, 0.022, 8, 26, Math.PI * 1.55]} />
                <meshStandardMaterial color={c} roughness={0.55} />
              </mesh>
            ))}
            {/* Sternum */}
            <B from={[0, 2.44, 0.27]} to={[0, 1.98, 0.3]} r={0.035} color={c} />
          </>
        )}
      </Region>

      {/* Thoracolumbar spine */}
      <Region id="spine" selected={selected} onSelect={onSelect}>
        {(c) => (
          <>
            {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <J key={i} p={[0, 2.42 - i * 0.135, -0.04 + Math.sin(i * 0.5) * 0.03]} r={0.062} color={c} />
            ))}
          </>
        )}
      </Region>

      {/* Pelvis & hip */}
      <Region id="hip" selected={selected} onSelect={onSelect}>
        {(c) => (
          <>
            <mesh position={[0, 1.14, 0]} rotation={[Math.PI / 2 + 0.25, 0, 0]} scale={[1, 0.75, 0.62]}>
              <torusGeometry args={[0.3, 0.075, 10, 24]} />
              <meshStandardMaterial color={c} roughness={0.55} />
            </mesh>
            <mesh position={[0, 1.08, -0.1]} rotation={[0.35, 0, 0]}>
              <boxGeometry args={[0.16, 0.24, 0.08]} />
              <meshStandardMaterial color={c} roughness={0.55} />
            </mesh>
            <J p={[0.27, 1.02, 0]} r={0.095} color={c} />
            <J p={[-0.27, 1.02, 0]} r={0.095} color={c} />
            {[1, -1].map((s) => (
              <B key={s} from={[s * 0.27, 0.98, 0]} to={[s * 0.3, 0.38, 0.02]} r={0.055} color={c} />
            ))}
          </>
        )}
      </Region>

      {/* Knee & lower leg */}
      <Region id="knee" selected={selected} onSelect={onSelect}>
        {(c) => (
          <>
            {[1, -1].map((s) => (
              <group key={s}>
                <J p={[s * 0.3, 0.32, 0.01]} r={0.085} color={c} />
                {/* Patella */}
                <J p={[s * 0.3, 0.34, 0.1]} r={0.045} color={c} />
                <B from={[s * 0.3, 0.26, 0]} to={[s * 0.32, -0.38, 0.01]} r={0.045} color={c} />
                <B from={[s * 0.36, 0.24, -0.02]} to={[s * 0.37, -0.36, 0]} r={0.025} color={c} />
              </group>
            ))}
          </>
        )}
      </Region>

      {/* Ankle & foot */}
      <Region id="ankle" selected={selected} onSelect={onSelect}>
        {(c) => (
          <>
            {[1, -1].map((s) => (
              <group key={s}>
                <J p={[s * 0.33, -0.44, 0.01]} r={0.065} color={c} />
                <mesh position={[s * 0.33, -0.54, 0.14]}>
                  <boxGeometry args={[0.14, 0.09, 0.38]} />
                  <meshStandardMaterial color={c} roughness={0.55} />
                </mesh>
              </group>
            ))}
          </>
        )}
      </Region>

      {/* Ground disc */}
      <mesh position={[0, -0.62, 0.05]} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[1.1, 40]} />
        <meshStandardMaterial color={BONE_DARK} transparent opacity={0.18} />
      </mesh>
    </group>
  );
}

export default function AnatomyCanvas({
  selected,
  onSelect,
}: {
  selected: RegionId | null;
  onSelect: (id: RegionId) => void;
}) {
  const controls = useRef(null);
  return (
    <Canvas dpr={[1, 2]} camera={{ position: [1.6, 0.6, 4.6], fov: 40 }} gl={{ alpha: true, antialias: true }}>
      <ambientLight intensity={0.9} />
      <directionalLight position={[4, 6, 4]} intensity={1.3} />
      <pointLight position={[-4, 0, 3]} intensity={10} color="#2cc7d4" />
      <Skeleton selected={selected} onSelect={onSelect} />
      <OrbitControls
        ref={controls}
        enablePan={false}
        minDistance={2.2}
        maxDistance={7}
        autoRotate
        autoRotateSpeed={0.8}
        target={[0, 0.2, 0]}
      />
    </Canvas>
  );
}
