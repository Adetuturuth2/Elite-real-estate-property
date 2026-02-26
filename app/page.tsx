"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSlider from "@/components/HeroSlider";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Search, MapPin, Home, DollarSign, Bed, Bath, Move, ShieldCheck, UserCheck, Clock, Globe, MessageCircle } from "lucide-react";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-navy flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <HeroSlider />

      {/* Advanced Search Bar (Glassmorphism) */}
      <div className="relative z-20 -mt-16 container mx-auto px-6">
        <div className="glass-dark p-8 rounded-sm shadow-2xl">
          <div className="flex flex-col lg:flex-row gap-6 items-end">
            <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
              {/* Type Toggle */}
              <div className="flex flex-col space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-gold font-bold">Offer Type</label>
                <select className="bg-white/5 border border-white/10 text-soft-white p-3 rounded-sm focus:outline-none focus:border-gold transition-colors text-sm">
                  <option className="bg-navy">Buy</option>
                  <option className="bg-navy">Rent</option>
                  <option className="bg-navy">Lease</option>
                </select>
              </div>

              {/* Location */}
              <div className="flex flex-col space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-gold font-bold">Location</label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3.5 text-gold/50" size={16} />
                  <input
                    type="text"
                    placeholder="Enter City, State..."
                    className="w-full bg-white/5 border border-white/10 text-soft-white p-3 pl-10 rounded-sm focus:outline-none focus:border-gold transition-colors text-sm placeholder:text-white/20"
                  />
                </div>
              </div>

              {/* Property Type */}
              <div className="flex flex-col space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-gold font-bold">Property Type</label>
                <select className="bg-white/5 border border-white/10 text-soft-white p-3 rounded-sm focus:outline-none focus:border-gold transition-colors text-sm">
                  <option className="bg-navy">Mansion</option>
                  <option className="bg-navy">Villa</option>
                  <option className="bg-navy">Penthouse</option>
                  <option className="bg-navy">Apartment</option>
                </select>
              </div>

              {/* Price Range */}
              <div className="flex flex-col space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-gold font-bold">Budget Range</label>
                <select className="bg-white/5 border border-white/10 text-soft-white p-3 rounded-sm focus:outline-none focus:border-gold transition-colors text-sm">
                  <option className="bg-navy">$1M - $3M</option>
                  <option className="bg-navy">$3M - $5M</option>
                  <option className="bg-navy">$5M - $10M</option>
                  <option className="bg-navy">$10M+</option>
                </select>
              </div>
            </div>

            <button className="w-full lg:w-auto bg-gold text-navy px-12 py-3.5 rounded-sm font-bold uppercase tracking-[0.2em] text-xs hover:bg-gold-dark hover:shadow-[0_0_15px_rgba(198,167,94,0.4)] transition-all flex items-center justify-center space-x-2">
              <Search size={16} />
              <span>Search</span>
            </button>
          </div>
        </div>
      </div>

      {/* Featured Properties Section */}
      <section className="py-24 container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-gold text-xs uppercase tracking-[0.4em] font-bold mb-4 block">Exclusive Portfolio</span>
          <h2 className="text-4xl md:text-5xl font-serif text-white">Featured Properties</h2>
          <div className="w-24 h-[1px] bg-gold mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {[
            {
              title: "Ocean Pearl Waterfront Villa",
              price: "$4,850,000",
              location: "Malibu, California",
              beds: 5,
              baths: 6,
              sqft: "5,200",
              image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=2070&auto=format&fit=crop",
              desc: "Experience the pinnacle of coastal luxury in this breathtaking 5-bedroom waterfront masterpiece."
            },
            {
              title: "The Aurora Smart Estate",
              price: "$6,200,000",
              location: "Beverly Hills, LA",
              beds: 6,
              baths: 8,
              sqft: "7,500",
              image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2070&auto=format&fit=crop",
              desc: "An architectural statement of sophistication and innovation. Cutting-edge smart mansion."
            },
            {
              title: "Skyline Royale Penthouse",
              price: "$3,450,000",
              location: "Manhattan, New York",
              beds: 3,
              baths: 4,
              sqft: "3,800",
              image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop",
              desc: "Perched above the city skyline, this penthouse redefines urban luxury living."
            }
          ].map((property, i) => (
            <div key={i} className="group glass border-white/5 hover:border-gold/30 transition-all duration-500 overflow-hidden">
              <div className="relative h-72 overflow-hidden">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-gold text-navy px-3 py-1 text-[10px] font-bold uppercase tracking-widest">
                  Featured
                </div>
                <div className="absolute bottom-4 right-4 bg-navy/80 backdrop-blur-md text-white px-4 py-2 font-serif text-lg">
                  {property.price}
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center text-gold mb-2 space-x-2">
                  <MapPin size={14} />
                  <span className="text-[10px] uppercase tracking-widest font-bold">{property.location}</span>
                </div>
                <h3 className="text-xl text-white mb-4 group-hover:text-gold transition-colors">{property.title}</h3>
                <p className="text-sm text-white/50 font-light mb-6 line-clamp-2">{property.desc}</p>

                <div className="grid grid-cols-3 gap-4 mb-8 border-y border-white/5 py-4">
                  <div className="flex flex-col items-center">
                    <Bed size={18} className="text-gold mb-1" />
                    <span className="text-xs font-bold">{property.beds} Beds</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <Bath size={18} className="text-gold mb-1" />
                    <span className="text-xs font-bold">{property.baths} Baths</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <Move size={18} className="text-gold mb-1" />
                    <span className="text-xs font-bold">{property.sqft} sqft</span>
                  </div>
                </div>

                <div className="flex gap-3">
                  <button className="flex-1 bg-white/5 border border-white/10 text-white py-3 rounded-sm text-[10px] uppercase tracking-widest font-bold hover:bg-gold hover:text-navy hover:border-gold transition-all">
                    View Details
                  </button>
                  <a
                    href={`https://wa.me/your-number?text=Hello Elite Real Estate, I'm interested in ${property.title}`}
                    className="bg-gold/10 border border-gold/20 p-3 rounded-sm text-gold hover:bg-gold hover:text-navy transition-all"
                  >
                    <MessageCircle size={18} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="border border-gold text-gold px-12 py-4 rounded-sm text-xs uppercase tracking-[0.3em] font-bold hover:bg-gold hover:text-navy transition-all shadow-[0_0_20px_rgba(198,167,94,0.1)]">
            View All Properties
          </button>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-24 bg-premium-dark/50">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <span className="text-gold text-xs uppercase tracking-[0.4em] font-bold mb-4 block underline underline-offset-8 decoration-gold/30">Our Distinction</span>
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-8 leading-tight">Redefining Luxury Real Estate</h2>
            <p className="text-white/60 text-lg leading-relaxed font-light mb-10">
              At Elite Real Estate, we don’t just sell properties — we curate lifestyles.
              Our portfolio represents architectural excellence, prime locations, and unmatched value.
              Whether you're searching for a dream home or a strategic investment, we deliver excellence at every step.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { icon: ShieldCheck, title: "Verified Premium", text: "Handpicked listings with full legal verification and premium status." },
                { icon: UserCheck, title: "Expert Negotiators", text: "Our agents ensure you get the most value for your lifestyle investment." },
                { icon: Clock, title: "24/7 Client Support", text: "Dedicated concierge service available around the clock for your needs." },
                { icon: Globe, title: "Global Market Insight", text: "Data-driven strategies for local and international real estate markets." }
              ].map((item, i) => (
                <div key={i} className="flex flex-col space-y-3">
                  <div className="w-12 h-12 glass border-gold/20 flex items-center justify-center text-gold rounded-sm">
                    <item.icon size={24} />
                  </div>
                  <h4 className="text-white font-serif text-lg">{item.title}</h4>
                  <p className="text-sm text-white/40 font-light leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden rounded-sm border border-gold/20">
              <img
                src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop"
                alt="Luxury Lifestyle"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Animated Counter/Badge */}
            <div className="absolute -bottom-10 -left-10 glass p-8 shadow-2xl border-gold/50 max-w-[200px] hidden md:block animate-bounce">
              <span className="text-4xl font-serif text-gold block mb-1">15+</span>
              <span className="text-[10px] uppercase tracking-widest text-white/60 leading-tight">Years of Unmatched Luxury Excellence</span>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 container mx-auto px-6 overflow-hidden">
        <div className="text-center mb-16">
          <span className="text-gold text-xs uppercase tracking-[0.4em] font-bold mb-4 block">Proven Trust</span>
          <h2 className="text-4xl font-serif text-white">Client Testimonials</h2>
        </div>

        <div className="max-w-6xl mx-auto">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 }
            }}
            className="pb-16"
          >
            {[
              {
                name: "Julian Thorne",
                role: "CEO, Thorne Ventures",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&h=200&auto=format&fit=crop",
                text: "Elite Real Estate didn't just find me a house; they found me a masterpiece. Their professionalism and attention to detail are truly world-class."
              },
              {
                name: "Elena Rodriguez",
                role: "International Investor",
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&h=200&auto=format&fit=crop",
                text: "The most seamless transaction I've ever experienced. Their global market insights saved me millions and secured my dream villa in Malibu."
              },
              {
                name: "Sir David Attenbury",
                role: "Philanthropist",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&h=200&auto=format&fit=crop",
                text: "Discretion, excellence, and prestige. These are the values I looked for, and Elite Real Estate exceeded them in every possible way."
              },
              {
                name: "Sarah Jenkins",
                role: "Tech Executive",
                image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&h=200&auto=format&fit=crop",
                text: "Finding a property that fits a demanding lifestyle isn't easy, but Elite made it feel effortless. The ultimate luxury experience."
              }
            ].map((t, i) => (
              <SwiperSlide key={i}>
                <div className="glass p-10 relative h-full flex flex-col">
                  <span className="text-6xl text-gold/20 absolute top-4 left-4 font-serif">“</span>
                  <p className="text-white/70 italic mb-8 relative z-10 font-light leading-relaxed flex-1">
                    {t.text}
                  </p>
                  <div className="flex items-center space-x-4 border-t border-white/10 pt-6">
                    <div className="w-14 h-14 rounded-full overflow-hidden border border-gold/30 shrink-0">
                      <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h5 className="text-white font-bold text-sm tracking-wide">{t.name}</h5>
                      <p className="text-gold text-[10px] uppercase tracking-widest">{t.role}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gold z-0" />
        <div className="relative z-10 container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-serif text-navy mb-8">Ready to Find Your Masterpiece?</h2>
          <p className="text-navy/70 text-lg mb-12 max-w-2xl mx-auto font-medium">
            Join the most exclusive real estate network. Let our experts guide you to your next extraordinary investment.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-navy text-white px-12 py-4 rounded-sm font-bold uppercase tracking-[0.2em] text-xs hover:bg-premium-dark transition-all shadow-xl">
              Schedule a Consultation
            </button>
            <button className="border-2 border-navy text-navy px-12 py-4 rounded-sm font-bold uppercase tracking-[0.2em] text-xs hover:bg-navy hover:text-white transition-all">
              Browse Listings
            </button>
          </div>
        </div>
      </section>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/your-number"
        className="fixed bottom-8 right-8 z-[100] w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform animate-gold-pulse"
      >
        <MessageCircle size={32} />
      </a>

      <Footer />
    </main>
  );
}
