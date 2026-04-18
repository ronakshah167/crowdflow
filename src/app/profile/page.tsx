'use client';

import { motion } from 'framer-motion';
import { User, Mail, Shield, Bell, CreditCard, ChevronRight, Award, History, Settings, Zap } from 'lucide-react';
import DashboardLayout from '../dashboard/layout';

export default function ProfilePage() {
    const activities = [
        { event: 'Lakers vs Warriors', date: '2 hours ago', action: 'Entry Gate B', points: '+50' },
        { event: 'Concession Purchase', date: '1 hour ago', action: 'Prime Burgers', points: '+20' },
        { event: 'Route Optimization', date: '45 mins ago', action: 'Used FastPath', points: '+10' },
    ];

    return (
        <DashboardLayout>
            <div className="max-w-5xl mx-auto space-y-8">
                <div className="flex flex-col md:flex-row gap-8 items-start">
                    {/* Profile Identity */}
                    <div className="w-full md:w-80 space-y-6">
                        <div className="glass-card text-center relative overflow-hidden group">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink" />
                            <div className="mt-4 mb-6 relative inline-block">
                                <div className="w-24 h-24 rounded-3xl bg-neon-blue/10 border-2 border-neon-blue/30 p-1 group-hover:border-neon-blue transition-all duration-500">
                                    <div className="w-full h-full rounded-2xl bg-white/5 flex items-center justify-center">
                                        <User className="w-12 h-12 text-neon-blue" />
                                    </div>
                                </div>
                                <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-xl bg-background border border-neon-blue/30 flex items-center justify-center">
                                    <Award className="w-4 h-4 text-neon-blue" />
                                </div>
                            </div>
                            <h2 className="text-xl font-display font-bold">Ronak Shah</h2>
                            <p className="text-xs text-neon-blue font-mono font-bold uppercase tracking-widest mt-1">Elite Voyager</p>

                            <div className="grid grid-cols-2 gap-4 mt-8 pt-6 border-t border-white/5">
                                <div>
                                    <p className="text-[10px] text-gray-500 font-mono uppercase">Level</p>
                                    <p className="text-lg font-bold">42</p>
                                </div>
                                <div>
                                    <p className="text-[10px] text-gray-500 font-mono uppercase">XP</p>
                                    <p className="text-lg font-bold">8,421</p>
                                </div>
                            </div>
                        </div>

                        <div className="glass-card space-y-4">
                            <h3 className="text-xs font-mono text-gray-500 uppercase tracking-widest border-b border-white/5 pb-2">Quick Stats</h3>
                            <div className="flex justify-between items-center text-sm font-medium">
                                <span className="text-gray-400">Events Attended</span>
                                <span>24</span>
                            </div>
                            <div className="flex justify-between items-center text-sm font-medium">
                                <span className="text-gray-400">Route Efficiency</span>
                                <span className="text-neon-green">98%</span>
                            </div>
                            <div className="flex justify-between items-center text-sm font-medium">
                                <span className="text-gray-400">Time Saved</span>
                                <span className="text-neon-blue">12.4 hrs</span>
                            </div>
                        </div>
                    </div>

                    {/* Main Settings & History */}
                    <div className="flex-1 space-y-6">
                        <div className="glass-card">
                            <h3 className="font-display text-lg font-bold uppercase tracking-wider mb-6 flex items-center gap-2">
                                <Settings className="w-5 h-5 text-neon-blue" /> Personal Preferences
                            </h3>
                            <div className="space-y-6">
                                <div className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/5">
                                    <div className="flex gap-4 items-center">
                                        <Bell className="w-5 h-5 text-gray-400" />
                                        <div>
                                            <p className="text-sm font-bold">Smart Notifications</p>
                                            <p className="text-xs text-gray-500">Real-time alerts for congestion & fast routes.</p>
                                        </div>
                                    </div>
                                    <div className="w-12 h-6 bg-neon-blue rounded-full relative cursor-pointer">
                                        <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full" />
                                    </div>
                                </div>

                                <div className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/5">
                                    <div className="flex gap-4 items-center">
                                        <Shield className="w-5 h-5 text-gray-400" />
                                        <div>
                                            <p className="text-sm font-bold">Location Privacy</p>
                                            <p className="text-xs text-gray-500">Only share GPS data while inside the arena.</p>
                                        </div>
                                    </div>
                                    <div className="w-12 h-6 bg-white/10 rounded-full relative cursor-pointer">
                                        <div className="absolute left-1 top-1 w-4 h-4 bg-white/50 rounded-full" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="glass-card">
                            <div className="flex justify-between items-center mb-6">
                                <h3 className="font-display text-lg font-bold uppercase tracking-wider flex items-center gap-2">
                                    <History className="w-5 h-5 text-neon-purple" /> Recent Event Flow
                                </h3>
                                <button className="text-[10px] font-bold text-neon-blue uppercase tracking-widest hover:underline">View History</button>
                            </div>
                            <div className="space-y-4">
                                {activities.map((act, i) => (
                                    <div key={i} className="flex items-center justify-between p-4 rounded-xl hover:bg-white/5 transition-all border border-transparent hover:border-white/5 group">
                                        <div className="flex gap-4 items-center">
                                            <div className="w-10 h-10 rounded-lg bg-neon-purple/5 border border-neon-purple/20 flex items-center justify-center text-neon-purple">
                                                <Zap className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <p className="text-sm font-bold group-hover:text-white transition-colors">{act.event}</p>
                                                <p className="text-[10px] font-mono text-gray-500 uppercase tracking-tighter">{act.action} // {act.date}</p>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-sm font-bold text-neon-green">{act.points} XP</p>
                                            <ChevronRight className="w-4 h-4 text-gray-600 inline-block" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
}
