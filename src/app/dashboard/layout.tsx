'use client';

import Sidebar from '@/components/Sidebar';
import { motion } from 'framer-motion';
import { Bell, Search, User } from 'lucide-react';

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex min-h-screen bg-background">
            <Sidebar />
            <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
                {/* Header */}
                <header className="h-16 border-b border-white/5 bg-background/30 backdrop-blur-md flex items-center justify-between px-8 sticky top-0 z-30">
                    <div className="flex items-center gap-4 bg-white/5 border border-white/10 px-4 py-2 rounded-full w-96">
                        <Search className="text-gray-500 w-4 h-4" />
                        <input
                            type="text"
                            placeholder="Search venue, stalls, or gates..."
                            className="bg-transparent border-none outline-none text-sm text-gray-300 w-full"
                        />
                    </div>

                    <div className="flex items-center gap-6">
                        <button className="relative w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors group">
                            <Bell className="w-5 h-5 text-gray-400 group-hover:text-neon-blue transition-colors" />
                            <span className="absolute top-2 right-2 w-2 h-2 bg-neon-blue rounded-full border-2 border-background" />
                        </button>
                        <div className="flex items-center gap-3 pl-4 border-l border-white/10">
                            <div className="text-right">
                                <p className="text-sm font-bold">Ronak Shah</p>
                                <p className="text-[10px] text-neon-blue font-mono uppercase">Premium Member</p>
                            </div>
                            <div className="w-10 h-10 rounded-full border border-neon-blue/50 p-0.5">
                                <div className="w-full h-full rounded-full bg-neon-blue/10 flex items-center justify-center">
                                    <User className="w-5 h-5 text-neon-blue" />
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Page Content */}
                <main className="flex-1 overflow-y-auto p-8">
                    {children}
                </main>
            </div>
        </div>
    );
}
