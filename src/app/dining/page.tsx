'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, Coffee, Utensils, Wine, Clock, Star, MapPin, ChevronRight, Zap } from 'lucide-react';
import Link from 'next/link';

export default function DiningPage() {
    const venues = [
        { name: 'Quantum Grill', type: 'Steakhouse', wait: '15m', rating: '4.9', category: 'Fine Dining' },
        { name: 'Neon Sushi', type: 'Japanese', wait: '5m', rating: '4.8', category: 'Lounge' },
        { name: 'The Cloud Bar', type: 'Cocktails', wait: '0m', rating: '5.0', category: 'Rooftop' },
        { name: 'Nexus Pizza', type: 'Italian', wait: '10m', rating: '4.5', category: 'Casual' },
        { name: 'Bio-Bistro', type: 'Organic', wait: '20m', rating: '4.7', category: 'Healthy' },
        { name: 'Turbo Tacos', type: 'Mexican', wait: '2m', rating: '4.4', category: 'Fast' },
    ];

    return (
        <div className="min-h-screen bg-[#030305] text-white selection:bg-neon-blue selection:text-black font-sans">
            {/* Nav */}
            <nav className="p-8 sticky top-0 bg-[#030305]/80 backdrop-blur-xl z-50 border-b border-white/5">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <Link href="/" className="flex items-center gap-4 group">
                        <ArrowLeft className="w-5 h-5 text-neon-blue transition-transform group-hover:-translate-x-1" />
                        <span className="font-display font-black text-xl tracking-tighter uppercase">CROWDFLOW<span className="text-neon-blue">AI</span></span>
                    </Link>
                    <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
                        <span className="text-[10px] text-white/40 font-bold uppercase tracking-widest">Kitchen Networks Active</span>
                    </div>
                </div>
            </nav>

            <main className="max-w-7xl mx-auto px-6 py-20">
                <div className="flex flex-col md:flex-row justify-between items-end gap-12 mb-20">
                    <div className="max-w-2xl">
                        <h1 className="font-display text-5xl md:text-7xl font-black uppercase mb-8 leading-tight">
                            Gastronomic <br /> <span className="text-neon-blue">Intelligence</span>
                        </h1>
                        <p className="text-white/30 text-base md:text-xl leading-relaxed">
                            Real-time queue management and dietary synchronization for the modern attendee.
                            Experience dining optimized by neural throughput.
                        </p>
                    </div>
                    <div className="flex gap-4">
                        <button className="px-8 py-4 rounded-2xl bg-white text-black font-black text-[10px] uppercase tracking-widest hover:bg-neon-blue transition-all">
                            Book Reserved VIP
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {venues.map((venue, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="group p-8 rounded-[2.5rem] bg-white/5 border border-white/5 hover:border-white/10 hover:bg-white/[0.07] transition-all duration-500 cursor-pointer"
                        >
                            <div className="flex justify-between items-start mb-10">
                                <div className="w-14 h-14 rounded-2xl bg-black flex items-center justify-center border border-white/10 group-hover:border-neon-blue/40 transition-colors">
                                    <Utensils className="w-6 h-6 text-neon-blue" />
                                </div>
                                <div className="flex flex-col items-end">
                                    <span className="text-[10px] text-white/20 font-bold uppercase tracking-widest mb-1">Queue Time</span>
                                    <span className={`text-sm font-display font-black transition-colors ${venue.wait === '0m' ? 'text-neon-green' : 'text-white'}`}>{venue.wait}</span>
                                </div>
                            </div>

                            <div className="mb-8">
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="text-[9px] font-bold text-neon-blue uppercase tracking-widest">{venue.category}</span>
                                    <span className="text-white/10 text-xs">•</span>
                                    <span className="text-[9px] font-bold text-white/30 uppercase tracking-widest">{venue.type}</span>
                                </div>
                                <h3 className="text-2xl font-display font-black uppercase mb-4">{venue.name}</h3>
                                <div className="flex items-center gap-4">
                                    <div className="flex items-center gap-1">
                                        <Star className="w-3 h-3 text-neon-blue fill-neon-blue" />
                                        <span className="text-xs font-bold text-white/50">{venue.rating}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <MapPin className="w-3 h-3 text-white/20" />
                                        <span className="text-xs font-bold text-white/20">Section 104</span>
                                    </div>
                                </div>
                            </div>

                            <button className="w-full flex items-center justify-between p-5 rounded-2xl bg-black/40 border border-white/5 group-hover:border-neon-blue/30 transition-all">
                                <span className="text-[9px] font-black uppercase tracking-widest">View Live Menu</span>
                                <ChevronRight className="w-4 h-4 text-neon-blue group-hover:translate-x-1 transition-transform" />
                            </button>
                        </motion.div>
                    ))}
                </div>
            </main>

            {/* AI Optimization section */}
            <section className="bg-white/5 border-y border-white/5 py-32 mt-20">
                <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
                    <div className="w-20 h-20 rounded-3xl bg-neon-blue/10 flex items-center justify-center mb-10 border border-neon-blue/20">
                        <Zap className="w-10 h-10 text-neon-blue" />
                    </div>
                    <h2 className="font-display text-4xl md:text-6xl font-black uppercase mb-8">Synchronized <span className="text-neon-blue">Ordering</span></h2>
                    <p className="text-white/40 max-w-xl text-sm md:text-base leading-relaxed mb-12">
                        Orders are intelligently timed with event intervals to ensure fresh preparation
                        and zero-wait collection cycles.
                    </p>
                    <button className="px-12 py-5 bg-white text-black font-black rounded-2xl text-[11px] uppercase tracking-[0.2em] transform hover:scale-105 transition-all">
                        Initialize Smart Order
                    </button>
                </div>
            </section>
        </div>
    );
}
