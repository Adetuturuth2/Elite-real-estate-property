"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu as MenuIcon, X as XIcon, PhoneCall, MessageCircle } from "lucide-react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Buy", href: "/buy" },
        { name: "Rent", href: "/rent" },
        { name: "Lease", href: "/lease" },
        { name: "Map", href: "/map" },
        { name: "About", href: "/about" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <nav
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "glass-dark py-3 shadow-2xl" : "bg-transparent py-5"
                }`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                {/* Logo */}
                <Link href="/" className="flex flex-col items-start group">
                    <span className="text-2xl md:text-3xl font-serif font-bold tracking-widest text-gold group-hover:text-white transition-colors">
                        ELITE
                    </span>
                    <span className="text-[10px] uppercase tracking-[0.3em] font-body text-soft-white -mt-1 group-hover:text-gold transition-colors">
                        Real Estate
                    </span>
                </Link>

                {/* Desktop Links */}
                <div className="hidden lg:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={`text-sm uppercase tracking-widest font-medium transition-all duration-300 hover:text-gold ${pathname === link.href ? "text-gold" : "text-soft-white"
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        href="/contact"
                        className="bg-gold text-navy px-6 py-2.5 rounded-sm text-xs uppercase tracking-[0.2em] font-bold hover:bg-gold-dark hover:shadow-[0_0_15px_rgba(198,167,94,0.5)] transition-all transform active:scale-95"
                    >
                        Inquire Now
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <div className="lg:hidden flex items-center space-x-4">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-gold focus:outline-none"
                    >
                        {isOpen ? <XIcon size={28} /> : <MenuIcon size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`lg:hidden absolute top-full left-0 w-full glass-dark transition-all duration-500 overflow-hidden ${isOpen ? "max-h-screen border-t border-gold/20" : "max-h-0"
                    }`}
            >
                <div className="flex flex-col p-8 space-y-6">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className={`text-lg uppercase tracking-widest font-medium ${pathname === link.href ? "text-gold" : "text-soft-white"
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <div className="pt-6 border-t border-white/10 flex flex-col space-y-4">
                        <a
                            href="tel:+1234567890"
                            className="flex items-center space-x-3 text-soft-white hover:text-gold"
                        >
                            <PhoneCall size={20} className="text-gold" />
                            <span>+1 (234) 567-890</span>
                        </a>
                        <a
                            href="https://wa.me/your-number"
                            className="flex items-center space-x-3 text-soft-white hover:text-gold"
                        >
                            <MessageCircle size={20} className="text-gold" />
                            <span>WhatsApp Inquiry</span>
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
