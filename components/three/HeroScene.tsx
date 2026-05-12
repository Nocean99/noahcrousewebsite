'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sparkles, Environment } from '@react-three/drei';
import { useRef, Suspense } from 'react';
import * as THREE from 'three';

function IridescentOrb() {
  const outerRef = useRef<THREE.Mesh>(null);
  const smooth = useRef({ x: 0, y: 0 });

  useFrame(({ clock, mouse }) => {
    if (!outerRef.current) return;
    const t = clock.getElapsedTime();
    // Very soft mouse lerp — barely reacts, just feels alive
    smooth.current.x += (mouse.x - smooth.current.x) * 0.018;
    smooth.current.y += (mouse.y - smooth.current.y) * 0.018;
    outerRef.current.rotation.y = smooth.current.x * 0.45 + t * 0.035;
    outerRef.current.rotation.x = smooth.current.y * 0.25 + Math.sin(t * 0.12) * 0.04;
  });

  return (
    <Float speed={0.5} rotationIntensity={0.06} floatIntensity={0.3}>
      {/* Glass orb */}
      <mesh ref={outerRef}>
        <sphereGeometry args={[1.85, 72, 72]} />
        <meshPhysicalMaterial
          transmission={0.94}
          thickness={2.8}
          roughness={0.04}
          metalness={0}
          iridescence={1}
          iridescenceIOR={2.1}
          iridescenceThicknessRange={[80, 1200]}
          color="#cce8ff"
          envMapIntensity={2.4}
          clearcoat={1}
          clearcoatRoughness={0.05}
        />
      </mesh>
      {/* Soft inner glow the glass refracts */}
      <mesh scale={0.5}>
        <sphereGeometry args={[1, 16, 16]} />
        <meshBasicMaterial color="#90c0ff" transparent opacity={0.35} />
      </mesh>
    </Float>
  );
}

function Ring({ radius, tube, tiltX, tiltZ, speedX, speedZ }: {
  radius: number; tube: number; tiltX: number; tiltZ: number; speedX: number; speedZ: number;
}) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame(({ clock }) => {
    if (!ref.current) return;
    const t = clock.getElapsedTime();
    ref.current.rotation.x = tiltX + t * speedX;
    ref.current.rotation.z = tiltZ + t * speedZ;
  });
  return (
    <mesh ref={ref}>
      <torusGeometry args={[radius, tube, 12, 140]} />
      <meshPhysicalMaterial
        transmission={0.75}
        roughness={0.02}
        metalness={0.05}
        iridescence={0.85}
        iridescenceIOR={2.2}
        iridescenceThicknessRange={[150, 700]}
        color="#b0d8ff"
        envMapIntensity={3}
        clearcoat={1}
        clearcoatRoughness={0}
      />
    </mesh>
  );
}

export default function HeroScene() {
  return (
    <Canvas
      dpr={[1, 1.4]}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance', toneMapping: THREE.ACESFilmicToneMapping }}
      camera={{ position: [0, 0, 6], fov: 44 }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.15} />
        <pointLight position={[5, 4, 4]} intensity={1.6} color="#70b8ff" />
        <pointLight position={[-4, -3, -3]} intensity={1.2} color="#c080ff" />
        <pointLight position={[1, 5, -2]} intensity={0.7} color="#ffffff" />

        <IridescentOrb />

        <Ring radius={2.7} tube={0.03} tiltX={0.25} tiltZ={0.1} speedX={0.025} speedZ={0.015} />
        <Ring radius={3.35} tube={0.018} tiltX={0.9} tiltZ={0.4} speedX={-0.012} speedZ={0.02} />

        <Sparkles
          count={28}
          scale={[11, 7, 5]}
          size={2.2}
          speed={0.12}
          color="#b0d8ff"
          opacity={0.45}
        />

        <Environment preset="city" />
      </Suspense>
    </Canvas>
  );
}
