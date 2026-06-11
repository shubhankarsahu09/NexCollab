import { useState } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Users, Briefcase, ChevronRight } from 'lucide-react';

export default function CreatorPitch({ onBack }: { onBack: () => void }) {
  const [handle, setHandle] = useState('');
  const [niche, setNiche] = useState<string[]>([]);
  const [goal, setGoal] = useState('More brand deals');

  const toggleNiche = (tag: string) => {
    setNiche(prev => prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]);
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans overflow-x-hidden selection:bg-white/20">
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 px-4 sm:px-6 py-4 mix-blend-difference pointer-events-none">
        <div className="flex items-center justify-between pointer-events-auto max-w-7xl mx-auto w-full">
          
          {/* Left: Brand Name */}
          <div className="flex-1 flex justify-start items-center gap-2 sm:gap-4">
            <span className="text-xl sm:text-2xl font-playfair italic font-bold">NexCollabs</span>
          </div>

          {/* Center: Sub Topics */}
          <div className="flex-1 flex justify-center items-center gap-3 sm:gap-8 text-xs sm:text-sm font-medium text-gray-400">
            <a href="#network" className="hover:text-white transition-colors">The Network</a>
            <a href="#apply" className="hover:text-white transition-colors hidden sm:block">Apply</a>
          </div>

          {/* Right: Contact Button & Back */}
          <div className="flex-1 flex justify-end items-center gap-4">
            <button onClick={() => document.getElementById('apply')?.scrollIntoView({ behavior: 'smooth' })} className="bg-white hover:bg-gray-200 text-black px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-colors shadow-sm whitespace-nowrap">
              Join Us
            </button>
            <button onClick={onBack} className="text-xs sm:text-sm font-medium hover:opacity-70 transition-opacity whitespace-nowrap">
              Back
            </button>
          </div>
          
        </div>
      </nav>

      {/* HERO HOOK: SPLIT SCREEN LOOPING DASHBOARD */}
      <section className="relative w-full min-h-[80vh] flex items-center justify-center overflow-hidden pt-24 pb-16">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full h-full object-cover opacity-40 mix-blend-screen"
          >
            <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260319_055001_8e16d972-3b2b-441c-86ad-2901a54682f9.mp4" type="video/mp4" />
          </video>
          {/* Deep dark gradient overlays to blend into the #050505 background below */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/20 via-[#050505]/60 to-[#050505]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-transparent to-[#050505] opacity-80" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center mt-20">

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] text-white">
            Focus on creating. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">We'll secure the boardrooms.</span>
          </h1>
          <p className="text-lg text-white/60 max-w-2xl mx-auto mt-6">
            Join an exclusive roster of top-tier talent. Let our dedicated negotiators secure the deals your reach deserves.
          </p>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32 pt-16">

        {/* WHAT YOU GET BENTO GRID */}
        <section className="mb-32">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-min">
            
            {/* Card 1: Invoicing & Legal */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="md:col-span-1 bg-zinc-900/40 backdrop-blur-xl border border-white/10 rounded-[32px] p-8 flex flex-col justify-between group overflow-hidden relative shadow-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/0 via-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="z-10">
                <ShieldCheck className="w-8 h-8 text-blue-400 mb-4 group-hover:text-blue-300 transition-colors" />
                <h3 className="text-2xl font-bold mb-2 tracking-tight">Invoicing & Legal</h3>
                <p className="text-gray-400 text-sm leading-relaxed">We chase the payments and red-line the contracts. You keep creating.</p>
              </div>
              
              {/* Loading Bar Micro-Animation */}
              <div className="mt-12 h-2 w-full bg-black/50 rounded-full overflow-hidden z-10 border border-white/5">
                <motion.div 
                  className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
                  initial={{ width: "20%" }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                  viewport={{ once: true }}
                />
              </div>
            </motion.div>

            {/* Card 2: Brand Rolodex */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="md:col-span-1 bg-gradient-to-br from-zinc-900/80 to-black backdrop-blur-xl border border-white/10 rounded-[32px] p-8 flex flex-col justify-between group relative overflow-hidden shadow-2xl"
            >
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent opacity-50" />
              <div className="z-10">
                <Briefcase className="w-8 h-8 text-purple-400 mb-4 group-hover:text-purple-300 transition-colors" />
                <h3 className="text-2xl font-bold mb-2 tracking-tight">Brand Rolodex</h3>
                <p className="text-gray-400 text-sm leading-relaxed">Direct lines to marketing directors at top-tier enterprise brands.</p>
              </div>

              {/* Stacked Blurred Logos */}
              <div className="absolute -bottom-10 -right-10 flex flex-col gap-4 opacity-40 group-hover:opacity-80 transition-opacity duration-500 blur-[2px] group-hover:blur-0 rotate-12">
                <div className="h-12 w-48 bg-white/10 rounded-xl border border-white/10" />
                <div className="h-12 w-48 bg-white/15 rounded-xl border border-white/10 -ml-8" />
                <div className="h-12 w-48 bg-white/20 rounded-xl border border-white/10 -ml-16" />
              </div>
            </motion.div>

            {/* Card 3: Dedicated Negotiators */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="md:col-span-1 bg-zinc-900/40 backdrop-blur-xl border border-white/10 rounded-[32px] p-8 flex flex-col justify-between group overflow-hidden relative shadow-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-tl from-green-500/0 via-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="z-10">
                <Users className="w-8 h-8 text-green-400 mb-4 group-hover:text-green-300 transition-colors" />
                <h3 className="text-2xl font-bold mb-2 tracking-tight">Expert Negotiators</h3>
                <p className="text-gray-400 text-sm leading-relaxed">An actual human fighting to double your baseline rates.</p>
              </div>
              <div className="absolute right-0 bottom-0 text-[120px] font-bold text-white/[0.02] -mb-8 -mr-4 group-hover:text-white/[0.05] transition-colors">
                $
              </div>
            </motion.div>

          </div>
        </section>

        {/* CREATOR APPLICATION FORM */}
        <section id="apply" className="mb-32 max-w-4xl mx-auto bg-zinc-900/40 backdrop-blur-3xl border border-white/10 p-8 md:p-12 rounded-[40px] relative shadow-2xl">
          <form onSubmit={(e) => { e.preventDefault(); alert('Application submitted!'); }} className="relative z-10 space-y-12">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Full Name */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-white/50">Full Name</label>
                <input 
                  type="text" 
                  placeholder="e.g. Jane Doe" 
                  className="w-full bg-zinc-800/50 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-purple-500 transition-colors text-white placeholder:text-white/20"
                  required 
                />
              </div>

              {/* Creator Handle */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-white/50">Creator Handle</label>
                <input 
                  type="text" 
                  placeholder="@username or URL" 
                  value={handle}
                  onChange={(e) => setHandle(e.target.value)}
                  className="w-full bg-zinc-800/50 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-purple-500 transition-colors text-white placeholder:text-white/20"
                  required 
                />
              </div>

              {/* Email Address */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-white/50">Email Address</label>
                <input 
                  type="email" 
                  placeholder="hello@creator.com" 
                  className="w-full bg-zinc-800/50 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-purple-500 transition-colors text-white placeholder:text-white/20"
                  required 
                />
              </div>

              {/* Follower Count */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-white/50">Follower Count</label>
                <input 
                  type="number" 
                  min="0"
                  placeholder="e.g. 500000" 
                  className="w-full bg-zinc-800/50 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-purple-500 transition-colors text-white placeholder:text-white/20"
                  required 
                />
              </div>
            </div>

            {/* Niche */}
            <div className="space-y-4">
              <label className="text-xs font-bold uppercase tracking-widest text-white/50">Primary Niche</label>
              <div className="flex flex-wrap gap-2">
                {['Tech', 'Gaming', 'Lifestyle', 'Finance', 'Beauty', 'Fitness', 'Education'].map(tag => (
                  <button
                    key={tag}
                    type="button"
                    onClick={() => toggleNiche(tag)}
                    className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-300 border ${
                      niche.includes(tag) 
                        ? 'bg-purple-600 border-purple-500 text-white shadow-[0_0_15px_rgba(168,85,247,0.4)]' 
                        : 'bg-zinc-800/50 border-white/10 text-white/60 hover:border-white/30'
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>

            {/* Goal */}
            <div className="space-y-4">
              <label className="text-xs font-bold uppercase tracking-widest text-white/50">Primary Goal</label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {['More brand deals', 'Higher rates', 'Long-term ambassadorships'].map(g => (
                  <button
                    key={g}
                    type="button"
                    onClick={() => setGoal(g)}
                    className={`p-3 text-sm font-semibold rounded-xl border transition-all duration-300 ${
                      goal === g 
                        ? 'bg-purple-600 border-purple-500 text-white shadow-[0_0_15px_rgba(168,85,247,0.4)]' 
                        : 'bg-zinc-800/50 border-white/10 text-white/60 hover:border-white/30'
                    }`}
                  >
                    {g}
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-8 border-t border-white/5">
              <button 
                type="submit"
                className="w-full bg-white text-black font-bold text-lg py-4 rounded-2xl transition-transform hover:scale-[1.02] shadow-xl flex justify-center items-center gap-3"
              >
                Submit Application <ChevronRight className="w-5 h-5" />
              </button>
            </div>

          </form>
        </section>

      </main>

      <footer className="py-8 text-center text-white/40 border-t border-white/10">
        <p className="text-sm font-semibold tracking-widest uppercase">NexCollabs Creator</p>
      </footer>
    </div>
  );
}
