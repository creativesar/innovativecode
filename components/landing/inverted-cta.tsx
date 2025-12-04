"use client";

import { ArrowRight, Mail, MessageCircle, Phone, Sparkles, Zap } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export function ProfessionalCTA() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const cardRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(cardRef.current, {
                scrollTrigger: {
                    trigger: cardRef.current,
                    start: "top 80%",
                    end: "top 50%",
                    scrub: 1
                },
                opacity: 0,
                scale: 0.95,
                y: 50
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="relative py-24 lg:py-32 bg-gradient-subtle overflow-hidden">
            {/* Animated Background Accent */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-br from-blue-50 via-transparent to-purple-50 opacity-50"
                animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 2, 0]
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />

            <div className="container mx-auto px-6 lg:px-8 relative z-10">
                {/* Main CTA Card */}
                <div className="max-w-5xl mx-auto">
                    <motion.div
                        ref={cardRef}
                        className="inverted-corners glass-card p-12 lg:p-16 text-center relative overflow-hidden"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        whileHover={{ scale: 1.01 }}
                    >
                        {/* Shimmer Effect */}
                        <div className="shimmer-effect absolute inset-0" />

                        {/* Content */}
                        <div className="relative z-10">
                            {/* Badge */}
                            <motion.div
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 mb-8 backdrop-blur-sm"
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                whileHover={{ scale: 1.05 }}
                            >
                                <motion.div
                                    animate={{ scale: [1, 1.2, 1] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                >
                                    <Sparkles className="w-4 h-4 text-primary" />
                                </motion.div>
                                <span className="text-sm font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                                    LIMITED TIME OFFER
                                </span>
                            </motion.div>

                            {/* Headline */}
                            <motion.h2
                                className="text-5xl lg:text-6xl font-bold text-midnight mb-6"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                            >
                                <span className="block mb-2">Ready to Transform</span>
                                <motion.span
                                    className="block text-transparent bg-clip-text bg-gradient-hero"
                                    animate={{
                                        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                                    }}
                                    transition={{
                                        duration: 5,
                                        repeat: Infinity,
                                        ease: "linear"
                                    }}
                                >
                                    Your Business?
                                </motion.span>
                            </motion.h2>

                            {/* Subheadline */}
                            <motion.p
                                className="text-xl text-medium-gray max-w-2xl mx-auto mb-12 leading-relaxed"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.5 }}
                            >
                                Join hundreds of successful businesses that have elevated their digital presence. 
                                <strong className="text-midnight"> Get 20% off </strong> 
                                your first project when you sign up this month.
                            </motion.p>

                            {/* CTA Buttons */}
                            <motion.div
                                className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.7 }}
                            >
                                <motion.div
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <Link 
                                        href="/contact" 
                                        className="px-8 py-4 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-2xl font-bold hover:from-accent hover:to-[#ec4899] transition-all duration-500 shadow-2xl hover:shadow-[0_0_40px_rgba(99,102,241,0.5)] transform hover:-translate-y-2 flex items-center group text-lg"
                                    >
                                        <Zap className="mr-2 h-5 w-5" />
                                        Start Your Project
                                        <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                                    </Link>
                                </motion.div>
                                <motion.div
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <Link 
                                        href="/portfolio" 
                                        className="px-8 py-4 border-2 border-primary text-primary rounded-2xl font-bold hover:bg-primary hover:text-primary-foreground transition-all duration-500 transform hover:-translate-y-2 flex items-center group text-lg"
                                    >
                                        <Sparkles className="mr-2 h-5 w-5" />
                                        View Our Work
                                        <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                                    </Link>
                                </motion.div>
                            </motion.div>

                            {/* Contact Options */}
                            <motion.div
                                className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto pt-8 border-t border-light-gray"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.9 }}
                            >
                                {[
                                    { icon: Mail, label: "Email Us", value: "hello@example.com", gradient: "from-blue-600 to-blue-700", href: "mailto:hello@example.com" },
                                    { icon: Phone, label: "Call Us", value: "+1 (234) 567-890", gradient: "from-purple-600 to-purple-700", href: "tel:+1234567890" },
                                    { icon: MessageCircle, label: "Live Chat", value: "Start Chatting", gradient: "from-cyan-600 to-cyan-700", href: "#" }
                                ].map((contact, index) => {
                                    const Icon = contact.icon;
                                    return (
                                        <motion.a
                                            key={index}
                                            href={contact.href}
                                            className="flex flex-col items-center gap-3 p-4 rounded-xl hover:bg-blue-50 transition-colors group"
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 1.1 + index * 0.1 }}
                                            whileHover={{ y: -5 }}
                                        >
                                            <motion.div
                                                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${contact.gradient} flex items-center justify-center shadow-md`}
                                                whileHover={{
                                                    rotate: 360,
                                                    scale: 1.1
                                                }}
                                                transition={{ duration: 0.6 }}
                                            >
                                                <Icon className="w-6 h-6 text-white" />
                                            </motion.div>
                                            <div className="text-center">
                                                <div className="text-xs text-medium-gray mb-1">{contact.label}</div>
                                                <div className="text-sm font-semibold text-midnight">{contact.value}</div>
                                            </div>
                                        </motion.a>
                                    );
                                })}
                            </motion.div>

                            {/* Trust Indicators */}
                            <motion.div
                                className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-medium-gray"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 1.5 }}
                            >
                                {[
                                    { color: "bg-blue-600", text: "500+ Projects Delivered" },
                                    { color: "bg-purple-600", text: "98% Client Satisfaction" },
                                    { color: "bg-cyan-600", text: "24/7 Support Available" }
                                ].map((indicator, index) => (
                                    <motion.div
                                        key={index}
                                        className="flex items-center gap-2"
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 1.7 + index * 0.1 }}
                                        whileHover={{ scale: 1.05 }}
                                    >
                                        <motion.div
                                            className={`w-2 h-2 rounded-full ${indicator.color}`}
                                            animate={{ scale: [1, 1.3, 1] }}
                                            transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                                        />
                                        <span className="font-medium">{indicator.text}</span>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>

                        {/* Decorative Gradients */}
                        <motion.div
                            className="absolute -top-20 -left-20 w-60 h-60 bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-full blur-3xl"
                            animate={{
                                scale: [1, 1.2, 1],
                                x: [-10, 10, -10],
                                y: [-10, 10, -10]
                            }}
                            transition={{
                                duration: 8,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        />
                        <motion.div
                            className="absolute -bottom-20 -right-20 w-60 h-60 bg-gradient-to-br from-purple-200/30 to-cyan-200/30 rounded-full blur-3xl"
                            animate={{
                                scale: [1, 1.2, 1],
                                x: [10, -10, 10],
                                y: [10, -10, 10]
                            }}
                            transition={{
                                duration: 8,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: 1
                            }}
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}