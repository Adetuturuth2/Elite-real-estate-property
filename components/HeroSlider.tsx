"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

// Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slides = [
    {
        id: 1,
        image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop",
        headline: "Own the Extraordinary",
        subtext: "Discover homes that define prestige, comfort, and timeless elegance.",
        cta1: "Explore Properties",
        cta2: "Contact Us",
        href1: "/buy",
        href2: "/contact",
    },
    {
        id: 2,
        image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop",
        headline: "Luxury Beyond Expectations",
        subtext: "From breathtaking penthouses to serene waterfront villas, we deliver excellence.",
        cta1: "Buy Now",
        cta2: "Schedule Viewing",
        href1: "/buy",
        href2: "/contact",
    },
    {
        id: 3,
        image: "https://images.unsplash.com/photo-1567496898731-f39b119108d4?q=80&w=2070&auto=format&fit=crop",
        headline: "Where Comfort Meets Class",
        subtext: "Experience premium living spaces tailored for your lifestyle.",
        cta1: "Browse Rentals",
        cta2: "",
        href1: "/rent",
        href2: "",
    },
    {
        id: 4,
        image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=2070&auto=format&fit=crop",
        headline: "Invest in Your Future Today",
        subtext: "Smart investments. Prime locations. Elite opportunities.",
        cta1: "View Listings",
        cta2: "",
        href1: "/buy",
        href2: "",
    },
];

const HeroSlider = () => {
    return (
        <div className="relative h-screen w-full overflow-hidden bg-navy">
            <Swiper
                modules={[Autoplay, EffectFade, Navigation, Pagination]}
                effect="fade"
                speed={1500}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                loop={true}
                pagination={{ clickable: true }}
                navigation={true}
                className="h-full w-full"
            >
                {slides.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        {({ isActive }) => (
                            <div className="relative h-full w-full">
                                {/* Image with Dark Overlay */}
                                <div
                                    className={`absolute inset-0 bg-cover bg-center transition-transform duration-[10000ms] ease-out ${isActive ? 'scale-110' : 'scale-100'}`}
                                    style={{
                                        backgroundImage: `url(${slide.image})`,
                                    }}
                                >
                                    <div className="absolute inset-0 bg-black/50" />
                                </div>

                                {/* Content */}
                                <div className="relative h-full flex items-center justify-center text-center px-6">
                                    <div className="max-w-4xl overflow-hidden">
                                        <AnimatePresence mode="wait">
                                            {isActive && (
                                                <div key={slide.id}>
                                                    <motion.h1
                                                        initial={{ opacity: 0, y: 40 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        exit={{ opacity: 0, y: -40 }}
                                                        transition={{ duration: 0.8, ease: "easeOut" }}
                                                        className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight"
                                                    >
                                                        {slide.headline}
                                                    </motion.h1>
                                                    <motion.p
                                                        initial={{ opacity: 0, y: 30 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        exit={{ opacity: 0, y: -30 }}
                                                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                                                        className="text-lg md:text-xl text-soft-white/90 mb-10 max-w-2xl mx-auto font-light tracking-wide"
                                                    >
                                                        {slide.subtext}
                                                    </motion.p>
                                                    <motion.div
                                                        initial={{ opacity: 0, y: 20 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        exit={{ opacity: 0, y: -20 }}
                                                        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                                                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                                                    >
                                                        <Link
                                                            href={slide.href1}
                                                            className="w-full sm:w-auto bg-gold text-navy px-10 py-4 rounded-sm font-bold uppercase tracking-[0.2em] text-xs hover:bg-gold-dark hover:shadow-[0_0_20px_rgba(198,167,94,0.6)] transition-all transform active:scale-95"
                                                        >
                                                            {slide.cta1}
                                                        </Link>
                                                        {slide.cta2 && (
                                                            <Link
                                                                href={slide.href2}
                                                                className="w-full sm:w-auto border border-white/30 backdrop-blur-sm text-white px-10 py-4 rounded-sm font-bold uppercase tracking-[0.2em] text-xs hover:bg-white hover:text-navy transition-all transform active:scale-95"
                                                            >
                                                                {slide.cta2}
                                                            </Link>
                                                        )}
                                                    </motion.div>
                                                </div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                </div>
                            </div>
                        )}
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Hero Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 hidden md:block">
                <div className="w-[1px] h-20 bg-gradient-to-b from-transparent via-gold to-transparent animate-pulse" />
            </div>
        </div>
    );
};

export default HeroSlider;
