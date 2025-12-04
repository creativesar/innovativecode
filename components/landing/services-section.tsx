"use client";

import { motion } from "framer-motion";
import { Code2, Palette, Megaphone, TrendingUp, Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";

const services = [
    {
        icon: Code2,
        title: "Web Development",
        description: "Custom websites and web applications built with cutting-edge technologies for optimal performance and user experience.",
        gradient: "from-purple-600 to-indigo-600",
        features: ["Responsive Design", "Fast Loading", "SEO Optimized"]
    },
    {
        icon: Palette,
        title: "UI/UX Design",
        description: "Beautiful, intuitive interfaces that captivate users and drive engagement through thoughtful design and user research.",
        gradient: "from-cyan-600 to-blue-600",
        features: ["User Research", "Prototyping", "Brand Identity"]
    },
    {
        icon: Megaphone,
        title: "Digital Marketing",
        description: "Data-driven marketing strategies that amplify your brand reach and convert visitors into loyal customers.",
        gradient: "from-orange-600 to-pink-600",
        features: ["SEO/SEM", "Social Media", "Content Strategy"]
    },
    {
        icon: TrendingUp,
        title: "Growth Strategy",
        description: "Comprehensive growth plans combining analytics, optimization, and innovation to scale your business effectively.",
        gradient: "from-emerald-600 to-teal-600",
        features: ["Analytics", "A/B Testing", "Conversion Optimization"]
    }
];

export function ServicesSection() {
    return (
        <section className="relative py-24 overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-300/15 rounded-full blur-3xl" />
                <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-cyan-300/15 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-4">
                {/* Header */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <motion.div
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-purple-500/10 via-cyan-500/10 to-orange-500/10 border border-purple-300/30 mb-6"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <Sparkles className="w-5 h-5 text-purple-600" />
                        <span className="text-sm font-bold text-gradient-hero">Our Services</span>
                    </motion.div>

                    <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-4 tracking-tight">
                        What We{" "}
                        <span className="text-gradient-hero">Deliver</span>
                    </h2>

                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Comprehensive digital solutions tailored to your business needs
                    </p>
                </motion.div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            className="group relative"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -8 }}
                        >
                            <div className="relative h-full p-8 rounded-3xl bg-white/80 backdrop-blur-xl border border-white/60 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
                                {/* Gradient overlay on hover */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`} />

                                {/* Icon */}
                                <div className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                    <service.icon className="w-8 h-8 text-white" />
                                </div>

                                {/* Content */}
                                <div className="relative">
                                    <h3 className="text-2xl font-black text-slate-900 mb-3">
                                        {service.title}
                                    </h3>
                                    <p className="text-slate-600 mb-6 leading-relaxed">
                                        {service.description}
                                    </p>

                                    {/* Features */}
                                    <ul className="space-y-2 mb-6">
                                        {service.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-center gap-2 text-sm text-slate-700">
                                                <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.gradient}`} />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>

                                    {/* Learn More Link */}
                                    <Link
                                        href={`/services/${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                                        className={`inline-flex items-center gap-2 text-sm font-bold bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent group-hover:gap-3 transition-all`}
                                    >
                                        Learn More
                                        <ArrowRight className="w-4 h-4" style={{ color: 'currentColor', WebkitTextFillColor: 'initial' }} />
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
