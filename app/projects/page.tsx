"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/glass-card";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

"use client";

import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/glass-card";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

interface Project {
    slug: string;
    title: string;
    category: string;
    description: string;
    image: string;
    position: { top: string; left?: string; right?: string; bottom?: string; rotate: number; };
    size: string;
}

export default function ProjectsPage() {
    const containerRef = useRef<HTMLDivElement>(null);
    const projectsRef = useRef<(HTMLDivElement | null)[]>([]);
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await fetch("/api/projects");
                if (!response.ok) {
                    throw new Error("Failed to fetch projects");
                }
                const data: Project[] = await response.json();
                setProjects(data);
            } catch (err: any) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchProjects();
    }, []);

    useGSAP(() => {
        if (!loading && projects.length > 0) {
            projectsRef.current.forEach((project, index) => {
                if (!project) return;

                // Floating animation
                gsap.to(project, {
                    y: "random(-20, 20)",
                    duration: "random(3, 5)",
                    repeat: -1,
                    yoyo: true,
                    ease: "sine.inOut",
                    delay: index * 0.2,
                });

                // Entrance animation
                gsap.fromTo(project,
                    {
                        opacity: 0,
                        scale: 0.8,
                        rotate: 0,
                    },
                    {
                        opacity: 1,
                        scale: 1,
                        rotate: projects[index].position.rotate,
                        duration: 1,
                        delay: index * 0.1,
                        ease: "back.out(1.4)",
                    }
                );
            });
        }
    }, { scope: containerRef, dependencies: [loading, projects] });

    const getSizeClasses = (size: string) => {
        switch (size) {
            case "large":
                return "w-[400px] h-[300px] md:w-[500px] md:h-[350px]";
            case "medium":
                return "w-[300px] h-[250px] md:w-[400px] md:h-[300px]";
            case "small":
                return "w-[250px] h-[200px] md:w-[300px] md:h-[250px]";
            default:
                return "w-[350px] h-[280px]";
        }
    };

    if (loading) {
        return <div className="min-h-screen flex items-center justify-center">Loading projects...</div>;
    }

    if (error) {
        return <div className="min-h-screen flex items-center justify-center text-red-500">Error: {error}</div>;
    }

    return (
        <div className="min-h-screen py-32 px-6 overflow-hidden">
            {/* Hero */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-4xl mx-auto text-center mb-32 relative z-50"
            >
                <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                    Our Work
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground">
                    A curated collection of projects we're proud of
                </p>
            </motion.div>

            {/* Scattered Projects */}
            <div
                ref={containerRef}
                className="relative min-h-[1200px] md:min-h-[1500px] max-w-7xl mx-auto"
            >
                {projects.map((project, index) => (
                    <motion.div
                        key={project.slug}
                        ref={(el) => { projectsRef.current[index] = el }}
                        className="absolute cursor-pointer"
                        style={{
                            ...project.position,
                            transform: `rotate(${project.position.rotate}deg)`,
                        }}
                        whileHover={{
                            scale: 1.05,
                            rotate: 0,
                            zIndex: 100,
                            transition: { duration: 0.3 }
                        }}
                    >
                        <Link href={`/projects/${project.slug}`}>
                            <GlassCard className={`${getSizeClasses(project.size)} p-0 overflow-hidden group`}>
                                <div className="relative h-2/3 overflow-hidden">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </div>
                                <div className="p-6 h-1/3 flex flex-col justify-between">
                                    <div>
                                        <div className="text-xs text-primary font-semibold mb-2">
                                            {project.category}
                                        </div>
                                        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                                        <p className="text-sm text-muted-foreground line-clamp-2">
                                            {project.description}
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-2 text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <span className="text-sm font-semibold">View Project</span>
                                        <ExternalLink size={16} />
                                    </div>
                                </div>
                            </GlassCard>
                        </Link>
                    </motion.div>
                ))}
            </div>

            {/* CTA */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="mt-32 text-center"
            >
                <h2 className="text-3xl md:text-5xl font-bold mb-6">
                    Ready to start your project?
                </h2>
                <Link
                    href="/contact"
                    className="inline-block rounded-full bg-primary px-8 py-4 text-lg font-semibold text-white shadow-lg hover:bg-primary/90 hover:shadow-xl transition-all duration-300"
                >
                    Let's Talk
                </Link>
            </motion.div>
        </div>
    );
}
