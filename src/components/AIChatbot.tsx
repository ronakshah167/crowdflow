'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Bot, User, ChevronRight } from 'lucide-react';

export default function AIChatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { role: 'bot', content: 'Welcome to Crowdflow. I am your spatial intelligence co-pilot. How can I assist your navigation today?' }
    ]);
    const [input, setInput] = useState('');

    const handleSend = (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim()) return;

        const newMessages = [...messages, { role: 'user', content: input }];
        setMessages(newMessages);
        setInput('');

        // Simple bot logic
        setTimeout(() => {
            let reply = "I'm analyzing the stadium grid for your request...";
            const q = input.toLowerCase();
            if (q.includes('washroom') || q.includes('toilet')) reply = "You can find the nearest washrooms in the Dashboard under 'Utility Nodes' or by searching 'Washroom' in the 3D Map.";
            if (q.includes('food') || q.includes('restaurant') || q.includes('eat')) reply = "The Dining portal or the Dashboard 'Live Sustenance' module shows real-time wait times for all food stalls.";
            if (q.includes('ticket')) reply = "Tickets can be secured via the 'Buy Tickets' protocol in the main navigation.";
            if (q.includes('dashboard')) reply = "The Dashboard is your command center for live 3D mapping and real-time crowd analytics.";

            setMessages([...newMessages, { role: 'bot', content: reply }]);
        }, 1000);
    };

    return (
        <div className="fixed bottom-10 right-10 z-[100]">
            <AnimatePresence>
                {isOpen ? (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="w-[380px] h-[500px] bg-black/90 backdrop-blur-3xl border border-white/10 rounded-[2.5rem] shadow-3xl flex flex-col overflow-hidden mb-6"
                    >
                        {/* Header */}
                        <div className="p-6 border-b border-white/5 flex items-center justify-between bg-white/5">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-neon-blue flex items-center justify-center">
                                    <Bot className="w-5 h-5 text-black" />
                                </div>
                                <div>
                                    <h4 className="text-[10px] font-black uppercase text-white/20 tracking-widest mb-0.5">CrowdFlow Support</h4>
                                    <p className="text-xs font-bold uppercase tracking-tight">AI Co-Pilot v2.0</p>
                                </div>
                            </div>
                            <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-white/5 rounded-full transition-colors">
                                <X className="w-4 h-4 text-white/40" />
                            </button>
                        </div>

                        {/* Messages */}
                        <div className="flex-1 overflow-y-auto p-6 space-y-6 custom-scrollbar">
                            {messages.map((m, i) => (
                                <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                    <div className={`max-w-[80%] p-4 rounded-2xl text-[13px] font-medium leading-relaxed ${m.role === 'user' ? 'bg-neon-blue text-black' : 'bg-white/5 border border-white/10 text-white/80'}`}>
                                        {m.content}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Input */}
                        <form onSubmit={handleSend} className="p-6 border-t border-white/5 bg-white/5 flex gap-3">
                            <input
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                placeholder="Type a message..."
                                className="flex-1 bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-xs outline-none focus:border-neon-blue transition-colors"
                            />
                            <button type="submit" className="w-10 h-10 rounded-xl bg-neon-blue flex items-center justify-center text-black">
                                <Send className="w-4 h-4" />
                            </button>
                        </form>
                    </motion.div>
                ) : null}
            </AnimatePresence>

            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-16 h-16 rounded-full bg-neon-blue shadow-[0_0_40px_rgba(0,242,255,0.3)] flex items-center justify-center text-black hover:scale-110 active:scale-95 transition-all"
            >
                <MessageSquare className="w-6 h-6" />
            </button>
        </div>
    );
}
