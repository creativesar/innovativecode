"use client";

import { CheckCircle2, Lightbulb, Rocket, Target, TrendingUp } from "lucide-react";

const processSteps = [
    {
        number: "01",
        icon: Lightbulb,
        title: "Discovery & Strategy",
        description: "We dive deep into your business goals, target audience, and competitive landscape to craft a winning strategy.",
        gradient: "from-blue-600 to-cyan-600"
    },
    {
        number: "02",
        icon: Target,
        title: "Design & Planning",
        description: "Our creative team designs stunning visuals and user experiences that align with your brand identity.",
        gradient: "from-purple-600 to-pink-600"
    },
    {
        number: "03",
        icon: Rocket,
        title: "Development & Launch",
        description: "We build your solution using cutting-edge technologies, ensuring quality, performance, and scalability.",
        gradient: "from-pink-600 to-orange-600"
    },
    {
        number: "04",
        icon: TrendingUp,
        title: "Optimize & Grow",
        description: "Post-launch, we continuously monitor, optimize, and scale your digital presence for maximum ROI.",
        gradient: "from-emerald-600 to-teal-600"
    }
];

export function InvertedProcess() {
    return (
        <section className="relative py-24 lg:py-32 overflow-hidden bg-gradient-to-b from-white via-slate-900 to-slate-900">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="gradient-orb gradient-orb-blue w-96 h-96 top-40 left-10 opacity-20" />
                <div className="gradient-orb gradient-orb-pink w-80 h-80 bottom-20 right-20 opacity-20" />
            </div>

            <div className="container mx-auto px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 border border-blue-300/30 backdrop-blur-sm mb-6">
                        <span className="text-sm font-bold text-gradient-primary">Our Process</span>
                    </div>

                    <h2 className="text-5xl lg:text-6xl font-black text-white mb-6">
                        How We Turn Ideas Into
                        <span className="block text-gradient-hero mt-2">Digital Success</span>
                    </h2>

                    <p className="text-xl text-slate-300 leading-relaxed">
                        Our proven 4-step process ensures your project is delivered on time, on budget, and exceeds expectations.
                    </p>
                </div>

                {/* Process Steps */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {processSteps.map((step, index) => {
                        const Icon = step.icon;
                        return (
                            <div key={index} className="relative">
                                {/* Connection Line (Desktop) */}
                                {index < processSteps.length - 1 && (
                                    <div className="hidden lg:block absolute top-20 left-[60%] w-full h-0.5 bg-gradient-to-r from-slate-700 to-transparent" />
                                )}

                                {/* Step Card */}
                                <div className="inverted-radius-md glass-inverted-dark p-8 card-lift relative overflow-hidden group">
                                    {/* Step Number */}
                                    <div className={`absolute top-4 right-4 text-6xl font-black bg-gradient-to-br ${step.gradient} bg-clip-text text-transparent opacity-20 group-hover:opacity-30 transition-opacity`}>
                                        {step.number}
                                    </div>

                                    {/* Icon */}
                                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${step.gradient} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                        <Icon className="w-8 h-8 text-white" />
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-2xl font-black text-white mb-4 relative z-10">
                                        {step.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-slate-300 leading-relaxed relative z-10">
                                        {step.description}
                                    </p>

                                    {/* Check Icon */}
                                    <div className="mt-6 flex items-center gap-2 text-sm font-bold text-gradient-primary">
                                        <CheckCircle2 className="w-5 h-5" />
                                        <span>Proven Method</span>
                                    </div>

                                    {/* Hover Glow */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${step.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Bottom Stats */}
                <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
                    <div className="text-center">
                        <div className="text-4xl lg:text-5xl font-black text-gradient-primary mb-2">100%</div>
                        <div className="text-sm text-slate-400">Client Satisfaction</div>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl lg:text-5xl font-black text-gradient-secondary mb-2">500+</div>
                        <div className="text-sm text-slate-400">Projects Completed</div>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl lg:text-5xl font-black text-gradient-accent mb-2">250%</div>
                        <div className="text-sm text-slate-400">Average ROI</div>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl lg:text-5xl font-black text-gradient-hero mb-2">24/7</div>
                        <div className="text-sm text-slate-400">Support Available</div>
                    </div>
                </div>
            </div>
        </section>
    );
}
