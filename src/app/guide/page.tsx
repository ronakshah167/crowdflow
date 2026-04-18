'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Info, Shield, HelpCircle, ArrowLeft, ChevronDown, Package, Droplets, Camera } from 'lucide-react';
import Link from 'next/link';

export default function GuestGuidePage() {
    const [searchQuery, setSearchQuery] = useState('');

    const policies = [
        { id: 'bag', title: 'Clear Bag Policy', category: 'Security', icon: Package, content: 'Only clear plastic, vinyl, or PVC bags that do not exceed 12" x 6" x 12" are permitted. Small clutch bags (4.5" x 6.5") are also allowed.' },
        { id: 'water', title: 'Hydration Guidelines', category: 'Health', icon: Droplets, content: 'One factory-sealed water bottle (20oz or less) OR one empty non-glass reusable bottle is permitted per guest.' },
        { id: 'camera', title: 'Photography', category: 'General', icon: Camera, content: 'Non-professional cameras with lenses shorter than 6 inches are permitted. Tripods and monopods are prohibited.' },
        { id: 'entry', title: 'Entry Protocol', category: 'Access', icon: Shield, content: 'Digital tokens only. All guests must undergo thermal and spatial security scanning prior to boarding the main concourse.' },
        { id: 'food', title: 'External F&B', category: 'Dining', icon: Info, content: 'Outside food is not permitted except for medical requirements. Water stations are available across all tiers.' },
    ];

    const filteredPolicies = policies.filter(p =>
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.content.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="min-h-screen bg-[#030305] text-white font-sans">
            <nav className="p-8 sticky top-0 bg-[#030305]/80 backdrop-blur-xl z-50 border-b border-white/5">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <Link href="/" className="flex items-center gap-4 group">
                        <ArrowLeft className="w-5 h-5 text-neon-blue transition-transform group-hover:-translate-x-1" />
                        <span className="font-display font-black text-xl tracking-tighter uppercase text-white">CROWDFLOW</span>
                    </Link>
                    <div className="relative w-full max-w-sm hidden md:block">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20" />
                        <input
                            type="text"
                            placeholder="SEARCH GUIDE..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full bg-white/5 border border-white/10 rounded-full py-2.5 pl-12 pr-6 text-[10px] font-bold uppercase tracking-widest outline-none focus:border-neon-blue transition-all"
                        />
                    </div>
                </div>
            </nav>

            <main className="max-w-4xl mx-auto px-6 py-24">
                <div className="text-center mb-24">
                    <h1 className="font-display text-5xl md:text-7xl font-black uppercase mb-8">Guest <span className="text-neon-blue">Guide</span></h1>
                    <p className="text-white/30 text-lg">A-Z Repository for venue protocols and spatial integrity guidelines.</p>
                </div>

                <div className="space-y-4">
                    <AnimatePresence>
                        {filteredPolicies.map((policy, i) => (
                            <motion.div
                                key={policy.id}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.05 }}
                                className="group p-8 rounded-3xl bg-white/5 border border-white/5 hover:border-white/10 hover:bg-white/[0.07] transition-all"
                            >
                                <div className="flex items-start justify-between gap-6">
                                    <div className="flex items-start gap-6">
                                        <div className="w-12 h-12 rounded-2xl bg-black border border-white/5 flex items-center justify-center shrink-0">
                                            <policy.icon className="w-5 h-5 text-neon-blue" />
                                        </div>
                                        <div>
                                            <span className="text-[9px] font-bold text-neon-blue uppercase tracking-[0.2em] mb-2 block">{policy.category}</span>
                                            <h3 className="text-xl font-display font-black uppercase mb-4 text-white">{policy.title}</h3>
                                            <p className="text-sm text-white/40 leading-relaxed font-medium">{policy.content}</p>
                                        </div>
                                    </div>
                                    <ChevronDown className="w-5 h-5 text-white/10 group-hover:text-white transition-colors" />
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                <div className="mt-32 p-12 rounded-[3.5rem] bg-neon-blue/5 border border-neon-blue/10 flex flex-col md:flex-row items-center gap-10 justify-between">
                    <div>
                        <h4 className="text-2xl font-display font-black uppercase mb-4">Neural Signal Request</h4>
                        <p className="text-sm text-white/40 max-w-sm">Can't find a specific protocol? Send a query to our spatial support nodes.</p>
                    </div>
                    <Link href="/support">
                        <button className="px-10 py-5 bg-white text-black font-black uppercase text-[10px] tracking-widest rounded-2xl hover:bg-neon-blue transition-all">
                            Initialize Signal
                        </button>
                    </Link>
                </div>
            </main>
        </div>
    );
}
