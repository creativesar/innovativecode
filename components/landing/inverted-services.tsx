"use client";

import { Code2, Megaphone, Palette, Search, ShoppingBag, Smartphone } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const services = [
    {
        icon: Code2,
        title: "Web Development",
        description: "Custom websites and applications built with cutting-edge technology for optimal performance and scalability.",
        features: ["React & Next.js", "Performance Optimized", "SEO Ready"],
        gradient: "from-blue-600 to-blue-700"
    },
    {
        icon: Megaphone,
        title: "Digital Marketing",
        description: "Data-driven strategies that amplify your brand and convert visitors into loyal customers.",
        features: ["PPC Campaigns", "Social Media", "Content Strategy"],
        gradient: "from-purple-600 to-purple-700"
    },
    {
        icon: Palette,
        title: "UI/UX Design",
        description: "Beautiful, intuitive interfaces that create memorable experiences and drive engagement.",
        features: ["User Research", "Prototyping", "Design Systems"],
        gradient: "from-cyan-600 to-cyan-700"
    },
    {
        icon: Search,
        title: "SEO Optimization",
        description: "Strategic SEO solutions that boost visibility and drive qualified organic traffic.",
        features: ["Technical SEO", "Content SEO", "Link Building"],
        gradient: "from-emerald-600 to-emerald-700"
    },
    {
        icon: ShoppingBag,
        title: "E-Commerce",
        description: "Powerful online stores optimized for conversions and seamless shopping experiences.",
        features: ["Shopify & WooCommerce", "Payment Integration", "Analytics"],
        gradient: "from-amber-600 to-amber-700"
    },
    {
        icon: Smartphone,
        title: "Mobile Apps",
        description: "Native and cross-platform applications that engage users on any device.",
        features: ["iOS & Android", "React Native", "App Store Optimization"],
        gradient: "from-pink-600 to-pink-700"
    }
];

export function ProfessionalServices() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const cardsRef = useRef<HTMLDivElement[]>([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Header animation
            gsap.from(".services-header", {
                scrollTrigger: {
                    trigger: ".services-header",
                    start: "top 80%",
                    end: "top 50%",
                    scrub: 1
                },
                opacity: 0,
                y: 50
            });

            // Cards stagger animation
            cardsRef.current.forEach((card, index) => {
                if (card) {
                    gsap.from(card, {
                        scrollTrigger: {
                            trigger: card,
                            start: "top 85%",
                            end: "top 60%",
                            scrub: 1
                        },
                        opacity: 0,
                        y: 60,
                        rotateX: 15,
                        delay: index * 0.1
                    });
                }
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: [0.6, -0.05, 0.01, 0.99]
            }
        }
    };

    return (
        <section ref={sectionRef} className="relative py-24 lg:py-32 bg-gradient-subtle overflow-hidden">
            <div className="container mx-auto px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    className="services-header text-center max-w-3xl mx-auto mb-20"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.div
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-6"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <span className="text-sm font-semibold text-blue-900">Our Services</span>
                    </motion.div>

                    <h2 className="text-5xl lg:text-6xl font-bold text-midnight mb-6">
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            Complete Digital Solutions
                        </motion.span>
                        <motion.span
                            className="block text-gradient-blue mt-2"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                        >
                            For Modern Businesses
                        </motion.span>
                    </h2>

                    <motion.p
                        className="text-xl text-medium-gray leading-relaxed"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6 }}
                    >
                        From strategy to execution, we deliver comprehensive services that drive measurable results and sustainable growth.
                    </motion.p>
                </motion.div>

                {/* Services Grid */}
                <motion.div
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <motion.div
                                key={index}
                                ref={(el) => {
                                    if (el) cardsRef.current[index] = el;
                                }}
                                variants={cardVariants}
                                className="glass-card rounded-2xl p-8 group cursor-pointer relative overflow-hidden"
                                whileHover={{
                                    y: -10,
                                    transition: { type: "spring", stiffness: 300, damping: 20 }
                                }}
                                whileTap={{ scale: 0.98 }}
                            >
                                {/* Hover Gradient Background */}
                                <motion.div
                                    className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                                    initial={{ scale: 0, rotate: 45 }}
                                    whileHover={{ scale: 1.5, rotate: 0 }}
                                    transition={{ duration: 0.6 }}
                                />

                                {/* Icon */}
                                <motion.div
                                    className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} mb-6 shadow-lg relative z-10`}
                                    whileHover={{
                                        rotate: [0, -10, 10, -10, 0],
                                        scale: 1.1
                                    }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <Icon className="w-7 h-7 text-white" />
                                </motion.div>

                                {/* Title */}
                                <motion.h3
                                    className="text-2xl font-bold text-midnight mb-3 relative z-10"
                                    whileHover={{ x: 5 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    {service.title}
                                </motion.h3>

                                {/* Description */}
                                <p className="text-medium-gray leading-relaxed mb-6 relative z-10">
                                    {service.description}
                                </p>

                                {/* Features */}
                                <div className="space-y-2 pt-4 border-t border-light-gray relative z-10">
                                    {service.features.map((feature, idx) => (
                                        <motion.div
                                            key={idx}
                                            className="flex items-center gap-2 text-sm"
                                            initial={{ opacity: 0, x: -10 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.1 * idx }}
                                            whileHover={{ x: 5 }}
                                        >
                                            <motion.div
                                                className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.gradient}`}
                                                animate={{ scale: [1, 1.3, 1] }}
                                                transition={{ duration: 2, repeat: Infinity, delay: idx * 0.2 }}
                                            />
                                            <span className="text-midnight font-medium">{feature}</span>
                                        </motion.div>
                                    ))}
                                </div>

                                {/* Hover Arrow */}
                                <motion.div
                                    className="mt-6 flex items-center gap-2 text-sm font-semibold text-blue-600 relative z-10"
                                    initial={{ opacity: 0 }}
                                    whileHover={{ opacity: 1, x: 5 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <span>Learn More</span>
                                    <motion.svg
                                        className="w-4 h-4"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        animate={{ x: [0, 5, 0] }}
                                        transition={{ duration: 1.5, repeat: Infinity }}
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </motion.svg>
                                </motion.div>

                                {/* Decorative Corner */}
                                <motion.div
                                    className={`absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-20 blur-2xl`}
                                    initial={{ scale: 0 }}
                                    whileHover={{ scale: 1 }}
                                    transition={{ duration: 0.5 }}
                                />
                            </motion.div>
                        );
                    })}
                </motion.div>

                {/* Bottom CTA */}
                <motion.div
                    className="text-center mt-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                >
                    <p className="text-lg text-medium-gray mb-6">
                        Need a custom solution tailored to your needs?
                    </p>
                    <motion.button
                        className="btn-primary"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        Schedule a Consultation
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
}
