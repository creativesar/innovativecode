"use client";

import { motion } from "framer-motion";
import { Check, Sparkles, Zap, Crown, ArrowRight } from "lucide-react";

const plans = [
    {
        name: "Starter",
        price: "999",
        description: "Perfect for small businesses getting started online.",
        icon: Zap,
        features: [
            "Custom Website (5 pages)",
            "Mobile Responsive Design",
            "Basic SEO Setup",
            "Contact Form Integration",
            "1 Month Support",
        ],
        popular: false,
        cta: "Get Started",
    },
    {
        name: "Growth",
        price: "2,499",
        description: "For businesses ready to scale with AI and marketing.",
        icon: Sparkles,
        features: [
            "Everything in Starter",
            "AI Chatbot Integration",
            "Advanced SEO Strategy",
            "CMS Dashboard",
            "Social Media Setup",
            "Analytics Dashboard",
            "3 Months Support",
        ],
        popular: true,
        cta: "Most Popular",
    },
    {
        name: "Enterprise",
        price: "Custom",
        description: "Full digital transformation for large organizations.",
        icon: Crown,
        features: [
            "Everything in Growth",
            "Custom AI Solutions",
            "Multi-Platform App",
            "Dedicated Team",
            "Priority Support 24/7",
            "Performance Optimization",
            "12 Months Support",
        ],
        popular: false,
        cta: "Contact Us",
    },
];

export function RevampedPricing() {
    return (
        <section id="pricing" className="py-32 relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 via-transparent to-blue-900/10" />

            <div className="container mx-auto px-4 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <span className="text-green-400 font-medium mb-4 block">Pricing</span>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Transparent{" "}
                        <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                            Pricing
                        </span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        No hidden fees. No surprises. Just results. All plans include 30-day money-back guarantee.
                    </p>
                </motion.div>

                {/* Pricing Cards */}
                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -8 }}
                            className={`relative p-8 rounded-2xl transition-all ${plan.popular
                                    ? "bg-gradient-to-b from-purple-900/40 to-blue-900/40 border-2 border-purple-500/40 scale-105 z-10"
                                    : "bg-white/[0.02] border border-white/[0.05] hover:border-white/[0.15]"
                                }`}
                        >
                            {/* Popular Badge */}
                            {plan.popular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-1.5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full text-sm font-semibold flex items-center gap-2">
                                    <Sparkles className="w-4 h-4" />
                                    Best Value
                                </div>
                            )}

                            {/* Header */}
                            <div className="mb-6">
                                <plan.icon className={`w-10 h-10 mb-4 ${plan.popular ? "text-purple-400" : "text-gray-500"}`} />
                                <h3 className="text-2xl font-bold">{plan.name}</h3>
                                <p className="text-gray-400 text-sm mt-1">{plan.description}</p>
                            </div>

                            {/* Price */}
                            <div className="mb-8">
                                {plan.price === "Custom" ? (
                                    <span className="text-4xl font-bold">Custom</span>
                                ) : (
                                    <>
                                        <span className="text-4xl font-bold">${plan.price}</span>
                                        <span className="text-gray-500 ml-2">one-time</span>
                                    </>
                                )}
                            </div>

                            {/* CTA */}
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className={`w-full py-4 rounded-xl font-semibold mb-8 flex items-center justify-center gap-2 transition-all ${plan.popular
                                        ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:shadow-lg hover:shadow-purple-500/25"
                                        : "bg-white/10 hover:bg-white/20"
                                    }`}
                            >
                                {plan.cta}
                                <ArrowRight className="w-4 h-4" />
                            </motion.button>

                            {/* Features */}
                            <ul className="space-y-4">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <div className={`w-5 h-5 rounded-full flex items-center justify-center mt-0.5 ${plan.popular ? "bg-purple-500/20" : "bg-white/10"
                                            }`}>
                                            <Check className={`w-3 h-3 ${plan.popular ? "text-purple-400" : "text-gray-400"}`} />
                                        </div>
                                        <span className="text-gray-300 text-sm">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom Note */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center mt-12 text-gray-400"
                >
                    <p>Need something custom? <a href="#contact" className="text-purple-400 hover:underline">Let&apos;s talk</a></p>
                </motion.div>
            </div>
        </section>
    );
}
