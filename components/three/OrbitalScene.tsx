'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sparkles } from '@react-three/drei';
import { useRef, Suspense } from 'react';
import * as THREE from 'three';

interface Props {
  primary?: string;
  secondary?: string;
  shape?: 'torus' | 'octa' | 'icosa' | 'knot';
}

function Shape({ primary, secondary, shape }: Required<Props>) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame(({ clock, mouse }) => {
    if (!ref.current) return;
    const t = clock.getElapsedTime();
    ref.current.rotation.x = t * 0.18 + mouse.y * 0.2;
    ref.current.rotation.y = t * 0.22 + mouse.x * 0.3;
  });

  const geometry = (() => {
    switch (shape) {
      case 'torus':
        return <torusGeometry args={[1.1, 0.35, 24, 96]} />;
      case 'octa':
        return <octahedronGeometry args={[1.4, 0]} />;
      case 'knot':
        return <torusKnotGeometry args={[1, 0.32, 160, 24]} />;
      default:
        return <icosahedronGeometry args={[1.4, 1]} />;
    }
  })();

  return (
    <Float speed={1.6} rotationIntensity={0.6} floatIntensity={1.4}>
      <mesh ref={ref}>
        {geometry}
        <meshStandardMaterial
          color={primary}
          emissive={secondary}
          emissiveIntensity={0.65}
          metalness={0.85}
          roughness={0.2}
          wireframe={false}
        />
      </mesh>
      <mesh scale={1.05}>
        {geometry}
        <meshBasicMaterial color={secondary} wireframe transparent opacity={0.35} />
      </mesh>
    </Float>
  );
}

export default function OrbitalScene({
  primary = '#00e7ff',
  secondary = '#ff3df0',
  shape = 'icosa',
}: Props) {
  return (
    <Canvas
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true }}
      camera={{ position: [0, 0, 4.2], fov: 50 }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.4} />
        <pointLight position={[3, 3, 3]} intensity={2.4} color={primary} />
        <pointLight position={[-3, -2, -2]} intensity={1.8} color={secondary} />
        <Shape primary={primary} secondary={secondary} shape={shape} />
        <Sparkles count={40} scale={[6, 4, 4]} size={2.5} speed={0.3} color={primary} opacity={0.6} />
      </Suspense>
    </Canvas>
  );
}
