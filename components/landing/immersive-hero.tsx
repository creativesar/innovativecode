"use client";

import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { Float, Sphere, Torus, OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Complex 3D elements for the immersive hero section
function Immersive3DElements() {
  return (
    <>
      <Float speed={1} rotationIntensity={1} floatIntensity={1}>
        <Sphere args={[1, 32, 32]} position={[-3, 2, -2]}>
          <meshStandardMaterial 
            color="#6366f1" 
            emissive="#6366f1" 
            emissiveIntensity={0.5}
            metalness={0.9}
            roughness={0.1}
          />
        </Sphere>
      </Float>
      
      <Float speed={1.5} rotationIntensity={1.5} floatIntensity={1.5}>
        <Torus args={[1.5, 0.3, 16, 100]} position={[3, -1, -3]} rotation={[Math.PI / 2, 0, 0]}>
          <meshStandardMaterial 
            color="#8b5cf6" 
            emissive="#8b5cf6" 
            emissiveIntensity={0.4}
            metalness={0.8}
            roughness={0.2}
          />
        </Torus>
      </Float>
      
      <Float speed={2} rotationIntensity={2} floatIntensity={2}>
        <Sphere args={[0.7, 16, 16]} position={[0, 3, -4]}>
          <meshStandardMaterial 
            color="#ec4899" 
            emissive="#ec4899" 
            emissiveIntensity={0.3}
            metalness={0.7}
            roughness={0.3}
          />
        </Sphere>
      </Float>
    </>
  );
}

export function ImmersiveHero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isClient, setIsClient] = useState(false);
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        setIsClient(true);
        
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };
        
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Parallax effect for background elements
    const parallaxStyle = {
        transform: `translateY(${scrollY * 0.5}px)`,
    };

    const floatingElements = [
        { id: 1, top: "15%", left: "15%", size: "w-6 h-6", delay: 0 },
        { id: 2, top: "25%", left: "85%", size: "w-8 h-8", delay: 1 },
        { id: 3, top: "75%", left: "20%", size: "w-4 h-4", delay: 2 },
        { id: 4, top: "65%", left: "80%", size: "w-7 h-7", delay: 0.5 },
        { id: 5, top: "45%", left: "55%", size: "w-3 h-3", delay: 1.5 },
    ];

    return (
        <div
            ref={containerRef}
            className="relative min-h-[100vh] flex items-center justify-center overflow-hidden pt-20"
        >
            {/* Animated gradient background */}
            <div className="absolute inset-0 -z-30">
                <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/10 to-accent/20"></div>
                <div 
                    className="absolute inset-0 opacity-40"
                    style={{
                        backgroundImage: `
                            radial-gradient(at 15% 25%, rgba(99, 102, 241, 0.3) 0px, transparent 60%),
                            radial-gradient(at 85% 75%, rgba(139, 92, 246, 0.3) 0px, transparent 60%),
                            radial-gradient(at 50% 10%, rgba(236, 72, 153, 0.2) 0px, transparent 50%)
                        `,
                    }}
                />
            </div>
            
            {/* 3D Canvas Background */}
            {isClient && (
              <div className="absolute inset-0 -z-25 pointer-events-none">
                <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
                  <ambientLight intensity={0.8} />
                  <pointLight position={[10, 10, 10]} intensity={1.5} />
                  <pointLight position={[-10, -10, -10]} intensity={0.8} color="#8b5cf6" />
                  <Immersive3DElements />
                  <OrbitControls 
                    enableZoom={false} 
                    enablePan={false} 
                    autoRotate 
                    autoRotateSpeed={0.5} 
                  />
                </Canvas>
              </div>
            )}
            
            {/* Animated grid background */}
            <div 
                className="absolute inset-0 -z-20 opacity-15"
                style={{
                    backgroundImage: `
                        linear-gradient(rgba(99, 102, 241, 0.4) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(99, 102, 241, 0.4) 1px, transparent 1px)
                    `,
                    backgroundSize: "80px 80px",
                    transform: `translateY(${scrollY * 0.3}px)`
                }}
            />
            
            {/* Floating elements with parallax */}
            {floatingElements.map((element) => (
                <motion.div
                    key={element.id}
                    className={`absolute rounded-full bg-primary/30 blur-md ${element.size}`}
                    style={{
                        top: element.top,
                        left: element.left,
                        transform: `translateY(${scrollY * (0.1 + element.id * 0.05)}px)`,
                    }}
                    animate={{
                        y: [0, -30, 0],
                        x: [0, 20, 0],
                        scale: [1, 1.2, 1],
                    }}
                    transition={{
                        duration: 5,
                        repeat: Infinity,
                        delay: element.delay,
                        ease: "easeInOut",
                    }}
                />
            ))}
            
            {/* Central glow effect */}
            <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-to-r from-primary/30 via-accent/20 to-primary/30 rounded-full blur-[150px] opacity-50 pointer-events-none -z-10"
                style={parallaxStyle}
            />
            
            <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
                {/* Badge */}
                <motion.div 
                    className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-gradient-to-r from-primary/15 to-accent/15 border border-primary/30 mb-10 backdrop-blur-lg"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
                    <span className="text-base font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                        NEXT-GEN DIGITAL SOLUTIONS
                    </span>
                </motion.div>

                {/* Main heading with staggered animation */}
                <div className="overflow-hidden">
                    <motion.h1
                        className="text-6xl md:text-8xl lg:text-9xl font-extrabold tracking-tight mb-8"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.9 }}
                    >
                        <motion.span 
                            className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent"
                            initial={{ y: "100%" }}
                            animate={{ y: 0 }}
                            transition={{ duration: 0.9, delay: 0.3 }}
                        >
                            TRANSFORM
                        </motion.span>
                        <motion.span 
                            className="block mt-4 text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary"
                            initial={{ y: "100%" }}
                            animate={{ y: 0 }}
                            transition={{ duration: 0.9, delay: 0.6 }}
                        >
                            YOUR VISION
                        </motion.span>
                        <motion.span 
                            className="block mt-4 text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent"
                            initial={{ y: "100%" }}
                            animate={{ y: 0 }}
                            transition={{ duration: 0.9, delay: 0.9 }}
                        >
                            INTO REALITY
                        </motion.span>
                    </motion.h1>
                </div>

                {/* Subtitle */}
                <motion.p
                    className="text-2xl md:text-3xl text-muted-foreground max-w-4xl mx-auto mb-16 leading-relaxed"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 1.2 }}
                >
                    We craft immersive digital experiences that blend cutting-edge technology with stunning design to bring your boldest ideas to life.
                </motion.p>

                {/* CTA Buttons with enhanced border radius */}
                <motion.div
                    className="flex flex-col sm:flex-row items-center justify-center gap-8"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 1.5 }}
                >
                    <Link 
                        href="/contact" 
                        className="px-10 py-5 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-3xl font-bold hover:from-accent hover:to-[#ec4899] transition-all duration-500 shadow-2xl hover:shadow-[0_0_40px_rgba(99,102,241,0.5)] transform hover:-translate-y-2 flex items-center group text-xl"
                    >
                        START YOUR JOURNEY
                        <svg 
                            className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24" 
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                        </svg>
                    </Link>
                    <Link 
                        href="/projects" 
                        className="px-10 py-5 border-3 border-primary text-primary rounded-3xl font-bold hover:bg-primary hover:text-primary-foreground transition-all duration-500 transform hover:-translate-y-2 flex items-center group text-xl"
                    >
                        EXPLORE OUR WORK
                        <svg 
                            className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24" 
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                        </svg>
                    </Link>
                </motion.div>
            </div>
            
            {/* Scroll indicator */}
            <motion.div 
                className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
            >
                <span className="text-base text-muted-foreground mb-3">Discover more</span>
                <div className="w-10 h-16 rounded-3xl border-3 border-primary/40 flex justify-center p-2">
                    <motion.div 
                        className="w-3 h-3 bg-primary rounded-full"
                        animate={{ y: [0, 16, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    />
                </div>
            </motion.div>
        </div>
    );
}