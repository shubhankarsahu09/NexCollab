import { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Target } from 'lucide-react';

export default function MainSite({ onBack }: { userType: 'creator' | 'brand', onBack: () => void }) {

  // Inbound Brief State
  const [briefState, setBriefState] = useState({
    objective: 'Brand Awareness',
    demographics: [] as string[]
  });

  const toggleDemo = (tag: string) => {
    setBriefState(prev => ({
      ...prev,
      demographics: prev.demographics.includes(tag) ? prev.demographics.filter(t => t !== tag) : [...prev.demographics, tag]
    }));
  };

  return (
    <div className="min-h-screen bg-[#f8f9fa] dark:bg-[#0a0a0a] text-gray-900 dark:text-white font-sans overflow-x-hidden selection:bg-blue-500/30">
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-black/50 backdrop-blur-xl border-b border-gray-200 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          
          {/* Left: Brand Name */}
          <div className="flex-1 flex justify-start items-center gap-2 sm:gap-4">
            <span className="text-xl sm:text-2xl font-playfair italic font-bold tracking-tight">NexCollabs</span>
          </div>

          {/* Center: Sub Topics */}
          <div className="flex-1 flex justify-center items-center gap-3 sm:gap-8 text-xs sm:text-sm font-medium text-gray-500 dark:text-gray-400">
            <a href="#platform" className="hover:text-black dark:hover:text-white transition-colors">Platform</a>
            <a href="#risk" className="hover:text-black dark:hover:text-white transition-colors hidden sm:block">Risk Mitigation</a>
          </div>

          {/* Right: Contact Button & Back */}
          <div className="flex-1 flex justify-end items-center gap-4">
            <button onClick={() => document.getElementById('brief')?.scrollIntoView({ behavior: 'smooth' })} className="bg-blue-600 hover:bg-blue-700 text-white px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-colors shadow-sm whitespace-nowrap">
              Launch Campaign
            </button>
            <button onClick={onBack} className="text-xs sm:text-sm font-medium hover:opacity-70 transition-opacity whitespace-nowrap">
              Back
            </button>
          </div>
          
        </div>
      </nav>

      {/* HERO: DATA FIRST HOOK */}
      <section id="platform" className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260424_064411_9e9d7f84-9277-41f4-ab10-59172d89e6be.mp4" type="video/mp4" />
          </video>
          {/* Overlay to ensure text readability */}
          <div className="absolute inset-0 bg-black/60 dark:bg-black/70 mix-blend-multiply" />
        </div>

        {/* Hero Content Container */}
        <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center gap-8 pt-32 pb-20">

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] text-white">
            The shortest distance between your product and their audience.
          </h1>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">
            Stop wasting hours scouting creators. Vetted creators. Guaranteed alignment. Zero friction. Launch campaigns in minutes.
          </p>
        </div>
      </section>

      <main className="py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-40">
        
        {/* RISK MITIGATION BENTO GRID */}
        <section id="risk" className="space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Zero guesswork. Zero risk.</h2>
            <p className="text-gray-600 dark:text-gray-400">We eliminate the fear of fake engagement and problematic creators by handling everything internally.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-min">
            
            {/* Vetted Roster (Col 1) */}
            <div className="md:col-span-1 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-xl border border-white/20 dark:border-white/5 rounded-[32px] p-8 flex flex-col items-center text-center space-y-8 shadow-xl relative overflow-hidden group">
               <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/0 via-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
               <motion.div 
                 animate={{ scale: [1, 1.05, 1] }} 
                 transition={{ repeat: Infinity, duration: 2 }}
                 className="w-16 h-16 rounded-2xl bg-blue-50 dark:bg-blue-500/10 flex items-center justify-center text-blue-600 dark:text-blue-400"
               >
                 <CheckCircle className="w-8 h-8" />
               </motion.div>
               <div className="relative z-10">
                 <h3 className="text-xl font-bold mb-3 tracking-tight">Verified Audit</h3>
                 <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">Every creator undergoes strict manual vetting for engagement authenticity and brand safety.</p>
               </div>
            </div>

            {/* Live Performance (Col 2 & 3) */}
            <div className="md:col-span-2 bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-[32px] p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden group">
               <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent opacity-50" />
               <div className="relative z-10">
                 <h3 className="text-2xl font-bold mb-3 tracking-tight text-white">Live Performance</h3>
                 <p className="text-sm text-gray-400 max-w-md">Track ROI and conversion spikes in real time with our enterprise dashboard.</p>
               </div>
               <div className="h-40 mt-8 relative w-full overflow-visible">
                 <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+CjxjaXJjbGUgY3g9IjEiIGN5PSIxIiByPSIxIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMSkiLz4KPC9zdmc+')] opacity-20" />
                 <svg className="w-full h-full overflow-visible relative z-10" preserveAspectRatio="none" viewBox="0 0 100 50">
                   <motion.path
                     d="M 0 45 C 20 40, 30 10, 50 25 C 70 35, 80 5, 100 0"
                     fill="none"
                     stroke="url(#gradient-line)"
                     strokeWidth="3"
                     strokeLinecap="round"
                     initial={{ pathLength: 0 }}
                     whileInView={{ pathLength: 1 }}
                     transition={{ duration: 2, ease: "easeInOut" }}
                   />
                   <defs>
                     <linearGradient id="gradient-line" x1="0%" y1="0%" x2="100%" y2="0%">
                       <stop offset="0%" stopColor="#3b82f6" />
                       <stop offset="100%" stopColor="#8b5cf6" />
                     </linearGradient>
                   </defs>
                 </svg>
               </div>
            </div>

            {/* End-to-End Execution (Col 1 to 3 spanning full width) */}
            <div className="md:col-span-3 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-xl border border-white/20 dark:border-white/5 rounded-[32px] p-8 flex flex-col md:flex-row items-center gap-12 shadow-xl">
               <div className="flex-1">
                 <h3 className="text-2xl font-bold mb-3 tracking-tight">End-to-End Execution</h3>
                 <p className="text-gray-500 dark:text-gray-400">From the initial brief to live reporting, we handle the entire lifecycle.</p>
               </div>
               <div className="flex-1 w-full flex items-center justify-between relative pt-8 md:pt-0">
                  <div className="absolute top-1/2 left-0 w-full h-px bg-gray-200 dark:bg-white/10 z-0 hidden md:block" />
                  {['Briefing', 'Contracting', 'Approval', 'Live'].map((step, i) => (
                    <div key={step} className="relative z-10 flex flex-col items-center gap-3">
                      <motion.div 
                        initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ delay: i * 0.2 }}
                        className="w-4 h-4 rounded-full bg-blue-500 border-4 border-white dark:border-zinc-900 shadow-sm"
                      />
                      <span className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">{step}</span>
                    </div>
                  ))}
               </div>
            </div>

          </div>
        </section>

        {/* INBOUND CAMPAIGN BRIEF FORM */}
        <section id="brief" className="max-w-4xl mx-auto bg-white/60 dark:bg-zinc-900/60 backdrop-blur-3xl border border-white/40 dark:border-white/10 rounded-[40px] p-8 md:p-16 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)] dark:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-px bg-gradient-to-r from-transparent via-white/80 dark:via-white/20 to-transparent" />
          
          <div className="text-center mb-12 relative z-10">
            <h2 className="text-4xl font-bold tracking-tight mb-4">Launch a Campaign</h2>
            <p className="text-gray-500 dark:text-gray-400 text-lg">Tell us about your brand and what you want to achieve.</p>
          </div>

          <form className="space-y-8 relative z-10" onSubmit={(e) => { e.preventDefault(); alert('Campaign brief submitted!'); }}>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Brand Name */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400">Brand Name</label>
                <input 
                  type="text" 
                  placeholder="e.g. Nike, Acme Corp" 
                  className="w-full bg-white dark:bg-zinc-800/50 border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 outline-none focus:border-blue-500 transition-colors text-gray-900 dark:text-white"
                  required 
                />
              </div>

              {/* Product */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400">Product or Service</label>
                <input 
                  type="text" 
                  placeholder="What are we promoting?" 
                  className="w-full bg-white dark:bg-zinc-800/50 border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 outline-none focus:border-blue-500 transition-colors text-gray-900 dark:text-white"
                  required 
                />
              </div>

              {/* Budget */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400">Budget ($ USD)</label>
                <input 
                  type="number" 
                  min="0"
                  placeholder="e.g. 50000" 
                  className="w-full bg-white dark:bg-zinc-800/50 border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 outline-none focus:border-blue-500 transition-colors text-gray-900 dark:text-white"
                  required 
                />
              </div>

              {/* Creator Type */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400">Creator Type Needed</label>
                <input 
                  type="text" 
                  placeholder="e.g. Tech Reviewers, Fashion Vloggers" 
                  className="w-full bg-white dark:bg-zinc-800/50 border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 outline-none focus:border-blue-500 transition-colors text-gray-900 dark:text-white"
                  required 
                />
              </div>
            </div>

            {/* Objective */}
            <div className="space-y-4">
              <label className="text-xs font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400">Campaign Objective</label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {['Brand Awareness', 'Product Launch', 'User Acquisition'].map(obj => (
                  <button
                    key={obj}
                    type="button"
                    onClick={() => setBriefState(prev => ({ ...prev, objective: obj }))}
                    className={`p-3 text-sm font-semibold rounded-xl border transition-all duration-300 ${briefState.objective === obj
                        ? 'bg-blue-600 border-blue-500 text-white shadow-md shadow-blue-500/20'
                        : 'bg-white/50 dark:bg-zinc-800/50 text-gray-600 dark:text-gray-300 border-gray-200 dark:border-white/10 hover:border-gray-300 dark:hover:border-white/20'
                      }`}
                  >
                    {obj}
                  </button>
                ))}
              </div>
            </div>

            {/* Target Audiences */}
            <div className="space-y-4">
              <label className="text-xs font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400">Target Audiences</label>
              <div className="flex flex-wrap gap-2">
                {['US', 'UK', 'India', 'Gen Z', 'Millennials', 'Gen X', 'Female-skewed', 'Male-skewed'].map(tag => (
                  <button
                    key={tag}
                    type="button"
                    onClick={() => toggleDemo(tag)}
                    className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-300 border ${briefState.demographics.includes(tag)
                        ? 'bg-blue-600 border-blue-500 text-white shadow-md shadow-blue-500/20'
                        : 'bg-white/50 dark:bg-zinc-800/50 text-gray-600 dark:text-gray-300 border-gray-200 dark:border-white/10 hover:border-gray-300 dark:hover:border-white/20'
                      }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-8 border-t border-gray-200/50 dark:border-white/5">
              <button
                type="submit"
                className="w-full bg-gray-900 dark:bg-white text-white dark:text-black font-bold text-lg py-4 rounded-2xl transition-transform hover:scale-[1.02] shadow-xl flex justify-center items-center gap-3"
              >
                Submit Campaign Brief <Target className="w-5 h-5" />
              </button>
            </div>
          </form>
        </section>

      </main>

      <footer className="py-8 text-center text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-white/10">
        <p className="text-sm font-semibold tracking-widest uppercase">NexCollabs Enterprise</p>
      </footer>
    </div>
  );
}
