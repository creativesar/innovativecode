"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "Tech Demo", href: "/tech-demo" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
];

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
                isScrolled
                    ? "bg-background/80 backdrop-blur-xl border-b border-border/70 py-2 shadow-xl" 
                    : "bg-transparent py-4"
            )}
        >
            <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
                <Link href="/" className="flex items-center group" aria-label="Home">
                    <div className="relative">
                        <Image
                            src="/innovativecode-01.png"
                            alt="InnovativeCode Logo"
                            width={180}
                            height={40}
                            className="object-contain transition-all duration-300"
                        />
                    </div>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-10">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-base font-medium text-slate-600 hover:text-cyan-600 transition-all duration-300 relative group py-2 px-4 rounded-xl"
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 transition-all duration-500 group-hover:w-full rounded-full" />
                            <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full" />
                        </Link>
                    ))}
                    <Link
                        href="/contact"
                        className="px-6 py-3 rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-base font-bold hover:from-purple-500 hover:to-cyan-500 transition-all duration-300 shadow-lg hover:shadow-cyan-500/30 group relative overflow-hidden"
                    >
                        <span className="relative z-10 flex items-center">
                            Get Started
                        </span>
                        <span className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </Link>
                </nav>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden p-3 text-foreground bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-2xl backdrop-blur-lg border border-cyan-300/30 hover:from-cyan-500/20 hover:to-purple-500/20 transition-all duration-300"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-background/90 backdrop-blur-xl border-b border-border overflow-hidden"
                    >
                        <nav className="flex flex-col p-6 gap-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-xl font-bold text-foreground py-4 border-b border-border/50 last:border-0 flex items-center group rounded-xl"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    <span className="group-hover:text-primary transition-colors duration-300">{link.name}</span>
                                    <span className="ml-auto w-6 h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                                </Link>
                            ))}
                            <Link
                                href="/contact"
                                className="w-full text-center py-4 rounded-2xl bg-gradient-to-r from-primary to-accent text-primary-foreground font-bold mt-4 flex items-center justify-center group"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                <span className="flex items-center">
                                    Get Started
                                </span>
                            </Link>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}