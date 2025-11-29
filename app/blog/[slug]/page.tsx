"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Frown, Loader2 } from "lucide-react";

interface BlogPost {
    slug: string;
    title: string;
    author: string;
    date: string;
    image: string;
    excerpt: string;
    content: string;
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
    const { slug } = params;
    const router = useRouter();
    const [blogPost, setBlogPost] = useState<BlogPost | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!slug) return;

        const fetchBlogPost = async () => {
            try {
                const response = await fetch(`/api/blog/${slug}`);
                if (!response.ok) {
                    throw new Error("Blog post not found");
                }
                const data: BlogPost = await response.json();
                setBlogPost(data);
            } catch (err: any) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchBlogPost();
    }, [slug]);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
                <span className="ml-2 text-lg">Loading blog post...</span>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center text-red-500">
                <Frown className="h-12 w-12 mb-4" />
                <h1 className="text-2xl font-bold">Error: {error}</h1>
                <p className="mt-2">Could not load blog post. Please try again later.</p>
                <button onClick={() => router.back()} className="mt-4 px-4 py-2 bg-primary text-white rounded-md">
                    Go Back
                </button>
            </div>
        );
    }

    if (!blogPost) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center text-muted-foreground">
                <Frown className="h-12 w-12 mb-4" />
                <h1 className="text-2xl font-bold">Blog Post Not Found</h1>
                <p className="mt-2">The blog post you are looking for does not exist.</p>
                <button onClick={() => router.push('/blog')} className="mt-4 px-4 py-2 bg-primary text-white rounded-md">
                    View All Blog Posts
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
                    {blogPost.title}
                </motion.h1>
                <motion.p
                    className="text-lg text-muted-foreground mb-6"
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                >
                    By {blogPost.author} on {blogPost.date}
                </motion.p>

                {blogPost.image && (
                    <motion.img
                        src={blogPost.image}
                        alt={blogPost.title}
                        className="w-full h-80 object-cover rounded-lg mb-8"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                    />
                )}

                <motion.div
                    className="prose prose-invert lg:prose-xl max-w-none"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                >
                    <p>{blogPost.content}</p>
                </motion.div>

                <motion.button
                    onClick={() => router.back()}
                    className="mt-12 px-6 py-3 bg-secondary text-secondary-foreground rounded-md hover:bg-secondary/80 transition-colors"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                >
                    ← Back to Blog
                </motion.button>
            </motion.div>
        </div>
    );
}

