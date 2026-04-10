"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import gsap from 'gsap';

export default function Systems() {
  // State to track which project card is expanded
  const [expandedProject, setExpandedProject] = useState(null);
  // State to handle the Lightbox (Zoom) feature
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    // Clean entrance animation
    gsap.fromTo(
      ".stagger-in",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1.2, stagger: 0.15, ease: "power3.out" }
    );
    
    // Subtle background animation for the watermark texture
    gsap.to(".background-watermark", {
      rotation: -360, 
      duration: 700, 
      repeat: -1,
      ease: "none"
    });
    
    // Fading code text
    gsap.to(".fading-code", {
      opacity: 0.5,
      duration: 3,
      yoyo: true,
      repeat: -1,
      ease: "sine.inOut",
      stagger: 0.5
    });

  }, []);

  // ==============================================================================================
  // PROJECT DATA ARRAY - Edit your details, code snippets, and text here
  // ==============================================================================================
  const systemsProjects = [
    {
      id: 'ai-humanizer',
      title: 'Local AI Text Humanizer',
      tags: ['Browser Extension', 'LLaMA Model', 'Local Processing'],
      status: 'ONLINE',
      color: 'teal',
      shortDesc: 'A custom browser extension that automatically detects highlighted text and runs it through a local, open-source LLaMA model.',
      fullDesc: 'Engineered to prioritize data privacy, this extension captures DOM selection events and bridges them to a locally hosted LLM via a lightweight background script. It provides real-time AI probability detection and humanization suggestions in a sleek, non-intrusive pop-up interface, ensuring zero data leaves the local machine.',
      codeSnippet: `// background.js - Intercepting text selection
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "analyze_text") {
    fetch('http://localhost:11434/api/generate', {
      method: 'POST',
      body: JSON.stringify({
        model: "llama3",
        prompt: "Humanize this text: " + request.text
      })
    })
    .then(res => res.json())
    .then(data => sendResponse({ result: data }));
    
    return true; // Keeps the message channel open for async response
  }
});`,
      image: '/project1.png' // Ensure this exists in /public
    },
    {
      id: 'bucketlist',
      title: 'YourBucketList',
      tags: ['Full-Stack Web App', 'SQLite3', 'REST APIs (TMDB/Jikan)'],
      status: 'DEPLOYED',
      color: 'rose',
      shortDesc: 'A comprehensive media tracking platform engineered as a final capstone project to categorize anime, movies, and games.',
      fullDesc: 'Combining the functionality of MyAnimeList, Backloggd, and Letterboxd into a single centralized hub. It features a secure user authentication system, dynamic database routing, and live API integrations to pull accurate metadata, cover art, and global ratings for user-added media.',
      codeSnippet: `// pages/api/search.js - Aggregating multi-platform APIs
export default async function handler(req, res) {
  const { query, type } = req.query;
  
  try {
    let data;
    if (type === 'anime') {
      const jikan = await fetch(\`https://api.jikan.moe/v4/anime?q=\${query}\`);
      data = await jikan.json();
    } else if (type === 'movie') {
      const tmdb = await fetch(\`https://api.themoviedb.org/3/search/movie?api_key=\${process.env.TMDB_KEY}&query=\${query}\`);
      data = await tmdb.json();
    }
    res.status(200).json({ success: true, results: data });
  } catch (error) {
    res.status(500).json({ success: false, error: 'API Gateway Failure' });
  }
}`,
      image: '/project2.png' // Ensure this exists in /public
    },
    {
      id: 'sentry-node',
      title: 'Autonomous Sentry Node',
      tags: ['Hardware Logic', 'C++ / Arduino Nano', 'Mechatronics'],
      status: 'ASSEMBLING',
      color: 'blue',
      shortDesc: 'A physical robotics project utilizing an Arduino Nano and continuous rotation servos to translate software logic into real-world mechanics.',
      fullDesc: 'This sentry device bridges physical computing and software algorithms. It runs custom C++ detection algorithms utilizing ultrasonic sensors to track and respond to environmental triggers. The system maps coordinates and provides real-time state feedback via an integrated OLED telemetry screen.',
      codeSnippet: `// sentry_core.cpp - Target acquisition and servo tracking
#include <Servo.h>
#include <NewPing.h>

#define TRIGGER_PIN  12
#define ECHO_PIN     11
#define MAX_DISTANCE 200

Servo panServo;
NewPing sonar(TRIGGER_PIN, ECHO_PIN, MAX_DISTANCE);

void scanEnvironment() {
  for(int pos = 0; pos <= 180; pos += 5) {
    panServo.write(pos);
    delay(50);
    
    unsigned int distance = sonar.ping_cm();
    if (distance > 0 && distance < 50) {
      engageTarget(pos, distance); // Execute tracking protocol
      break;
    }
  }
}`,
      image: '/project3.png' // Ensure this exists in /public
    }
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
              alt="Enlarged project screenshot" 
              className="max-w-full max-h-full object-contain rounded-sm shadow-2xl border border-slate-800/80"
            />
            <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-xs font-mono text-slate-500 bg-[#0a0a0e]/80 px-4 py-2 rounded-sm border border-slate-800/50 backdrop-blur-md">
               Click anywhere to close
            </p>
          </div>
        </div>
      )}

      {/* ============================================================================================== */}
      {/* 1. BACKGROUND LAYER (z-0) */}
      {/* ============================================================================================== */}
      
      <div 
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150vmax] h-[150vmax] z-0 flex items-center justify-center opacity-[0.04] pointer-events-none background-watermark"
        style={{
          maskImage: 'radial-gradient(circle at center, black 30%, transparent 70%)',
          WebkitMaskImage: 'radial-gradient(circle at center, black 30%, transparent 70%)'
        }}
      >
        <svg className="w-full h-full max-w-none" viewBox="0 0 200 200" preserveAspectRatio="xMidYMid slice" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g stroke="#475569" strokeWidth="0.5">
              <pattern id="circuit" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M10 20h20M20 10v20M5 5l10 10M35 35l-10-10" />
                <circle cx="20" cy="20" r="2" fill="#475569"/>
                <circle cx="10" cy="20" r="1"/>
                <circle cx="30" cy="20" r="1"/>
              </pattern>
              <pattern id="hex" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
                <path d="M15 0l13 7.5v15L15 30L2 22.5v-15L15 0z" strokeDasharray="2 2"/>
              </pattern>
              <rect width="200" height="200" fill="url(#circuit)"/>
              <rect x="50" y="50" width="100" height="100" fill="url(#hex)" opacity="0.5"/>
            </g>
        </svg>
      </div>

      <div className="fixed top-10 left-10 font-mono text-sm text-teal-600 opacity-20 fading-code pointer-events-none z-0 tracking-wider space-y-1 hidden md:block">
        <div>$ INIT compiler_toolchain</div>
        <div>&gt; gcc -O3 sentry_logic.c</div>
        <div>&gt; npm run build</div>
        <div>STATUS: ALL_SYSTEMS_NOMINAL</div>
      </div>

      <div className="fixed top-[-10%] left-[-10%] w-[50rem] h-[50rem] bg-teal-900/10 rounded-full blur-[120px] pointer-events-none z-0"></div>
      <div className="fixed bottom-[-10%] right-[-10%] w-[50rem] h-[50rem] bg-rose-900/5 rounded-full blur-[120px] pointer-events-none z-0"></div>

      {/* ============================================================================================== */}
      {/* 2. MAIN CONTENT & HUD LAYER */}
      {/* ============================================================================================== */}
      
      <div className="max-w-7xl w-full mx-auto relative z-10 flex flex-col lg:flex-row items-start gap-12 mt-4 pb-32">
        
        {/* LEFT COLUMN: Header & Interactive Project Cards */}
        <section className="w-full lg:w-2/3 flex flex-col">
          
          <div className="mb-16 stagger-in relative z-30">
              <div className="mb-6">
                <Link href="/" className="inline-flex items-center gap-2 text-xs font-mono text-slate-500 hover:text-teal-400 transition-colors group">
                    <svg className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
                    cd .. /root
                </Link>
              </div>
              <header className="relative">
                <svg className="absolute top-0 left-0 w-8 h-8 text-slate-800/40 -translate-x-4 -translate-y-4" fill="none" stroke="currentColor" strokeWidth="0.5" viewBox="0 0 24 24"><path d="M20 12h-8m8 6h-6m6-12h-4"/></svg>
                <h1 className="text-4xl md:text-5xl font-light text-slate-100 mb-4 tracking-tight">
                    /systems
                </h1>
                <p className="text-lg text-slate-400 leading-relaxed relative z-10">
                  Hardware integration, software architecture, and control logic.
                </p>
                <div className="w-full h-[1px] bg-slate-800/60 mt-12"></div>
              </header>
          </div>

          {/* DYNAMIC PROJECT CARDS STACK */}
          <div className="flex flex-col space-y-6 w-full relative z-20">
            
            {systemsProjects.map((project) => {
              const isExpanded = expandedProject === project.id;
              
              return (
                <div 
                  key={project.id}
                  onClick={() => setExpandedProject(isExpanded ? null : project.id)}
                  className={`group relative bg-[#12121a]/80 backdrop-blur-sm border rounded-sm p-6 md:p-8 transition-all duration-500 shadow-xl overflow-hidden cursor-pointer stagger-in 
                    ${isExpanded ? `border-${project.color}-500/50 bg-[#12121a]/95` : 'border-slate-800/80 hover:border-slate-600'}`}
                >
                    {/* Glowing Accent Line */}
                    <div className={`absolute top-0 left-0 w-full h-[2px] transition-colors duration-500 ${isExpanded ? `bg-${project.color}-500` : `bg-${project.color}-500/0 group-hover:bg-${project.color}-500/50`}`}></div>
                    
                    {/* Card Header (Always Visible) */}
                    <div className="flex justify-between items-start">
                       <div>
                          <h2 className={`text-xl md:text-2xl font-medium text-slate-100 mb-3 transition-colors ${isExpanded ? `text-${project.color}-400` : `group-hover:text-${project.color}-300`}`}>
                            {project.title}
                          </h2>
                          <div className="flex flex-wrap gap-2 font-mono text-[10px] uppercase tracking-wider mb-4">
                             <span className={`text-${project.color}-400 bg-${project.color}-400/10 px-2 py-1 border border-${project.color}-400/20 rounded-sm`}>{project.tags[0]}</span>
                             <span className="text-slate-400 bg-slate-800/50 px-2 py-1 border border-slate-700/50 rounded-sm">{project.tags[1]}</span>
                             <span className="text-slate-400 bg-slate-800/50 px-2 py-1 border border-slate-700/50 rounded-sm hidden md:inline-block">{project.tags[2]}</span>
                          </div>
                       </div>
                       {/* Status Indicator */}
                       <div className="flex items-center gap-2 flex-shrink-0 mt-1">
                         <span className={`w-2 h-2 rounded-full bg-${project.color}-500 ${isExpanded ? 'animate-pulse' : ''}`}></span>
                         <span className="text-[10px] font-mono text-slate-500 hidden sm:block">{project.status}</span>
                       </div>
                    </div>

                    <p className={`text-sm text-slate-400 leading-relaxed max-w-2xl transition-all duration-300 ${isExpanded ? 'opacity-0 h-0 hidden' : 'opacity-100 h-auto'}`}>
                      {project.shortDesc}
                    </p>

                    {/* EXPANDABLE CONTENT (CSS Grid Transition) */}
                    <div className={`grid transition-all duration-500 ease-in-out ${isExpanded ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0 mt-0'}`}>
                      <div className="overflow-hidden">
                        
                        <p className="text-sm text-slate-300 leading-relaxed mb-6">
                          {project.fullDesc}
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                           {/* Code Snippet Block */}
                           <div className="bg-[#07070a] border border-slate-800/80 rounded-sm p-4 overflow-x-auto relative">
                              <p className="text-[10px] font-mono text-slate-600 absolute top-2 right-4 uppercase">Source</p>
                              <pre className="text-xs font-mono text-teal-400/90 whitespace-pre leading-relaxed mt-2">
                                <code>{project.codeSnippet}</code>
                              </pre>
                           </div>

                           {/* Screenshot Block - NOW ZOOMABLE */}
                           <div 
                              className={`aspect-video bg-[#07070a] border border-slate-800/80 rounded-sm overflow-hidden flex items-center justify-center relative cursor-zoom-in group/image transition-all duration-300 hover:border-${project.color}-500/50`}
                              onClick={(e) => {
                                e.stopPropagation(); // Prevents clicking image from collapsing the card
                                setSelectedImage(project.image);
                              }}
                           >
                               <img src={project.image} alt={project.title} className="w-full h-full object-cover opacity-80 group-hover/image:opacity-100 group-hover/image:scale-105 transition-all duration-500" />
                               <div className={`absolute inset-0 border border-slate-700/30 pointer-events-none transition-opacity group-hover/image:opacity-0`}></div>
                           </div>
                        </div>

                      </div>
                    </div>

                    {/* Toggle Button */}
                    <div className="mt-4 flex items-center gap-2 text-xs font-mono text-slate-500 group-hover:text-slate-300 transition-colors">
                      <span className="transform transition-transform">{isExpanded ? '[-]' : '[+]'}</span> 
                      {isExpanded ? 'Collapse Directory' : 'Expand Directory'}
                    </div>

                </div>
              );
            })}

          </div>
        </section>

        {/* RIGHT COLUMN: STICKY HUD (File Tree & Stats) */}
        <section className="w-full lg:w-1/3 hidden lg:flex flex-col gap-8 sticky top-32 h-[calc(100vh-8rem)] z-50 pointer-events-none mt-32">
            
            {/* Foundational Scripts File Tree */}
            <div className="bg-[#07070a]/70 backdrop-blur-xl border border-slate-800/80 p-6 rounded-sm shadow-2xl pointer-events-auto stagger-in">
              <h3 className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-6 flex items-center gap-3">
                <span className="text-slate-400">&gt;_</span> FOUNDATIONAL_SCRIPTS
              </h3>
              
              <div className="font-mono text-xs text-slate-400 space-y-4 relative before:absolute before:inset-y-0 before:left-[5px] before:w-[1px] before:bg-slate-800">
                 
                 <div className="flex items-center gap-3 relative group cursor-default">
                    <div className="w-[11px] h-[1px] bg-slate-800 group-hover:bg-teal-500 transition-colors"></div>
                    <span className="text-teal-600 group-hover:text-teal-400 transition-colors">main.py</span>
                    <span className="text-slate-600">[Dice_Rolling]</span>
                 </div>
                 
                 <div className="flex items-center gap-3 relative group cursor-default">
                    <div className="w-[11px] h-[1px] bg-slate-800 group-hover:bg-teal-500 transition-colors"></div>
                    <span className="text-teal-600 group-hover:text-teal-400 transition-colors">logic.py</span>
                    <span className="text-slate-600">[Number_Guessing]</span>
                 </div>
                 
                 <div className="flex items-center gap-3 relative group cursor-default">
                    <div className="w-[11px] h-[1px] bg-slate-800 group-hover:bg-teal-500 transition-colors"></div>
                    <span className="text-teal-600 group-hover:text-teal-400 transition-colors">app.py</span>
                    <span className="text-slate-600">[RPS_Engine]</span>
                 </div>

                 <div className="flex items-center gap-3 relative group cursor-default pt-4">
                    <div className="w-[11px] h-[1px] bg-slate-800 group-hover:bg-rose-500 transition-colors"></div>
                    <span className="text-slate-500 group-hover:text-rose-400 transition-colors">CS50x_Psets.tar.gz</span>
                 </div>

              </div>
            </div>

            {/* Core Proficiencies Radar/Stats */}
            <div className="bg-[#07070a]/70 backdrop-blur-xl border border-slate-800/80 p-6 rounded-sm shadow-2xl pointer-events-auto stagger-in mt-auto mb-8">
              <h3 className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-6 flex items-center gap-3 border-b border-slate-800/60 pb-4">
                SYSTEM_PROFILER.exe
              </h3>
              
              <ul className="space-y-4">
                 <li className="space-y-1">
                    <div className="flex justify-between text-[10px] font-mono text-slate-400 uppercase">
                       <span>Python / Data Scripts</span>
                       <span className="text-emerald-500">Active</span>
                    </div>
                    <div className="w-full h-1 bg-slate-800 rounded-full overflow-hidden">
                       <div className="h-full bg-emerald-600 w-[90%]"></div>
                    </div>
                 </li>
                 <li className="space-y-1">
                    <div className="flex justify-between text-[10px] font-mono text-slate-400 uppercase">
                       <span>Mechatronics / Hardware</span>
                       <span className="text-blue-500">Active</span>
                    </div>
                    <div className="w-full h-1 bg-slate-800 rounded-full overflow-hidden">
                       <div className="h-full bg-blue-600 w-[85%]"></div>
                    </div>
                 </li>
                 <li className="space-y-1">
                    <div className="flex justify-between text-[10px] font-mono text-slate-400 uppercase">
                       <span>C / C++ / Algorithms</span>
                       <span className="text-teal-500">Compiling</span>
                    </div>
                    <div className="w-full h-1 bg-slate-800 rounded-full overflow-hidden">
                       <div className="h-full bg-teal-600 w-[70%]"></div>
                    </div>
                 </li>
                 <li className="space-y-1">
                    <div className="flex justify-between text-[10px] font-mono text-slate-400 uppercase">
                       <span>Full-Stack (Next/React)</span>
                       <span className="text-rose-500/70">Initializing</span>
                    </div>
                    <div className="w-full h-1 bg-slate-800 rounded-full overflow-hidden">
                       <div className="h-full bg-rose-600/70 w-[50%]"></div>
                    </div>
                 </li>
              </ul>
            </div>

        </section>

      </div>
    </main>
  );
}