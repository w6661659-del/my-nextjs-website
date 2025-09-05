// components/DataServer3D.js
'use client';

import { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, useGLTF, OrbitControls, Lightformer } from '@react-three/drei';

function DataServer() {
  const { scene } = useGLTF('/models/data-server.glb');

  const serverRef = useRef();
  useFrame(() => {
    if (serverRef.current) {
      serverRef.current.rotation.y += 0.003; // Slow auto-rotation
    }
  });

  return (
    <primitive
    object={scene}
    scale={1.2}
    position={[0, -1, 0]}
  />
  );
}

export default function DataServer3D() {
  return (
    <Canvas
      shadows
      camera={{ position: [5, 3, 7], fov: 25 }}
      style={{ height: '300px', width: '100%' }}
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
        <DataServer />
      </Suspense>

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={2.1}
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