"use client";

import { useRef, useState, useEffect, useMemo } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Search, Filter, Layers } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

interface Project {
    slug: string;
    title: string;
    category: string;
    description: string;
    image: string;
    technologies?: string[];
}

const ALL_CATEGORY = "All Work";

export default function ProjectsPage() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState(true);
    const [selectedCategory, setSelectedCategory] = useState(ALL_CATEGORY);
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await fetch("/api/projects");
                if (!response.ok) throw new Error("Failed to fetch projects");
                const data = await response.json();
                setProjects(data);
            } catch (err) {
                console.error(err);
            } finally {
                // Simulate a slightly longer load for the skeleton effect
                setTimeout(() => setLoading(false), 800);
            }
        };
        fetchProjects();
    }, []);

    // Extract unique categories
    const categories = useMemo(() => {
        const cats = new Set(projects.map(p => p.category));
        return [ALL_CATEGORY, ...Array.from(cats)];
    }, [projects]);

    // Filter projects
    const filteredProjects = useMemo(() => {
        return projects.filter(project => {
            const matchesCategory = selectedCategory === ALL_CATEGORY || project.category === selectedCategory;
            const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                project.technologies?.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
            return matchesCategory && matchesSearch;
        });
    }, [projects, selectedCategory, searchQuery]);

    useGSAP(() => {
        if (loading) return;

        // Refresh ScrollTrigger when filter changes
        ScrollTrigger.refresh();

        const cards = gsap.utils.toArray<HTMLElement>(".project-card");

        // Reset animations for re-entering elements
        gsap.set(cards, { clearProps: "all" });

        cards.forEach((card, i) => {
            gsap.fromTo(card,
                {
                    y: 50,
                    opacity: 0,
                    scale: 0.98
                },
                {
                    y: 0,
                    opacity: 1,
                    scale: 1,
                    duration: 0.6,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: card,
                        start: "top bottom-=50",
                        toggleActions: "play none none reverse"
                    },
                    delay: i % 2 * 0.1
                }
            );
        });

    }, { scope: containerRef, dependencies: [loading, filteredProjects] });

    return (
        <div ref={containerRef} className="min-h-screen bg-background relative overflow-hidden selection:bg-primary/20 section-bg">
            {/* Subtle Background Pattern */}
            <div className="fixed inset-0 pointer-events-none opacity-[0.03]"
                style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)', backgroundSize: '40px 40px' }}>
            </div>

            {/* Ambient Glows */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute top-[-10%] right-[-5%] w-[800px] h-[800px] rounded-full bg-primary/5 blur-[120px]" />
                <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] rounded-full bg-accent/5 blur-[120px]" />
            </div>

            <div className="container mx-auto px-6 py-32 relative z-10">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-2xl"
                    >
                        <div className="flex items-center gap-2 text-primary mb-4">
                            <Layers className="w-5 h-5" />
                            <span className="text-sm font-semibold tracking-wider uppercase">Portfolio</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-foreground gradient-text">
                            Selected <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Works</span>
                        </h1>
                        <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                            A showcase of technical precision and creative design. We build digital products that define brands and drive growth.
                        </p>
                    </motion.div>

                    {/* Search Bar */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="w-full md:w-auto"
                    >
                        <div className="relative group">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                <Search className="h-4 w-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
                            </div>
                            <input
                                type="text"
                                placeholder="Search projects..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full md:w-[300px] pl-11 pr-4 py-3 bg-background/50 backdrop-blur-sm border border-border rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all shadow-sm hover:shadow-md input-modern"
                            />
                        </div>
                    </motion.div>
                </div>

                {/* Filter Tabs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="flex flex-wrap gap-2 mb-12"
                >
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`relative px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${selectedCategory === category
                                    ? "text-primary-foreground"
                                    : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                                }`}
                        >
                            {selectedCategory === category && (
                                <motion.div
                                    layoutId="activeTab"
                                    className="absolute inset-0 bg-primary rounded-full shadow-lg shadow-primary/25"
                                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                />
                            )}
                            <span className="relative z-10">{category}</span>
                        </button>
                    ))}
                </motion.div>

                {/* Projects Grid */}
                <div className="min-h-[400px]">
                    {loading ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                            {[1, 2, 3, 4].map((n) => (
                                <div key={n} className="h-[500px] rounded-2xl bg-muted/30 animate-pulse border border-border/50" />
                            ))}
                        </div>
                    ) : filteredProjects.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                            <AnimatePresence mode="popLayout">
                                {filteredProjects.map((project) => (
                                    <motion.div
                                        key={project.slug}
                                        layout
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.9 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <Link
                                            href={`/projects/${project.slug}`}
                                            className="project-card group block spotlight-card rounded-2xl h-full"
                                            onMouseMove={(e) => {
                                                const rect = e.currentTarget.getBoundingClientRect();
                                                const x = e.clientX - rect.left;
                                                const y = e.clientY - rect.top;
                                                e.currentTarget.style.setProperty("--mouse-x", `${x}px`);
                                                e.currentTarget.style.setProperty("--mouse-y", `${y}px`);
                                            }}
                                        >
                                            <div className="modern-card h-full flex flex-col overflow-hidden border-border/40 bg-background/40 hover:bg-background/60 transition-all duration-500 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/5">
                                                {/* Image Container */}
                                                <div className="relative aspect-[16/10] overflow-hidden rounded-t-xl bg-muted/50">
                                                    <Image
                                                        src={project.image}
                                                        alt={project.title}
                                                        fill
                                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                                    />
                                                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />

                                                    {/* Floating Action Button */}
                                                    <div className="absolute bottom-4 right-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                                                        <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg">
                                                            <ArrowUpRight className="w-5 h-5" />
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Content */}
                                                <div className="p-8 flex-1 flex flex-col">
                                                    <div className="flex justify-between items-start mb-4">
                                                        <div>
                                                            <span className="text-xs font-bold text-primary tracking-wider uppercase mb-2 block">
                                                                {project.category}
                                                            </span>
                                                            <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300 gradient-text">
                                                                {project.title}
                                                            </h3>
                                                        </div>
                                                    </div>

                                                    <p className="text-muted-foreground mb-6 line-clamp-2 flex-1 leading-relaxed">
                                                        {project.description}
                                                    </p>

                                                    {/* Tech Stack Tags */}
                                                    {project.technologies && (
                                                        <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-border/30">
                                                            {project.technologies.slice(0, 4).map((tech) => (
                                                                <span
                                                                    key={tech}
                                                                    className="text-[11px] font-semibold px-2.5 py-1 rounded-md bg-secondary/40 text-secondary-foreground border border-secondary/50"
                                                                >
                                                                    {tech}
                                                                </span>
                                                            ))}
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </Link>
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </div>
                    ) : (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="flex flex-col items-center justify-center py-20 text-center"
                        >
                            <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mb-4">
                                <Filter className="w-8 h-8 text-muted-foreground" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">No projects found</h3>
                            <p className="text-muted-foreground">Try adjusting your search or filter criteria.</p>
                            <button
                                onClick={() => { setSelectedCategory(ALL_CATEGORY); setSearchQuery(""); }}
                                className="mt-6 text-primary font-medium hover:underline"
                            >
                                Clear all filters
                            </button>
                        </motion.div>
                    )}
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mt-32 text-center relative"
                >
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[80px] pointer-events-none" />
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 relative z-10 gradient-text">
                        Have a vision in mind?
                    </h2>
                    <p className="text-muted-foreground mb-8 max-w-xl mx-auto relative z-10">
                        We help ambitious brands build the future. Let&apos;s collaborate to create something extraordinary.
                    </p>
                    <Link
                        href="/contact"
                        className="relative z-10 inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-primary-foreground bg-primary rounded-full hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-primary/25 hover:-translate-y-1 group btn-modern"
                    >
                        Start a Conversation
                        <ArrowUpRight className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </Link>
                </motion.div>
            </div>
        </div>
    );
}