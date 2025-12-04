"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail, Phone, MapPin, Twitter, Linkedin, Instagram, Facebook, Sparkles } from "lucide-react";

const socialLinks = [
    { icon: Twitter, href: "#" },
    { icon: Linkedin, href: "#" },
    { icon: Instagram, href: "#" },
    { icon: Facebook, href: "#" },
];

const footerLinks = {
    Company: ["About Us", "Careers", "Blog", "Press"],
    Services: ["Web Development", "AI Solutions", "Digital Marketing", "App Development"],
    Resources: ["Case Studies", "Documentation", "Pricing", "Support"],
};

export function RevampedFooter() {
    return (
        <footer id="contact" className="relative pt-32 pb-8">
            {/* CTA Section */}
            <div className="container mx-auto px-4 mb-24">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-purple-900/50 to-blue-900/50 border border-purple-500/20"
                >
                    {/* Gradient Accents */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500" />
                    <div className="absolute -top-32 -right-32 w-64 h-64 bg-purple-500/20 rounded-full blur-[100px]" />
                    <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-blue-500/20 rounded-full blur-[100px]" />

                    <div className="relative z-10 p-12 md:p-20">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/10 text-sm font-medium mb-6">
                                    <Sparkles className="w-4 h-4 text-purple-400" />
                                    Free Strategy Session
                                </div>
                                <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                                    Ready to{" "}
                                    <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                                        Transform
                                    </span>{" "}
                                    Your Business?
                                </h2>
                                <p className="text-xl text-gray-400 mb-8">
                                    Book a free 30-minute call and let&apos;s discuss how we can help you grow.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <motion.button
                                        whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(139, 92, 246, 0.2)" }}
                                        whileTap={{ scale: 0.98 }}
                                        className="group px-8 py-4 bg-white text-gray-900 rounded-full font-semibold flex items-center justify-center gap-2"
                                    >
                                        Book Free Call
                                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </motion.button>
                                    <motion.button
                                        whileHover={{ scale: 1.02 }}
                                        className="px-8 py-4 border border-white/20 rounded-full font-semibold hover:bg-white/5 transition-all"
                                    >
                                        View Pricing
                                    </motion.button>
                                </div>
                            </div>
                            <div className="hidden lg:block">
                                <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8">
                                    <div className="space-y-4">
                                        <input
                                            type="text"
                                            placeholder="Your Name"
                                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50"
                                        />
                                        <input
                                            type="email"
                                            placeholder="Your Email"
                                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50"
                                        />
                                        <textarea
                                            placeholder="Tell us about your project..."
                                            rows={4}
                                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 resize-none"
                                        />
                                        <motion.button
                                            whileHover={{ scale: 1.02 }}
                                            className="w-full py-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl font-semibold flex items-center justify-center gap-2"
                                        >
                                            Send Message
                                            <ArrowRight className="w-4 h-4" />
                                        </motion.button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Footer Content */}
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
                    {/* Brand */}
                    <div className="lg:col-span-2">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center font-bold">
                                IC
                            </div>
                            <span className="text-2xl font-bold">InnovativeCode</span>
                        </div>
                        <p className="text-gray-400 mb-6 max-w-sm">
                            Premium digital solutions that drive real business growth. AI, Web, Marketing – all under one roof.
                        </p>

                        {/* Contact */}
                        <div className="space-y-3 text-gray-400 text-sm mb-6">
                            <a href="mailto:hello@innovativecode.dev" className="flex items-center gap-3 hover:text-white transition-colors">
                                <Mail className="w-4 h-4 text-purple-400" />
                                hello@innovativecode.dev
                            </a>
                            <a href="tel:+1234567890" className="flex items-center gap-3 hover:text-white transition-colors">
                                <Phone className="w-4 h-4 text-purple-400" />
                                +1 (234) 567-890
                            </a>
                            <div className="flex items-center gap-3">
                                <MapPin className="w-4 h-4 text-purple-400" />
                                San Francisco, CA
                            </div>
                        </div>

                        {/* Social */}
                        <div className="flex gap-3">
                            {socialLinks.map((social, i) => (
                                <motion.a
                                    key={i}
                                    href={social.href}
                                    whileHover={{ y: -2 }}
                                    className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-purple-500/20 hover:border-purple-500/30 transition-all"
                                >
                                    <social.icon className="w-4 h-4" />
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* Links */}
                    {Object.entries(footerLinks).map(([title, links]) => (
                        <div key={title}>
                            <h4 className="font-semibold mb-4">{title}</h4>
                            <ul className="space-y-3 text-gray-400 text-sm">
                                {links.map((link) => (
                                    <li key={link}>
                                        <a href="#" className="hover:text-white transition-colors">{link}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom */}
                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
                    <p>© {new Date().getFullYear()} InnovativeCode. All rights reserved.</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-white transition-colors">Privacy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms</a>
                        <a href="#" className="hover:text-white transition-colors">Cookies</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
