
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere, Torus, Cylinder, Environment, Box } from '@react-three/drei';
import * as THREE from 'three';

const DataPoint = ({ position, color, scale = 1 }: { position: [number, number, number]; color: string; scale?: number }) => {
  const ref = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (ref.current) {
      const t = state.clock.getElapsedTime();
      // Erratic movement smoothed out
      ref.current.position.y = position[1] + Math.sin(t * 1.5 + position[0]) * 0.3;
      ref.current.rotation.x = t * 0.2;
    }
  });

  return (
    <Sphere ref={ref} args={[1, 16, 16]} position={position} scale={scale}>
      <meshStandardMaterial
        color={color}
        roughness={0.2}
        metalness={0.8}
      />
    </Sphere>
  );
};

const MarketRing = () => {
  const ref = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (ref.current) {
       const t = state.clock.getElapsedTime();
       ref.current.rotation.x = Math.PI / 2 + Math.sin(t * 0.1) * 0.1;
       ref.current.rotation.z = t * 0.05;
    }
  });

  return (
    <Torus ref={ref} args={[3.5, 0.05, 16, 100]} rotation={[Math.PI / 2, 0, 0]}>
      <meshStandardMaterial color="#FF9933" transparent opacity={0.4} />
    </Torus>
  );
}

export const HeroScene: React.FC = () => {
  return (
    <div className="absolute inset-0 z-0 opacity-80 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
        <ambientLight intensity={0.8} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#fff" />
        
        <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
          {/* Saffron & Green Data Points representing India's Economy */}
          <DataPoint position={[0, 0.5, 0]} color="#138808" scale={1.2} /> {/* Green */}
          <MarketRing />
        </Float>
        
        <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
           <DataPoint position={[-2.5, 1, -1]} color="#FF9933" scale={0.7} /> {/* Saffron */}
           <DataPoint position={[2.5, -1, -2]} color="#C5A059" scale={0.8} /> {/* Gold */}
           <DataPoint position={[1, 2, -3]} color="#555" scale={0.4} /> {/* Industry */}
        </Float>

        <Environment preset="city" />
      </Canvas>
    </div>
  );
};

export const EconomicObjectScene: React.FC = () => {
  return (
    <div className="w-full h-full absolute inset-0">
      <Canvas camera={{ position: [4, 3, 5], fov: 40 }}>
        <ambientLight intensity={1} />
        <spotLight position={[5, 10, 5]} angle={0.5} penumbra={1} intensity={2} color="#FF9933" />
        <pointLight position={[-5, 5, -5]} intensity={1} color="#138808" />
        
        <group position={[0, -1, 0]}>
            {/* Abstract Rising Graph / Building Blocks of Economy */}
            <Box args={[1, 0.5, 1]} position={[-1.5, 0.25, 0]}>
                <meshStandardMaterial color="#57534e" />
            </Box>
            <Box args={[1, 1.5, 1]} position={[0, 0.75, 0]}>
                <meshStandardMaterial color="#FF9933" />
            </Box>
            <Box args={[1, 3, 1]} position={[1.5, 1.5, 0]}>
                <meshStandardMaterial color="#138808" />
            </Box>
            
            {/* Base */}
            <Cylinder args={[3, 3, 0.2, 64]} position={[0, -0.1, 0]}>
                <meshStandardMaterial color="#d6d3d1" />
            </Cylinder>
        </group>

        <Environment preset="studio" />
        <Float speed={2} rotationIntensity={0.1} floatIntensity={0.2} />
      </Canvas>
    </div>
  );
}
