"use client";

import { motion } from "framer-motion";
import { Bot, TrendingUp, Code2, Palette, Smartphone, Rocket, ArrowUpRight, Sparkles } from "lucide-react";

const services = [
    {
        title: "AI & Automation",
        description: "Smart chatbots, predictive analytics, and workflow automation that save time and boost revenue.",
        icon: Bot,
        gradient: "from-violet-500 to-purple-600",
        features: ["Custom AI Models", "Chatbot Development", "Process Automation"],
    },
    {
        title: "Digital Marketing",
        description: "SEO, PPC, and social media strategies that put your brand in front of the right audience.",
        icon: TrendingUp,
        gradient: "from-blue-500 to-cyan-500",
        features: ["SEO Optimization", "PPC Campaigns", "Social Media Marketing"],
    },
    {
        title: "Web Development",
        description: "Fast, beautiful websites built with Next.js and React that convert visitors into customers.",
        icon: Code2,
        gradient: "from-emerald-500 to-green-500",
        features: ["Custom Websites", "E-commerce", "Web Applications"],
    },
    {
        title: "UI/UX Design",
        description: "User-centered design that looks stunning and drives engagement across all touchpoints.",
        icon: Palette,
        gradient: "from-pink-500 to-rose-500",
        features: ["Brand Identity", "UI Design", "User Research"],
    },
    {
        title: "App Development",
        description: "Native and cross-platform mobile apps that your users will love to use every day.",
        icon: Smartphone,
        gradient: "from-orange-500 to-amber-500",
        features: ["iOS & Android", "React Native", "Flutter"],
    },
    {
        title: "Growth Strategy",
        description: "Data-driven consulting to scale your business and stay ahead of competition.",
        icon: Rocket,
        gradient: "from-indigo-500 to-blue-500",
        features: ["Market Analysis", "Growth Hacking", "Performance Metrics"],
    },
];

export function RevampedServices() {
    return (
        <section id="services" className="py-32 relative">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/5 to-transparent" />

            <div className="container mx-auto px-4 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16"
                >
                    <div>
                        <span className="inline-flex items-center gap-2 text-purple-400 font-medium mb-4">
                            <Sparkles className="w-4 h-4" />
                            Our Expertise
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">
                            Services That{" "}
                            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                                Deliver Results
                            </span>
                        </h2>
                        <p className="text-xl text-gray-400 max-w-xl">
                            Everything you need to dominate online, all under one roof.
                        </p>
                    </div>
                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        className="mt-6 lg:mt-0 px-6 py-3 border border-white/20 rounded-full font-medium hover:bg-white/5 transition-all flex items-center gap-2 self-start"
                    >
                        View All Services
                        <ArrowUpRight className="w-4 h-4" />
                    </motion.button>
                </motion.div>

                {/* Services Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -8 }}
                            className="group relative p-8 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:border-white/[0.15] hover:bg-white/[0.04] transition-all duration-300"
                        >
                            {/* Glow Effect */}
                            <div className={`absolute -inset-px rounded-2xl bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity blur-xl`} />

                            <div className="relative">
                                {/* Icon */}
                                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} p-0.5 mb-6`}>
                                    <div className="w-full h-full rounded-[10px] bg-[#0a0a1a] flex items-center justify-center">
                                        <service.icon className="w-6 h-6 text-white" />
                                    </div>
                                </div>

                                {/* Content */}
                                <h3 className="text-xl font-semibold mb-3 group-hover:text-white transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-gray-400 leading-relaxed mb-6">
                                    {service.description}
                                </p>

                                {/* Features Tags */}
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {service.features.map((feature, i) => (
                                        <span key={i} className="px-3 py-1 text-xs rounded-full bg-white/5 text-gray-400 border border-white/5">
                                            {feature}
                                        </span>
                                    ))}
                                </div>

                                {/* Link */}
                                <div className="flex items-center gap-2 text-sm font-medium text-gray-500 group-hover:text-purple-400 transition-colors">
                                    Learn more
                                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
