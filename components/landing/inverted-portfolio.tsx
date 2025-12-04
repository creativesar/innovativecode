"use client";

import { ExternalLink, Star } from "lucide-react";
import Image from "next/image";

const portfolioItems = [
    {
        title: "E-Commerce Platform",
        category: "Web Development",
        description: "Modern online store with seamless checkout experience",
        image: "/portfolio-1.jpg",
        gradient: "from-blue-600 to-cyan-600",
        size: "large" // Takes 2 columns
    },
    {
        title: "Brand Campaign",
        category: "Digital Marketing",
        description: "360° marketing campaign with 300% ROI",
        image: "/portfolio-2.jpg",
        gradient: "from-purple-600 to-pink-600",
        size: "medium"
    },
    {
        title: "Mobile Banking App",
        category: "UI/UX Design",
        description: "Intuitive financial management app",
        image: "/portfolio-3.jpg",
        gradient: "from-pink-600 to-orange-600",
        size: "medium"
    },
    {
        title: "SaaS Dashboard",
        category: "Web Development",
        description: "Analytics platform for enterprise clients",
        image: "/portfolio-4.jpg",
        gradient: "from-emerald-600 to-teal-600",
        size: "medium"
    },
    {
        title: "Social Media Strategy",
        category: "Digital Marketing",
        description: "Viral campaign reaching 2M+ users",
        image: "/portfolio-5.jpg",
        gradient: "from-orange-600 to-red-600",
        size: "medium"
    }
];

export function InvertedPortfolio() {
    return (
        <section className="relative py-24 lg:py-32 overflow-hidden bg-gradient-to-b from-slate-900 via-white to-white">
            {/* Background Decorations */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="gradient-orb gradient-orb-purple w-96 h-96 top-20 left-10 opacity-20" />
                <div className="gradient-orb gradient-orb-blue w-80 h-80 bottom-40 right-20 opacity-20" />
            </div>

            <div className="container mx-auto px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 border border-blue-300/30 backdrop-blur-sm mb-6">
                        <span className="text-sm font-bold text-gradient-primary">Our Work</span>
                    </div>

                    <h2 className="text-5xl lg:text-6xl font-black text-slate-900 mb-6">
                        Projects That Speak
                        <span className="block text-gradient-hero mt-2">Louder Than Words</span>
                    </h2>

                    <p className="text-xl text-slate-600 leading-relaxed">
                        Explore our portfolio of successful projects that have transformed businesses and delighted users.
                    </p>
                </div>

                {/* Bento Grid Layout */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px]">
                    {portfolioItems.map((item, index) => (
                        <div
                            key={index}
                            className={`inverted-radius-md glass-inverted group cursor-pointer overflow-hidden relative card-lift ${item.size === 'large' ? 'lg:col-span-2 lg:row-span-2' : ''
                                }`}
                        >
                            {/* Background Image Placeholder */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-20`} />

                            {/* Content Overlay */}
                            <div className="absolute inset-0 p-8 flex flex-col justify-end bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    <div className="inline-block px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-xs font-bold text-white mb-3">
                                        {item.category}
                                    </div>

                                    <h3 className="text-2xl lg:text-3xl font-black text-white mb-2">
                                        {item.title}
                                    </h3>

                                    <p className="text-slate-200 mb-4">
                                        {item.description}
                                    </p>

                                    <div className="flex items-center gap-2 text-sm font-bold text-white">
                                        <span>View Project</span>
                                        <ExternalLink className="w-4 h-4" />
                                    </div>
                                </div>
                            </div>

                            {/* Default State Content */}
                            <div className="absolute inset-0 p-8 flex flex-col justify-between group-hover:opacity-0 transition-opacity duration-300">
                                <div className="inline-block px-3 py-1 rounded-full bg-white/80 backdrop-blur-sm text-xs font-bold text-slate-900 self-start">
                                    {item.category}
                                </div>

                                <div>
                                    <h3 className="text-2xl font-black text-slate-900 mb-2">
                                        {item.title}
                                    </h3>
                                    <div className="flex items-center gap-1">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Decorative Gradient */}
                            <div className={`absolute -bottom-20 -right-20 w-40 h-40 bg-gradient-to-br ${item.gradient} opacity-30 blur-3xl group-hover:opacity-50 transition-opacity`} />
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="text-center mt-16">
                    <button className="btn-primary-inverted">
                        View All Projects
                    </button>
                </div>
            </div>
        </section>
    );
}
