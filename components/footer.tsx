import Link from "next/link";
import Image from "next/image";
import { Github, Twitter, Linkedin, Instagram } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-background border-t border-border mt-auto">
            <div className="container mx-auto px-4 md:px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="space-y-4">
                        <Image
                            src="/innovativecode-01.png"
                            alt="Logo"
                            width={200}
                            height={200}
                            className="rounded-md"
                            priority
                        />
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            Crafting premium digital experiences with cutting-edge technology and design.
                        </p>
                        <div className="flex gap-4">
                            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                                <Github className="w-5 h-5" />
                            </Link>
                            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                                <Twitter className="w-5 h-5" />
                            </Link>
                            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                                <Linkedin className="w-5 h-5" />
                            </Link>
                            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                                <Instagram className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4 gradient-text">Services</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link href="/services" className="hover:text-primary transition-colors">Web Development</Link></li>
                            <li><Link href="/services" className="hover:text-primary transition-colors">UI/UX Design</Link></li>
                            <li><Link href="/services" className="hover:text-primary transition-colors">Digital Marketing</Link></li>
                            <li><Link href="/services" className="hover:text-primary transition-colors">Graphic Designing</Link></li>
                            <li><Link href="/services" className="hover:text-primary transition-colors">Mobile Applications</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4 gradient-text">Company</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
                            <li><Link href="/projects" className="hover:text-primary transition-colors">Portfolio</Link></li>
                            <li><Link href="/blog" className="hover:text-primary transition-colors">Blog</Link></li>
                            <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4 gradient-text">Newsletter</h4>
                        <p className="text-sm text-muted-foreground mb-4">
                            Subscribe to get the latest news and updates.
                        </p>
                        <form className="flex gap-2">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 px-3 py-2 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary input-modern"
                            />
                            <button
                                type="submit"
                                className="px-4 py-2 rounded-md bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity btn-modern"
                            >
                                Join
                            </button>
                        </form>
                    </div>
                </div>

                <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
                    <p>&copy; {new Date().getFullYear()} InnovativeCode. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}