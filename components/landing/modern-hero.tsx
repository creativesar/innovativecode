"use client";

import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { Float, Sphere, Torus } from "@react-three/drei";
import * as THREE from "three";

// Simple 3D elements for the hero section
function Hero3DElements() {
  return (
    <>
      <Float speed={2} rotationIntensity={1} floatIntensity={2}>
        <Sphere args={[0.5, 16, 16]} position={[-2, 1, -1]}>
          <meshStandardMaterial 
            color="#6366f1" 
            emissive="#6366f1" 
            emissiveIntensity={0.3}
            metalness={0.8}
            roughness={0.2}
          />
        </Sphere>
      </Float>
      
      <Float speed={1.5} rotationIntensity={1.5} floatIntensity={1.5}>
        <Torus args={[0.7, 0.2, 16, 100]} position={[2, -1, -2]} rotation={[Math.PI / 2, 0, 0]}>
          <meshStandardMaterial 
            color="#8b5cf6" 
            emissive="#8b5cf6" 
            emissiveIntensity={0.2}
            metalness={0.7}
            roughness={0.3}
          />
        </Torus>
      </Float>
    </>
  );
}

export function ModernHero() {
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
        { id: 1, top: "10%", left: "10%", size: "w-4 h-4", delay: 0 },
        { id: 2, top: "20%", left: "80%", size: "w-6 h-6", delay: 1 },
        { id: 3, top: "70%", left: "15%", size: "w-3 h-3", delay: 2 },
        { id: 4, top: "60%", left: "85%", size: "w-5 h-5", delay: 0.5 },
        { id: 5, top: "40%", left: "50%", size: "w-2 h-2", delay: 1.5 },
    ];

    return (
        <div
            ref={containerRef}
            className="relative min-h-[100vh] flex items-center justify-center overflow-hidden pt-20"
        >
            {/* Animated gradient background */}
            <div className="absolute inset-0 -z-30">
                <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-accent/10"></div>
                <div 
                    className="absolute inset-0 opacity-30"
                    style={{
                        backgroundImage: `
                            radial-gradient(at 20% 30%, rgba(99, 102, 241, 0.2) 0px, transparent 50%),
                            radial-gradient(at 80% 70%, rgba(139, 92, 246, 0.2) 0px, transparent 50%)
                        `,
                    }}
                />
            </div>
            
            {/* 3D Canvas Background */}
            {isClient && (
              <div className="absolute inset-0 -z-25 pointer-events-none">
                <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
                  <ambientLight intensity={0.5} />
                  <pointLight position={[10, 10, 10]} intensity={1} />
                  <Hero3DElements />
                </Canvas>
              </div>
            )}
            
            {/* Animated grid background */}
            <div 
                className="absolute inset-0 -z-20 opacity-10"
                style={{
                    backgroundImage: `
                        linear-gradient(rgba(99, 102, 241, 0.3) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(99, 102, 241, 0.3) 1px, transparent 1px)
                    `,
                    backgroundSize: "60px 60px",
                    transform: `translateY(${scrollY * 0.2}px)`
                }}
            />
            
            {/* Floating elements with parallax */}
            {floatingElements.map((element) => (
                <motion.div
                    key={element.id}
                    className={`absolute rounded-full bg-primary/20 blur-sm ${element.size}`}
                    style={{
                        top: element.top,
                        left: element.left,
                        transform: `translateY(${scrollY * (0.1 + element.id * 0.05)}px)`
                    }}
                    animate={{
                        y: [0, -20, 0],
                        x: [0, 10, 0],
                        scale: [1, 1.1, 1]
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        delay: element.delay,
                        ease: "easeInOut"
                    }}
                />
            ))}
            
            {/* Central glow effect */}
            <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary/20 via-accent/10 to-primary/20 rounded-full blur-[120px] opacity-40 pointer-events-none -z-10"
                style={parallaxStyle}
            />
            
            <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
                {/* Badge */}
                <motion.div 
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 mb-8 backdrop-blur-sm"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    <span className="text-sm font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                        INNOVATING TOMORROW
                    </span>
                </motion.div>

                {/* Main heading with staggered animation */}
                <div className="overflow-hidden">
                    <motion.h1
                        className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-6"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        <motion.span 
                            className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent"
                            initial={{ y: "100%" }}
                            animate={{ y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            CRAFTING
                        </motion.span>
                        <motion.span 
                            className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary"
                            initial={{ y: "100%" }}
                            animate={{ y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            DIGITAL
                        </motion.span>
                        <motion.span 
                            className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent"
                            initial={{ y: "100%" }}
                            animate={{ y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                        >
                            EXCELLENCE
                        </motion.span>
                    </motion.h1>
                </div>

                {/* Subtitle */}
                <motion.p
                    className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                >
                    We build extraordinary digital experiences that merge cutting-edge technology with stunning design to transform your vision into reality.
                </motion.p>

                {/* CTA Buttons with enhanced border radius */}
                <motion.div
                    className="flex flex-col sm:flex-row items-center justify-center gap-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1 }}
                >
                    <Link 
                        href="/contact" 
                        className="px-8 py-4 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-2xl font-bold hover:from-accent hover:to-[#ec4899] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center group"
                    >
                        START YOUR PROJECT
                        <svg 
                            className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" 
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
                        className="px-8 py-4 border-2 border-primary text-primary rounded-2xl font-bold hover:bg-primary hover:text-primary-foreground transition-all duration-300 transform hover:-translate-y-1 flex items-center group"
                    >
                        VIEW OUR WORK
                        <svg 
                            className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" 
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
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
            >
                <span className="text-sm text-muted-foreground mb-2">Scroll to explore</span>
                <div className="w-8 h-12 rounded-full border-2 border-primary/30 flex justify-center p-1">
                    <motion.div 
                        className="w-2 h-2 bg-primary rounded-full"
                        animate={{ y: [0, 12, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                    />
                </div>
            </motion.div>
        </div>
    );
}