"use client";

import { useRef, useState, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, Text, MeshDistortMaterial, MeshWobbleMaterial } from "@react-three/drei";
import * as THREE from "three";

interface ThreeDFeatureProps {
  icon: string;
  position: [number, number, number];
  color: string;
  label?: string;
}

export function ThreeDFeature({ icon, position, color, label }: ThreeDFeatureProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  // Rotate the mesh continuously
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.2;
      meshRef.current.rotation.y += delta * 0.3;
      
      // Add subtle floating motion
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime) * 0.1;
    }
  });

  return (
    <group position={position}>
      <Float speed={2} rotationIntensity={1} floatIntensity={1}>
        <mesh
          ref={meshRef}
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
          scale={hovered ? 1.3 : 1}
        >
          <icosahedronGeometry args={[1, 0]} />
          <MeshDistortMaterial
            color={color}
            attach="material"
            distort={0.3}
            speed={2}
            roughness={0.1}
            emissive={color}
            emissiveIntensity={hovered ? 0.5 : 0.1}
          />
        </mesh>
      </Float>
      
      {/* Add a glowing aura around the mesh */}
      <mesh position={[0, 0, -0.1]}>
        <icosahedronGeometry args={[1.2, 0]} />
        <meshBasicMaterial 
          color={color} 
          transparent 
          opacity={0.2} 
        />
      </mesh>
      
      {/* Add a label if provided */}
      {label && (
        <Text
          position={[0, -1.8, 0]}
          fontSize={0.3}
          color={color}
          anchorX="center"
          anchorY="middle"
        >
          {label}
        </Text>
      )}
    </group>
  );
}