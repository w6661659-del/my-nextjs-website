// components/ThreeDButton.js
'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { useRef, useState } from 'react';
import { OrbitControls, useGLTF, Center } from '@react-three/drei';

function GlowingButton({ onClick }) {
  const meshRef = useRef();
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
  });

  return (
    <Center>
      <mesh
        ref={meshRef}
        scale={hovered ? 1.2 : 1}
        position={[0, 0, 0]}
        onClick={onClick}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial
          color={hovered ? '#34d399' : '#10b981'}
          emissive={hovered ? '#059669' : '#047857'}
          emissiveIntensity={hovered ? 1 : 0.5}
          metalness={1}
          roughness={0.2}
        />
      </mesh>

      {/* Floating label */}
      <Text3D
        font="/fonts/helvetiker_regular.typeface.json"
        size={0.5}
        height={0.1}
        position={[0, -1.8, 0]}
        curveSegments={12}
      >
        START
        <meshStandardMaterial color="white" />
      </Text3D>
    </Center>
  );
}

// Simple Text3D helper
function Text3D({ children, font, ...props }) {
  return (
    <mesh {...props}>
      <textGeometry args={[children, { font, size: 0.5, height: 0.1 }]} />
      <meshStandardMaterial color="white" />
    </mesh>
  );
}

export default function ThreeDButton() {
  return (
    <div style={{ height: '200px', width: '200px', margin: '0 auto' }}>
      <Canvas camera={{ position: [0, 0, 5], fov: 25 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <GlowingButton onClick={() => alert('AI Activated!')} />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1} />
      </Canvas>
    </div>
  );
}