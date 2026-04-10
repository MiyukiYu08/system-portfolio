"use client";

import { useEffect } from 'react';
import Link from 'next/link';
import gsap from 'gsap';

export default function Home() {
  useEffect(() => {
    // Clean entrance animation
    gsap.fromTo(
      ".stagger-in",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.1, ease: "power3.out" }
    );
    
    // Smooth cinematic pulse for ambient background glows
    gsap.to(".ambient-glow", {
      opacity: 0.8,
      scale: 1.05,
      duration: 6,
      yoyo: true,
      repeat: -1,
      ease: "sine.inOut",
      stagger: 2
    });

    // Subtle background animation for the massive watermark texture
    gsap.to(".background-watermark", {
      rotation: 360,
      duration: 600, // extremely slow rotation
      repeat: -1,
      ease: "none"
    });
  }, []);

  return (
    <main className="h-screen w-full bg-[#0a0a0e] text-slate-300 p-6 md:px-12 md:py-8 font-sans flex flex-col justify-center relative overflow-hidden">
      
      {/* 1. Background Watermark (Oversized with radial fade to bleed infinitely off-screen) */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150vmax] h-[150vmax] z-0 flex items-center justify-center opacity-[0.05] pointer-events-none background-watermark"
        style={{
          maskImage: 'radial-gradient(circle at center, black 40%, transparent 70%)',
          WebkitMaskImage: 'radial-gradient(circle at center, black 40%, transparent 70%)'
        }}
      >
            <svg className="w-full h-full max-w-none" viewBox="15 15 170 170" preserveAspectRatio="xMidYMid slice" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g stroke="#475569" strokeWidth="0.5">
                <rect x="10" y="10" width="180" height="180"/>
                <rect x="14.5" y="14.5" width="171" height="171" transform="rotate(5 100 100)"/>
                <rect x="19" y="19" width="162" height="162" transform="rotate(10 100 100)"/>
                <rect x="23.5" y="23.5" width="153" height="153" transform="rotate(15 100 100)"/>
                <rect x="28" y="28" width="144" height="144" transform="rotate(20 100 100)"/>
                <rect x="32.5" y="32.5" width="135" height="135" transform="rotate(25 100 100)"/>
                <rect x="37" y="37" width="126" height="126" transform="rotate(30 100 100)"/>
                <rect x="41.5" y="41.5" width="117" height="117" transform="rotate(35 100 100)"/>
                <rect x="46" y="46" width="108" height="108" transform="rotate(40 100 100)"/>
                <rect x="50.5" y="50.5" width="99" height="99" transform="rotate(45 100 100)"/>
                <rect x="55" y="55" width="90" height="90" transform="rotate(50 100 100)"/>
                <rect x="59.5" y="59.5" width="81" height="81" transform="rotate(55 100 100)"/>
                <rect x="64" y="64" width="72" height="72" transform="rotate(60 100 100)"/>
                <rect x="68.5" y="68.5" width="63" height="63" transform="rotate(65 100 100)"/>
                <rect x="73" y="73" width="54" height="54" transform="rotate(70 100 100)"/>
                <rect x="77.5" y="77.5" width="45" height="45" transform="rotate(75 100 100)"/>
                <rect x="82" y="82" width="36" height="36" transform="rotate(80 100 100)"/>
                <rect x="86.5" y="86.5" width="27" height="27" transform="rotate(85 100 100)"/>
                <rect x="91" y="91" width="18" height="18" transform="rotate(90 100 100)"/>
              </g>
            </svg>
      </div>

      {/* 2. Barely Visible Lines of Code/Binary Textures */}
      {/* Top Left: Faint RUET in Binary */}
      <div className="absolute top-8 left-8 font-mono text-[9px] text-slate-700/10 pointer-events-none z-0 tracking-widest hidden md:block">
        01010010 01010101 01000101 01010100
      </div>
      
      {/* Bottom Left: Faint C Logic */}
      <div className="absolute bottom-8 left-8 font-mono text-[9px] text-slate-700/10 pointer-events-none z-0 hidden lg:block">
        if (adaptive) {"{"}<br/>
        &nbsp;&nbsp;specialization |= jack_of_all;<br/>
        &nbsp;&nbsp;flex(1);<br/>
        {"}"}
      </div>

      {/* Static Ambient Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[50rem] h-[50rem] bg-teal-900/10 rounded-full blur-[120px] pointer-events-none z-0"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[50rem] h-[50rem] bg-rose-900/5 rounded-full blur-[120px] pointer-events-none z-0"></div>

      {/* Main Hub Container */}
      <div className="max-w-7xl w-full mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        
        {/* Left Column: Text & Navigation */}
        <section className="lg:col-span-7 relative z-20">
          
          {/* Identity Module */}
          <div className="flex items-center gap-5 mb-8 stagger-in">
            <div className="w-24 h-24 md:w-28 md:h-28 rounded-full bg-[#12121a] border border-slate-700/80 flex items-center justify-center overflow-hidden relative shadow-lg flex-shrink-0">
              <img src="/profile.jpg" alt="Raisul Islam Profile" className="w-full h-full object-cover" />
            </div>
            <div>
              <h2 className="text-2xl font-medium text-slate-100 tracking-wide">Raisul Islam</h2>
              <p className="text-sm font-mono text-teal-600 mt-1">BSc Mechatronics Eng. @ RUET</p>
              <p className="text-xs font-mono text-slate-500 mt-1 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-rose-800 animate-pulse"></span>
                Rajshahi, Bangladesh
              </p>
            </div>
          </div>

          <div className="stagger-in mb-8 relative z-10">
            {/* Small Art: Frame crosshairs */}
            <svg className="absolute top-0 left-0 w-6 h-6 text-slate-800/40 -translate-x-3 -translate-y-3" fill="none" stroke="currentColor" strokeWidth="0.5" viewBox="0 0 24 24"><path d="M20 12h-8m8 6h-6m6-12h-4"/></svg>
            <svg className="absolute top-0 right-0 w-6 h-6 text-slate-800/40 translate-x-3 -translate-y-3 hidden md:block" fill="none" stroke="currentColor" strokeWidth="0.5" viewBox="0 0 24 24"><path d="M4 12h8m-8 6h6m-6-12h4"/></svg>
            
            <h1 className="text-4xl md:text-6xl font-light text-slate-100 mb-4 tracking-tight flex flex-wrap items-baseline gap-3 relative z-10">
              Root <span className="text-slate-500 font-serif italic text-3xl md:text-4xl">Directory</span>
            </h1>
            
            <p className="text-base md:text-lg text-slate-400 leading-relaxed max-w-2xl relative z-10">
              I am an engineering student with a vision to build intuitive prosthetics. Adaptable by nature, I treat my workflow like a carefully organized system—categorizing everything from full-stack software architecture and visual design to a strategic game of chess.
            </p>

            <p className="text-xs md:text-sm font-mono text-slate-500 uppercase tracking-widest mt-6 border-l-2 border-rose-900/50 pl-4 inline-block relative z-10">
              Status: System Online // Jack of all trades, master of none.
            </p>
          </div>

          {/* Folder Navigation Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 stagger-in relative z-10">
            
            {/* Systems Folder */}
            <Link href="/systems" className="group block p-4 md:p-5 border border-slate-800/80 bg-[#12121a]/80 backdrop-blur-md hover:border-slate-500 hover:bg-[#12121a]/95 transition-all duration-300 relative overflow-hidden rounded-sm z-10">
               <div className="absolute top-0 left-0 w-full h-[2px] bg-slate-800 group-hover:bg-teal-600 transition-colors duration-300 z-10"></div>
               <svg className="absolute -bottom-4 -right-4 w-20 h-20 text-slate-700/10 group-hover:text-teal-900/20 transition-colors duration-300" fill="none" stroke="currentColor" strokeWidth="0.5" viewBox="0 0 24 24"><path d="M4 6h16M4 12h8m-8 6h12"/><circle cx="4" cy="6" r="1.5"/><circle cx="4" cy="12" r="1.5"/><circle cx="4" cy="18" r="1.5"/></svg>
               <h2 className="text-lg md:text-xl font-medium text-slate-100 mb-1 font-mono group-hover:text-teal-400 transition-colors relative z-10">/systems</h2>
               <p className="text-xs md:text-sm text-slate-500 relative z-10">Systems & architecture.</p>
            </Link>

            {/* Design Folder */}
            <Link href="/design" className="group block p-4 md:p-5 border border-slate-800/80 bg-[#12121a]/80 backdrop-blur-md hover:border-slate-500 hover:bg-[#12121a]/95 transition-all duration-300 relative overflow-hidden rounded-sm z-10">
               <div className="absolute top-0 left-0 w-full h-[2px] bg-slate-800 group-hover:bg-rose-800 transition-colors duration-300 z-10"></div>
               <svg className="absolute -bottom-2 -right-2 w-16 h-16 text-slate-700/10 group-hover:text-rose-900/20 transition-colors duration-300" fill="none" stroke="currentColor" strokeWidth="0.5" viewBox="0 0 24 24"><path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 100-16 8 8 0 000 16z"/><circle cx="12" cy="12" r="3"/><path d="M12 6 C 14 6, 16 8, 16 10 C 16 12, 14 14, 12 14 C 10 14, 8 12, 8 10 C 8 8, 10 6, 12 6" strokeWidth="1"/></svg>
               <h2 className="text-lg md:text-xl font-medium text-slate-100 mb-1 font-mono group-hover:text-rose-400 transition-colors relative z-10">/design</h2>
               <p className="text-xs md:text-sm text-slate-500 relative z-10">Visuals & blueprints.</p>
            </Link>

            {/* Hobbies Folder */}
            <Link href="/hobbies" className="group block p-4 md:p-5 border border-slate-800/80 bg-[#12121a]/80 backdrop-blur-md hover:border-slate-500 hover:bg-[#12121a]/95 transition-all duration-300 relative overflow-hidden rounded-sm z-10">
               <div className="absolute top-0 left-0 w-full h-[2px] bg-slate-800 group-hover:bg-slate-300 transition-colors duration-300 z-10"></div>
               <svg className="absolute bottom-2 right-2 w-12 h-12 text-slate-700/10 group-hover:text-slate-400/25 transition-colors duration-300" fill="none" stroke="currentColor" strokeWidth="0.5" viewBox="0 0 24 24"><path d="M12 4v16m-4-8v8M8 8v12m8-12v12m4-8v8M4 10v6"/><path d="M3 12h2m1 0h12m1 0h2"/></svg>
               <h2 className="text-lg md:text-xl font-medium text-slate-100 mb-1 font-mono group-hover:text-slate-200 transition-colors relative z-10">/hobbies</h2>
               <p className="text-xs md:text-sm text-slate-500 relative z-10">Gaming & curated audio.</p>
            </Link>

            {/* Contact Folder */}
            <Link href="/contact" className="group block p-4 md:p-5 border border-slate-800/80 bg-[#12121a]/80 backdrop-blur-md hover:border-slate-500 hover:bg-[#12121a]/95 transition-all duration-300 relative overflow-hidden rounded-sm z-10">
               <div className="absolute top-0 left-0 w-full h-[2px] bg-slate-800 group-hover:bg-white transition-colors duration-300 z-10"></div>
               <svg className="absolute -bottom-4 -right-2 w-20 h-20 text-slate-700/10 group-hover:text-white/25 transition-colors duration-300" fill="none" stroke="currentColor" strokeWidth="0.5" viewBox="0 0 24 24"><path d="M12 12v.01M19.071 4.929a10 10 0 010 14.142M4.929 4.929a10 10 0 000 14.142M15.536 8.464a5 5 0 010 7.072M8.464 8.464a5 5 0 000 7.072"/><path d="M12 10v4m-2-2h4"/></svg>
               <h2 className="text-lg md:text-xl font-medium text-slate-100 mb-1 font-mono group-hover:text-white transition-colors relative z-10">/contact</h2>
               <p className="text-xs md:text-sm text-slate-500 relative z-10">Establish connection.</p>
            </Link>

          </div>
        </section>

        {/* Right Column: Original "Rose Polygon" Line Art */}
        <section className="lg:col-span-5 flex justify-center lg:justify-end stagger-in opacity-70 pointer-events-none hidden md:flex z-10 relative">
            <svg width="350" height="400" viewBox="0 0 200 250" fill="none" xmlns="http://www.w3.org/2000/svg">
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
        </section>

      </div>
    </main>
  );
}