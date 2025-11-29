"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    className?: string;
    hoverEffect?: boolean;
}

export function GlassCard({
    children,
    className,
    hoverEffect = true,
    ...props
}: GlassCardProps) {
    return (
        <motion.div
            className={cn(
                "glass-panel rounded-2xl p-6 relative overflow-hidden",
                className
            )}
            initial={hoverEffect ? { y: 0 } : undefined}
            whileHover={hoverEffect ? {
                y: -5,
                boxShadow: "0 20px 40px -10px rgba(0, 0, 0, 0.1)"
            } : undefined}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            {...props as any}
        >
            {/* Gradient overlay for extra depth */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent pointer-events-none" />

            {/* Content */}
            <div className="relative z-10">
                {children}
            </div>
        </motion.div>
    );
}
