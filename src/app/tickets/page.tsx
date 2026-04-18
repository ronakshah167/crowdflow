'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Ticket, MapPin, Layers, User, CreditCard, CheckCircle2, ChevronRight, Search } from 'lucide-react';
import Link from 'next/link';

export default function TicketingPage() {
    const [step, setStep] = useState(1);
    const [selection, setSelection] = useState({
        stadium: '',
        event: '',
        level: '',
        seat: '',
    });

    const stadiums = [
        "Apex Arena, USA",
        "Wembley Stadium, UK",
        "Camp Nou, Spain",
        "Santiago Bernabéu, Spain",
        "Allianz Arena, Germany",
        "Maracanã, Brazil"
    ];

    const events = [
        "FIFA World Cup 26™ Quarter Finals",
        "Champions League Finale",
        "BTS World Tour: Arirang",
        "The R&B Experience: Usher & Chris Brown",
        "Bruno Mars: The Romantic Tour"
    ];

    const nextStep = () => setStep(s => s + 1);
    const prevStep = () => setStep(s => s - 1);

    const handleSelect = (field: string, value: string) => {
        setSelection(prev => ({ ...prev, [field]: value }));
        nextStep();
    };

    return (
        <div className="min-h-screen bg-[#030305] text-white selection:bg-neon-blue selection:text-black">
            {/* Header */}
            <nav className="p-8 border-b border-white/5 bg-black/40 backdrop-blur-xl sticky top-0 z-50">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <Link href="/" className="flex items-center gap-4 group">
                        <ArrowLeft className="w-5 h-5 text-neon-blue transition-transform group-hover:-translate-x-1" />
                        <span className="font-display font-black text-xl tracking-tighter uppercase">CROWDFLOW<span className="text-neon-blue"></span></span>
                    </Link>
                    <div className="flex items-center gap-6">
                        <div className="hidden md:flex gap-2">
                            {[1, 2, 3, 4, 5].map(i => (
                                <div key={i} className={`h-1 w-8 rounded-full transition-colors ${i <= step ? 'bg-neon-blue' : 'bg-white/10'}`} />
                            ))}
                        </div>
                        <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Step {step} of 5</span>
                    </div>
                </div>
            </nav>

            <main className="max-w-4xl mx-auto px-6 py-20">
                <AnimatePresence mode="wait">
                    {step === 1 && (
                        <motion.div
                            key="step1"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                        >
                            <h1 className="text-4xl md:text-6xl font-display font-black uppercase mb-12">Select <span className="text-neon-blue">Venue</span></h1>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {stadiums.map(stadium => (
                                    <button
                                        key={stadium}
                                        onClick={() => handleSelect('stadium', stadium)}
                                        className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-neon-blue/40 hover:bg-neon-blue/5 transition-all text-left flex justify-between items-center group"
                                    >
                                        <div className="flex items-center gap-4">
                                            <div className="w-10 h-10 rounded-xl bg-black flex items-center justify-center border border-white/10 group-hover:border-neon-blue/20">
                                                <MapPin className="w-5 h-5 text-white/40 group-hover:text-neon-blue" />
                                            </div>
                                            <span className="font-bold text-sm uppercase tracking-widest">{stadium}</span>
                                        </div>
                                        <ChevronRight className="w-5 h-5 text-white/20 group-hover:text-neon-blue transition-transform group-hover:translate-x-1" />
                                    </button>
                                ))}
                            </div>
                        </motion.div>
                    )}

                    {step === 2 && (
                        <motion.div
                            key="step2"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                        >
                            <h1 className="text-4xl md:text-6xl font-display font-black uppercase mb-12">Select <span className="text-neon-blue">Event</span></h1>
                            <div className="grid grid-cols-1 gap-4">
                                {events.map(event => (
                                    <button
                                        key={event}
                                        onClick={() => handleSelect('event', event)}
                                        className="p-8 rounded-3xl bg-white/5 border border-white/5 hover:border-neon-blue/40 hover:bg-neon-blue/5 transition-all text-left flex justify-between items-center group"
                                    >
                                        <div className="flex items-center gap-6">
                                            <Ticket className="w-8 h-8 text-neon-blue opacity-50" />
                                            <div>
                                                <span className="block font-display font-bold text-lg uppercase mb-1">{event}</span>
                                                <span className="text-[10px] text-white/30 font-bold uppercase tracking-widest">Live Experience // Synchronized</span>
                                            </div>
                                        </div>
                                        <div className="px-5 py-2 rounded-full border border-white/10 text-[10px] font-bold uppercase tracking-widest">Available</div>
                                    </button>
                                ))}
                            </div>
                        </motion.div>
                    )}

                    {step === 3 && (
                        <motion.div
                            key="step3"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                        >
                            <h1 className="text-4xl md:text-6xl font-display font-black uppercase mb-12">Select <span className="text-neon-blue">Level</span></h1>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                {[1, 2, 3, 4, 5, 6, 7, 8].map(level => (
                                    <button
                                        key={level}
                                        onClick={() => handleSelect('level', `Level ${level}`)}
                                        className="flex flex-col items-center gap-4 p-8 rounded-3xl bg-white/5 border border-white/5 hover:border-neon-blue/40 transition-all group"
                                    >
                                        <Layers className="w-8 h-8 text-white/20 group-hover:text-neon-blue" />
                                        <span className="font-display font-bold text-sm uppercase">Level {level}</span>
                                    </button>
                                ))}
                            </div>
                        </motion.div>
                    )}

                    {step === 4 && (
                        <motion.div
                            key="step4"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                        >
                            <h1 className="text-4xl md:text-6xl font-display font-black uppercase mb-12">Select <span className="text-neon-blue">Seat</span></h1>
                            <div className="bg-white/5 border border-white/5 rounded-[3rem] p-12 mb-8">
                                <div className="grid grid-cols-10 gap-2">
                                    {Array.from({ length: 50 }).map((_, i) => (
                                        <button
                                            key={i}
                                            onClick={() => handleSelect('seat', `Section 104, Seat ${i + 1}`)}
                                            className={`aspect-square rounded-md border border-white/10 transition-all ${[3, 7, 12, 18, 22].includes(i) ? 'bg-white/5 cursor-not-allowed opacity-20' : 'bg-neon-blue/10 hover:bg-neon-blue text-transparent hover:text-black flex items-center justify-center text-[10px] font-bold'}`}
                                            disabled={[3, 7, 12, 18, 22].includes(i)}
                                        >
                                            {i + 1}
                                        </button>
                                    ))}
                                </div>
                                <div className="mt-12 flex justify-center gap-8 text-[10px] font-bold uppercase tracking-widest text-white/30">
                                    <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-sm bg-neon-blue/20 border border-neon-blue/40" /> Available</div>
                                    <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-sm bg-white/5" /> Reserved</div>
                                    <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-sm bg-neon-blue" /> Selected</div>
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {step === 5 && (
                        <motion.div
                            key="step5"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                        >
                            <h1 className="text-4xl md:text-6xl font-display font-black uppercase mb-12">Payment <span className="text-neon-blue">Gateway</span></h1>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                <div className="md:col-span-2 space-y-6">
                                    <div className="p-8 rounded-3xl bg-white/5 border border-white/5 space-y-6">
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-bold text-white/30 uppercase tracking-[0.2em]">Card Number</label>
                                            <input type="text" placeholder="XXXX XXXX XXXX XXXX" className="w-full bg-black/40 border border-white/10 rounded-xl p-4 text-sm outline-none focus:border-neon-blue transition-colors" />
                                        </div>
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                                <label className="text-[10px] font-bold text-white/30 uppercase tracking-[0.2em]">Expiry</label>
                                                <input type="text" placeholder="MM/YY" className="w-full bg-black/40 border border-white/10 rounded-xl p-4 text-sm outline-none focus:border-neon-blue transition-colors" />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-[10px] font-bold text-white/30 uppercase tracking-[0.2em]">CVC</label>
                                                <input type="text" placeholder="123" className="w-full bg-black/40 border border-white/10 rounded-xl p-4 text-sm outline-none focus:border-neon-blue transition-colors" />
                                            </div>
                                        </div>
                                    </div>
                                    <button className="w-full py-6 rounded-3xl bg-neon-blue text-black font-black uppercase tracking-[0.2em] shadow-[0_0_50px_rgba(0,242,255,0.2)]">
                                        Confirm Reservation
                                    </button>
                                </div>

                                <div className="space-y-6">
                                    <div className="p-8 rounded-3xl bg-neon-blue text-black space-y-8">
                                        <h4 className="font-display font-black uppercase text-xl border-b border-black/10 pb-4">Manifest</h4>
                                        <div className="space-y-2">
                                            <span className="text-[10px] font-black uppercase opacity-40">Venue</span>
                                            <p className="font-bold uppercase text-sm">{selection.stadium}</p>
                                        </div>
                                        <div className="space-y-2">
                                            <span className="text-[10px] font-black uppercase opacity-40">Event</span>
                                            <p className="font-bold uppercase text-sm line-clamp-1">{selection.event}</p>
                                        </div>
                                        <div className="space-y-2">
                                            <span className="text-[10px] font-black uppercase opacity-40">Seat Map</span>
                                            <p className="font-bold uppercase text-sm">{selection.level} // {selection.seat}</p>
                                        </div>
                                        <div className="pt-8 border-t border-black/10 flex justify-between items-center">
                                            <span className="font-black text-xl">TOTAL</span>
                                            <span className="font-black text-xl">$149.00</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </main>

            <button
                onClick={prevStep}
                disabled={step === 1}
                className={`fixed bottom-10 left-10 p-4 rounded-full border border-white/10 bg-black/40 backdrop-blur-xl group transition-all ${step === 1 ? 'opacity-0 scale-0' : 'opacity-100 scale-100'}`}
            >
                <ArrowLeft className="w-6 h-6 text-white/40 group-hover:text-white transition-colors" />
            </button>
        </div>
    );
}
