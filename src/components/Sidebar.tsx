'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { LayoutDashboard, Map, Clock, User, Settings, ShieldAlert, BarChart3, LogOut } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

const navItems = [
    { href: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { href: '/hospitality', label: 'Hospitality', icon: BarChart3 },
    { href: '/tours', label: 'Arena Tours', icon: Map },
    { href: '/guide', label: 'Guest Guide', icon: ShieldAlert },
    { href: '/navigation', label: 'Navigation', icon: Clock },
    { href: '/admin', label: 'Admin Panel', icon: User },
];

export default function Sidebar() {
    const pathname = usePathname();

    return (
        <div className="w-64 border-r border-white/10 bg-background/50 backdrop-blur-xl h-screen sticky top-0 flex flex-col p-4 z-40">
            <div className="flex items-center gap-3 px-2 mb-10 mt-2">
                <div className="w-8 h-8 bg-neon-blue rounded flex items-center justify-center shadow-[0_0_15px_rgba(0,242,255,0.5)]">
                    <LayoutDashboard className="text-background w-5 h-5" />
                </div>
                <span className="font-display font-bold text-lg tracking-tight">Crowdflow</span>
            </div>

            <nav className="flex-1 space-y-2">
                {navItems.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                        <Link key={item.href} href={item.href}>
                            <motion.div
                                whileHover={{ x: 5 }}
                                className={cn(
                                    "flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 group relative",
                                    isActive
                                        ? "bg-neon-blue/10 text-neon-blue border border-neon-blue/20"
                                        : "text-gray-400 hover:text-white hover:bg-white/5"
                                )}
                            >
                                {isActive && (
                                    <motion.div
                                        layoutId="activeNav"
                                        className="absolute left-0 w-1 h-6 bg-neon-blue rounded-r-full"
                                    />
                                )}
                                <item.icon className={cn("w-5 h-5", isActive ? "text-neon-blue" : "group-hover:text-neon-blue transition-colors")} />
                                <span className="font-medium">{item.label}</span>
                            </motion.div>
                        </Link>
                    );
                })}
            </nav>

            <div className="mt-auto pt-4 border-t border-white/5 space-y-2">
                <Link href="/settings">
                    <div className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-all">
                        <Settings className="w-5 h-5" />
                        <span>Settings</span>
                    </div>
                </Link>
                <div className="flex items-center gap-3 px-4 py-3 rounded-lg text-red-400/70 hover:text-red-400 hover:bg-red-400/5 transition-all cursor-pointer">
                    <LogOut className="w-5 h-5" />
                    <span>Sign Out</span>
                </div>
            </div>
        </div>
    );
}
