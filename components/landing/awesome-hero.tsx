"use client";

import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Sparkles, Code2, Palette, Rocket, TrendingUp } from "lucide-react";

export function AwesomeHero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [scrollY, setScrollY] = useState(0);
    const { scrollYProgress } = useScroll();
    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };
        
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const floatingBadges = [
        { icon: Code2, label: "Web Dev", color: "from-purple-500 to-indigo-600", position: "top-20 left-10" },
        { icon: Palette, label: "Design", color: "from-cyan-500 to-blue-600", position: "top-32 right-16" },
        { icon: Rocket, label: "Marketing", color: "from-orange-500 to-pink-600", position: "bottom-40 left-20" },
        { icon: TrendingUp, label: "Growth", color: "from-emerald-500 to-teal-600", position: "bottom-32 right-24" },
    ];

    return (
        <div
            ref={containerRef}
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
        >
            {/* Animated gradient orbs */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <motion.div
                    className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] rounded-full opacity-30 blur-3xl"
                    style={{
                        background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                        y: scrollY * 0.3,
                    }}
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 90, 0],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                />
                <motion.div
                    className="absolute bottom-1/4 -right-1/4 w-[500px] h-[500px] rounded-full opacity-30 blur-3xl"
                    style={{
                        background: "linear-gradient(135deg, #06b6d4, #0891b2)",
                        y: scrollY * -0.2,
                    }}
                    animate={{
                        scale: [1, 1.3, 1],
                        rotate: [0, -90, 0],
                    }}
                    transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                />
                <motion.div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full opacity-20 blur-3xl"
                    style={{
                        background: "linear-gradient(135deg, #f97316, #fb923c)",
                        y: scrollY * 0.15,
                    }}
                    animate={{
                        scale: [1, 1.4, 1],
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            </div>

            {/* Floating service badges */}
            {floatingBadges.map((badge, index) => (
                <motion.div
                    key={index}
                    className={`absolute hidden lg:flex items-center gap-2 px-4 py-2 rounded-2xl bg-white/80 backdrop-blur-md border border-white/60 shadow-lg ${badge.position}`}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.5 + index * 0.2, type: "spring" }}
                    whileHover={{ scale: 1.1, y: -5 }}
                    style={{
                        transform: `translateY(${scrollY * (0.05 + index * 0.02)}px)`,
                    }}
                >
                    <div className={`w-8 h-8 rounded-xl bg-gradient-to-br ${badge.color} flex items-center justify-center`}>
                        <badge.icon className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-sm font-bold text-slate-700">{badge.label}</span>
                </motion.div>
            ))}

            <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left: Content */}
                    <div className="text-center lg:text-left">
                        {/* Badge */}
                        <motion.div
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 via-cyan-500/10 to-orange-500/10 border border-purple-300/30 mb-8 backdrop-blur-sm"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <Sparkles className="w-4 h-4 text-purple-600" />
                            <span className="text-sm font-bold text-gradient-hero">
                                Digital Marketing & Web Development Experts
                            </span>
                        </motion.div>

                        {/* Main Heading */}
                        <motion.h1
                            className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <span className="block text-gradient-hero">
                                Transform Your
                            </span>
                            <span className="block text-slate-900 mt-2">
                                Digital Presence
                            </span>
                        </motion.h1>

                        {/* Subtitle */}
                        <motion.p
                            className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            We craft stunning websites and powerful marketing strategies that drive real results. From concept to conversion, we're your growth partner.
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div
                            className="flex flex-col sm:flex-row items-center lg:items-start gap-4"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                        >
                            <Link
                                href="/contact"
                                className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 via-cyan-600 to-purple-600 bg-size-200 bg-pos-0 hover:bg-pos-100 text-white rounded-2xl font-bold transition-all duration-500 shadow-lg hover:shadow-2xl hover:shadow-purple-500/50 transform hover:-translate-y-1 flex items-center gap-2"
                            >
                                Get Started Now
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link
                                href="/portfolio"
                                className="group px-8 py-4 bg-white/80 backdrop-blur-sm border-2 border-slate-200 text-slate-700 rounded-2xl font-bold hover:border-purple-500 hover:text-purple-600 transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-2"
                            >
                                View Portfolio
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </motion.div>

                        {/* Stats */}
                        <motion.div
                            className="grid grid-cols-3 gap-6 mt-12 max-w-md mx-auto lg:mx-0"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                        >
                            {[
                                { value: "500+", label: "Projects" },
                                { value: "98%", label: "Satisfaction" },
                                { value: "250%", label: "Avg Growth" },
                            ].map((stat, index) => (
                                <div key={index} className="text-center lg:text-left">
                                    <div className="text-3xl font-black text-gradient-primary">{stat.value}</div>
                                    <div className="text-sm text-slate-600 font-medium">{stat.label}</div>
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Right: Visual Element */}
                    <motion.div
                        className="relative hidden lg:block"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.4 }}
                    >
                        {/* Main gradient blob */}
                        <div className="relative w-full aspect-square">
                            <motion.div
                                className="absolute inset-0 rounded-[3rem] bg-gradient-to-br from-purple-500 via-cyan-500 to-orange-500 opacity-80 blur-2xl"
                                animate={{
                                    scale: [1, 1.1, 1],
                                    rotate: [0, 5, 0],
                                }}
                                transition={{
                                    duration: 8,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                            />
                            <motion.div
                                className="absolute inset-8 rounded-[2.5rem] bg-white/90 backdrop-blur-xl border border-white/60 shadow-2xl overflow-hidden"
                                whileHover={{ scale: 1.02 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                {/* Grid pattern */}
                                <div className="absolute inset-0 opacity-10">
                                    <div
                                        className="w-full h-full"
                                        style={{
                                            backgroundImage: `
                                                linear-gradient(rgba(99, 102, 241, 0.3) 1px, transparent 1px),
                                                linear-gradient(90deg, rgba(99, 102, 241, 0.3) 1px, transparent 1px)
                                            `,
                                            backgroundSize: "40px 40px",
                                        }}
                                    />
                                </div>

                                {/* Floating elements inside */}
                                <div className="relative w-full h-full p-8 flex items-center justify-center">
                                    <div className="text-center space-y-6">
                                        <div className="w-24 h-24 mx-auto rounded-3xl bg-gradient-to-br from-purple-600 to-cyan-600 flex items-center justify-center shadow-lg">
                                            <Code2 className="w-12 h-12 text-white" />
                                        </div>
                                        <div className="space-y-2">
                                            <h3 className="text-2xl font-black text-slate-900">Premium Quality</h3>
                                            <p className="text-slate-600">Crafted with excellence</p>
                                        </div>
                                        <div className="flex gap-2 justify-center">
                                            {[...Array(3)].map((_, i) => (
                                                <motion.div
                                                    key={i}
                                                    className="w-3 h-3 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500"
                                                    animate={{
                                                        scale: [1, 1.5, 1],
                                                        opacity: [0.5, 1, 0.5],
                                                    }}
                                                    transition={{
                                                        duration: 2,
                                                        repeat: Infinity,
                                                        delay: i * 0.3,
                                                    }}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
            >
                <span className="text-sm text-slate-500 font-medium">Scroll to explore</span>
                <motion.div
                    className="w-6 h-10 rounded-full border-2 border-slate-300 flex justify-center p-1"
                    whileHover={{ borderColor: "#6366f1" }}
                >
                    <motion.div
                        className="w-1.5 h-1.5 bg-purple-600 rounded-full"
                        animate={{ y: [0, 12, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                    />
                </motion.div>
            </motion.div>

            <style jsx>{`
                .bg-size-200 {
                    background-size: 200% 100%;
                }
                .bg-pos-0 {
                    background-position: 0% 0%;
                }
                .bg-pos-100:hover {
                    background-position: 100% 0%;
                }
            `}</style>
        </div>
    );
}