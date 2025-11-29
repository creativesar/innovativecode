"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { Star, Quote, TrendingUp, Users, Award, CheckCircle2 } from "lucide-react";
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
            <div className="relative h-full bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100">
                {/* Subtle Accent Line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

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
                                <div className="w-14 h-14 rounded-full ring-2 ring-slate-200 ring-offset-2">
                                    <img
                                        src={testimonial.avatar}
                                        alt={testimonial.name}
                                        className="w-full h-full rounded-full object-cover"
                                    />
                                </div>
                                <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-emerald-500 rounded-full border-2 border-white flex items-center justify-center">
                                    <CheckCircle2 className="w-3 h-3 text-white" />
                                </div>
                            </motion.div>

                            <div>
                                <h4 className="font-bold text-lg text-slate-900">{testimonial.name}</h4>
                                <p className="text-sm text-slate-600">{testimonial.role}</p>
                                <p className="text-xs font-semibold text-slate-500">{testimonial.company}</p>
                            </div>
                        </div>

                        {/* Metric Badge */}
                        {testimonial.metric && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.3 }}
                                className="px-3 py-1.5 rounded-lg bg-slate-100 border border-slate-200"
                            >
                                <span className="text-xs font-bold text-slate-700">{testimonial.metric}</span>
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
                                <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                            </motion.div>
                        ))}
                    </div>

                    {/* Quote */}
                    <div className="relative flex-1 mb-6">
                        <Quote className="w-8 h-8 text-slate-200 absolute -top-1 -left-1" />
                        <p className="text-slate-700 leading-relaxed pl-6">
                            {testimonial.text}
                        </p>
                    </div>

                    {/* Company Logo Placeholder */}
                    <div className="pt-4 border-t border-slate-100">
                        <div className="h-6 w-24 bg-slate-100 rounded opacity-50" />
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export function TestimonialsSection() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

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

        // Subtle background animation
        gsap.to(".bg-orb", {
            x: "random(-30, 30)",
            y: "random(-30, 30)",
            duration: "random(8, 12)",
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            stagger: 1
        });
    }, []);

    const stats = [
        { icon: Users, value: 500, suffix: "+", label: "Happy Clients" },
        { icon: TrendingUp, value: 250, suffix: "%", label: "Average Growth" },
        { icon: Award, value: 98, suffix: "%", label: "Success Rate" }
    ];

    return (
        <section ref={sectionRef} className="relative py-24 overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white">
            {/* Subtle Background Elements */}
            <motion.div style={{ y }} className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="bg-orb absolute top-20 left-[15%] w-72 h-72 bg-slate-200/30 rounded-full blur-3xl" />
                <div className="bg-orb absolute bottom-20 right-[15%] w-72 h-72 bg-slate-200/30 rounded-full blur-3xl" />
            </motion.div>

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
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 border border-slate-200 mb-6"
                    >
                        <Award className="w-4 h-4 text-slate-700" />
                        <span className="text-sm font-semibold text-slate-700">Trusted by Industry Leaders</span>
                    </motion.div>

                    {/* Title */}
                    <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-4 tracking-tight">
                        Client{" "}
                        <span className="relative inline-block">
                            Testimonials
                            <motion.div
                                className="absolute -bottom-2 left-0 right-0 h-0.5 bg-slate-900"
                                initial={{ scaleX: 0 }}
                                whileInView={{ scaleX: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4, duration: 0.6 }}
                            />
                        </span>
                    </h2>

                    <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-12">
                        Real success stories from businesses we've helped grow and transform
                    </p>

                    {/* Stats */}
                    <div className="stats-container flex flex-wrap justify-center gap-6 mb-16">
                        {stats.map((stat, index) => (
                            <div key={index} className="stat-card">
                                <div className="bg-white px-8 py-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-lg bg-slate-900 flex items-center justify-center">
                                            <stat.icon className="w-6 h-6 text-white" />
                                        </div>
                                        <div className="text-left">
                                            <div className="text-3xl font-bold text-slate-900">
                                                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                                            </div>
                                            <div className="text-sm font-medium text-slate-600">{stat.label}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mb-12">
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
                        className="group relative px-8 py-4 bg-slate-900 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl overflow-hidden"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <span className="relative z-10">Get Started Today</span>
                        <motion.div
                            className="absolute inset-0 bg-slate-800"
                            initial={{ x: "-100%" }}
                            whileHover={{ x: 0 }}
                            transition={{ duration: 0.3 }}
                        />
                    </motion.button>
                </motion.div>
            </div>

            <style jsx>{`
        .testimonial-card {
          will-change: transform;
        }
      `}</style>
        </section>
    );
}
