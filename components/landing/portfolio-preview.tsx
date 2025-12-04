"use client";

import { motion } from "framer-motion";
import { ExternalLink, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const projects = [
    {
        title: "E-Commerce Platform",
        category: "Web Development",
        description: "Modern online store with seamless checkout and inventory management",
        image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?w=800&h=600&fit=crop",
        gradient: "from-purple-600 to-indigo-600",
        stats: { metric: "+180%", label: "Sales Growth" }
    },
    {
        title: "SaaS Dashboard",
        category: "UI/UX Design",
        description: "Intuitive analytics platform with real-time data visualization",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
        gradient: "from-cyan-600 to-blue-600",
        stats: { metric: "99.9%", label: "Uptime" }
    },
    {
        title: "Brand Campaign",
        category: "Digital Marketing",
        description: "Multi-channel marketing strategy that tripled brand awareness",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
        gradient: "from-orange-600 to-pink-600",
        stats: { metric: "+320%", label: "Engagement" }
    }
];

export function PortfolioPreview() {
    return (
        <section className="relative py-24 overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50/50 to-white -z-10" />

            <div className="container mx-auto px-4">
                {/* Header */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-4 tracking-tight">
                        Featured{" "}
                        <span className="text-gradient-hero">Projects</span>
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Explore our latest work and see how we've helped businesses thrive
                    </p>
                </motion.div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-12">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            className="group relative"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                            whileHover={{ y: -8 }}
                        >
                            <div className="relative h-full rounded-3xl overflow-hidden bg-white/80 backdrop-blur-xl border border-white/60 shadow-lg hover:shadow-2xl transition-all duration-500">
                                {/* Image */}
                                <div className="relative h-64 overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent z-10" />
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    />

                                    {/* Category Badge */}
                                    <div className="absolute top-4 left-4 z-20">
                                        <div className={`px-4 py-2 rounded-2xl bg-gradient-to-r ${project.gradient} text-white text-sm font-bold shadow-lg`}>
                                            {project.category}
                                        </div>
                                    </div>

                                    {/* Stats Badge */}
                                    <div className="absolute bottom-4 right-4 z-20">
                                        <div className="px-4 py-2 rounded-2xl bg-white/90 backdrop-blur-sm border border-white/60 shadow-lg">
                                            <div className={`text-xl font-black bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}>
                                                {project.stats.metric}
                                            </div>
                                            <div className="text-xs text-slate-600 font-semibold">
                                                {project.stats.label}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-8">
                                    <h3 className="text-2xl font-black text-slate-900 mb-3 group-hover:text-gradient-primary transition-all">
                                        {project.title}
                                    </h3>
                                    <p className="text-slate-600 mb-6 leading-relaxed">
                                        {project.description}
                                    </p>

                                    {/* View Project Link */}
                                    <Link
                                        href={`/portfolio/${project.title.toLowerCase().replace(/\s+/g, '-')}`}
                                        className={`inline-flex items-center gap-2 text-sm font-bold bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent group-hover:gap-3 transition-all`}
                                    >
                                        View Case Study
                                        <ExternalLink className="w-4 h-4" style={{ color: 'currentColor', WebkitTextFillColor: 'initial' }} />
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* View All CTA */}
                <motion.div
                    className="text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                >
                    <Link
                        href="/portfolio"
                        className="inline-flex items-center gap-3 px-8 py-4 bg-white/80 backdrop-blur-sm border-2 border-slate-200 text-slate-700 rounded-2xl font-bold hover:border-purple-500 hover:text-purple-600 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
                    >
                        View All Projects
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
