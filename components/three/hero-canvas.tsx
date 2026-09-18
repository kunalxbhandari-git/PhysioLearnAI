"use client";

import { useMemo, useRef } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Sparkles } from "@react-three/drei";

/**
 * Real WebGL 3D hero scene: rotating DNA helix centerpiece with a 3D heart,
 * capsule pills and a medical cross, lit for a premium medical look.
 * No external model/HDR assets — everything is procedural, so it works offline.
 */

const TEAL = "#0e9aa7";
const CYAN = "#2cc7d4";
const NAVY = "#1e5b8a";
const RED = "#ec5a74";

function DnaHelix() {
  const group = useRef<THREE.Group>(null);

  const steps = useMemo(() => {
    const out: { y: number; angle: number }[] = [];
    const n = 22;
    for (let i = 0; i < n; i++) {
      out.push({ y: -2.1 + (4.2 * i) / (n - 1), angle: i * 0.62 });
    }
    return out;
  }, []);

  useFrame((_, delta) => {
    if (group.current) group.current.rotation.y += delta * 0.35;
  });

  const radius = 0.85;

  return (
    <group ref={group}>
      {steps.map((s, i) => {
        const x1 = Math.cos(s.angle) * radius;
        const z1 = Math.sin(s.angle) * radius;
        const x2 = Math.cos(s.angle + Math.PI) * radius;
        const z2 = Math.sin(s.angle + Math.PI) * radius;
        return (
          <group key={i}>
            {/* Strand beads */}
            <mesh position={[x1, s.y, z1]}>
              <sphereGeometry args={[0.13, 20, 20]} />
              <meshPhysicalMaterial color={TEAL} roughness={0.25} clearcoat={1} />
            </mesh>
            <mesh position={[x2, s.y, z2]}>
              <sphereGeometry args={[0.13, 20, 20]} />
              <meshPhysicalMaterial color={NAVY} roughness={0.25} clearcoat={1} />
            </mesh>
            {/* Rung */}
            <mesh
              position={[0, s.y, 0]}
              rotation={[Math.PI / 2, 0, -s.angle + Math.PI / 2]}
            >
              <cylinderGeometry args={[0.028, 0.028, radius * 2 - 0.24, 10]} />
              <meshStandardMaterial color={CYAN} roughness={0.4} transparent opacity={0.75} />
            </mesh>
          </group>
        );
      })}
    </group>
  );
}

function Heart() {
  const geometry = useMemo(() => {
    const s = new THREE.Shape();
    s.moveTo(0, 0.5);
    s.bezierCurveTo(0, 0.8, -0.5, 1.0, -0.9, 0.7);
    s.bezierCurveTo(-1.4, 0.3, -1.1, -0.4, 0, -1.1);
    s.bezierCurveTo(1.1, -0.4, 1.4, 0.3, 0.9, 0.7);
    s.bezierCurveTo(0.5, 1.0, 0, 0.8, 0, 0.5);
    const geo = new THREE.ExtrudeGeometry(s, {
      depth: 0.4,
      bevelEnabled: true,
      bevelSegments: 4,
      bevelSize: 0.08,
      bevelThickness: 0.08,
    });
    geo.center();
    return geo;
  }, []);

  const mesh = useRef<THREE.Mesh>(null);
  useFrame(({ clock }) => {
    if (!mesh.current) return;
    // Heartbeat pulse
    const t = clock.elapsedTime;
    const beat = 1 + 0.06 * Math.max(0, Math.sin(t * 4)) * Math.max(0, Math.sin(t * 2));
    mesh.current.scale.setScalar(0.42 * beat);
  });

  return (
    <Float speed={1.6} rotationIntensity={0.4} floatIntensity={1.2}>
      <mesh ref={mesh} geometry={geometry} position={[-1.9, 1.35, 0.4]} rotation={[0, -0.35, 0]}>
        <meshPhysicalMaterial color={RED} roughness={0.25} clearcoat={1} clearcoatRoughness={0.2} />
      </mesh>
    </Float>
  );
}

function Capsule({ position, rotation, flip = false }: { position: [number, number, number]; rotation: [number, number, number]; flip?: boolean }) {
  return (
    <Float speed={2} rotationIntensity={0.6} floatIntensity={1.4}>
      <group position={position} rotation={rotation} scale={0.85}>
        <mesh position={[0, 0.17, 0]}>
          <capsuleGeometry args={[0.17, 0.34, 8, 18]} />
          <meshPhysicalMaterial color={flip ? "#f2f8fc" : TEAL} roughness={0.2} clearcoat={1} />
        </mesh>
        <mesh position={[0, -0.17, 0]}>
          <capsuleGeometry args={[0.17, 0.34, 8, 18]} />
          <meshPhysicalMaterial color={flip ? TEAL : "#f2f8fc"} roughness={0.2} clearcoat={1} />
        </mesh>
      </group>
    </Float>
  );
}

function MedicalCross() {
  return (
    <Float speed={1.4} rotationIntensity={0.7} floatIntensity={1}>
      <group position={[1.95, -1.25, 0.3]} scale={0.5} rotation={[0.2, 0.5, 0]}>
        <mesh>
          <boxGeometry args={[1.5, 0.55, 0.4]} />
          <meshPhysicalMaterial color={CYAN} roughness={0.25} clearcoat={1} />
        </mesh>
        <mesh>
          <boxGeometry args={[0.55, 1.5, 0.4]} />
          <meshPhysicalMaterial color={CYAN} roughness={0.25} clearcoat={1} />
        </mesh>
      </group>
    </Float>
  );
}

function Scene() {
  const parallax = useRef<THREE.Group>(null);

  useFrame(({ pointer }) => {
    if (!parallax.current) return;
    // Ease the whole scene toward the cursor for a 3D parallax feel
    parallax.current.rotation.x = THREE.MathUtils.lerp(parallax.current.rotation.x, pointer.y * -0.16, 0.06);
    parallax.current.rotation.y = THREE.MathUtils.lerp(parallax.current.rotation.y, pointer.x * 0.28, 0.06);
  });

  return (
    <>
      <ambientLight intensity={0.85} />
      <directionalLight position={[3, 5, 4]} intensity={1.4} />
      <pointLight position={[-4, -2, 3]} intensity={12} color={CYAN} />
      <group ref={parallax}>
        <DnaHelix />
        <Heart />
        <Capsule position={[1.8, 1.5, -0.4]} rotation={[0.4, 0.2, -0.7]} />
        <Capsule position={[-2.1, -1.3, 0.1]} rotation={[-0.3, 0.4, 0.6]} flip />
        <MedicalCross />
        <Sparkles count={70} scale={[6.5, 4.5, 3]} size={2.2} speed={0.35} color={CYAN} opacity={0.7} />
      </group>
    </>
  );
}

export default function HeroCanvas() {
  return (
    <Canvas
      dpr={[1, 2]}
      camera={{ position: [0, 0, 6.2], fov: 42 }}
      gl={{ alpha: true, antialias: true }}
      className="!pointer-events-auto"
      aria-hidden="true"
    >
      <Scene />
    </Canvas>
  );
}
