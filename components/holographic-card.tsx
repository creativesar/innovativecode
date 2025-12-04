"use client";

import { ReactNode, useRef, useState } from "react";
import { motion } from "framer-motion";

interface HolographicCardProps {
  children: ReactNode;
  className?: string;
  spotlight?: boolean;
}

export function HolographicCard({ 
  children, 
  className = "",
  spotlight = true
}: HolographicCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    setMousePosition({ x, y });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <motion.div
      ref={cardRef}
      className={`relative rounded-2xl border border-white/20 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl overflow-hidden ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
      style={{
        boxShadow: isHovered 
          ? "0 0 30px rgba(99, 102, 241, 0.3), inset 0 0 20px rgba(255, 255, 255, 0.1)" 
          : "0 0 15px rgba(99, 102, 241, 0.1), inset 0 0 10px rgba(255, 255, 255, 0.05)",
      }}
    >
      {/* Holographic shine effect */}
      <motion.div 
        className="absolute inset-0 pointer-events-none"
        animate={{ 
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(
            600px circle at ${mousePosition.x}px ${mousePosition.y}px,
            rgba(139, 92, 246, 0.1),
            transparent 40%
          )`
        }}
        transition={{ duration: 0.3 }}
      />
      
      {/* Animated border */}
      <div className="absolute inset-0 rounded-2xl pointer-events-none">
        <motion.div 
          className="absolute inset-0 rounded-2xl border border-transparent" 
          style={{
            borderImage: "linear-gradient(45deg, #3b82f6, #8b5cf6, #ec4899, #3b82f6) 1",
            borderImageSlice: 1,
          }}
          animate={{
            borderImage: [
              "linear-gradient(45deg, #3b82f6, #8b5cf6, #ec4899, #3b82f6) 1",
              "linear-gradient(135deg, #ec4899, #8b5cf6, #3b82f6, #ec4899) 1",
              "linear-gradient(225deg, #3b82f6, #ec4899, #8b5cf6, #3b82f6) 1",
              "linear-gradient(45deg, #3b82f6, #8b5cf6, #ec4899, #3b82f6) 1"
            ]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>
      
      {/* Scanlines */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        {[...Array(20)].map((_, i) => (
          <div 
            key={i}
            className="absolute w-full h-px bg-gradient-to-r from-transparent via-white to-transparent"
            style={{ top: `${i * 5}%` }}
          />
        ))}
      </div>
      
      {/* Glitch effect on hover */}
      {isHovered && (
        <>
          <motion.div 
            className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(139,92,246,0.1)_50%,transparent_75%)] bg-[length:250%_250%] opacity-30" 
            animate={{
              backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          <motion.div 
            className="absolute inset-0 bg-[linear-gradient(135deg,transparent_25%,rgba(99,102,241,0.1)_50%,transparent_75%)] bg-[length:250%_250%] opacity-30" 
            animate={{
              backgroundPosition: ["100% 100%", "0% 0%", "100% 100%"]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear",
              delay: 0.5
            }}
          />
        </>
      )}
      
      {/* Content */}
      <div className="relative z-10 p-6">
        {children}
      </div>
    </motion.div>
  );
}