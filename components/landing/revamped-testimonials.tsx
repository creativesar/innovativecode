"use client";

import { motion } from "framer-motion";
import { Star, Quote, ArrowRight, CheckCircle } from "lucide-react";

const testimonials = [
    {
        name: "Sarah Johnson",
        role: "CEO, TechStart Inc",
        content: "InnovativeCode transformed our entire digital strategy. Our conversions increased by 340% in just 3 months. Best investment we've ever made.",
        rating: 5,
        avatar: "S",
        result: "340% more conversions",
    },
    {
        name: "Michael Chen",
        role: "Founder, GrowthLabs",
        content: "Their AI chatbot handles 80% of our inquiries now. The team is incredibly talented, professional, and truly cares about results.",
        rating: 5,
        avatar: "M",
        result: "80% automated support",
    },
    {
        name: "Emily Williams",
        role: "Marketing Director, ScaleUp",
        content: "The website they built is stunning. Fast, beautiful, and it actually converts. We saw ROI within the first month.",
        rating: 5,
        avatar: "E",
        result: "ROI in 30 days",
    },
];

const logos = ["Google", "Microsoft", "Meta", "Amazon", "Stripe", "Shopify"];

export function RevampedTestimonials() {
    return (
        <section className="py-32 relative overflow-hidden">
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
                    <span className="text-pink-400 font-medium mb-4 block">Testimonials</span>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Trusted by{" "}
                        <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                            Industry Leaders
                        </span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Join 500+ businesses that have transformed their digital presence with us.
                    </p>
                </motion.div>

                {/* Testimonials Grid */}
                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="relative p-8 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:border-white/[0.15] transition-all group"
                        >
                            {/* Quote Icon */}
                            <Quote className="absolute top-6 right-6 w-8 h-8 text-purple-500/20" />

                            {/* Result Badge */}
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-medium mb-6">
                                <CheckCircle className="w-4 h-4" />
                                {testimonial.result}
                            </div>

                            {/* Stars */}
                            <div className="flex gap-1 mb-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                                ))}
                            </div>

                            {/* Content */}
                            <p className="text-gray-300 leading-relaxed mb-8 text-lg">
                                &ldquo;{testimonial.content}&rdquo;
                            </p>

                            {/* Author */}
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold">
                                    {testimonial.avatar}
                                </div>
                                <div>
                                    <div className="font-semibold text-white">{testimonial.name}</div>
                                    <div className="text-sm text-gray-500">{testimonial.role}</div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Logos */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <p className="text-gray-500 mb-8">Trusted by teams at leading companies</p>
                    <div className="flex flex-wrap justify-center gap-x-16 gap-y-6">
                        {logos.map((company) => (
                            <span key={company} className="text-2xl font-bold text-gray-600 hover:text-gray-400 transition-colors">
                                {company}
                            </span>
                        ))}
                    </div>
                </motion.div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16 text-center"
                >
                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        className="inline-flex items-center gap-2 px-8 py-4 bg-white text-gray-900 rounded-full font-semibold hover:bg-gray-100 transition-colors"
                    >
                        Read More Success Stories
                        <ArrowRight className="w-5 h-5" />
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
}
