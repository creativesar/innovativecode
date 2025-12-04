"use client";

import { ArrowRight, CheckCircle2, Play, Sparkles, TrendingUp, Zap } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export function ProfessionalHero() {
    const heroRef = useRef<HTMLDivElement>(null);
    const cardRef = useRef<HTMLDivElement>(null);
    const floatingRef1 = useRef<HTMLDivElement>(null);
    const floatingRef2 = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Hero content animations
            gsap.from(".hero-badge", {
                opacity: 0,
                y: -20,
                duration: 0.8,
                ease: "power3.out"
            });

            gsap.from(".hero-title", {
                opacity: 0,
                y: 30,
                duration: 1,
                delay: 0.2,
                ease: "power3.out"
            });

            gsap.from(".hero-subtitle", {
                opacity: 0,
                y: 20,
                duration: 0.8,
                delay: 0.4,
                ease: "power3.out"
            });

            gsap.from(".hero-benefit", {
                opacity: 0,
                x: -20,
                duration: 0.6,
                stagger: 0.1,
                delay: 0.6,
                ease: "power2.out"
            });

            gsap.from(".hero-cta", {
                opacity: 0,
                y: 20,
                duration: 0.8,
                delay: 0.9,
                ease: "power3.out"
            });

            gsap.from(".hero-stats", {
                opacity: 0,
                y: 20,
                duration: 0.8,
                delay: 1.1,
                ease: "power3.out"
            });

            // Card animations
            if (cardRef.current) {
                gsap.from(cardRef.current, {
                    opacity: 0,
                    scale: 0.95,
                    duration: 1.2,
                    delay: 0.5,
                    ease: "power3.out"
                });
            }

            // Floating cards
            if (floatingRef1.current) {
                gsap.to(floatingRef1.current, {
                    y: -15,
                    duration: 2.5,
                    repeat: -1,
                    yoyo: true,
                    ease: "power1.inOut"
                });
            }

            if (floatingRef2.current) {
                gsap.to(floatingRef2.current, {
                    y: -12,
                    duration: 3,
                    repeat: -1,
                    yoyo: true,
                    ease: "power1.inOut",
                    delay: 0.5
                });
            }

            // Parallax effect on scroll
            gsap.to(heroRef.current, {
                scrollTrigger: {
                    trigger: heroRef.current,
                    start: "top top",
                    end: "bottom top",
                    scrub: 1
                },
                y: 100,
                opacity: 0.8
            });
        }, heroRef);

        return () => ctx.revert();
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }
        }
    };

    return (
        <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden bg-white">
            {/* Animated Background Pattern */}
            <motion.div
                className="absolute inset-0 opacity-[0.03]"
                animate={{
                    backgroundPosition: ["0% 0%", "100% 100%"]
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "linear"
                }}
                style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, #2D3FE7 1px, transparent 0)`,
                    backgroundSize: '40px 40px'
                }}
            />

            {/* Gradient Accent with Animation */}
            <motion.div
                className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-blue-50 via-purple-50 to-transparent opacity-60 blur-3xl"
                animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, 0]
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />

            <div className="container mx-auto px-6 lg:px-8 py-20 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left Content */}
                    <motion.div
                        className="space-y-8"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        {/* Trust Badge */}
                        <motion.div
                            className="hero-badge inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <motion.div
                                className="w-2 h-2 rounded-full bg-blue-600"
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ duration: 2, repeat: Infinity }}
                            />
                            <span className="text-sm font-semibold text-blue-900">Trusted by 500+ Companies</span>
                        </motion.div>

                        {/* Main Headline */}
                        <div className="hero-title">
                            <h1 className="text-6xl lg:text-7xl font-extrabold leading-tight">
                                <motion.span
                                    className="block text-midnight"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.8, delay: 0.3 }}
                                >
                                    Elevate Your
                                </motion.span>
                                <motion.span
                                    className="block text-gradient-blue mt-2"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.8, delay: 0.5 }}
                                >
                                    Digital Presence
                                </motion.span>
                            </h1>
                        </div>

                        {/* Subheadline */}
                        <motion.p
                            className="hero-subtitle text-xl text-medium-gray leading-relaxed max-w-xl"
                            variants={itemVariants}
                        >
                            We craft premium websites and digital strategies that drive measurable results. Transform your business with solutions built for growth.
                        </motion.p>

                        {/* Key Benefits */}
                        <div className="space-y-3">
                            {[
                                "ROI-Focused Development",
                                "Lightning-Fast Delivery",
                                "24/7 Premium Support"
                            ].map((benefit, index) => (
                                <motion.div
                                    key={index}
                                    className="hero-benefit flex items-center gap-3"
                                    whileHover={{ x: 5 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ delay: 0.7 + index * 0.1, type: "spring", stiffness: 200 }}
                                    >
                                        <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0" />
                                    </motion.div>
                                    <span className="text-lg text-midnight font-medium">{benefit}</span>
                                </motion.div>
                            ))}
                        </div>

                        {/* CTA Buttons */}
                        <motion.div
                            className="hero-cta flex flex-col sm:flex-row gap-4 pt-4"
                            variants={itemVariants}
                        >
                            <motion.div
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <Link href="/contact" className="btn-primary group">
                                    Start Your Project
                                    <motion.div
                                        animate={{ x: [0, 5, 0] }}
                                        transition={{ duration: 1.5, repeat: Infinity }}
                                    >
                                        <ArrowRight className="w-5 h-5" />
                                    </motion.div>
                                </Link>
                            </motion.div>
                            <motion.button
                                className="btn-secondary group"
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <Play className="w-5 h-5" />
                                Watch Demo
                            </motion.button>
                        </motion.div>

                        {/* Social Proof */}
                        <motion.div
                            className="hero-stats flex items-center gap-8 pt-6"
                            variants={itemVariants}
                        >
                            {[
                                { value: "250%", label: "Avg ROI Increase" },
                                { value: "98%", label: "Client Satisfaction" },
                                { value: "500+", label: "Projects Delivered" }
                            ].map((stat, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    <div className="text-3xl font-bold text-gradient-blue">{stat.value}</div>
                                    <div className="text-sm text-medium-gray">{stat.label}</div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Right Content - Inverted Radius Card */}
                    <div className="relative">
                        {/* Main Card with Inverted Corners */}
                        <motion.div
                            ref={cardRef}
                            className="inverted-corners glass-card p-10 card-hover relative overflow-hidden"
                            whileHover={{ scale: 1.02 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            {/* Shimmer Effect */}
                            <div className="shimmer-effect absolute inset-0" />

                            {/* Content */}
                            <div className="relative z-10 space-y-6">
                                {/* Icon */}
                                <motion.div
                                    className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 shadow-lg"
                                    whileHover={{ rotate: 360, scale: 1.1 }}
                                    transition={{ duration: 0.6 }}
                                >
                                    <TrendingUp className="w-8 h-8 text-white" />
                                </motion.div>

                                {/* Title */}
                                <motion.h3
                                    className="text-3xl font-bold text-midnight"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.8 }}
                                >
                                    Ready to Scale Your Business?
                                </motion.h3>

                                {/* Description */}
                                <motion.p
                                    className="text-lg text-medium-gray leading-relaxed"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 1 }}
                                >
                                    Join industry leaders who have transformed their digital presence and achieved remarkable growth with our proven strategies.
                                </motion.p>

                                {/* Stats Grid */}
                                <div className="grid grid-cols-2 gap-6 pt-6 border-t border-light-gray">
                                    {[
                                        { value: "2.5x", label: "Faster Growth", gradient: "text-gradient-blue" },
                                        { value: "99.9%", label: "Uptime SLA", gradient: "text-gradient-accent" },
                                        { value: "24/7", label: "Support", gradient: "text-gradient-gold" },
                                        { value: "100%", label: "Satisfaction", gradient: "text-gradient-blue" }
                                    ].map((stat, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: 1.2 + index * 0.1 }}
                                            whileHover={{ scale: 1.1 }}
                                        >
                                            <div className={`text-4xl font-bold ${stat.gradient} mb-1`}>{stat.value}</div>
                                            <div className="text-sm text-medium-gray">{stat.label}</div>
                                        </motion.div>
                                    ))}
                                </div>

                                {/* Client Logos Placeholder */}
                                <motion.div
                                    className="pt-6 border-t border-light-gray"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 1.6 }}
                                >
                                    <div className="text-xs font-semibold text-medium-gray uppercase tracking-wider mb-4">
                                        Trusted By Industry Leaders
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="flex -space-x-3">
                                            {[
                                                "from-blue-400 to-blue-600",
                                                "from-purple-400 to-purple-600",
                                                "from-cyan-400 to-cyan-600",
                                                "from-pink-400 to-pink-600"
                                            ].map((gradient, index) => (
                                                <motion.div
                                                    key={index}
                                                    className={`w-10 h-10 rounded-full bg-gradient-to-br ${gradient} border-2 border-white shadow-md`}
                                                    initial={{ scale: 0 }}
                                                    animate={{ scale: 1 }}
                                                    transition={{ delay: 1.8 + index * 0.1, type: "spring" }}
                                                    whileHover={{ scale: 1.2, zIndex: 10 }}
                                                />
                                            ))}
                                        </div>
                                        <div className="text-sm font-semibold text-midnight">
                                            +500 Companies
                                        </div>
                                    </div>
                                </motion.div>
                            </div>

                            {/* Decorative Gradient Accent */}
                            <motion.div
                                className="absolute -bottom-10 -right-10 w-40 h-40 bg-gradient-to-br from-blue-200/50 to-purple-200/50 rounded-full blur-3xl"
                                animate={{
                                    scale: [1, 1.2, 1],
                                    opacity: [0.5, 0.7, 0.5]
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            />
                        </motion.div>

                        {/* Floating Stat Cards */}
                        <motion.div
                            ref={floatingRef1}
                            className="absolute -top-6 -left-6 glass-card p-4 rounded-2xl shadow-xl"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 1.2 }}
                            whileHover={{ scale: 1.1, rotate: 5 }}
                        >
                            <div className="flex items-center gap-3">
                                <motion.div
                                    className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center"
                                    whileHover={{ rotate: 360 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <Sparkles className="w-6 h-6 text-white" />
                                </motion.div>
                                <div>
                                    <div className="text-xs text-medium-gray">Performance</div>
                                    <div className="text-xl font-bold text-midnight">A+ Rating</div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            ref={floatingRef2}
                            className="absolute -bottom-6 -right-6 glass-card p-4 rounded-2xl shadow-xl"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 1.4 }}
                            whileHover={{ scale: 1.1, rotate: -5 }}
                        >
                            <div className="flex items-center gap-3">
                                <motion.div
                                    className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center"
                                    whileHover={{ rotate: 360 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <Zap className="w-6 h-6 text-white" />
                                </motion.div>
                                <div>
                                    <div className="text-xs text-medium-gray">Growth Rate</div>
                                    <div className="text-xl font-bold text-midnight">+250%</div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
