"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import gsap from 'gsap';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [accessDenied, setAccessDenied] = useState(false);

  useEffect(() => {
    // Standard entrance animations
    gsap.fromTo(
      ".stagger-in",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1.2, stagger: 0.15, ease: "power3.out" }
    );
    
    // Rotating network mesh watermark
    gsap.to(".background-watermark", {
      rotation: -360, 
      duration: 900, 
      repeat: -1,
      ease: "none"
    });
    
    // Fading terminal code
    gsap.to(".fading-code", {
      opacity: 0.5,
      duration: 3,
      yoyo: true,
      repeat: -1,
      ease: "sine.inOut",
      stagger: 0.5
    });
  }, []);

  const handleCopyDiscord = () => {
    navigator.clipboard.writeText("_miyuki_yu_");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleLockedPayload = () => {
    setAccessDenied(true);
    setTimeout(() => setAccessDenied(false), 2500);
  };

  return (
    <main className="min-h-screen w-full bg-[#0a0a0e] text-slate-300 p-6 md:px-12 md:py-12 font-sans relative overflow-x-hidden flex flex-col">
      
      {/* ============================================================================================== */}
      {/* 1. BACKGROUND LAYER (z-0) - Complex Mesh Network aesthetic */}
      {/* ============================================================================================== */}
      
      <div 
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150vmax] h-[150vmax] z-0 flex items-center justify-center opacity-[0.05] pointer-events-none background-watermark text-cyan-500"
        style={{
          maskImage: 'radial-gradient(circle at center, black 30%, transparent 70%)',
          WebkitMaskImage: 'radial-gradient(circle at center, black 30%, transparent 70%)'
        }}
      >
        <svg className="w-full h-full max-w-none" viewBox="0 0 200 200" preserveAspectRatio="xMidYMid slice" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g stroke="currentColor" strokeWidth="0.5">
              <pattern id="network-mesh" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
                {/* Node Intersections */}
                <circle cx="25" cy="25" r="2" fill="currentColor"/>
                <circle cx="5" cy="10" r="1" fill="currentColor"/>
                <circle cx="45" cy="15" r="1.5" fill="currentColor"/>
                <circle cx="15" cy="40" r="1" fill="currentColor"/>
                <circle cx="35" cy="45" r="1" fill="currentColor"/>
                {/* Connecting Lines */}
                <path d="M25 25L5 10 M25 25L45 15 M25 25L15 40 M25 25L35 45" opacity="0.6"/>
                <path d="M5 10L15 40 M45 15L35 45 M5 10L45 15" opacity="0.3"/>
                {/* Data Packets (Dotted Lines) */}
                <path d="M25 25 l20 -5 m-20 5 l-10 20 m10 -20 l -15 -15" strokeDasharray="1 2" opacity="0.8"/>
              </pattern>
              <rect width="200" height="200" fill="url(#network-mesh)"/>
              {/* Massive Outer Broadcast Rings */}
              <circle cx="100" cy="100" r="60" strokeDasharray="2 8" opacity="0.5" strokeWidth="1"/>
              <circle cx="100" cy="100" r="90" strokeDasharray="4 12" opacity="0.3" strokeWidth="2"/>
            </g>
        </svg>
      </div>

      <div className="fixed top-10 left-10 font-mono text-sm text-cyan-600 opacity-20 fading-code pointer-events-none z-0 tracking-wider space-y-1 hidden md:block">
        <div>$ INIT comm_link.sh</div>
        <div>&gt; ESTABLISHING SECURE HANDSHAKE...</div>
        <div>&gt; PING: 12ms</div>
        <div>STATUS: <span className="text-emerald-500">CONNECTED</span></div>
      </div>

      <div className="fixed top-[-10%] left-[-10%] w-[50rem] h-[50rem] bg-cyan-900/10 rounded-full blur-[120px] pointer-events-none z-0"></div>
      <div className="fixed bottom-[-10%] right-[-10%] w-[50rem] h-[50rem] bg-emerald-900/5 rounded-full blur-[120px] pointer-events-none z-0"></div>

      {/* ============================================================================================== */}
      {/* 2. MAIN CONTENT & HUD LAYER */}
      {/* ============================================================================================== */}
      
      <div className="max-w-7xl w-full mx-auto relative z-10 flex flex-col lg:flex-row items-start gap-12 mt-4 flex-grow">
        
        {/* LEFT COLUMN: Header & Contact Nodes */}
        <section className="w-full lg:w-2/3 flex flex-col">
          
          <div className="mb-16 stagger-in relative z-30">
              <div className="mb-6">
                <Link href="/" className="inline-flex items-center gap-2 text-xs font-mono text-slate-500 hover:text-cyan-400 transition-colors group">
                    <svg className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
                    cd .. /root
                </Link>
              </div>
              <header className="relative">
                <svg className="absolute top-0 left-0 w-8 h-8 text-cyan-800/30 -translate-x-4 -translate-y-4" fill="none" stroke="currentColor" strokeWidth="0.5" viewBox="0 0 24 24"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                <h1 className="text-4xl md:text-5xl font-light text-slate-100 mb-4 tracking-tight">
                    /contact
                </h1>
                <p className="text-lg text-slate-400 leading-relaxed relative z-10">
                  Establish a secure connection. Network routing and encrypted payloads.
                </p>
                <div className="w-full h-[1px] bg-cyan-900/30 mt-12"></div>
              </header>
          </div>

          <div className="flex flex-col space-y-8 w-full relative z-20">
            
            {/* System Status Block */}
            <div className="bg-[#12121a]/80 backdrop-blur-sm border border-slate-800/80 rounded-sm p-6 stagger-in flex items-center gap-4 shadow-xl">
               <div className="relative flex items-center justify-center w-8 h-8">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-20 animate-ping"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
               </div>
               <div>
                  <h3 className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-1">Operational Status</h3>
                  <p className="text-sm text-slate-300 font-mono tracking-wide">SYSTEM ONLINE // MONITORING TRANSMISSIONS</p>
               </div>
            </div>

            <h3 className="text-sm font-mono text-slate-400 uppercase tracking-widest mt-8 mb-4 flex items-center gap-3 stagger-in border-b border-slate-800/60 pb-3">
              <span className="w-2 h-4 bg-cyan-500/80 animate-pulse"></span>
              [01] // NETWORK_NODES
            </h3>

            {/* Direct Email Link */}
            <a href="mailto:raisul7985@yahoo.com" className="group relative bg-[#12121a]/80 backdrop-blur-sm border border-slate-800/80 hover:border-cyan-500/50 rounded-sm p-6 md:p-8 transition-all duration-300 shadow-xl overflow-hidden cursor-pointer stagger-in flex items-center justify-between">
                <div className="absolute top-0 left-0 w-[2px] h-full bg-cyan-500/0 group-hover:bg-cyan-500 transition-colors duration-300"></div>
                <div>
                   <h2 className="text-xl md:text-2xl font-medium text-slate-100 mb-2 group-hover:text-cyan-400 transition-colors">Encrypted Mail</h2>
                   <p className="text-sm text-slate-400 font-mono">raisul7985@yahoo.com</p>
                </div>
                <svg className="w-6 h-6 text-slate-600 group-hover:text-cyan-400 transform group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </a>

            {/* GitHub Link */}
            <a href="https://github.com/MiyukiYu08" target="_blank" rel="noopener noreferrer" className="group relative bg-[#12121a]/80 backdrop-blur-sm border border-slate-800/80 hover:border-slate-400/50 rounded-sm p-6 md:p-8 transition-all duration-300 shadow-xl overflow-hidden cursor-pointer stagger-in flex items-center justify-between">
                <div className="absolute top-0 left-0 w-[2px] h-full bg-slate-500/0 group-hover:bg-slate-400 transition-colors duration-300"></div>
                <div>
                   <h2 className="text-xl md:text-2xl font-medium text-slate-100 mb-2 group-hover:text-slate-300 transition-colors">GitHub Repository</h2>
                   <p className="text-sm text-slate-400 font-mono">github.com/MiyukiYu08</p>
                </div>
                <svg className="w-6 h-6 text-slate-600 group-hover:text-slate-300 transform group-hover:-translate-y-1 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
            </a>

            {/* Discord Click-to-Copy */}
            <div onClick={handleCopyDiscord} className="group relative bg-[#12121a]/80 backdrop-blur-sm border border-slate-800/80 hover:border-[#5865F2]/50 rounded-sm p-6 md:p-8 transition-all duration-300 shadow-xl overflow-hidden cursor-pointer stagger-in flex items-center justify-between">
                <div className="absolute top-0 left-0 w-[2px] h-full bg-[#5865F2]/0 group-hover:bg-[#5865F2] transition-colors duration-300"></div>
                <div>
                   <h2 className="text-xl md:text-2xl font-medium text-slate-100 mb-2 group-hover:text-[#5865F2] transition-colors">Discord ID</h2>
                   <p className="text-sm text-slate-400 font-mono">_miyuki_yu_</p>
                </div>
                <div className="flex items-center gap-2">
                   <span className={`text-[10px] font-mono transition-opacity ${copied ? 'opacity-100 text-[#5865F2]' : 'opacity-0 text-slate-500 group-hover:opacity-100'}`}>
                     {copied ? 'COPIED TO CLIPBOARD' : 'CLICK TO COPY'}
                   </span>
                   <svg className={`w-5 h-5 transition-colors ${copied ? 'text-[#5865F2]' : 'text-slate-600 group-hover:text-slate-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg>
                </div>
            </div>

            <h3 className="text-sm font-mono text-slate-400 uppercase tracking-widest mt-12 mb-4 flex items-center gap-3 stagger-in border-b border-slate-800/60 pb-3">
              <span className="w-2 h-4 bg-red-600/50"></span>
              [02] // ENCRYPTED_PAYLOAD
            </h3>

            {/* MYSTERIOUS LOCKED CV MODULE */}
            <div 
              onClick={handleLockedPayload}
              className={`group relative bg-[#07070a] border border-red-900/30 hover:border-red-600/50 rounded-sm p-6 transition-all duration-300 overflow-hidden cursor-not-allowed stagger-in flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-xl ${accessDenied ? 'bg-red-950/20' : ''}`}
            >
                {/* CRT Scanline Overlay */}
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPjxyZWN0IHdpZHRoPSI0IiBoZWlnaHQ9IjEiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')] opacity-50 pointer-events-none"></div>

                <div className="relative z-10">
                   <h2 className="text-lg font-medium text-red-500/80 mb-2 flex items-center gap-3">
                      <svg className="w-5 h-5 text-red-500/60" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
                      {accessDenied ? 'UNAUTHORIZED ATTEMPT LOGGED' : 'Curriculum Vitae Locked'}
                   </h2>
                   <p className="text-xs text-slate-500 font-mono flex flex-col gap-1">
                     <span>Format: [ REDACTED ] // Size: UNKNOWN</span>
                     <span className={`transition-colors ${accessDenied ? 'text-red-500' : 'text-red-500/40 italic'}`}>
                       {accessDenied ? 'ERR_CODE: 401_CLEARANCE_DENIED' : 'Awaiting admin clearance cascade...'}
                     </span>
                   </p>
                </div>
                
                <div className="relative z-10 flex items-center gap-3 border border-red-900/40 bg-[#0a0a0e] px-4 py-2 rounded-sm transition-colors group-hover:border-red-600/50">
                   <span className="text-xs font-mono text-red-500/50">ACCESS DENIED</span>
                </div>
            </div>

          </div>
        </section>

        {/* RIGHT COLUMN: STICKY HUD (Origin Ping) */}
        <section className="w-full lg:w-1/3 hidden lg:flex flex-col gap-8 sticky top-32 h-[calc(100vh-8rem)] z-50 pointer-events-none mt-32">
            
            <div className="bg-[#07070a]/70 backdrop-blur-xl border border-slate-800/80 p-6 rounded-sm shadow-2xl pointer-events-auto stagger-in">
              <h3 className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-6 flex items-center gap-3">
                <span className="text-cyan-500/80">&gt;_</span> ORIGIN_PING
              </h3>
              
              <div className="aspect-square w-full bg-[#0a0a0e] border border-cyan-900/30 rounded-sm mb-6 relative overflow-hidden flex items-center justify-center">
                 {/* Map Grid Background */}
                 <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at center, #06b6d4 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                 
                 {/* Radar Sweeper */}
                 <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 to-transparent w-full h-full origin-bottom-left animate-spin" style={{ animationDuration: '4s' }}></div>
                 
                 {/* Crosshairs & Target */}
                 <div className="relative z-10 flex flex-col items-center justify-center w-full h-full">
                    <div className="w-[1px] h-full bg-cyan-900/50 absolute"></div>
                    <div className="w-full h-[1px] bg-cyan-900/50 absolute"></div>
                    
                    {/* Location Node */}
                    <div className="relative flex items-center justify-center mt-8 ml-8">
                      <span className="absolute inline-flex h-6 w-6 rounded-full bg-cyan-500 opacity-30 animate-ping"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
                      
                      {/* Callout Box - Last Known Location */}
                      <div className="absolute top-4 left-4 border border-cyan-900/50 bg-[#07070a]/90 p-2 backdrop-blur-sm min-w-[120px]">
                        <p className="text-[9px] font-mono text-slate-400 uppercase tracking-wider mb-1">Last Known Ping</p>
                        <p className="text-[10px] font-mono text-cyan-500 uppercase">Rajshahi // BD</p>
                      </div>
                    </div>
                 </div>
              </div>

              <div className="font-mono text-xs text-slate-400 space-y-3 pt-4 border-t border-slate-800/60">
                 <div className="flex justify-between items-center">
                    <span className="text-slate-500">LAST_LOC_PING</span>
                    <span className="text-slate-300">Rajshahi, BD</span>
                 </div>
                 <div className="flex justify-between items-center">
                    <span className="text-slate-500">COORDINATES</span>
                    <span className="text-cyan-400 tracking-widest">[ REDACTED ]</span>
                 </div>
                 <div className="flex justify-between items-center">
                    <span className="text-slate-500">CONNECTION_TYPE</span>
                    <span className="text-slate-300">SECURE // ENCRYPTED</span>
                 </div>
              </div>
            </div>

        </section>

      </div>
    </main>
  );
}