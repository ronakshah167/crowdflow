'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Play, Shield, Zap, MapPin, Calendar, ChevronRight, Search, ArrowLeft, BarChart3 } from 'lucide-react';
import Link from 'next/link';
import CookieBanner from '@/components/CookieBanner';

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [selectedStadium, setSelectedStadium] = useState<string | null>(null);
  const [showSelector, setShowSelector] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const heroImages = [
    'https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1504450758481-7338eba7524a?auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1517603980112-9856cc6f5f3e?auto=format&fit=crop&q=80',
  ];

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    const imageTimer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    window.addEventListener('scroll', handleScroll);

    const saved = localStorage.getItem('selected-stadium');
    if (saved) setSelectedStadium(saved);
    else setShowSelector(true);

    return () => {
      clearTimeout(timer);
      clearInterval(imageTimer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleStadiumSelect = (name: string) => {
    setSelectedStadium(name);
    localStorage.setItem('selected-stadium', name);
    setShowSelector(false);
  };

  const upcomingEvents = [
    { id: 1, title: 'USA vs. Paraguay (FIFA World Cup 26™)', date: 'JUN 12, 2026', category: 'SOCCER', image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80' },
    { id: 2, title: 'IR Iran vs. New Zealand (FIFA World Cup 26™)', date: 'JUN 15, 2026', category: 'SOCCER', image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80' },
    { id: 3, title: 'BTS WORLD TOUR ‘ARIRANG’ - Night 1', date: 'SEP 01, 2026', category: 'CONCERT', image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80' },
    { id: 4, title: 'BTS WORLD TOUR ‘ARIRANG’ - Night 2', date: 'SEP 02, 2026', category: 'CONCERT', image: 'https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?auto=format&fit=crop&q=80' },
    { id: 5, title: 'Usher & Chris Brown: The R&B Tour', date: 'SEP 25, 2026', category: 'CONCERT', image: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&q=80' },
    { id: 6, title: 'Bruno Mars & Anderson .Paak', date: 'SEP 30, 2026', category: 'CONCERT', image: 'https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?auto=format&fit=crop&q=80' },
    { id: 7, title: 'FIFA World Cup 26™ - Round of 32', date: 'JUN 28, 2026', category: 'SOCCER', image: 'https://images.unsplash.com/photo-1504450758481-7338eba7524a?auto=format&fit=crop&q=80' },
    { id: 8, title: 'Korea Republic vs. TBD (FIFA World Cup 26™)', date: 'JUN 21, 2026', category: 'SOCCER', image: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?auto=format&fit=crop&q=80' },
  ];

  const trendingStadiums = [
    { name: 'Apex Arena', location: 'Los Angeles, USA', cap: '70,240' },
    { name: 'Wembley Stadium', location: 'London, UK', cap: '90,000' },
    { name: 'Camp Nou', location: 'Barcelona, Spain', cap: '99,354' },
    { name: 'Allianz Arena', location: 'Munich, Germany', cap: '75,024' },
    { name: 'Maracanã', location: 'Rio de Janeiro, Brazil', cap: '78,838' },
    { name: 'Nexus Stadium', location: 'Las Vegas, USA', cap: '65,000' },
  ];

  return (
    <div className="relative min-h-screen w-full bg-[#030305] text-white selection:bg-neon-blue selection:text-black">
      <CookieBanner />

      {/* Stadium Selector Modal */}
      <AnimatePresence>
        {showSelector && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[300] flex items-center justify-center p-6 bg-black/90 backdrop-blur-3xl"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              className="w-full max-w-4xl bg-white/5 border border-white/10 rounded-[3rem] p-12 overflow-hidden relative shadow-2xl"
            >
              <div className="relative z-10">
                <h2 className="font-display text-4xl md:text-6xl font-black uppercase mb-4 leading-tight">
                  Initialize <span className="text-neon-blue">Venue</span>
                </h2>
                <p className="text-white/40 text-sm md:text-base max-w-md mb-12 font-medium">
                  Select an operational hub to synchronize your spatial dashboard and event stream.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {trendingStadiums.map((s) => (
                    <button
                      key={s.name}
                      onClick={() => handleStadiumSelect(s.name)}
                      className="group p-6 rounded-3xl bg-black/40 border border-white/5 hover:border-neon-blue/40 hover:bg-neon-blue/5 transition-all text-left"
                    >
                      <h4 className="font-display font-bold text-lg uppercase mb-1 group-hover:text-neon-blue transition-colors outline-none">{s.name}</h4>
                      <p className="text-[9px] text-white/20 font-black uppercase tracking-widest">{s.location}</p>
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Loading Screen */}
      <AnimatePresence>
        {loading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center bg-[#030305]"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <div className="w-16 h-16 border-t-2 border-neon-blue rounded-full animate-spin mb-6 mx-auto" />
              <h2 className="font-display text-xl tracking-[0.2em] text-white uppercase opacity-50">Configuring Intelligence...</h2>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Header */}
      <nav className="fixed top-0 left-0 right-0 z-50 p-6 md:p-10">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="w-10 h-10 bg-neon-blue rounded flex items-center justify-center shadow-[0_0_20px_rgba(0,242,255,0.4)] group-hover:scale-110 transition-transform">
              <BarChart3 className="text-background w-6 h-6" />
            </div>
            <span className="font-display font-black text-2xl tracking-tighter uppercase transition-colors group-hover:text-neon-blue">
              CROWDFLOW
            </span>
          </div>

          <div className="hidden lg:flex items-center gap-12 text-[10px] font-bold uppercase tracking-[0.2em] text-white/50 bg-black/40 backdrop-blur-md px-10 py-5 rounded-full border border-white/5">
            <Link href="/guide" className="hover:text-neon-blue transition-colors">Guest Guide</Link>
            <Link href="/hospitality" className="hover:text-neon-blue transition-colors">Hospitality</Link>
            <Link href="/tours" className="hover:text-neon-blue transition-colors">Tours</Link>
            <Link href="/support" className="hover:text-neon-blue transition-colors">Support</Link>
          </div>

          <div className="flex items-center gap-6">
            <Link href="/login" className="text-[10px] font-bold uppercase tracking-widest text-white/50 hover:text-white transition-colors">Login</Link>
            <Link href="/dashboard">
              <button className="px-8 py-3 bg-white text-background font-bold rounded-full text-[10px] uppercase tracking-widest hover:bg-neon-blue hover:text-white transition-all shadow-xl">
                Dashboard
              </button>
            </Link>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero Section with Image Carousel */}
        <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentImageIndex}
                src={heroImages[currentImageIndex]}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 0.6, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 1.5 }}
                className="w-full h-full object-cover brightness-50"
              />
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-[#030305] z-10" />
          </div>

          <div className="relative z-20 container mx-auto px-6 text-center max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <div className="mb-8 inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-white/5 bg-white/5 backdrop-blur-md">
                <span className="text-white/40 text-[9px] font-bold uppercase tracking-[0.2em]">Next-Generation Spatial Intelligence</span>
              </div>

              <h1 className="font-display text-5xl md:text-[7rem] font-black mb-10 tracking-tighter leading-[0.85] uppercase">
                Stadium <br />
                <span className="text-neon-blue drop-shadow-[0_0_30px_rgba(0,242,255,0.4)]">Intelligence Feed</span>
              </h1>

              {/* Functional Search Bar */}
              <div className="max-w-2xl mx-auto mb-12 relative group">
                <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-white/20 group-focus-within:text-neon-blue transition-colors" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search Events, Venues, or Seating Protocols..."
                  className="w-full bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl py-5 pl-16 pr-6 text-sm font-bold uppercase tracking-widest outline-none focus:border-neon-blue transition-all"
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-5 justify-center">
                <Link href="/arena">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-10 py-5 bg-neon-blue text-black font-black rounded-2xl text-[11px] uppercase tracking-[0.2em] shadow-[0_0_50px_rgba(0,242,255,0.15)] hover:shadow-[0_0_70px_rgba(0,242,255,0.3)] transition-all flex items-center justify-center gap-3"
                  >
                    Enter Arena <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </Link>

                <Link href="/tickets">
                  <motion.button
                    whileHover={{ scale: 1.02, backgroundColor: 'rgba(255,255,255,0.05)' }}
                    whileTap={{ scale: 0.98 }}
                    className="px-10 py-5 border border-white/5 text-white font-black rounded-2xl text-[11px] uppercase tracking-[0.2em] backdrop-blur-xl flex items-center justify-center gap-3 transition-all"
                  >
                    Secure Tickets <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Metrics Section */}
        <section className="relative z-20 py-24 bg-[#030305]">
          <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 max-w-6xl">
            {[
              { label: 'Latency', value: '42ms', desc: 'Sync Active' },
              { label: 'Precision', value: '99.9%', desc: 'Spatial Lock' },
              { label: 'Network', value: '6G-Ready', desc: 'Ultra-Band' },
              { label: 'Uptime', value: '24/7', desc: 'Neural Mode' },
            ].map((stat, i) => (
              <div key={i} className="text-center group">
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/20 mb-3 group-hover:text-neon-blue transition-colors outline-none">{stat.label}</p>
                <div className="text-4xl md:text-5xl font-display font-black mb-1">{stat.value}</div>
                <p className="text-[10px] text-white/10 font-medium uppercase tracking-[0.1em]">{stat.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Features Grid */}
        <section className="relative z-20 py-32 bg-[#030305]">
          <div className="container mx-auto max-w-6xl px-6 grid grid-cols-1 md:grid-cols-3 gap-16">
            <div className="flex flex-col items-start gap-6 group">
              <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-neon-blue/40 group-hover:bg-neon-blue/5 transition-all duration-500">
                <Zap className="w-6 h-6 text-neon-green" />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold uppercase tracking-wider mb-4 group-hover:text-neon-blue transition-colors">Real-Time Fluidity</h3>
                <p className="text-white/30 text-sm leading-relaxed">Autonomous routing engine that predicts congestion before it forms.</p>
              </div>
            </div>
            <div className="flex flex-col items-start gap-6 group">
              <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-neon-blue/40 group-hover:bg-neon-blue/5 transition-all duration-500">
                <MapPin className="w-6 h-6 text-neon-blue" />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold uppercase tracking-wider mb-4 group-hover:text-neon-blue transition-colors">Spatial Intel</h3>
                <p className="text-white/30 text-sm leading-relaxed">High-fidelity mapping with interactive indoor navigation systems.</p>
              </div>
            </div>
            <div className="flex flex-col items-start gap-6 group">
              <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-neon-blue/40 group-hover:bg-neon-blue/5 transition-all duration-500">
                <Shield className="w-6 h-6 text-neon-purple" />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold uppercase tracking-wider mb-4 group-hover:text-neon-blue transition-colors">Proactive Safety</h3>
                <p className="text-white/30 text-sm leading-relaxed">Automated emergency protocols integrated into stadium hardware.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Upcoming Events Section */}
        <section className="relative z-20 py-32 px-6 bg-[#030305]">
          <div className="container mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-20 text-center md:text-left"
            >
              <div className="flex items-center justify-center md:justify-start gap-4 mb-6">
                <div className="h-[2px] w-12 bg-neon-blue" />
                <span className="text-neon-blue font-display text-xs font-bold uppercase tracking-[0.3em]">Live Architecture Feed</span>
              </div>
              <h2 className="font-display text-4xl md:text-7xl font-black uppercase mb-6 leading-tight">
                Upcoming <br className="hidden md:block" /> <span className="text-neon-blue">Architecture</span>
              </h2>
              <p className="text-white/30 max-w-2xl text-sm md:text-base leading-relaxed">
                Witness the convergence of technology and entertainment at our curated venue ecosystem.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {upcomingEvents.map((event, i) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="group relative bg-white/5 rounded-[2.5rem] p-4 border border-white/5 hover:border-white/10 transition-all duration-500"
                >
                  <div className="relative h-56 rounded-[2rem] overflow-hidden mb-6">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                    <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/10">
                      <span className="text-[9px] text-white font-bold tracking-widest uppercase">{event.category}</span>
                    </div>
                  </div>
                  <div className="px-4 pb-4">
                    <div className="flex items-center gap-2 text-neon-blue text-[10px] font-bold uppercase tracking-widest mb-3">
                      <Calendar className="w-3 h-3" />
                      {event.date}
                    </div>
                    <h3 className="text-lg font-display font-bold mb-6 line-clamp-2 h-14 group-hover:text-neon-blue transition-colors leading-tight">{event.title}</h3>
                    <button className="w-full py-4 rounded-2xl bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-[0.2em] group-hover:bg-white group-hover:text-black transition-all">
                      Secure Token
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="relative z-20 py-20 px-6 border-t border-white/5 bg-[#030305]">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-16">
            <div className="max-w-md">
              <h2 className="font-display font-black text-3xl tracking-tighter mb-8 uppercase">
                CROWDFLOW<span className="text-neon-blue">AI</span>
              </h2>
              <p className="text-white/20 text-sm leading-relaxed mb-8">
                A spatial intelligence laboratory dedicated to the optimization of physical environments through neural-network infrastructure.
              </p>
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center hover:border-white transition-colors cursor-pointer">
                  <div className="w-2 h-2 bg-white rounded-full" />
                </div>
                <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center hover:border-white transition-colors cursor-pointer">
                  <div className="w-2 h-2 bg-white rounded-full" />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-12 text-[10px] font-bold uppercase tracking-[0.2em] text-white/30">
              <div className="space-y-4">
                <div className="text-white mb-6">Architecture</div>
                <Link href="/arena" className="block hover:text-neon-blue">Neural Map</Link>
                <Link href="/dining" className="block hover:text-neon-blue">Utility Nodes</Link>
                <Link href="/parking" className="block hover:text-neon-blue">Access Points</Link>
              </div>
              <div className="space-y-4">
                <div className="text-white mb-6">Protocol</div>
                <Link href="/privacy" className="block hover:text-neon-blue">Privacy v1.0</Link>
                <Link href="/cookies" className="block hover:text-neon-blue">Data Cookie</Link>
                <Link href="/support" className="block hover:text-neon-blue">Support Hub</Link>
              </div>
              <div className="hidden md:block">
                <div className="text-white mb-6">Status</div>
                <div className="text-white/10 font-bold uppercase tracking-widest">Global Network Active</div>
              </div>
            </div>
          </div>
          <div className="max-w-7xl mx-auto mt-20 pt-10 border-t border-white/5 text-[9px] font-bold uppercase tracking-[0.3em] text-white/10 text-center md:text-left">
            © 2026 CROWDFLOW LABORATORIES — LAT-34° LON-118°
          </div>
        </footer>
      </main>

      {/* OS Decor */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none border-[1px] border-white/5 m-4 rounded-[3rem] z-[60] hidden md:block opacity-30" />
    </div>
  );
}
