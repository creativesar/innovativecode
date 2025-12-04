"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Stars, Sphere, Float, Text, Ring, Box } from "@react-three/drei";
import { useRef, useState, useEffect, useMemo } from "react";
import * as THREE from "three";
import { motion } from "framer-motion";

// Enhanced 3D floating shapes with more complex geometries and animations
function FloatingShape({ position, color, geometryType = "icosahedron", size = 1 }: { position: [number, number, number]; color: string; geometryType?: string; size?: number }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      // Continuous rotation with varying speeds
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.02;
      
      // Floating motion with sine wave
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + position[0]) * 0.5;
      
      // Pulsing scale effect
      const scale = hovered ? 1.2 : 1 + Math.sin(state.clock.elapsedTime * 2) * 0.1;
      meshRef.current.scale.setScalar(scale * size);
    }
  });

  const getGeometry = () => {
    switch (geometryType) {
      case "torus":
        return <torusGeometry args={[1, 0.4, 16, 100]} />;
      case "octahedron":
        return <octahedronGeometry args={[1, 0]} />;
      case "tetrahedron":
        return <tetrahedronGeometry args={[1, 0]} />;
      case "box":
        return <boxGeometry args={[1, 1, 1]} />;
      case "ring":
        return <ringGeometry args={[0.5, 1, 32]} />;
      default:
        return <icosahedronGeometry args={[1, 0]} />;
    }
  };

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh
        ref={meshRef}
        position={position}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        {getGeometry()}
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={hovered ? 0.5 : 0.1}
          metalness={0.8}
          roughness={0.2}
          transparent
          opacity={0.9}
        />
      </mesh>
      
      {/* Glow effect */}
      <mesh position={position}>
        {getGeometry()}
        <meshBasicMaterial 
          color={color} 
          transparent 
          opacity={0.3} 
          side={THREE.BackSide}
          depthWrite={false}
        />
      </mesh>
    </Float>
  );
}

// Central animated sphere with pulsing effect
function CentralSphere() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.005;
      meshRef.current.rotation.y += 0.01;
      
      // Pulsing scale effect
      const scale = 1 + Math.sin(state.clock.elapsedTime * 1.5) * 0.1;
      meshRef.current.scale.setScalar(scale);
    }
  });

  return (
    <group position={[0, 0, 0]}>
      <mesh ref={meshRef}>
        <sphereGeometry args={[2.5, 64, 64]} />
        <meshStandardMaterial
          color="#6366f1"
          emissive="#8b5cf6"
          emissiveIntensity={0.3}
          metalness={0.7}
          roughness={0.3}
        />
      </mesh>
      
      {/* Outer glow */}
      <mesh>
        <sphereGeometry args={[2.8, 64, 64]} />
        <meshBasicMaterial 
          color="#8b5cf6" 
          transparent 
          opacity={0.2} 
        />
      </mesh>
    </group>
  );
}

// Rotating ring structure
function RotatingRing() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.005;
      meshRef.current.rotation.z += 0.003;
    }
  });
  
  return (
    <mesh ref={meshRef} position={[0, 0, -8]}>
      <torusGeometry args={[4, 0.2, 16, 100]} />
      <meshStandardMaterial 
        color="#ec4899" 
        emissive="#ec4899" 
        emissiveIntensity={0.2}
        metalness={0.9}
        roughness={0.1}
        transparent
        opacity={0.7}
      />
    </mesh>
  );
}

// Particle system for enhanced background
function ParticleField() {
  const particlesCount = 200;
  const particlesRef = useRef<THREE.InstancedMesh>(null);
  
  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < particlesCount; i++) {
      temp.push({
        position: [
          (Math.random() - 0.5) * 50,
          (Math.random() - 0.5) * 50,
          (Math.random() - 0.5) * 50
        ] as [number, number, number],
        scale: Math.random() * 0.5 + 0.1,
        speed: Math.random() * 0.5 + 0.1
      });
    }
    return temp;
  }, []);
  
  useFrame((state) => {
    if (particlesRef.current) {
      particles.forEach((particle, i) => {
        const mesh = new THREE.Object3D();
        mesh.position.set(...particle.position);
        mesh.scale.set(particle.scale, particle.scale, particle.scale);
        
        // Animate particles
        mesh.position.y += Math.sin(state.clock.elapsedTime * particle.speed) * 0.01;
        
        mesh.updateMatrix();
        particlesRef.current!.setMatrixAt(i, mesh.matrix);
      });
      particlesRef.current.instanceMatrix.needsUpdate = true;
    }
  });
  
  return (
    <instancedMesh ref={particlesRef} args={[undefined, undefined, particlesCount]}>
      <sphereGeometry args={[0.1, 8, 8]} />
      <meshBasicMaterial color="#ffffff" transparent opacity={0.6} />
    </instancedMesh>
  );
}

export function FeatureScene() {
  return (
    <Canvas className="absolute inset-0 -z-10" camera={{ position: [0, 0, 15], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#8b5cf6" />
      
      {/* Central animated sphere */}
      <CentralSphere />
      
      {/* Rotating ring structure */}
      <RotatingRing />
      
      {/* Floating geometric shapes */}
      <FloatingShape 
        position={[-5, 2, -3]} 
        color="#3b82f6" 
        geometryType="torus"
        size={0.8}
      />
      <FloatingShape 
        position={[5, -1, -4]} 
        color="#8b5cf6" 
        geometryType="octahedron"
        size={1.2}
      />
      <FloatingShape 
        position={[0, 4, -5]} 
        color="#ec4899" 
        geometryType="tetrahedron"
        size={0.9}
      />
      <FloatingShape 
        position={[-3, -3, -2]} 
        color="#10b981" 
        geometryType="icosahedron"
        size={1.1}
      />
      <FloatingShape 
        position={[4, 3, -6]} 
        color="#f59e0b" 
        geometryType="box"
        size={0.7}
      />
      <FloatingShape 
        position={[-4, 0, -7]} 
        color="#ef4444" 
        geometryType="ring"
        size={1.3}
      />
      
      {/* Particle field */}
      <ParticleField />
      
      {/* Enhanced starfield background */}
      <Stars 
        radius={100} 
        depth={50} 
        count={10000} 
        factor={4} 
        saturation={0.5} 
        fade 
      />
      
      {/* Add a subtle fog effect */}
      <fog attach="fog" args={['#0f0f23', 15, 30]} />
      
      {/* Interactive controls for desktop users */}
      <OrbitControls 
        enableZoom={true} 
        enablePan={true} 
        autoRotate 
        autoRotateSpeed={0.3} 
        zoomSpeed={0.5}
        panSpeed={0.5}
      />
    </Canvas>
  );
}