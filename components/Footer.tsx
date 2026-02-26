import React from "react";
import Link from "next/link";
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-premium-dark text-soft-white pt-20 pb-10 border-t border-gold/20">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Section */}
                    <div className="space-y-6">
                        <Link href="/" className="flex flex-col items-start">
                            <span className="text-3xl font-serif font-bold tracking-widest text-gold">
                                ELITE
                            </span>
                            <span className="text-xs uppercase tracking-[0.4em] font-body text-white/60 -mt-1">
                                Real Estate
                            </span>
                        </Link>
                        <p className="text-sm leading-relaxed text-white/60 font-light">
                            Redefining luxury real estate through architectural excellence,
                            prime locations, and unmatched market intelligence. Experience the
                            extraordinary.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="p-2 border border-white/10 rounded-full hover:border-gold hover:text-gold transition-all">
                                <Facebook size={18} />
                            </a>
                            <a href="#" className="p-2 border border-white/10 rounded-full hover:border-gold hover:text-gold transition-all">
                                <Instagram size={18} />
                            </a>
                            <a href="#" className="p-2 border border-white/10 rounded-full hover:border-gold hover:text-gold transition-all">
                                <Twitter size={18} />
                            </a>
                            <a href="#" className="p-2 border border-white/10 rounded-full hover:border-gold hover:text-gold transition-all">
                                <Linkedin size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-6">
                        <h4 className="text-gold font-serif text-lg tracking-wider">Quick Links</h4>
                        <ul className="space-y-3 flex flex-col">
                            <li><Link href="/buy" className="text-sm font-light hover:text-gold transition-colors">Properties for Sale</Link></li>
                            <li><Link href="/rent" className="text-sm font-light hover:text-gold transition-colors">Luxury Rentals</Link></li>
                            <li><Link href="/lease" className="text-sm font-light hover:text-gold transition-colors">Lease Opportunities</Link></li>
                            <li><Link href="/map" className="text-sm font-light hover:text-gold transition-colors">Interactive Map</Link></li>
                            <li><Link href="/about" className="text-sm font-light hover:text-gold transition-colors">Our Legacy</Link></li>
                        </ul>
                    </div>

                    {/* Useful Info */}
                    <div className="space-y-6">
                        <h4 className="text-gold font-serif text-lg tracking-wider">Useful Info</h4>
                        <ul className="space-y-3 flex flex-col">
                            <li><Link href="#" className="text-sm font-light hover:text-gold transition-colors">Market Insights</Link></li>
                            <li><Link href="#" className="text-sm font-light hover:text-gold transition-colors">Investment Guide</Link></li>
                            <li><Link href="#" className="text-sm font-light hover:text-gold transition-colors">Mortgage Calculator</Link></li>
                            <li><Link href="#" className="text-sm font-light hover:text-gold transition-colors">Privacy Policy</Link></li>
                            <li><Link href="#" className="text-sm font-light hover:text-gold transition-colors">Terms of Service</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-6">
                        <h4 className="text-gold font-serif text-lg tracking-wider">Get in Touch</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start space-x-3">
                                <MapPin size={20} className="text-gold shrink-0" />
                                <span className="text-sm font-light text-white/60">123 Luxury Avenue, Penthouse Level, Manhattan, NY 10001</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Phone size={20} className="text-gold shrink-0" />
                                <span className="text-sm font-light text-white/60">+1 (234) 567-890</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Mail size={20} className="text-gold shrink-0" />
                                <span className="text-sm font-light text-white/60">concierge@eliterealestate.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-[0.2em] text-white/40">
                    <p>© 2026 Elite Real Estate. All rights reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <span>Powered by Luxury Tech</span>
                        <span>Design by Antigravity</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
