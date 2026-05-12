'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import {
  Float,
  MeshDistortMaterial,
  Sparkles,
  Environment,
  Stars,
} from '@react-three/drei';
import { useRef, Suspense } from 'react';
import * as THREE from 'three';

function GlowOrb() {
  const ref = useRef<THREE.Mesh>(null);

  useFrame(({ clock, mouse }) => {
    if (!ref.current) return;
    const t = clock.getElapsedTime();
    ref.current.rotation.x = t * 0.15 + mouse.y * 0.25;
    ref.current.rotation.y = t * 0.2 + mouse.x * 0.35;
  });

  return (
    <Float speed={1.4} rotationIntensity={0.4} floatIntensity={1.2}>
      <mesh ref={ref} scale={1.6}>
        <icosahedronGeometry args={[1, 24]} />
        <MeshDistortMaterial
          color="#00e7ff"
          emissive="#0a3a55"
          metalness={0.85}
          roughness={0.15}
          distort={0.45}
          speed={1.8}
        />
      </mesh>
    </Float>
  );
}

function MagentaShell() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame(({ clock }) => {
    if (!ref.current) return;
    const t = clock.getElapsedTime();
    ref.current.rotation.x = -t * 0.08;
    ref.current.rotation.y = t * 0.12;
    ref.current.scale.setScalar(2.2 + Math.sin(t * 0.6) * 0.08);
  });

  return (
    <mesh ref={ref}>
      <torusKnotGeometry args={[1, 0.18, 200, 24, 2, 3]} />
      <meshStandardMaterial
        color="#ff3df0"
        emissive="#5a0a4a"
        emissiveIntensity={1.1}
        metalness={0.9}
        roughness={0.25}
        wireframe
        transparent
        opacity={0.55}
      />
    </mesh>
  );
}

// Deterministic pseudo-random (mulberry32) seeded at module load so render stays pure.
function makeCubes() {
  let s = 0x9e3779b9;
  const rand = () => {
    s |= 0;
    s = (s + 0x6d2b79f5) | 0;
    let t = Math.imul(s ^ (s >>> 15), 1 | s);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
  return Array.from({ length: 14 }).map((_, i) => ({
    id: i,
    pos: [(rand() - 0.5) * 8, (rand() - 0.5) * 5, (rand() - 0.5) * 4 - 1] as [number, number, number],
    scale: 0.05 + rand() * 0.12,
    speed: 0.3 + rand() * 0.8,
    color: rand() > 0.5 ? '#00e7ff' : '#ff3df0',
  }));
}
const CUBES = makeCubes();

function FloatingCubes() {
  const cubes = CUBES;
  return (
    <>
      {cubes.map((c) => (
        <Float key={c.id} speed={c.speed} rotationIntensity={2} floatIntensity={2}>
          <mesh position={c.pos} scale={c.scale}>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial
              color={c.color}
              emissive={c.color}
              emissiveIntensity={1.2}
              metalness={0.9}
              roughness={0.2}
            />
          </mesh>
        </Float>
      ))}
    </>
  );
}

export default function HeroScene() {
  return (
    <Canvas
      dpr={[1, 1.6]}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      camera={{ position: [0, 0, 5], fov: 50 }}
    >
      <Suspense fallback={null}>
        <color attach="background" args={['#00000000']} />
        <ambientLight intensity={0.35} />
        <pointLight position={[5, 5, 5]} intensity={2.2} color="#00e7ff" />
        <pointLight position={[-5, -3, -2]} intensity={2.0} color="#ff3df0" />
        <pointLight position={[0, 4, -3]} intensity={1.2} color="#8a5cff" />

        <GlowOrb />
        <MagentaShell />
        <FloatingCubes />

        <Sparkles
          count={80}
          scale={[10, 6, 6]}
          size={3}
          speed={0.35}
          color="#9fd8ff"
          opacity={0.7}
        />
        <Stars radius={40} depth={50} count={1200} factor={2.5} fade speed={1} />

        <Environment preset="night" />
      </Suspense>
    </Canvas>
  );
}
