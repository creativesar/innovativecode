"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Frown, Loader2 } from "lucide-react";

interface Project {
    slug: string;
    title: string;
    category: string;
    description: string;
    image: string;
    technologies: string[];
    challenges: string;
    solution: string;
    outcome: string;
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
    const { slug } = params;
    const router = useRouter();
    const [project, setProject] = useState<Project | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!slug) return;

        const fetchProject = async () => {
            try {
                const response = await fetch(`/api/projects/${slug}`);
                if (!response.ok) {
                    throw new Error("Project not found");
                }
                const data: Project = await response.json();
                setProject(data);
            } catch (err: any) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProject();
    }, [slug]);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
                <span className="ml-2 text-lg">Loading project details...</span>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center text-red-500">
                <Frown className="h-12 w-12 mb-4" />
                <h1 className="text-2xl font-bold">Error: {error}</h1>
                <p className="mt-2">Could not load project details. Please try again later.</p>
                <button onClick={() => router.back()} className="mt-4 px-4 py-2 bg-primary text-white rounded-md">
                    Go Back
                </button>
            </div>
        );
    }

    if (!project) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center text-muted-foreground">
                <Frown className="h-12 w-12 mb-4" />
                <h1 className="text-2xl font-bold">Project Not Found</h1>
                <p className="mt-2">The project you are looking for does not exist.</p>
                <button onClick={() => router.push('/projects')} className="mt-4 px-4 py-2 bg-primary text-white rounded-md">
                    View All Projects
                </button>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 md:px-6 py-20 min-h-screen">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-4xl mx-auto"
            >
                <motion.h1
                    className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent"
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                >
                    {project.title}
                </motion.h1>
                <motion.p
                    className="text-xl text-muted-foreground mb-8"
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                >
                    {project.category}
                </motion.p>

                <motion.div
                    className="prose prose-invert lg:prose-xl max-w-none"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                >
                    <p className="lead">{project.description}</p>

                    <h2 className="text-2xl font-bold mt-10 mb-4">Technologies Used</h2>
                    <ul className="list-disc list-inside space-y-2">
                        {project.technologies.map((tech, index) => (
                            <li key={index}>{tech}</li>
                        ))}
                    </ul>

                    <h2 className="text-2xl font-bold mt-10 mb-4">Challenges</h2>
                    <p>{project.challenges}</p>

                    <h2 className="text-2xl font-bold mt-10 mb-4">Solution</h2>
                    <p>{project.solution}</p>

                    <h2 className="text-2xl font-bold mt-10 mb-4">Outcome</h2>
                    <p>{project.outcome}</p>
                </motion.div>

                <motion.button
                    onClick={() => router.back()}
                    className="mt-12 px-6 py-3 bg-secondary text-secondary-foreground rounded-md hover:bg-secondary/80 transition-colors"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                >
                    ← Back to Projects
                </motion.button>
            </motion.div>
        </div>
    );
}

