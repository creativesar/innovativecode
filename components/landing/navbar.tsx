"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import Image from "next/image";

const navLinks = [
    { label: "Home", href: "#" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Projects", href: "#work" },
    { label: "Contact", href: "#contact" },
];

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <motion.header
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                        ? "bg-[#050511]/90 backdrop-blur-xl border-b border-white/5"
                        : "bg-transparent"
                    }`}
            >
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between py-2">
                        {/* Logo */}
                        <a href="/" className="flex items-center">
                            <Image
                                src="/innovativecode-01.png"
                                alt="InnovativeCode"
                                width={220}
                                height={100}
                                className="h-20 w-auto"
                                priority
                            />
                        </a>

                        {/* Desktop Nav */}
                        <nav className="hidden md:flex items-center gap-10">
                            {navLinks.map((link) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    className="relative text-gray-300 hover:text-white transition-colors duration-300 font-medium text-[15px] group"
                                >
                                    {link.label}
                                    {/* Underline on hover */}
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 group-hover:w-full transition-all duration-300" />
                                </a>
                            ))}
                        </nav>

                        {/* CTA Button */}
                        <div className="hidden md:block">
                            <motion.a
                                href="#contact"
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.97 }}
                                className="px-6 py-3 bg-white text-gray-900 rounded-lg font-semibold text-sm flex items-center gap-2 hover:bg-gray-100 transition-colors"
                            >
                                Get Started
                                <ArrowRight className="w-4 h-4" />
                            </motion.a>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="md:hidden w-11 h-11 rounded-lg bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors"
                        >
                            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                        </button>
                    </div>
                </div>
            </motion.header>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-40 bg-[#050511]/98 backdrop-blur-xl pt-28 px-6 md:hidden"
                    >
                        <nav className="flex flex-col gap-2">
                            {navLinks.map((link, i) => (
                                <motion.a
                                    key={link.label}
                                    href={link.href}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="py-4 px-5 text-xl font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-all"
                                >
                                    {link.label}
                                </motion.a>
                            ))}
                            <motion.a
                                href="#contact"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5 }}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="mt-6 py-4 bg-white text-gray-900 rounded-lg font-semibold text-lg flex items-center justify-center gap-2"
                            >
                                Get Started
                                <ArrowRight className="w-5 h-5" />
                            </motion.a>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
