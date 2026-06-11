import { useEffect, useRef, useState } from 'react';
import { Menu, Sparkles, Building2, ArrowRight } from 'lucide-react';
import MainSite from './MainSite';
import CreatorPitch from './CreatorPitch';
import content from './content.json';

const BG_IMAGE_1 = "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260609_195923_b0ba8ace-1d1d-4f2c-9a28-1ab84b330680.png&w=1280&q=85";
const BG_IMAGE_2 = "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260609_201152_bba90a12-bf12-459f-91f0-51f237dbaf3b.png&w=1280&q=85";

const SPOTLIGHT_R = 260;



function RevealLayer({ image, cursorX, cursorY }: { image: string, cursorX: number, cursorY: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [maskDataUrl, setMaskDataUrl] = useState<string>('');

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();

    window.addEventListener('resize', resizeCanvas);
    return () => window.removeEventListener('resize', resizeCanvas);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (cursorX === -999 && cursorY === -999) {
      setMaskDataUrl(canvas.toDataURL());
      return;
    }

    const gradient = ctx.createRadialGradient(cursorX, cursorY, 0, cursorX, cursorY, SPOTLIGHT_R);
    gradient.addColorStop(0, 'rgba(255,255,255,1)');
    gradient.addColorStop(0.4, 'rgba(255,255,255,1)');
    gradient.addColorStop(0.6, 'rgba(255,255,255,0.75)');
    gradient.addColorStop(0.75, 'rgba(255,255,255,0.4)');
    gradient.addColorStop(0.88, 'rgba(255,255,255,0.12)');
    gradient.addColorStop(1, 'rgba(255,255,255,0)');

    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(cursorX, cursorY, SPOTLIGHT_R, 0, Math.PI * 2);
    ctx.fill();

    setMaskDataUrl(canvas.toDataURL());
  }, [cursorX, cursorY]);

  return (
    <>
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" style={{ display: 'none' }} />
      <div 
        className="absolute inset-0 bg-center bg-cover bg-no-repeat z-30 pointer-events-none"
        style={{
          backgroundImage: `url('${image}')`,
          maskImage: maskDataUrl ? `url(${maskDataUrl})` : 'none',
          WebkitMaskImage: maskDataUrl ? `url(${maskDataUrl})` : 'none',
          maskSize: '100% 100%',
          WebkitMaskSize: '100% 100%',
          maskRepeat: 'no-repeat',
          WebkitMaskRepeat: 'no-repeat'
        }}
      />
    </>
  );
}

function HeroPage({ onStart }: { onStart: () => void }) {
  const [cursorPos, setCursorPos] = useState({ x: -999, y: -999 });
  const mouse = useRef({ x: -999, y: -999 });
  const smooth = useRef({ x: -999, y: -999 });
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      if (smooth.current.x === -999) {
        smooth.current = { x: e.clientX, y: e.clientY };
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    const updateCursor = () => {
      if (smooth.current.x !== -999) {
        smooth.current.x += (mouse.current.x - smooth.current.x) * 0.1;
        smooth.current.y += (mouse.current.y - smooth.current.y) * 0.1;
        setCursorPos({ x: smooth.current.x, y: smooth.current.y });
      }
      rafRef.current = requestAnimationFrame(updateCursor);
    };
    rafRef.current = requestAnimationFrame(updateCursor);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white tracking-[-0.02em]" style={{ fontFamily: "'Inter', sans-serif" }}>
      <nav className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between p-4 sm:p-5">
        <div className="flex items-center gap-2">
          <svg width="26" height="26" viewBox="0 0 256 256" fill="#ffffff" xmlns="http://www.w3.org/2000/svg">
            <path d="M 256 256 L 128 256 L 0 128 L 128 128 Z M 256 128 L 128 128 L 0 0 L 128 0 Z" />
          </svg>
          <span className="text-white text-2xl font-playfair italic">{content.brand.logoText}</span>
        </div>





        <div className="md:hidden">
          <Menu className="text-white w-6 h-6" />
        </div>
      </nav>

      <section className="relative w-full overflow-hidden h-screen bg-black" style={{ height: '100dvh' }}>
        {/* Base Image Layer */}
        <div 
          className="absolute inset-0 bg-center bg-cover bg-no-repeat z-10 hero-zoom"
          style={{ backgroundImage: `url('${BG_IMAGE_1}')` }}
        />

        {/* Reveal Layer */}
        <RevealLayer image={BG_IMAGE_2} cursorX={cursorPos.x} cursorY={cursorPos.y} />

        {/* Heading */}
        <h1 className="absolute top-[14%] left-0 right-0 flex flex-col items-center text-center px-5 pointer-events-none z-50 text-white leading-[0.95]">
          <span className="block font-playfair italic font-normal text-5xl sm:text-7xl md:text-8xl hero-anim hero-reveal" style={{ letterSpacing: '-0.05em', animationDelay: '0.25s' }}>
            {content.landing.headingLine1}
          </span>
          <span className="block font-normal text-5xl sm:text-7xl md:text-8xl -mt-1 hero-anim hero-reveal" style={{ letterSpacing: '-0.08em', animationDelay: '0.42s' }}>
            {content.landing.headingLine2}
          </span>
        </h1>

        {/* Bottom Left Paragraph */}
        <div className="hidden sm:block absolute bottom-14 left-10 md:left-14 max-w-[260px] z-50 hero-anim hero-fade" style={{ animationDelay: '0.7s' }}>
          <p className="text-sm text-white/80 leading-relaxed">
            {content.landing.paragraphLeft}
          </p>
        </div>

        {/* Bottom Right Block */}
        <div className="absolute bottom-10 sm:bottom-24 left-5 right-5 sm:left-auto sm:right-10 md:right-14 max-w-full sm:max-w-[260px] flex flex-col items-start gap-4 sm:gap-5 z-50 hero-anim hero-fade" style={{ animationDelay: '0.85s' }}>
          <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
            {content.landing.paragraphRight}
          </p>
          <button 
            onClick={onStart}
            className="bg-[#e8702a] hover:bg-[#d2611f] text-white text-sm font-medium px-7 py-3 rounded-full transition-all hover:scale-[1.03] active:scale-95 hover:shadow-lg hover:shadow-[#e8702a]/30"
          >
            {content.landing.buttonText}
          </button>
        </div>
      </section>
    </div>
  );
}

function PortalPage({ onSelect, onBack }: { onSelect: (type: 'creator' | 'brand') => void, onBack: () => void }) {
  const [hoveredSide, setHoveredSide] = useState<'creator' | 'brand' | null>(null);

  return (
    <div className="min-h-screen bg-black tracking-[-0.02em] overflow-hidden" style={{ fontFamily: "'Inter', sans-serif" }}>
      {/* Global Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-[100] p-4 sm:p-6 md:p-8 pointer-events-none">
        <div className="flex items-center justify-between max-w-7xl mx-auto w-full">
          
          {/* Left: Brand Name */}
          <div className="flex-1 flex justify-start items-center gap-2 pointer-events-auto mix-blend-difference text-white">
            <svg width="24" height="24" viewBox="0 0 256 256" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 sm:w-7 sm:h-7">
              <path d="M 256 256 L 128 256 L 0 128 L 128 128 Z M 256 128 L 128 128 L 0 0 L 128 0 Z" />
            </svg>
            <span className="text-xl sm:text-2xl font-playfair italic font-semibold">{content.brand.logoText}</span>
          </div>

          {/* Center: Sub Topic */}
          <div className="flex-1 flex justify-center items-center pointer-events-auto mix-blend-difference text-white opacity-80">
            <span className="text-xs sm:text-sm font-medium tracking-widest uppercase">Select Portal</span>
          </div>

          {/* Right: Back Button */}
          <div className="flex-1 flex justify-end items-center pointer-events-auto mix-blend-difference">
            <button onClick={onBack} className="text-xs sm:text-sm font-medium text-white hover:opacity-70 transition-opacity whitespace-nowrap">
              Back
            </button>
          </div>

        </div>
      </nav>

      {/* Split Screen Layout */}
      <main className="flex flex-col md:flex-row w-full h-[100dvh]">
        
        {/* Creator Side */}
        <section 
          onMouseEnter={() => setHoveredSide('creator')}
          onMouseLeave={() => setHoveredSide(null)}
          className={`relative flex flex-col justify-center items-center p-10 cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden
            ${hoveredSide === 'creator' ? 'md:w-[60%] bg-[#0f0f11]' : hoveredSide === 'brand' ? 'md:w-[40%] bg-black' : 'md:w-1/2 bg-[#050505]'}
            h-1/2 md:h-full border-b md:border-b-0 md:border-r border-white/10 group`}
        >
          {/* Subtle Glow Effect */}
          <div className={`absolute inset-0 bg-gradient-to-tr from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
          
          <div className="relative z-10 flex flex-col items-center text-center max-w-md">
            <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-purple-500/20 group-hover:border-purple-500/30 transition-all duration-500">
              <Sparkles className="w-8 h-8 text-white group-hover:text-purple-400 transition-colors duration-500" />
            </div>
            
            <h1 className="font-playfair italic text-5xl md:text-7xl text-white mb-4 tracking-[-0.05em] group-hover:-translate-y-2 transition-transform duration-500">
              For Creators
            </h1>
            
            <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-10 opacity-70 group-hover:opacity-100 group-hover:-translate-y-1 transition-all duration-500 delay-75">
              Unlock your potential. Join an exclusive network of top-tier talent and collaborate with the world's leading brands on your terms.
            </p>

            <button onClick={() => onSelect('creator')} className="flex items-center gap-2 bg-white text-black px-8 py-3.5 rounded-full font-semibold text-sm transition-all duration-500 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]">
              Apply as Creator <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </section>

        {/* Brand Side */}
        <section 
          onMouseEnter={() => setHoveredSide('brand')}
          onMouseLeave={() => setHoveredSide(null)}
          className={`relative flex flex-col justify-center items-center p-10 cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden
            ${hoveredSide === 'brand' ? 'md:w-[60%] bg-[#0a0f18]' : hoveredSide === 'creator' ? 'md:w-[40%] bg-black' : 'md:w-1/2 bg-[#080808]'}
            h-1/2 md:h-full group`}
        >
          {/* Subtle Glow Effect */}
          <div className={`absolute inset-0 bg-gradient-to-bl from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />

          <div className="relative z-10 flex flex-col items-center text-center max-w-md">
            <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-blue-500/20 group-hover:border-blue-500/30 transition-all duration-500">
              <Building2 className="w-8 h-8 text-white group-hover:text-blue-400 transition-colors duration-500" />
            </div>
            
            <h1 className="font-playfair italic text-5xl md:text-7xl text-white mb-4 tracking-[-0.05em] group-hover:-translate-y-2 transition-transform duration-500">
              For Brands
            </h1>
            
            <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-10 opacity-70 group-hover:opacity-100 group-hover:-translate-y-1 transition-all duration-500 delay-75">
              Scale your vision. Discover and hire authentic creators who can elevate your brand's narrative and drive impactful results.
            </p>

            <button onClick={() => onSelect('brand')} className="flex items-center gap-2 bg-blue-600 text-white px-8 py-3.5 rounded-full font-semibold text-sm transition-all duration-500 hover:scale-105 hover:bg-blue-500 hover:shadow-[0_0_20px_rgba(37,99,235,0.4)]">
              Hire Talent <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </section>

      </main>
    </div>
  );
}

export default function App() {
  const [currentPage, setCurrentPage] = useState<'hero' | 'portal' | 'main'>('hero');
  const [userType, setUserType] = useState<'creator' | 'brand'>('creator');

  return (
    <>
      {currentPage === 'hero' && (
        <HeroPage onStart={() => setCurrentPage('portal')} />
      )}
      {currentPage === 'portal' && (
        <PortalPage 
          onSelect={(type) => {
            setUserType(type);
            setCurrentPage('main');
          }} 
          onBack={() => setCurrentPage('hero')}
        />
      )}
      {currentPage === 'main' && userType === 'creator' && (
        <CreatorPitch onBack={() => setCurrentPage('portal')} />
      )}
      {currentPage === 'main' && userType === 'brand' && (
        <MainSite userType={userType} onBack={() => setCurrentPage('portal')} />
      )}
    </>
  );
}
