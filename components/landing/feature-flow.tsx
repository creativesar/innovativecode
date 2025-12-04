"use client";

import { useRef, useState } from "react";
import { ModernCard } from "@/components/modern-card";
import { motion } from "framer-motion";
import { Code2, Rocket, Palette, Globe, Smartphone, Zap, Cpu, Database } from "lucide-react";

const features = [
    {
        title: "Modern Web Development",
        description: "Scalable, high-performance applications built with Next.js and cutting-edge technologies.",
        icon: Globe,
        align: "left",
        color: "from-blue-500 to-indigo-600",
    },
    {
        title: "UI/UX Design",
        description: "Intuitive experiences that delight users with stunning aesthetics and seamless interactions.",
        icon: Palette,
        align: "right",
        color: "from-purple-500 to-pink-600",
    },
    {
        title: "Mobile Apps",
        description: "Native and cross-platform solutions that deliver exceptional performance.",
        icon: Smartphone,
        align: "left",
        color: "from-cyan-500 to-blue-600",
    },
    {
        title: "Digital Strategy",
        description: "Data-driven growth strategies that align with your business objectives.",
        icon: Rocket,
        align: "right",
        color: "from-orange-500 to-red-600",
    },
    {
        title: "Clean Code",
        description: "Maintainable and documented codebases that ensure long-term success.",
        icon: Code2,
        align: "left",
        color: "from-green-500 to-emerald-600",
    },
    {
        title: "Performance",
        description: "Optimized for speed and efficiency with cutting-edge techniques.",
        icon: Zap,
        align: "right",
        color: "from-yellow-500 to-amber-600",
    },
    {
        title: "AI Integration",
        description: "Intelligent solutions powered by machine learning and neural networks.",
        icon: Cpu,
        align: "left",
        color: "from-indigo-500 to-purple-600",
    },
    {
        title: "Cloud Infrastructure",
        description: "Scalable cloud solutions with robust security and reliability.",
        icon: Database,
        align: "right",
        color: "from-teal-500 to-cyan-600",
    },
];

export function FeatureFlow() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <section ref={containerRef} className="py-20 px-6 relative overflow-hidden flex flex-col items-center bg-background section-bg">
            <div className="max-w-6xl w-full space-y-16">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 to-purple-600">
                        Our Expertise
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        A journey through our digital capabilities.
                    </p>
                </div>

                <div className="relative">
                    {/* Simplified Timeline */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-full bg-primary/20 rounded-full -z-10" />
                    
                    {/* Feature Cards */}
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            className={`flex w-full mb-12 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                        >
                            <div className="w-full md:w-[55%]">
                                <ModernCard className="p-8 transition-all duration-300 hover:shadow-lg">
                                    <div className="flex items-start gap-6">
                                        <motion.div 
                                            className={`p-4 rounded-xl bg-gradient-to-br ${feature.color} text-white floating-element`}
                                            whileHover={{ 
                                                scale: 1.1,
                                                rotate: 5
                                            }}
                                            transition={{ type: "spring", stiffness: 400 }}
                                        >
                                            <feature.icon size={32} />
                                        </motion.div>
                                        <div>
                                            <motion.h3 
                                                className="text-2xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 to-purple-600"
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: hoveredIndex === index ? 1 : 1 }}
                                                whileHover={{ x: 5 }}
                                            >
                                                {feature.title}
                                            </motion.h3>
                                            <motion.p 
                                                className="text-slate-600"
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: hoveredIndex === index ? 1 : 1 }}
                                            >
                                                {feature.description}
                                            </motion.p>
                                        </div>
                                    </div>
                                </ModernCard>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}