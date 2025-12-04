"use client";

import { motion } from "framer-motion";
import { MessageSquare, Palette, Code2, Rocket } from "lucide-react";

const steps = [
    {
        number: "01",
        title: "Discovery",
        description: "We dive deep into your business, goals, and target audience to create a winning strategy.",
        icon: MessageSquare,
        color: "from-purple-500 to-violet-500",
    },
    {
        number: "02",
        title: "Design",
        description: "Our designers craft stunning visuals that capture your brand and convert visitors.",
        icon: Palette,
        color: "from-pink-500 to-rose-500",
    },
    {
        number: "03",
        title: "Develop",
        description: "We build fast, secure, and scalable solutions using cutting-edge technology.",
        icon: Code2,
        color: "from-blue-500 to-cyan-500",
    },
    {
        number: "04",
        title: "Launch",
        description: "We deploy your project and provide ongoing support to ensure success.",
        icon: Rocket,
        color: "from-green-500 to-emerald-500",
    },
];

export function ProcessSection() {
    return (
        <section className="py-32 relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/5 to-transparent" />

            <div className="container mx-auto px-4 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <span className="text-purple-400 font-medium mb-4 block">Our Process</span>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        How We{" "}
                        <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                            Work
                        </span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        A proven 4-step process that delivers results every time.
                    </p>
                </motion.div>

                {/* Process Steps */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="relative group"
                        >
                            {/* Connector Line */}
                            {index < steps.length - 1 && (
                                <div className="hidden lg:block absolute top-12 left-[60%] right-0 h-[2px] bg-gradient-to-r from-white/10 to-transparent" />
                            )}

                            <div className="relative p-8 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:border-white/[0.15] hover:bg-white/[0.04] transition-all h-full">
                                {/* Number Badge */}
                                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center text-lg font-bold mb-6`}>
                                    {step.number}
                                </div>

                                {/* Icon */}
                                <step.icon className="w-6 h-6 text-gray-400 mb-4" />

                                {/* Content */}
                                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                                <p className="text-gray-400 leading-relaxed">{step.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
