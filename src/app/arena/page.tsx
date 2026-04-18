'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, MapPin, ChevronRight, ArrowLeft, Download, Maximize2 } from 'lucide-react';
import Link from 'next/link';

export default function ArenaPage() {
    const [selectedLevel, setSelectedLevel] = useState<number | null>(null);

    const levels = [
        { id: 1, name: 'Level 1 Seating Map', description: 'Field Level & Plaza' },
        { id: 2, name: 'Level 2 Seating Map', description: 'Lower Bowl' },
        { id: 3, name: 'Level 3 Seating Map', description: 'Club Level' },
        { id: 4, name: 'Level 4 Seating Map', description: 'Suite Level' },
        { id: 5, name: 'Level 5 Seating Map', description: 'Upper Bowl' },
        { id: 6, name: 'Level 6 Seating Map', description: 'Gallery Level' },
        { id: 7, name: 'Level 7 Seating Map', description: 'Terrace Level' },
        { id: 8, name: 'Level 8 Seating Map', description: 'Roof Deck' },
    ];

    return (
        <div className="min-h-screen bg-background text-white">
            {/* Header */}
            <header className="border-b border-white/5 bg-black/40 backdrop-blur-xl sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2 group">
                        <ArrowLeft className="w-5 h-5 text-neon-blue transition-transform group-hover:-translate-x-1" />
                        <span className="font-display font-black text-xl tracking-tighter uppercase">
                            CROWDFLOW<span className="text-neon-blue">AI</span>
                        </span>
                    </Link>
                    <div className="hidden md:flex items-center gap-8">
                        <nav className="flex gap-6 text-[10px] font-bold uppercase tracking-widest text-white/50">
                            <Link href="/#events" className="hover:text-neon-blue transition-colors">Events</Link>
                            <Link href="/support" className="hover:text-neon-blue transition-colors">Plan Your Visit</Link>
                            <Link href="/arena" className="text-white hover:text-neon-blue transition-colors">Stadium</Link>
                        </nav>
                        <Link href="/tickets">
                            <button className="px-6 py-2 bg-neon-blue text-background font-bold rounded-lg text-xs uppercase tracking-widest shadow-[0_0_20px_rgba(0,242,255,0.3)] hover:shadow-[0_0_40px_rgba(0,242,255,0.5)] transition-all">
                                Book Tickets
                            </button>
                        </Link>
                    </div>
                </div>
            </header>

            <main className="max-w-7xl mx-auto px-6 py-12 md:py-20">
                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Level Selection List */}
                    <div className="w-full lg:w-1/3">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="space-y-8"
                        >
                            <div>
                                <h1 className="text-4xl font-display font-black uppercase mb-4 leading-tight">
                                    Arena <span className="text-neon-blue">Seating Map</span>
                                </h1>
                                <p className="text-gray-500">
                                    Navigate through the arena's different levels and find your perfect spot.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 gap-3">
                                {levels.map((level) => (
                                    <button
                                        key={level.id}
                                        onClick={() => setSelectedLevel(level.id)}
                                        className={`group w-full flex items-center justify-between p-5 rounded-2xl transition-all duration-300 border ${selectedLevel === level.id
                                            ? 'bg-neon-blue/10 border-neon-blue/30 text-neon-blue shadow-[0_0_30px_rgba(0,242,255,0.1)]'
                                            : 'bg-white/5 border-white/5 text-gray-400 hover:border-white/20 hover:bg-white/10'
                                            }`}
                                    >
                                        <div className="flex items-center gap-4">
                                            <div className={`p-3 rounded-xl transition-colors ${selectedLevel === level.id ? 'bg-neon-blue/20' : 'bg-black/40'
                                                }`}>
                                                <FileText className="w-5 h-5" />
                                            </div>
                                            <div className="text-left">
                                                <span className="font-bold text-sm uppercase tracking-widest block">{level.name}</span>
                                                <span className="text-[10px] text-gray-500 font-medium uppercase tracking-tighter">{level.description}</span>
                                            </div>
                                        </div>
                                        <ChevronRight className={`w-5 h-5 transition-transform ${selectedLevel === level.id ? 'translate-x-1 text-neon-blue' : 'text-gray-600'}`} />
                                    </button>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* PDF Viewer / Content Area */}
                    <div className="flex-1 min-h-[600px] lg:h-[800px]">
                        <AnimatePresence mode="wait">
                            {selectedLevel ? (
                                <motion.div
                                    key={selectedLevel}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    className="w-full h-full flex flex-col gap-4"
                                >
                                    <div className="flex items-center justify-between p-4 bg-white/5 border border-white/5 rounded-2xl">
                                        <div className="flex items-center gap-3">
                                            <span className="text-xs font-bold uppercase tracking-widest text-white/40">Viewing Level {selectedLevel}</span>
                                        </div>
                                        <div className="flex gap-2">
                                            <button className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-all">
                                                <Download className="w-4 h-4" />
                                            </button>
                                            <button className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-all">
                                                <Maximize2 className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </div>
                                    <div className="flex-1 bg-white/5 border border-white/5 rounded-3xl overflow-hidden relative group">
                                        <iframe
                                            src="/seating-map.pdf#toolbar=0"
                                            className="w-full h-full rounded-2xl h-full"
                                            title="Seating Map PDF"
                                        />
                                        <div className="absolute inset-0 pointer-events-none border border-white/10 rounded-3xl group-hover:border-neon-blue/30 transition-colors" />
                                    </div>
                                </motion.div>
                            ) : (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="w-full h-full flex flex-col items-center justify-center text-center p-12 bg-white/5 border border-white/5 border-dashed rounded-[3rem]"
                                >
                                    <div className="w-24 h-24 rounded-full bg-neon-blue/5 border border-neon-blue/10 flex items-center justify-center mb-8 relative">
                                        <div className="absolute inset-0 rounded-full bg-neon-blue animate-ping opacity-10" />
                                        <MapPin className="w-10 h-10 text-neon-blue" />
                                    </div>
                                    <h3 className="text-2xl font-display font-bold uppercase mb-4">Discovery Mode</h3>
                                    <p className="text-gray-500 max-w-sm leading-relaxed mb-8">
                                        Select an arena level from the directory to initialize the spatial intelligence map.
                                    </p>
                                    <div className="flex gap-4">
                                        {[1, 2, 3].map(i => (
                                            <div key={i} className="w-12 h-1 bg-white/5 rounded-full overflow-hidden">
                                                <motion.div
                                                    animate={{ x: ['-100%', '100%'] }}
                                                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.4 }}
                                                    className="w-full h-full bg-neon-blue/30"
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </main>

            {/* Upcoming Events Mini Section */}
            <section className="border-t border-white/5 bg-black/20 py-20">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex items-center justify-between mb-12">
                        <h2 className="font-display text-2xl font-black uppercase">Live Updates</h2>
                        <Link href="/" className="text-[10px] font-bold uppercase tracking-widest text-neon-blue hover:underline">View All Events</Link>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { title: 'Glitch Metropolis', date: 'APR 20', time: '19:00' },
                            { title: 'Synthwave Nights', date: 'MAY 05', time: '21:30' },
                            { title: 'Neon Cup Finals', date: 'MAY 12', time: '18:00' },
                        ].map((event, i) => (
                            <div key={i} className="glass group p-6 rounded-2xl border-white/5 hover:border-neon-blue/30 transition-all cursor-pointer">
                                <div className="flex justify-between items-start mb-4">
                                    <span className="text-2xl font-display font-black group-hover:text-neon-blue transition-colors">{event.date}</span>
                                    <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">{event.time} UTC</span>
                                </div>
                                <h4 className="font-bold uppercase tracking-tight text-white mb-2">{event.title}</h4>
                                <div className="h-[1px] w-full bg-white/5 my-4" />
                                <button className="text-[10px] font-bold uppercase tracking-widest text-gray-500 group-hover:text-white transition-colors flex items-center gap-2">
                                    Secure Entry <ChevronRight className="w-3 h-3 text-neon-blue" />
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
