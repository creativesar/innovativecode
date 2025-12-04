"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Cpu, Zap, Database, Globe, Smartphone, Code2 } from "lucide-react";
import { RobotEffectCard, BinaryRain, CircuitBoard } from "@/components/robot-tech-components";
import { Button } from "@/components/ui/button";

export default function TechDemoPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  const simulateLoading = () => {
    setIsLoading(true);
    setProgress(0);
    
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsLoading(false), 500);
          return 100;
        }
        return prev + 5;
      });
    }, 200);
  };

  return (
    <div className="min-h-screen bg-background pt-24 pb-16">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-[#ec4899] font-orbitron">
            ROBOTICS & TECH DEMO
          </h1>
          <p className="text-2xl text-muted-foreground max-w-3xl mx-auto font-rajdhani">
            Experience our cutting-edge robotic and technology components
          </p>
        </motion.div>

        {/* Binary Rain Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center font-orbitron">Binary Data Stream</h2>
          <div className="bg-black/30 rounded-2xl p-8 backdrop-blur-lg border border-primary/20">
            <BinaryRain className="h-64" />
          </div>
        </div>

        {/* Circuit Board Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center font-orbitron">Neural Circuit Board</h2>
          <div className="bg-gradient-to-br from-gray-900/50 to-black/50 rounded-2xl p-8 backdrop-blur-lg border border-primary/20">
            <CircuitBoard className="h-96" />
          </div>
        </div>

        {/* Robot Effect Cards */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-12 text-center font-orbitron">Tech Components</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <RobotEffectCard
              title="Quantum Processing"
              description="Harness the power of quantum computing for unprecedented computational capabilities."
              icon={<Cpu size={32} />}
            />
            
            <RobotEffectCard
              title="Neural Networks"
              description="Advanced AI systems that learn and adapt to deliver intelligent solutions."
              icon={<Zap size={32} />}
            />
            
            <RobotEffectCard
              title="Cloud Infrastructure"
              description="Scalable and secure cloud solutions for enterprise-level applications."
              icon={<Database size={32} />}
            />
            
            <RobotEffectCard
              title="IoT Integration"
              description="Seamless connectivity between devices for smart automation."
              icon={<Globe size={32} />}
            />
            
            <RobotEffectCard
              title="Mobile Robotics"
              description="Autonomous systems designed for mobility and real-world interaction."
              icon={<Smartphone size={32} />}
            />
            
            <RobotEffectCard
              title="Algorithmic Design"
              description="Precision-engineered algorithms for optimal performance and efficiency."
              icon={<Code2 size={32} />}
            />
          </div>
        </div>

        {/* Interactive Demo */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-8 font-orbitron">Interactive Demo</h2>
          <Button 
            onClick={simulateLoading}
            className="px-8 py-6 text-xl rounded-full bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-[#ec4899] transition-all duration-300 font-bold font-orbitron"
          >
            Activate Quantum Systems
          </Button>
        </div>
      </div>

      {/* Loading Overlay */}
      {isLoading && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-background/90 backdrop-blur-xl z-50 flex items-center justify-center"
        >
          <div className="text-center">
            <div className="w-32 h-32 border-4 border-primary/20 border-t-primary rounded-full animate-spin mb-8 mx-auto" />
            <p className="text-2xl font-orbitron text-primary">INITIALIZING QUANTUM SYSTEMS</p>
            <p className="text-4xl font-bold mt-4 text-gradient">{progress}%</p>
          </div>
        </motion.div>
      )}
    </div>
  );
}