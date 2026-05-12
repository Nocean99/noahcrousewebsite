'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { useRef, useMemo, Suspense } from 'react';
import * as THREE from 'three';

function seededRand(seed: number) {
  let s = seed;
  return () => {
    s |= 0;
    s = (s + 0x6d2b79f5) | 0;
    let t = Math.imul(s ^ (s >>> 15), 1 | s);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const COUNT = 480;

function ParticleNebula() {
  const ref = useRef<THREE.Points>(null);
  const mouse = useRef({ x: 0, y: 0 });

  const { positions, colors, origPositions, phases } = useMemo(() => {
    const rand = seededRand(0xc0ffee42);
    const positions = new Float32Array(COUNT * 3);
    const colors = new Float32Array(COUNT * 3);
    const origPositions = new Float32Array(COUNT * 3);
    const phases = new Float32Array(COUNT * 3);

    const cyan = new THREE.Color('#00e7ff');
    const violet = new THREE.Color('#8a5cff');
    const magenta = new THREE.Color('#ff3df0');

    for (let i = 0; i < COUNT; i++) {
      const theta = rand() * Math.PI * 2;
      const phi = Math.acos(2 * rand() - 1);
      const r = 1.4 + rand() * 2.0;

      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta) * 0.7;
      const z = r * Math.cos(phi) * 0.55;

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;
      origPositions[i * 3] = x;
      origPositions[i * 3 + 1] = y;
      origPositions[i * 3 + 2] = z;

      phases[i * 3] = rand() * Math.PI * 2;
      phases[i * 3 + 1] = rand() * Math.PI * 2;
      phases[i * 3 + 2] = rand() * Math.PI * 2;

      // Color gradient: cyan → violet → magenta by angle
      const tColor = (theta / (Math.PI * 2) + rand() * 0.3) % 1;
      const c = tColor < 0.5
        ? cyan.clone().lerp(violet, tColor * 2)
        : violet.clone().lerp(magenta, (tColor - 0.5) * 2);
      colors[i * 3] = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;
    }

    return { positions, colors, origPositions, phases };
  }, []);

  useFrame(({ clock, mouse: m }) => {
    if (!ref.current) return;
    const t = clock.getElapsedTime();

    mouse.current.x += (m.x - mouse.current.x) * 0.022;
    mouse.current.y += (m.y - mouse.current.y) * 0.022;

    ref.current.rotation.y = mouse.current.x * 0.45 + t * 0.022;
    ref.current.rotation.x = mouse.current.y * 0.3;

    const pos = ref.current.geometry.attributes.position.array as Float32Array;
    for (let i = 0; i < COUNT; i++) {
      pos[i * 3]     = origPositions[i * 3]     + Math.sin(t * 0.22 + phases[i * 3])     * 0.13;
      pos[i * 3 + 1] = origPositions[i * 3 + 1] + Math.cos(t * 0.18 + phases[i * 3 + 1]) * 0.10;
      pos[i * 3 + 2] = origPositions[i * 3 + 2] + Math.sin(t * 0.28 + phases[i * 3 + 2]) * 0.08;
    }
    ref.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color"    args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.048}
        vertexColors
        transparent
        opacity={0.82}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}

export default function HeroScene() {
  return (
    <Canvas
      dpr={[1, 1.4]}
      gl={{ antialias: false, alpha: true, powerPreference: 'high-performance' }}
      camera={{ position: [0, 0, 6.5], fov: 50 }}
    >
      <Suspense fallback={null}>
        <ParticleNebula />
      </Suspense>
    </Canvas>
  );
}
