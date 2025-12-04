"use client";

import { Quote, Star } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const testimonials = [
    {
        name: "Sarah Mitchell",
        role: "CEO",
        company: "TechVision Inc.",
        rating: 5,
        text: "The team delivered beyond our expectations. Our conversion rate increased by 180% within the first quarter. Their strategic approach and attention to detail made all the difference.",
        initials: "SM",
        gradient: "from-blue-600 to-blue-700"
    },
    {
        name: "James Rodriguez",
        role: "Marketing Director",
        company: "GrowthLabs",
        rating: 5,
        text: "Working with this team transformed our entire digital strategy. The ROI has been exceptional, and their ongoing support ensures we stay ahead of the competition.",
        initials: "JR",
        gradient: "from-purple-600 to-purple-700"
    },
    {
        name: "Emily Chen",
        role: "Founder",
        company: "StyleHub",
        rating: 5,
        text: "From concept to launch, the process was seamless. Our new platform not only looks stunning but has become our primary revenue driver. Highly recommended!",
        initials: "EC",
        gradient: "from-cyan-600 to-cyan-700"
    },
    {
        name: "Michael Thompson",
        role: "CTO",
        company: "InnovateTech",
        rating: 5,
        text: "The technical expertise and innovative solutions helped us build a platform that scales effortlessly. Their commitment to excellence is unmatched.",
        initials: "MT",
        gradient: "from-emerald-600 to-emerald-700"
    }
];

export function ProfessionalTestimonials() {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".testimonials-header", {
                scrollTrigger: {
                    trigger: ".testimonials-header",
                    start: "top 80%",
                    end: "top 50%",
                    scrub: 1
                },
                opacity: 0,
                y: 50
            });

            gsap.from(".testimonial-card", {
                scrollTrigger: {
                    trigger: ".testimonial-card",
                    start: "top 85%",
                    end: "top 60%",
                    scrub: 1
                },
                opacity: 0,
                y: 60,
                stagger: 0.2
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="relative py-24 lg:py-32 bg-white overflow-hidden">
            <div className="container mx-auto px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    className="testimonials-header text-center max-w-3xl mx-auto mb-20"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.div
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-6"
                        whileHover={{ scale: 1.05 }}
                    >
                        <span className="text-sm font-semibold text-blue-900">Client Success Stories</span>
                    </motion.div>

                    <h2 className="text-5xl lg:text-6xl font-bold text-midnight mb-6">
                        Trusted by Industry
                        <span className="block text-gradient-blue mt-2">Leaders Worldwide</span>
                    </h2>

                    <p className="text-xl text-medium-gray leading-relaxed">
                        Don't just take our word for it. Here's what our clients say about their experience working with us.
                    </p>
                </motion.div>

                {/* Testimonials Grid */}
                <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            className="testimonial-card glass-card rounded-2xl p-8 relative overflow-hidden group"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            whileHover={{
                                y: -8,
                                transition: { type: "spring", stiffness: 300 }
                            }}
                        >
                            {/* Quote Icon Background */}
                            <motion.div
                                className="absolute top-6 right-6 opacity-5"
                                animate={{
                                    rotate: [0, 5, -5, 0],
                                    scale: [1, 1.1, 1]
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            >
                                <Quote className="w-24 h-24 text-midnight" />
                            </motion.div>

                            {/* Rating */}
                            <div className="flex items-center gap-1 mb-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, scale: 0 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 + i * 0.05 }}
                                    >
                                        <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
                                    </motion.div>
                                ))}
                            </div>

                            {/* Testimonial Text */}
                            <motion.p
                                className="text-lg text-midnight leading-relaxed mb-6 relative z-10"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 + 0.3 }}
                            >
                                "{testimonial.text}"
                            </motion.p>

                            {/* Author Info */}
                            <motion.div
                                className="flex items-center gap-4 pt-6 border-t border-light-gray relative z-10"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 + 0.5 }}
                            >
                                {/* Avatar */}
                                <motion.div
                                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${testimonial.gradient} flex items-center justify-center text-white font-bold text-lg shadow-md`}
                                    whileHover={{
                                        scale: 1.1,
                                        rotate: 360,
                                        transition: { duration: 0.6 }
                                    }}
                                >
                                    {testimonial.initials}
                                </motion.div>

                                {/* Details */}
                                <div>
                                    <div className="font-bold text-midnight text-lg">{testimonial.name}</div>
                                    <div className="text-sm text-medium-gray">{testimonial.role}, {testimonial.company}</div>
                                </div>
                            </motion.div>

                            {/* Hover Gradient */}
                            <motion.div
                                className={`absolute -bottom-20 -right-20 w-40 h-40 bg-gradient-to-br ${testimonial.gradient} opacity-0 group-hover:opacity-10 blur-3xl`}
                                initial={{ scale: 0 }}
                                whileHover={{ scale: 1 }}
                                transition={{ duration: 0.5 }}
                            />
                        </motion.div>
                    ))}
                </div>

                {/* Trust Metrics */}
                <motion.div
                    className="glass-card rounded-2xl p-8 max-w-4xl mx-auto"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    whileHover={{ scale: 1.02 }}
                >
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        {[
                            { value: "4.9/5", label: "Average Rating", gradient: "text-gradient-blue" },
                            { value: "500+", label: "Happy Clients", gradient: "text-gradient-accent" },
                            { value: "98%", label: "Satisfaction Rate", gradient: "text-gradient-gold" },
                            { value: "250%", label: "Avg ROI Growth", gradient: "text-gradient-blue" }
                        ].map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.7 + index * 0.1 }}
                                whileHover={{ scale: 1.1 }}
                            >
                                <motion.div
                                    className={`text-4xl font-bold ${stat.gradient} mb-2`}
                                    animate={{
                                        scale: [1, 1.05, 1]
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        delay: index * 0.2
                                    }}
                                >
                                    {stat.value}
                                </motion.div>
                                <div className="text-sm text-medium-gray">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
