"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ModernCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function ModernCard({
  children,
  className,
  delay = 0,
}: ModernCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className={cn(
        "relative bg-white/80 backdrop-blur-xl border border-white/30 rounded-2xl shadow-xl overflow-hidden",
        "hover:shadow-2xl transition-all duration-500 hover:-translate-y-2",
        className
      )}
    >
      {/* Gradient border effect */}
      <div className="absolute inset-0 rounded-2xl p-[1.5px] bg-gradient-to-br from-cyan-400/30 via-purple-400/30 to-cyan-400/30 pointer-events-none" />
      
      {/* Inner content */}
      <div className="relative bg-white/90 backdrop-blur-2xl rounded-2xl p-6 md:p-8 h-full">
        {children}
      </div>
    </motion.div>
  );
}