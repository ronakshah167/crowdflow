'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, MessageSquare, Mail, Phone, MapPin, Send, Globe, ChevronRight } from 'lucide-react';
import Link from 'next/link';

export default function ContactFAQPage() {
    const faqs = [
        { q: "How does the real-time routing work?", a: "Our system uses neural-network heatmaps to predict crowd density. Navigation suggestions are updated every 42ms based on live sensor telemetry." },
        { q: "Is facial recognition used for safety?", a: "No. We process human movement as anonymous mathematical vectors. Raw biological data never enters our storage layer." },
        { q: "How do I upgrade to VIP access?", a: "VIP nodes are accessible via the 'Dining & VIP' portal. Level selection and premium seat allocation can be managed in the tickets section." },
        { q: "What happens in a network outage?", a: "All stadium nodes have local offline protocols. Emergency routing remains active through decentralized grid power." }
    ];

    return (
        <div className="min-h-screen bg-[#030305] text-white selection:bg-neon-blue selection:text-black">
            <nav className="p-8 sticky top-0 bg-[#030305]/80 backdrop-blur-xl z-50 border-b border-white/5">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <Link href="/" className="flex items-center gap-4 group">
                        <ArrowLeft className="w-5 h-5 text-neon-blue transition-transform group-hover:-translate-x-1" />
                        <span className="font-display font-black text-xl tracking-tighter uppercase">CROWDFLOW<span className="text-neon-blue">AI</span></span>
                    </Link>
                </div>
            </nav>

            <main className="max-w-7xl mx-auto px-6 py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-32">
                    {/* Contact Section */}
                    <div className="space-y-16">
                        <div>
                            <h1 className="text-5xl md:text-7xl font-display font-black uppercase mb-8 leading-tight">Connect with <br /> <span className="text-neon-blue">The Hub</span></h1>
                            <p className="text-white/30 text-lg max-w-md">Our coordination team is available for system integration requests and venue partnerships.</p>
                        </div>

                        <div className="space-y-8">
                            <div className="flex items-center gap-6 group cursor-pointer">
                                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-neon-blue transition-colors">
                                    <Mail className="w-5 h-5 text-neon-blue" />
                                </div>
                                <div>
                                    <span className="block text-[10px] font-bold text-white/20 uppercase tracking-widest mb-1">Direct Line</span>
                                    <p className="text-lg font-bold">ops@crowdflow.ai</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-6 group cursor-pointer">
                                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-neon-blue transition-colors">
                                    <Phone className="w-5 h-5 text-neon-blue" />
                                </div>
                                <div>
                                    <span className="block text-[10px] font-bold text-white/20 uppercase tracking-widest mb-1">Emergency Signal</span>
                                    <p className="text-lg font-bold">+1 (888) CFD-GRID</p>
                                </div>
                            </div>
                        </div>

                        <form className="space-y-6 pt-10 border-t border-white/5">
                            <div className="grid grid-cols-2 gap-6">
                                <input placeholder="NAME" className="bg-white/5 border border-white/10 rounded-2xl p-5 text-xs font-bold uppercase tracking-widest outline-none focus:border-neon-blue transition-colors" />
                                <input placeholder="EMAIL" className="bg-white/5 border border-white/10 rounded-2xl p-5 text-xs font-bold uppercase tracking-widest outline-none focus:border-neon-blue transition-colors" />
                            </div>
                            <textarea placeholder="MESSAGE" rows={4} className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 text-xs font-bold uppercase tracking-widest outline-none focus:border-neon-blue transition-colors" />
                            <button className="flex items-center gap-4 px-10 py-5 bg-white text-black font-black uppercase text-[10px] tracking-[0.2em] rounded-2xl hover:bg-neon-blue transition-all">
                                SEND SIGNAL <Send className="w-3 h-3" />
                            </button>
                        </form>
                    </div>

                    {/* FAQ Section */}
                    <div>
                        <h2 className="text-4xl font-display font-black uppercase mb-16 tracking-tight">System <span className="text-white/20">Knowledge</span></h2>
                        <div className="space-y-6">
                            {faqs.map((faq, i) => (
                                <div key={i} className="p-8 rounded-[2.5rem] bg-white/5 border border-white/5 group hover:border-white/10 transition-all">
                                    <h3 className="text-lg font-display font-bold uppercase mb-4 text-white/80 group-hover:text-neon-blue transition-colors">{faq.q}</h3>
                                    <p className="text-sm text-white/30 leading-relaxed font-medium">{faq.a}</p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-20 p-10 rounded-[3rem] bg-neon-blue/5 border border-neon-blue/10 flex flex-col md:flex-row items-center gap-8 justify-between">
                            <div className="flex items-center gap-6">
                                <div className="w-14 h-14 rounded-2xl bg-neon-blue/10 flex items-center justify-center">
                                    <MessageSquare className="w-6 h-6 text-neon-blue" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg">Still have questions?</h4>
                                    <p className="text-xs text-white/30 font-medium">Join our community neural link for real-time support.</p>
                                </div>
                            </div>
                            <button className="px-8 py-4 bg-white/5 border border-white/10 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all">
                                Join Discord
                            </button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
