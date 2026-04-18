'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie, X, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

export default function CookieBanner() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem('cookie-consent');
        if (!consent) {
            const timer = setTimeout(() => setIsVisible(true), 2000);
            return () => clearTimeout(timer);
        }
    }, []);

    const acceptCookies = () => {
        localStorage.setItem('cookie-consent', 'accepted');
        setIsVisible(false);
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    className="fixed bottom-6 right-6 z-[100] w-full max-w-md"
                >
                    <div className="mx-6 md:mx-0 p-6 bg-black/80 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-2xl overflow-hidden relative group">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-blue animate-gradient-x" />

                        <div className="flex gap-5">
                            <div className="w-12 h-12 rounded-2xl bg-neon-blue/10 flex items-center justify-center shrink-0 border border-neon-blue/20">
                                <Cookie className="w-6 h-6 text-neon-blue" />
                            </div>

                            <div className="flex-1">
                                <h3 className="text-white font-bold text-lg mb-2 flex items-center gap-2">
                                    Cookie Protocol <ShieldCheck className="w-4 h-4 text-white/40" />
                                </h3>
                                <p className="text-white/50 text-xs leading-relaxed mb-6">
                                    Our neural network uses diagnostic identifiers to optimize your spatial experience.
                                    By continuing, you authorize the deployment of these nodes. Read our
                                    <Link href="/privacy" className="text-neon-blue hover:underline ml-1">Privacy Architecture</Link>.
                                </p>

                                <div className="flex gap-3">
                                    <button
                                        onClick={acceptCookies}
                                        className="flex-1 px-4 py-2.5 bg-white text-black font-bold rounded-xl text-[10px] uppercase tracking-widest hover:bg-neon-blue transition-all"
                                    >
                                        Authorize All
                                    </button>
                                    <button
                                        onClick={() => setIsVisible(false)}
                                        className="px-4 py-2.5 border border-white/10 text-white/50 font-bold rounded-xl text-[10px] uppercase tracking-widest hover:bg-white/5 transition-all"
                                    >
                                        Decline
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
