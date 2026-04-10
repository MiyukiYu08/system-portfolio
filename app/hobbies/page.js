"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import gsap from 'gsap';

export default function Hobbies() {
  // State to handle the Lightbox (Zoom) feature
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    // Clean entrance animation
    gsap.fromTo(
      ".stagger-in",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1.2, stagger: 0.15, ease: "power3.out" }
    );
    
    // Subtle background animation for the massive watermark texture
    gsap.to(".background-watermark", {
      rotation: 360,
      duration: 600, // extremely slow rotation
      repeat: -1,
      ease: "none"
    });
    
    // Animate the fading code text overlay
    gsap.to(".fading-code", {
      opacity: 0.6,
      duration: 4,
      yoyo: true,
      repeat: -1,
      ease: "sine.inOut",
      stagger: 1
    });

  }, []);

  // ==============================================================================================
  // DATA DUMP ARRAY - Structure for the 4x2 grid at the bottom
  // ==============================================================================================
  const gridImages = [
    { src: '/lib1.png', alt: 'Archive 1' },
    { src: '/lib2.png', alt: 'Archive 2' },
    { src: '/lib3.png', alt: 'Archive 3' },
    { src: '/lib4.png', alt: 'Archive 4' },
    { src: '/lib5.png', alt: 'Archive 5' },
    { src: '/lib6.png', alt: 'Archive 6' },
    { src: '/lib7.png', alt: 'Archive 7' },
    { src: '/lib8.png', alt: 'Archive 8' }, 
  ];

  return (
    <main className="min-h-screen w-full bg-[#0a0a0e] text-slate-300 p-6 md:px-12 md:py-12 font-sans relative overflow-x-hidden">
      
      {/* ============================================================================================== */}
      {/* 0. LIGHTBOX MODAL (z-[100]) - Appears only when an image is clicked                            */}
      {/* ============================================================================================== */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] bg-[#07070a]/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-12 cursor-zoom-out transition-all duration-300"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-screen-2xl max-h-full w-full h-full flex items-center justify-center">
            <img 
              src={selectedImage} 
              alt="Enlarged capture" 
              className="max-w-full max-h-full object-contain rounded-sm shadow-2xl border border-slate-800/80"
            />
            <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-xs font-mono text-slate-500 bg-[#0a0a0e]/80 px-4 py-2 rounded-sm border border-slate-800/50 backdrop-blur-md">
               Click anywhere to close
            </p>
          </div>
        </div>
      )}


      {/* ============================================================================================== */}
      {/* 1. BACKGROUND LAYER (z-0) - Stays behind all images                                            */}
      {/* ============================================================================================== */}
      
      {/* Background Watermark (Rotating Hobby Icons) */}
      <div 
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150vmax] h-[150vmax] z-0 flex items-center justify-center opacity-[0.05] pointer-events-none background-watermark"
        style={{
          maskImage: 'radial-gradient(circle at center, black 40%, transparent 70%)',
          WebkitMaskImage: 'radial-gradient(circle at center, black 40%, transparent 70%)'
        }}
      >
            <svg className="w-full h-full max-w-none" viewBox="0 0 200 200" preserveAspectRatio="xMidYMid slice" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g stroke="#334155" strokeWidth="0.5">
                <pattern id="joystick" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse"><path d="M10 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0-6 0"/><path d="M10 3v4m-3 0h6"/></pattern>
                <pattern id="controller" x="20" y="20" width="25" height="25" patternUnits="userSpaceOnUse"><path d="M12.5 12.5m-5.5 0a5.5 5.5 0 1 0 11 0a5.5 5.5 0 1 0-11 0"/><path d="M10 10h5m-2.5-2.5v5"/></pattern>
                <pattern id="car" x="45" y="45" width="22" height="22" patternUnits="userSpaceOnUse"><path d="M11 11m-4 0a4 4 0 1 0 8 0a4 4 0 1 0-8 0"/><path d="M6 10h10M11 6v8"/></pattern>
                <pattern id="headphone" x="70" y="10" width="18" height="18" patternUnits="userSpaceOnUse"><path d="M9 13.5v-7.5l-3.5 1.75"/><path d="M5.5 10m-2 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0"/></pattern>
                <pattern id="vinyl" x="90" y="40" width="20" height="20" patternUnits="userSpaceOnUse"><circle cx="10" cy="10" r="9" fill="#1e293b" fillOpacity="0.5"/><circle cx="10" cy="10" r="2.5"/></pattern>
                <pattern id="camera" x="120" y="70" width="24" height="24" patternUnits="userSpaceOnUse"><path d="M12 14m-5 0a5 5 0 1 0 10 0a5 5 0 1 0-10 0"/><path d="M4 8h16m-8-4v4"/></pattern>
                <pattern id="gun" x="150" y="20" width="22" height="22" patternUnits="userSpaceOnUse"><path d="M11 11m-4 0a4 4 0 1 0 8 0a4 4 0 1 0-8 0"/><path d="M11 15v3"/></pattern>
                
                <rect width="200" height="200" fill="url(#joystick)" mask="url(#hexMask)" opacity="0.4"/>
                <rect x="25" y="25" width="150" height="150" fill="url(#controller)" mask="url(#hexMask)"/>
                <rect x="50" y="50" width="100" height="100" fill="url(#car)" mask="url(#hexMask)"/>
                <rect x="75" y="75" width="50" height="50" fill="url(#headphone)" mask="url(#hexMask)"/>
                <rect x="0" y="100" width="100" height="100" fill="url(#vinyl)" mask="url(#hexMask)" opacity="0.3"/>
                <rect x="100" y="0" width="100" height="100" fill="url(#camera)" mask="url(#hexMask)" opacity="0.2"/>
                <rect x="100" y="100" width="100" height="100" fill="url(#gun)" mask="url(#hexMask)" opacity="0.3"/>
              </g>
              <mask id="hexMask"><rect width="200" height="200" fill="white"/></mask>
            </svg>
      </div>

      {/* Terminal Snippets */}
      <div className="fixed top-10 left-10 font-mono text-sm text-teal-600 opacity-20 fading-code pointer-events-none z-0 tracking-wider space-y-1 hidden md:block">
        <div>$ system_boot.sh</div>
        <div>LOADING jikanpy [v3.0.0]</div>
        <div>IMPORT extension.humanizer</div>
        <div>CONF_API::TMDB &gt;&gt; OK</div>
        <div>STATUS: AI_DETECT_MODEL (LLaMA) :: <span className="text-teal-400">ONLINE</span></div>
      </div>
      <div className="fixed bottom-10 left-10 font-mono text-sm text-rose-500 opacity-20 fading-code pointer-events-none z-0 tracking-wider space-y-1 hidden lg:block text-right">
        <div>struct node *p;</div>
        <div>p-&gt;next = (*head);</div>
        <div>(*head) = p;</div>
      </div>

      {/* Static Ambient Glows */}
      <div className="fixed top-[-10%] left-[-10%] w-[50rem] h-[50rem] bg-teal-900/10 rounded-full blur-[120px] pointer-events-none z-0"></div>
      <div className="fixed bottom-[-10%] right-[-10%] w-[50rem] h-[50rem] bg-rose-900/5 rounded-full blur-[120px] pointer-events-none z-0"></div>

      {/* FIXED ROSE POLYGON (Background layer behind the images) */}
      <div className="hidden lg:flex flex-col justify-end fixed right-8 xl:right-16 bottom-20 w-80 z-0 pointer-events-none">
          <svg width="100%" height="250" viewBox="0 0 200 250" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-40">
            <path d="M100 20 L180 60 L180 160 L100 220 L20 160 L20 60 Z" stroke="#334155" strokeWidth="0.5" strokeDasharray="3 3"/>
            <circle cx="100" cy="110" r="75" stroke="#1e293b" strokeWidth="1"/>
            <circle cx="100" cy="110" r="45" stroke="#0f766e" strokeWidth="0.5" className="opacity-60"/>
            <line x1="100" y1="20" x2="100" y2="220" stroke="#1e293b" strokeWidth="0.5"/>
            <path d="M30 180 C 80 140, 50 70, 100 40 C 150 10, 170 80, 130 130 C 90 180, 160 220, 180 190" stroke="#831843" strokeWidth="1.5" fill="none" className="opacity-80"/>
            <path d="M20 100 C 50 120, 90 100, 120 140 C 150 180, 100 220, 80 200" stroke="#475569" strokeWidth="0.5" fill="none"/>
            <circle cx="100" cy="40" r="2.5" fill="#831843"/>
            <circle cx="130" cy="130" r="3" fill="#0f766e"/>
            <circle cx="60" cy="110" r="2" fill="#475569"/>
          </svg>
      </div>


      {/* ============================================================================================== */}
      {/* 2. FOREGROUND HUD LAYER (z-50) - Stays above all images                                        */}
      {/* ============================================================================================== */}
      
      {/* FIXED RIGHT HUD (Vintage Analog Audio Panel) */}
      <div className="hidden lg:flex flex-col justify-start fixed right-8 xl:right-16 top-32 w-80 z-50 pointer-events-none">
          <div className="bg-amber-950/20 backdrop-blur-md border border-amber-900/30 p-5 rounded-sm shadow-2xl pointer-events-auto stagger-in transition-all duration-300 hover:bg-amber-950/30">
            <div className="flex items-center justify-between border-b border-amber-900/40 pb-3 mb-4">
              <p className="text-sm font-medium text-amber-100/90 tracking-wide">Focus State // Analog</p>
              <svg className="w-4 h-4 text-amber-600/80" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19V6l12-3v13M9 19c-1.105 0-2-.895-2-2s.895-2 2-2 2 .895 2-2 2zm12-3c-1.105 0-2-.895-2-2s.895-2 2-2 2 .895 2-2 2z"></path></svg>
            </div>
            <ul className="space-y-4">
              {[
                {track: '01', title: 'Connect', uppercase: 'RIOT KIDZ // 2025 POP-PUNK'},
                {track: '02', title: "We Don't Talk Anymore", uppercase: 'CHARLIE PUTH // 2016 POP'},
                {track: '03', title: 'Thodi Der', uppercase: 'HALF GIRLFRIEND // 2017 ROMANTIC'},
                {track: '04', title: 'Alga Koro Go Khopar Badhon', uppercase: 'NAZRUL SANGEET // CLASSIC'}
              ].map((item, index) => (
                <li key={index} className="group flex items-center gap-3 cursor-default">
                  <span className="text-[11px] font-mono text-amber-700/80 group-hover:text-amber-500 transition-colors">{item.track}</span>
                  <div>
                    <p className="text-sm text-amber-200/70 group-hover:text-amber-100 transition-colors leading-tight">{item.title}</p>
                    <p className="text-[10px] font-mono text-amber-800/60 uppercase tracking-widest">{item.uppercase}</p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-6 pt-4 border-t border-amber-900/40">
                <button className="text-xs font-mono text-amber-600/80 hover:text-amber-300 transition-colors w-full text-left flex items-center justify-between pointer-events-auto">
                  Launch Full Playlist <span className="text-amber-500">-&gt;</span>
                </button>
            </div>
          </div>
      </div>


      {/* ============================================================================================== */}
      {/* 3. MAIN CONTENT LAYER (z-10) - The scrolling gallery                                           */}
      {/* ============================================================================================== */}
      
      <div className="max-w-7xl w-full mx-auto relative z-10 flex flex-col items-start mt-4 pb-32">
        
        {/* Header Section */}
        <div className="mb-20 stagger-in max-w-2xl relative z-30">
            <div className="mb-6">
              <Link href="/" className="inline-flex items-center gap-2 text-xs font-mono text-slate-500 hover:text-teal-400 transition-colors group">
                  <svg className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
                  cd .. /root
              </Link>
            </div>
            <header className="relative">
              <svg className="absolute top-0 left-0 w-8 h-8 text-slate-800/40 -translate-x-4 -translate-y-4" fill="none" stroke="currentColor" strokeWidth="0.5" viewBox="0 0 24 24"><path d="M20 12h-8m8 6h-6m6-12h-4"/></svg>
              <h1 className="text-4xl md:text-5xl font-light text-slate-100 mb-6 tracking-tight">
                  /hobbies
              </h1>
              <p className="text-lg text-slate-400 leading-relaxed relative z-10 mb-8">
                Beyond the constraints of physical engineering and software architecture, I explore and document digital worlds. This archive contains my virtual photography across immersive landscapes, paired directly with the curated audio frequencies that drive my offline hours.
              </p>
              <p className="text-sm font-mono text-slate-500 uppercase tracking-widest border-l-2 border-rose-900/50 pl-4 inline-block relative z-10">
                Status: System Offline // Initiating media protocols.
              </p>
              <div className="w-full h-[1px] bg-slate-800/60 mt-12"></div>
            </header>
        </div>

        {/* ========================================================================================== */}
        {/* FEATURED ZIGZAG GALLERY (Original 4 Pictures)                                              */}
        {/* ========================================================================================== */}
        <div className="flex flex-col space-y-40 w-full mt-10 relative z-20">
          
          {/* IMAGE 1: Left Aligned */}
          <div className="w-full lg:w-[60%] self-start relative group stagger-in">
              <div className="aspect-[16/10] bg-[#12121a] border border-slate-800/80 rounded-sm overflow-hidden relative shadow-2xl z-10">
                  <img src="/game1.png" alt="Capture 1" className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
              </div>
              <div className="absolute -bottom-12 right-4 lg:bottom-8 lg:-right-24 w-[85%] lg:w-72 z-30 bg-[#07070a]/95 backdrop-blur-md border border-slate-800/80 p-5 border-l-2 border-l-teal-600 shadow-2xl transition-transform duration-500 group-hover:translate-x-2">
                  <p className="text-xs font-mono text-teal-500 mb-2">01 // telemetry_amg.png</p>
                  <p className="text-sm text-slate-400 leading-relaxed">High-speed telemetry capture. Testing dynamic lighting and motion blur rendering algorithms.</p>
              </div>
          </div>

          {/* IMAGE 2: Far Right Aligned */}
          <div className="w-full lg:w-[75%] self-end relative group stagger-in mt-16">
              <div className="aspect-video bg-[#12121a] border border-slate-800/80 rounded-sm overflow-hidden relative shadow-2xl z-10">
                  <img src="/game2.png" alt="Capture 2" className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
              </div>
              <div className="absolute -bottom-16 left-4 lg:bottom-12 lg:-left-24 w-[90%] lg:w-80 z-30 bg-[#07070a]/95 backdrop-blur-md border border-slate-800/80 p-5 border-l-2 border-l-rose-600 shadow-2xl transition-transform duration-500 group-hover:-translate-x-2">
                  <p className="text-xs font-mono text-rose-500 mb-2">02 // feudal_wanderer.png</p>
                  <p className="text-sm text-slate-400 leading-relaxed">Environmental particle physics mapping. Analyzing wind generation and flora interaction matrices.</p>
              </div>
          </div>

          {/* IMAGE 3: Center Massive */}
          <div className="w-full lg:w-[85%] self-center relative group stagger-in mt-20">
              <div className="aspect-[21/9] bg-[#12121a] border border-slate-800/80 rounded-sm overflow-hidden relative shadow-2xl z-10">
                  <img src="/game3.png" alt="Capture 3" className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
              </div>
              <div className="absolute top-4 left-4 lg:-top-8 lg:-left-12 w-[85%] lg:w-80 z-30 bg-[#07070a]/95 backdrop-blur-md border border-slate-800/80 p-5 border-l-2 border-l-blue-600 shadow-2xl transition-transform duration-500 group-hover:-translate-y-2">
                  <p className="text-xs font-mono text-blue-500 mb-2">03 // vertical_ascent_nyc.png</p>
                  <p className="text-sm text-slate-400 leading-relaxed mb-3">Simulated urban density mapping and vertical traversal physics.</p>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-500 animate-pulse"></span>
                    <p className="text-[10px] font-mono text-slate-500 tracking-widest uppercase">Coord: 40.7128° N, 74.0060° W</p>
                  </div>
              </div>
          </div>

          {/* IMAGE 4: Middle Left Offset */}
          <div className="w-full lg:w-[55%] self-start lg:ml-[15%] relative group stagger-in mt-16">
              <div className="aspect-[4/3] bg-[#12121a] border border-slate-800/80 rounded-sm overflow-hidden relative shadow-2xl z-10">
                  <img src="/game4.png" alt="Capture 4" className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
              </div>
              <div className="absolute top-4 right-4 lg:top-12 lg:-right-32 w-[75%] lg:w-72 z-30 bg-[#07070a]/95 backdrop-blur-md border border-slate-800/80 p-5 border-l-2 border-l-amber-500 shadow-2xl transition-transform duration-500 group-hover:translate-x-2">
                  <p className="text-xs font-mono text-amber-500 mb-2">04 // tactical_overwatch.png</p>
                  <p className="text-sm text-slate-400 leading-relaxed">Threat detection systems active. Analyzing contrast ratios in harsh atmospheric conditions.</p>
              </div>
          </div>

        </div>

        {/* ========================================================================================== */}
        {/* NEW: EXTENDED ARCHIVE GRID (Perfect 4x2 Zoomable Grid - Now aspect-video)                  */}
        {/* ========================================================================================== */}
        <div className="w-full mt-40 relative z-20 stagger-in lg:pr-[360px]"> 
           
           <header className="mb-10 border-b border-slate-800/60 pb-6">
              <h2 className="text-2xl font-light text-slate-200 font-mono flex items-center gap-3">
                 <span className="text-amber-600 animate-pulse">_</span> raw_data_dump.DIR
              </h2>
           </header>

           <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {gridImages.map((img, i) => (
                 <div 
                    key={i} 
                    className="aspect-video bg-[#12121a] border border-slate-800/80 rounded-sm overflow-hidden cursor-zoom-in hover:border-amber-700/50 transition-colors duration-300 group" 
                    onClick={() => setSelectedImage(img.src)}
                 >
                    {/* Placeholder image loaded from the /public folder */}
                    <img 
                       src={img.src} 
                       alt={img.alt} 
                       className="w-full h-full object-cover opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500" 
                    />
                 </div>
              ))}
           </div>
           
           <p className="mt-8 text-xs font-mono text-slate-500">// End of directory.</p>
        </div>

      </div>
    </main>
  );
}