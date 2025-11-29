"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface AnimatedDivProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function AnimatedDiv({
  children,
  className,
  delay = 0,
}: AnimatedDivProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className={className}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
        transition={{ duration: 0.5, delay }}
      >
        {children}
      </motion.div>
    </div>
  );
}
