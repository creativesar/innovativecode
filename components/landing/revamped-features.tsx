"use client";

import { motion } from "framer-motion";
import { Zap, Shield, Globe, Layers, Cpu, Clock, Check } from "lucide-react";

const features = [
    { icon: Zap, title: "Lightning Fast", desc: "Sub-second load times" },
    { icon: Shield, title: "Enterprise Security", desc: "Bank-grade protection" },
    { icon: Globe, title: "Global CDN", desc: "200+ edge locations" },
    { icon: Layers, title: "100+ Integrations", desc: "Connect everything" },
    { icon: Cpu, title: "AI-Powered", desc: "Smart automation" },
    { icon: Clock, title: "24/7 Support", desc: "Always available" },
];

export function RevampedFeatures() {
    return (
        <section className="py-32 relative">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="text-blue-400 font-medium mb-4 block">Why Choose Us</span>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                            Built for{" "}
                            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                                Performance
                            </span>
                        </h2>
                        <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                            Every solution we build is optimized for speed, security, and scale.
                            Your success is our priority.
                        </p>

                        {/* Checklist */}
                        <div className="space-y-4">
                            {[
                                "Fully responsive on all devices",
                                "SEO optimized from day one",
                                "99.9% uptime guarantee",
                                "Free maintenance & updates",
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.1 * i }}
                                    className="flex items-center gap-3"
                                >
                                    <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center">
                                        <Check className="w-4 h-4 text-green-400" />
                                    </div>
                                    <span className="text-gray-300">{item}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right - Features Grid */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="grid grid-cols-2 gap-4"
                    >
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ y: -4 }}
                                className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:border-white/[0.15] transition-all"
                            >
                                <feature.icon className="w-8 h-8 text-blue-400 mb-4" />
                                <h3 className="font-semibold mb-1">{feature.title}</h3>
                                <p className="text-sm text-gray-500">{feature.desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
