'use client';

import dynamic from 'next/dynamic';

const OrbitalScene = dynamic(() => import('./OrbitalScene'), {
  ssr: false,
  loading: () => null,
});

export default OrbitalScene;
