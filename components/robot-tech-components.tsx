"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface RobotEffectCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  className?: string;
}

export function RobotEffectCard({ 
  title, 
  description, 
  icon,
  className = ""
}: RobotEffectCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [scanPosition, setScanPosition] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setScanPosition(prev => (prev + 1) % 100);
    }, 50);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div 
      ref={cardRef}
      className={`relative rounded-2xl border border-white/20 bg-gradient-to-br from-background/30 to-background/10 backdrop-blur-xl overflow-hidden transition-all duration-500 hover:scale-[1.02] ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        boxShadow: isHovered 
          ? "0 0 40px rgba(99, 102, 241, 0.4), inset 0 0 30px rgba(255, 255, 255, 0.15)" 
          : "0 0 20px rgba(99, 102, 241, 0.2), inset 0 0 15px rgba(255, 255, 255, 0.08)",
      }}
    >
      {/* Scanline effect */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `linear-gradient(
            to bottom,
            transparent 0%,
            rgba(99, 102, 241, 0.1) ${scanPosition}%,
            transparent ${scanPosition + 5}%
          )`,
        }}
      />
      
      {/* Grid overlay */}
      <div 
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(99, 102, 241, 0.2) 1px, transparent 1px),
            linear-gradient(90deg, rgba(99, 102, 241, 0.2) 1px, transparent 1px)
          `,
          backgroundSize: "20px 20px",
        }}
      />
      
      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-primary/50 rounded-tl-lg" />
      <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-primary/50 rounded-tr-lg" />
      <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-primary/50 rounded-bl-lg" />
      <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-primary/50 rounded-br-lg" />
      
      {/* Pulsing dots */}
      <div className="absolute top-3 right-3 flex space-x-1">
        <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" style={{ animationDelay: "0s" }} />
        <div className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse" style={{ animationDelay: "0.5s" }} />
        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" style={{ animationDelay: "1s" }} />
      </div>
      
      {/* Content */}
      <div className="relative z-10 p-8">
        {icon && (
          <div className="mb-6 p-4 rounded-xl bg-primary/10 text-primary w-fit">
            {icon}
          </div>
        )}
        <h3 className="text-2xl font-bold mb-4 font-orbitron text-foreground">{title}</h3>
        <p className="text-lg text-muted-foreground font-rajdhani leading-relaxed">{description}</p>
      </div>
      
      {/* Glowing edge on hover */}
      <motion.div 
        className="absolute inset-0 rounded-2xl pointer-events-none"
        animate={{
          boxShadow: isHovered 
            ? "0 0 20px rgba(139, 92, 246, 0.6), 0 0 40px rgba(99, 102, 241, 0.4)" 
            : "0 0 0px rgba(139, 92, 246, 0)"
        }}
        transition={{ duration: 0.3 }}
      />
    </div>
  );
}

interface BinaryRainProps {
  className?: string;
}

export function BinaryRain({ className = "" }: BinaryRainProps) {
  const columns = 20;
  const rows = 30;
  
  return (
    <div className={`overflow-hidden ${className}`}>
      <div className="flex">
        {Array.from({ length: columns }).map((_, colIndex) => (
          <div key={colIndex} className="flex flex-col">
            {Array.from({ length: rows }).map((_, rowIndex) => (
              <motion.span
                key={`${colIndex}-${rowIndex}`}
                className="text-primary/20 font-mono text-lg"
                initial={{ opacity: Math.random() > 0.5 ? 1 : 0 }}
                animate={{
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 1 + Math.random() * 3,
                  repeat: Infinity,
                  delay: Math.random() * 5,
                }}
              >
                {Math.random() > 0.5 ? "0" : "1"}
              </motion.span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

interface CircuitBoardProps {
  className?: string;
}

export function CircuitBoard({ className = "" }: CircuitBoardProps) {
  return (
    <div className={`relative ${className}`}>
      {/* Main board */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-primary/30" />
      
      {/* Circuit traces */}
      <svg 
        className="absolute inset-0 w-full h-full" 
        viewBox="0 0 400 300"
        preserveAspectRatio="none"
      >
        {/* Main horizontal trace */}
        <motion.path
          d="M 20 150 L 380 150"
          stroke="url(#traceGradient)"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
        />
        
        {/* Vertical branches */}
        <motion.path
          d="M 100 150 L 100 50"
          stroke="url(#traceGradient)"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", delay: 0.5 }}
        />
        
        <motion.path
          d="M 200 150 L 200 250"
          stroke="url(#traceGradient)"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2.5, repeat: Infinity, repeatType: "reverse", delay: 1 }}
        />
        
        <motion.path
          d="M 300 150 L 300 80"
          stroke="url(#traceGradient)"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", delay: 1.5 }}
        />
        
        {/* Components */}
        <circle cx="100" cy="50" r="8" fill="#3b82f6" />
        <circle cx="200" cy="250" r="8" fill="#8b5cf6" />
        <circle cx="300" cy="80" r="8" fill="#ec4899" />
        
        <defs>
          <linearGradient id="traceGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
            <stop offset="50%" stopColor="#8b5cf6" />
            <stop offset="100%" stopColor="#ec4899" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
      
      {/* Glowing points */}
      <motion.div 
        className="absolute w-4 h-4 rounded-full bg-primary blur-sm"
        style={{ top: "50%", left: "25%" }}
        animate={{
          opacity: [0.3, 1, 0.3],
          scale: [1, 1.2, 1]
        }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      
      <motion.div 
        className="absolute w-4 h-4 rounded-full bg-accent blur-sm"
        style={{ top: "25%", left: "50%" }}
        animate={{
          opacity: [0.3, 1, 0.3],
          scale: [1, 1.2, 1]
        }}
        transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
      />
      
      <motion.div 
        className="absolute w-4 h-4 rounded-full bg-[#ec4899] blur-sm"
        style={{ top: "75%", left: "75%" }}
        animate={{
          opacity: [0.3, 1, 0.3],
          scale: [1, 1.2, 1]
        }}
        transition={{ duration: 2, repeat: Infinity, delay: 1 }}
      />
    </div>
  );
}