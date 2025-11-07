// components/Server3D.js
'use client';

import { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, useGLTF, OrbitControls, Lightformer } from '@react-three/drei';

function Server() {
  const { scene } = useGLTF('/models/server.glb');

  const serverRef = useRef();
  useFrame(() => {
    if (serverRef.current) {
      serverRef.current.rotation.y += 0.003; // Slow auto-rotation
    }
  });

  return (
    <primitive
    object={scene}
    scale={0.5}
    position={[0, -1, 0]}
  />
  );
}

export default function Server3D() {
  return (
    <Canvas
      shadows
      camera={{ position: [300, 100, 100], fov: 40 }}
      style={{ height: '250px', width: '100%', display: 'block' }}
    >
      <ambientLight intensity={0.3} />
      <directionalLight
        position={[10, 10, 5]}
        intensity={1.2}
        castShadow
        shadow-mapSize={[1024, 1024]}
      />

      <Environment preset="warehouse" />

      {/* Soft green glow from below (brand color) */}
     

      <Suspense fallback={null}>
        <Server />
      </Suspense>

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={2}
      />
    </Canvas>
  );
}

// Loader Component
export function DataServerLoader() {
  return (
    <div className="flex items-center justify-center h-60 bg-gray-50 rounded-xl border border-gray-200">
      <div className="text-center">
        <div className="w-8 h-8 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin mx-auto mb-3"></div>
        <p className="text-gray-600 text-sm">Loading AI Infrastructure...</p>
      </div>
    </div>
  );
}