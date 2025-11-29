"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Loader2, Frown } from "lucide-react";

interface BlogPost {
    slug: string;
    title: string;
    author: string;
    date: string;
    image: string;
    excerpt: string;
}

export default function BlogPage() {
    const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchBlogPosts = async () => {
            try {
                const response = await fetch("/api/blog");
                if (!response.ok) {
                    throw new Error("Failed to fetch blog posts");
                }
                const data: BlogPost[] = await response.json();
                setBlogPosts(data);
            } catch (err: any) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchBlogPosts();
    }, []);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
                <span className="ml-2 text-lg">Loading blog posts...</span>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center text-red-500">
                <Frown className="h-12 w-12 mb-4" />
                <h1 className="text-2xl font-bold">Error: {error}</h1>
                <p className="mt-2">Could not load blog posts. Please try again later.</p>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 md:px-6 py-20 min-h-screen">
            <motion.h1
                className="text-4xl md:text-6xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent text-center"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                Our Insights
            </motion.h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogPosts.map((post) => (
                    <motion.div
                        key={post.slug}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                    >
                        <Link href={`/blog/${post.slug}`} className="block">
                            <div className="p-6 border rounded-xl bg-card hover:shadow-lg transition-shadow duration-300">
                                <h3 className="text-xl font-semibold mb-2 text-primary hover:underline">{post.title}</h3>
                                <p className="text-muted-foreground mb-4 line-clamp-3">{post.excerpt}</p>
                                <div className="flex justify-between items-center text-sm text-muted-foreground">
                                    <span>By {post.author}</span>
                                    <span>{post.date}</span>
                                </div>
                            </div>
                        </Link>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

