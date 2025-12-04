"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

const projects = [
    {
        title: "AI Analytics Platform",
        category: "Web App • AI",
        description: "Real-time analytics with machine learning predictions for enterprise clients.",
        image: "/projects/ai-analytics.jpg",
        gradient: "from-purple-600 to-violet-700",
        link: "#",
    },
    {
        title: "E-commerce Marketplace",
        category: "E-commerce • Mobile",
        description: "Multi-vendor platform processing $2M+ monthly transactions.",
        image: "/projects/ecommerce.jpg",
        gradient: "from-blue-600 to-cyan-600",
        link: "#",
    },
    {
        title: "SaaS Dashboard",
        category: "SaaS • Design",
        description: "Award-winning interface serving 100K+ active users daily.",
        image: "/projects/saas.jpg",
        gradient: "from-pink-600 to-rose-600",
        link: "#",
    },
    {
        title: "FinTech Mobile App",
        category: "Finance • App",
        description: "Secure banking solution with industry-leading 4.9★ rating.",
        image: "/projects/fintech.jpg",
        gradient: "from-emerald-600 to-green-600",
        link: "#",
    },
];

export function RevampedPortfolio() {
    return (
        <section id="work" className="py-32 relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/5 to-transparent" />

            <div className="container mx-auto px-4 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-purple-400 font-medium mb-4 block">Our Work</span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                        Featured{" "}
                        <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                            Projects
                        </span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Real projects. Real impact. See how we&apos;ve helped businesses achieve their goals.
                    </p>
                </motion.div>

                {/* Projects Grid - 2x2 */}
                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.a
                            key={index}
                            href={project.link}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group block"
                        >
                            <div className="relative rounded-2xl overflow-hidden bg-gray-900/50 border border-white/5 hover:border-white/20 transition-all duration-500">
                                {/* Image/Gradient Area */}
                                <div className={`h-72 md:h-80 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500" />

                                    {/* Floating Elements */}
                                    <div className="absolute inset-8 flex items-center justify-center">
                                        <div className="w-full max-w-sm bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 transform group-hover:scale-105 transition-transform duration-500">
                                            <div className="flex items-center gap-3 mb-4">
                                                <div className="w-3 h-3 rounded-full bg-red-400" />
                                                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                                                <div className="w-3 h-3 rounded-full bg-green-400" />
                                            </div>
                                            <div className="space-y-3">
                                                <div className="h-4 bg-white/20 rounded-full w-3/4" />
                                                <div className="h-4 bg-white/20 rounded-full w-1/2" />
                                                <div className="h-20 bg-white/10 rounded-lg mt-4" />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Arrow on hover */}
                                    <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/0 group-hover:bg-white flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100">
                                        <ArrowUpRight className="w-5 h-5 text-gray-900" />
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6 md:p-8">
                                    <div className="flex items-start justify-between mb-3">
                                        <span className="text-sm text-gray-500 uppercase tracking-wider font-medium">
                                            {project.category}
                                        </span>
                                    </div>
                                    <h3 className="text-2xl font-bold mb-3 group-hover:text-purple-400 transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-400 leading-relaxed">
                                        {project.description}
                                    </p>
                                </div>
                            </div>
                        </motion.a>
                    ))}
                </div>

                {/* View All CTA */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center mt-16"
                >
                    <motion.a
                        href="#"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="inline-flex items-center gap-2 px-8 py-4 bg-white text-gray-900 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                    >
                        View All Projects
                        <ArrowUpRight className="w-5 h-5" />
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
}
