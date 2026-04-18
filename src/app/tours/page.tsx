'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Camera, Map, Compass, Users, ChevronRight, ArrowLeft, Play } from 'lucide-react';
import Link from 'next/link';

export default function ToursPage() {
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);

    const tours = [
        { title: 'The Neural Tour', price: '$45', duration: '90 Mins', focus: 'Stadium Technology & AI Grid' },
        { title: 'Field Experience', price: '$85', duration: '60 Mins', focus: 'Pitch Access & Player Tunnel' },
        { title: 'Executive Insight', price: '$120', duration: '120 Mins', focus: 'Luxury Suites & Ultra-VIP Areas' },
    ];

    return (
        <div className="min-h-screen bg-[#030305] text-white font-sans">
            <nav className="p-8 sticky top-0 bg-[#030305]/80 backdrop-blur-xl z-50 border-b border-white/5">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <Link href="/" className="flex items-center gap-4 group">
                        <ArrowLeft className="w-5 h-5 text-neon-blue transition-transform group-hover:-translate-x-1" />
                        <span className="font-display font-black text-xl tracking-tighter uppercase text-white">CROWDFLOW</span>
                    </Link>
                    <button className="px-6 py-2 bg-neon-blue text-black font-black text-[10px] uppercase tracking-widest rounded-lg hover:shadow-[0_0_20px_rgba(0,242,255,0.4)] transition-all">
                        Check Availability
                    </button>
                </div>
            </nav>

            <main className="max-w-7xl mx-auto px-6 py-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center mb-40">
                    <div>
                        <h1 className="font-display text-6xl md:text-[8rem] font-black uppercase mb-10 leading-[0.85]">
                            Arena <br /> <span className="text-neon-blue">Tours</span>
                        </h1>
                        <p className="text-white/30 text-xl leading-relaxed mb-12">
                            Explore the architectural marvel of the world's most advanced spatial environment.
                            From the pitch-side grass to the neural server clusters.
                        </p>
                        <div className="flex gap-8">
                            <div className="flex flex-col">
                                <span className="text-[10px] font-bold text-neon-blue uppercase tracking-widest mb-1">Duration</span>
                                <span className="text-2xl font-display font-black">60-120 MINS</span>
                            </div>
                            <div className="w-[1px] h-12 bg-white/10" />
                            <div className="flex flex-col">
                                <span className="text-[10px] font-bold text-neon-blue uppercase tracking-widest mb-1">Access</span>
                                <span className="text-2xl font-display font-black">FULL GATE</span>
                            </div>
                        </div>
                    </div>

                    <div className="relative group overflow-hidden rounded-[3rem]">
                        <div className="absolute -inset-1 rounded-[3rem] bg-gradient-to-r from-neon-blue to-neon-purple opacity-20 group-hover:opacity-40 transition-opacity blur-xl" />

                        <div className="relative h-[500px] rounded-[3rem] overflow-hidden border border-white/10 bg-black/40 backdrop-blur-xl flex items-center justify-center">
                            {isVideoPlaying ? (
                                <video
                                    src="https://assets.mixkit.co/videos/preview/mixkit-stadium-lights-shining-at-night-4437-large.mp4"
                                    controls
                                    autoPlay
                                    className="w-full h-full object-cover"
                                />
                            ) : (
                                <>
                                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80')] bg-cover bg-center brightness-50" />
                                    <motion.button
                                        whileHover={{ scale: 1.1 }}
                                        onClick={() => setIsVideoPlaying(true)}
                                        className="w-20 h-20 rounded-full bg-white text-black flex items-center justify-center shadow-[0_0_50px_rgba(255,255,255,0.2)] z-10"
                                    >
                                        <Play className="w-8 h-8 fill-black" />
                                    </motion.button>
                                    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-3">
                                        <div className="w-2 h-2 rounded-full bg-white" />
                                        <span className="text-[10px] font-black uppercase tracking-widest text-white/60">Watch Experience Trailer</span>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-40">
                    {tours.map((tour, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="glass-card hover:border-neon-blue/30 transition-all cursor-pointer group p-10"
                        >
                            <div className="flex justify-between items-start mb-12">
                                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 group-hover:border-neon-blue/20">
                                    <Map className="w-6 h-6 text-neon-blue" />
                                </div>
                                <span className="text-3xl font-display font-black text-white">{tour.price}</span>
                            </div>
                            <h3 className="text-2xl font-display font-black uppercase mb-4 text-white group-hover:text-neon-blue transition-colors">{tour.title}</h3>
                            <p className="text-[10px] font-bold text-white/30 uppercase tracking-widest mb-10">{tour.duration} // {tour.focus}</p>
                            <button className="w-full py-4 rounded-xl border border-white/5 bg-white/5 text-[10px] font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all">
                                Book This Path
                            </button>
                        </motion.div>
                    ))}
                </div>
            </main>
        </div>
    );
}
