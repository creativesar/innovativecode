"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
    {
        question: "How do you help businesses grow?",
        answer: "We combine AI technology, stunning design, and strategic marketing to create digital solutions that attract customers and convert them into sales. Our data-driven approach ensures measurable results.",
    },
    {
        question: "What's your development process?",
        answer: "We follow a proven 4-phase process: Discovery → Design → Development → Launch. You're involved at every stage with regular updates and demos to ensure the final product exceeds expectations.",
    },
    {
        question: "How long does a typical project take?",
        answer: "Timelines vary by scope. A standard website takes 4-6 weeks, web apps 8-12 weeks, and enterprise AI solutions 12-20 weeks. We provide detailed timelines during consultation.",
    },
    {
        question: "Do you offer ongoing support?",
        answer: "Yes! All packages include post-launch support. We also offer dedicated maintenance plans with 24/7 monitoring, updates, security patches, and priority support.",
    },
    {
        question: "What's your refund policy?",
        answer: "We offer a 100% satisfaction guarantee. If you're not happy with our work within the first 30 days, we'll refund your investment. No questions asked.",
    },
];

export function RevampedFAQ() {
    const [activeIndex, setActiveIndex] = useState<number | null>(0);

    return (
        <section className="py-32 relative">
            <div className="container mx-auto px-4 max-w-3xl">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-cyan-400 font-medium mb-4 block">FAQ</span>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Common{" "}
                        <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                            Questions
                        </span>
                    </h2>
                </motion.div>

                {/* FAQ Items */}
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className={`rounded-xl border transition-all ${activeIndex === index
                                    ? "bg-white/[0.04] border-cyan-500/30"
                                    : "bg-white/[0.02] border-white/[0.05] hover:border-white/[0.15]"
                                }`}
                        >
                            <button
                                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                                className="w-full p-6 flex items-center justify-between text-left"
                            >
                                <span className={`font-medium text-lg ${activeIndex === index ? "text-cyan-400" : ""}`}>
                                    {faq.question}
                                </span>
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${activeIndex === index ? "bg-cyan-500/20 text-cyan-400" : "bg-white/5"
                                    }`}>
                                    {activeIndex === index ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                                </div>
                            </button>

                            <AnimatePresence>
                                {activeIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="px-6 pb-6 text-gray-400 leading-relaxed">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
