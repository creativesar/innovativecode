"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Star, Quote, TrendingUp, Users, Award, CheckCircle2, Sparkles } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface Testimonial {
    id: number;
    name: string;
    role: string;
    company: string;
    rating: number;
    text: string;
    avatar: string;
    metric?: string;
}

const testimonials: Testimonial[] = [
    {
        id: 1,
        name: "Sarah Mitchell",
        role: "CEO",
        company: "Tech Innovations",
        rating: 5,
        text: "InnovativeCode transformed our business completely. Their team delivered a stunning website that increased our conversions by 250%. The attention to detail and professionalism was exceptional!",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
        metric: "+250% ROI"
    },
    {
        id: 2,
        name: "James Peterson",
        role: "Marketing Director",
        company: "Digital Growth",
        rating: 5,
        text: "Outstanding results! Our ROI increased by 320% in just 6 months. Their strategic approach and attention to detail are unmatched. Best team we've worked with!",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=James",
        metric: "+320% Growth"
    },
    {
        id: 3,
        name: "Emily Chen",
        role: "Founder",
        company: "CloudSync Solutions",
        rating: 5,
        text: "Working with InnovativeCode was a game-changer for our startup. Modern, responsive website delivered ahead of schedule and within budget. Highly professional team!",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emily",
        metric: "99.9% Uptime"
    },
    {
        id: 4,
        name: "Michael Roberts",
        role: "CEO",
        company: "Retail Pro Systems",
        rating: 5,
        text: "Exceptional service from start to finish! InnovativeCode transformed our outdated website into a modern, conversion-optimized platform. Best investment we've made!",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael",
        metric: "+180% Sales"
    },
    {
        id: 5,
        name: "Lisa Anderson",
        role: "CTO",
        company: "HealthTech Innovations",
        rating: 5,
        text: "Impressive attention to detail and commitment to quality. Built us a secure, HIPAA-compliant platform that's both user-friendly and cutting-edge. Outstanding work!",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Lisa",
        metric: "100% Secure"
    },
    {
        id: 6,
        name: "David Kumar",
        role: "Director",
        company: "Fashion Forward",
        rating: 5,
        text: "Beyond our expectations! Our new e-commerce platform is fast, beautiful, and has dramatically increased conversions. The team's expertise is truly world-class!",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=David",
        metric: "+95% Traffic"
    }
];

function AnimatedCounter({ value, suffix = "" }: { value: number; suffix?: string }) {
    const [count, setCount] = useState(0);
    const nodeRef = useRef<HTMLSpanElement>(null);
    const isInView = useInView(nodeRef, { once: true });

    useEffect(() => {
        if (!isInView) return;
        let startTime: number;
        let animationFrame: number;

        const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = (timestamp - startTime) / 2000;

            if (progress < 1) {
                setCount(Math.floor(value * progress));
                animationFrame = requestAnimationFrame(animate);
            } else {
                setCount(value);
            }
        };

        animationFrame = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animationFrame);
    }, [value, isInView]);

    return <span ref={nodeRef}>{count}{suffix}</span>;
}

function TestimonialCard({ testimonial, index }: { testimonial: Testimonial; index: number }) {
    const cardRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!cardRef.current) return;

        gsap.fromTo(
            cardRef.current,
            {
                y: 80,
                opacity: 0,
                scale: 0.95
            },
            {
                y: 0,
                opacity: 1,
                scale: 1,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: cardRef.current,
                    start: "top 85%",
                    toggleActions: "play none none none"
                },
                delay: index * 0.1
            }
        );
    }, [index]);

    return (
        <motion.div
            ref={cardRef}
            className="testimonial-card group h-full"
            whileHover={{ y: -8, transition: { duration: 0.3, ease: "easeOut" } }}
        >
            <div className="relative h-full p-8 rounded-3xl bg-white/80 backdrop-blur-xl border border-white/60 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-cyan-500/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />

                {/* Content */}
                <div className="relative z-10 h-full flex flex-col">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-6">
                        <div className="flex items-center gap-4">
                            <motion.div
                                className="relative flex-shrink-0"
                                whileHover={{ scale: 1.05 }}
                                transition={{ type: "spring", stiffness: 400 }}
                            >
                                <div className="w-16 h-16 rounded-2xl ring-2 ring-purple-200 ring-offset-2 overflow-hidden">
                                    <img
                                        src={testimonial.avatar}
                                        alt={testimonial.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-gradient-to-br from-purple-600 to-cyan-600 rounded-full border-2 border-white flex items-center justify-center">
                                    <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                                </div>
                            </motion.div>

                            <div>
                                <h4 className="font-bold text-lg text-slate-900">{testimonial.name}</h4>
                                <p className="text-sm text-slate-600 font-medium">{testimonial.role}</p>
                                <p className="text-xs font-semibold text-purple-600">{testimonial.company}</p>
                            </div>
                        </div>

                        {/* Metric Badge */}
                        {testimonial.metric && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.3 }}
                                className="px-4 py-2 rounded-2xl bg-gradient-to-r from-purple-100 to-cyan-100 border border-purple-200"
                            >
                                <span className="text-sm font-black bg-gradient-to-r from-purple-700 to-cyan-700 bg-clip-text text-transparent">{testimonial.metric}</span>
                            </motion.div>
                        )}
                    </div>

                    {/* Stars */}
                    <div className="flex gap-1 mb-4">
                        {[...Array(5)].map((_, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.05 + i * 0.03, type: "spring" }}
                            >
                                <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
                            </motion.div>
                        ))}
                    </div>

                    {/* Quote */}
                    <div className="relative flex-1 mb-6">
                        <Quote className="w-10 h-10 text-purple-200 absolute -top-2 -left-2" />
                        <p className="text-slate-700 leading-relaxed pl-8 text-base">
                            {testimonial.text}
                        </p>
                    </div>

                    {/* Company Logo Placeholder */}
                    <div className="pt-4 border-t border-slate-200">
                        <div className="h-6 w-28 bg-gradient-to-r from-purple-100 to-cyan-100 rounded-xl opacity-60" />
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export function TestimonialsSection() {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!sectionRef.current) return;

        // Stats animation
        gsap.from(".stat-card", {
            scale: 0.9,
            opacity: 0,
            y: 30,
            duration: 0.8,
            stagger: 0.15,
            ease: "power2.out",
            scrollTrigger: {
                trigger: ".stats-container",
                start: "top 80%",
                toggleActions: "play none none none"
            }
        });
    }, []);

    const stats = [
        { icon: Users, value: 500, suffix: "+", label: "Happy Clients" },
        { icon: TrendingUp, value: 250, suffix: "%", label: "Average Growth" },
        { icon: Award, value: 98, suffix: "%", label: "Success Rate" }
    ];

    return (
        <section ref={sectionRef} className="relative py-24 overflow-hidden">
            {/* Background gradient orbs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-300/20 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-300/20 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-purple-500/10 via-cyan-500/10 to-orange-500/10 border border-purple-300/30 mb-6"
                    >
                        <Award className="w-5 h-5 text-purple-600" />
                        <span className="text-sm font-bold text-gradient-hero">Trusted by Industry Leaders</span>
                    </motion.div>

                    {/* Title */}
                    <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-4 tracking-tight">
                        Client{" "}
                        <span className="relative inline-block text-gradient-hero">
                            Success Stories
                            <motion.div
                                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-cyan-500 to-orange-500 rounded-full"
                                initial={{ scaleX: 0 }}
                                whileInView={{ scaleX: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4, duration: 0.6 }}
                            />
                        </span>
                    </h2>

                    <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-12">
                        Real results from businesses we've helped transform and grow
                    </p>

                    {/* Stats */}
                    <div className="stats-container flex flex-wrap justify-center gap-6 mb-16">
                        {stats.map((stat, index) => (
                            <div key={index} className="stat-card">
                                <div className="px-8 py-6 rounded-2xl bg-white/80 backdrop-blur-xl border border-white/60 shadow-lg hover:shadow-xl transition-all duration-300">
                                    <div className="flex items-center gap-4">
                                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-600 via-cyan-600 to-orange-600 flex items-center justify-center shadow-lg">
                                            <stat.icon className="w-7 h-7 text-white" />
                                        </div>
                                        <div className="text-left">
                                            <div className="text-4xl font-black text-gradient-primary">
                                                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                                            </div>
                                            <div className="text-sm font-semibold text-slate-600">{stat.label}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-12">
                    {testimonials.map((testimonial, index) => (
                        <TestimonialCard key={testimonial.id} testimonial={testimonial} index={index} />
                    ))}
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="text-center"
                >
                    <motion.button
                        className="group relative px-10 py-5 bg-gradient-to-r from-purple-600 via-cyan-600 to-purple-600 bg-size-200 text-white rounded-2xl font-bold shadow-xl hover:shadow-2xl overflow-hidden"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <span className="relative z-10 flex items-center gap-2">
                            <Sparkles className="w-5 h-5" />
                            Join Our Success Stories
                        </span>
                    </motion.button>
                </motion.div>
            </div>

            <style jsx>{`
                .testimonial-card {
                    will-change: transform;
                }
                .bg-size-200 {
                    background-size: 200% 100%;
                    animation: gradient-shift 3s ease infinite;
                }
                @keyframes gradient-shift {
                    0%, 100% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                }
            `}</style>
        </section>
    );
}