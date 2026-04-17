"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import gsap from 'gsap';

export default function Design() {
  // State for Accordion and Lightbox
  const [expandedProject, setExpandedProject] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    // Clean entrance animation
    gsap.fromTo(
      ".stagger-in",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1.2, stagger: 0.15, ease: "power3.out" }
    );
    
    // Rotating hybrid geometry watermark
    gsap.to(".background-watermark", {
      rotation: 360, 
      duration: 800, 
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

  // ==============================================================================================
  // 2D DESIGN PROJECT DATA ARRAY
  // ==============================================================================================
  const designProjects = [
    {
      id: 'urban-topo',
      title: 'Tactical Urban Topology',
      tags: ['Vector Mapping', 'Information Design', 'HUD Aesthetics'],
      status: 'DECRYPTED',
      color: 'red',
      shortDesc: 'High-density cartographic visualization mapping Rajshahi University infrastructure using inverted monochrome data overlays.',
      fullDesc: 'Engineered entirely in a 2D workspace, this asset strips away traditional map elements to focus on raw vector paths and node-based telemetry. It functions as a tactical readout, utilizing coordinate tracking and targeted elevation markers to simulate a live satellite feed.',
      image: '/map.png'
    },
    {
      id: 'muscle-jdm',
      title: 'American Muscle in Japan',
      tags: ['Editorial Layout', 'Typography', 'Compositing'],
      status: 'DECRYPTED',
      color: 'amber',
      shortDesc: 'Editorial compositing blending Western brute-force automotive photography with the chaotic, layered typography of Japanese tuner culture.',
      fullDesc: 'This piece solves a complex layout problem: balancing aggressive, heavy automotive geometry with rigid, block-based Kanji (富士と力 - "Fuji and Power"). By utilizing halftone textures, precise masking, and a strict color palette, it achieves a premium, editorial magazine aesthetic.',
      image: '/car-poster.png' 
    },
    {
      id: 'pitch-deck',
      title: 'Corporate Architecture Deck',
      tags: ['UI/UX Layout', 'Brand Identity', 'Minimalism'],
      status: 'DECRYPTED',
      color: 'teal',
      shortDesc: 'Corporate pitch deck template balancing modern minimalist layouts with aggressive color blocking for high-impact presentations.',
      fullDesc: 'Designed to deliver high-density information without overwhelming the viewer. The layout uses a stark contrast system to guide the eye through complex investor data, maintaining a clean, brutalist corporate aesthetic across all master slides.',
      image: '/pitch-deck.png'
    }
  ];

  // ==============================================================================================
  // 3D CAD PROJECT DATA ARRAY
  // ==============================================================================================
  const cadProjects = [
    {
      id: 'project-sgm',
      title: 'Project SGM: Spherical Geneva Mechanism',
      tags: ['SolidWorks', 'Kinematics', 'Motion Study'],
      status: 'SIMULATED',
      color: 'red',
      shortDesc: 'Parametric modeling and kinematic motion study of a Spherical Geneva Mechanism for intermittent rotational translation.',
      fullDesc: 'This assembly bridges complex spatial geometry with precise mechanical timing. The workflow involved strict 2D parametric sketching, 3D feature propagation via circular patterns, and a comprehensive motion analysis to validate the intermittent drive tolerances without collision.',
      images: [
        { src: '/sgm-sketch.jpg', label: '01 // PARAMETRIC_SKETCH' },
        { src: '/sgm-part.jpg', label: '02 // FEATURE_MODELING' },
        { src: '/sgm-assembly.jpg', label: '03 // MOTION_DYNAMICS' }
      ]
    }
  ];

  return (
    <main className="min-h-screen w-full bg-[#0a0a0e] text-slate-300 p-6 md:px-12 md:py-12 font-sans relative overflow-x-hidden">
      
      {/* ============================================================================================== */}
      {/* 0. LIGHTBOX MODAL (z-[100]) */}
      {/* ============================================================================================== */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] bg-[#07070a]/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-12 cursor-zoom-out transition-all duration-300"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-screen-2xl max-h-full w-full h-full flex items-center justify-center">
            <img 
              src={selectedImage} 
              alt="Enlarged asset render" 
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
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150vmax] h-[150vmax] z-0 flex items-center justify-center opacity-[0.03] pointer-events-none background-watermark text-red-500"
        style={{
          maskImage: 'radial-gradient(circle at center, black 30%, transparent 70%)',
          WebkitMaskImage: 'radial-gradient(circle at center, black 30%, transparent 70%)'
        }}
      >
        <svg className="w-full h-full max-w-none" viewBox="0 0 200 200" preserveAspectRatio="xMidYMid slice" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g stroke="currentColor" strokeWidth="0.5">
              <pattern id="hybrid-grid" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
                {/* 3D Box Wireframe */}
                <path d="M10 10l10 5v15l-10-5V10zM20 15l10-5v15l-10 5V15zM10 10l10-5 10 5-10 5-10-5z" opacity="0.5"/>
                {/* 2D Vector Path icons */}
                <circle cx="40" cy="40" r="3" fill="none" strokeDasharray="1 1"/>
                <path d="M35 40h10M40 35v10" />
              </pattern>
              <rect width="200" height="200" fill="url(#hybrid-grid)"/>
            </g>
        </svg>
      </div>

      <div className="fixed top-10 left-10 font-mono text-sm text-red-600 opacity-20 fading-code pointer-events-none z-0 tracking-wider space-y-1 hidden md:block">
        <div>$ INIT decrypt_assets.sh</div>
        <div>&gt; VECTOR_DATA :: <span className="text-teal-500">DECRYPTED</span></div>
        <div>&gt; MESH_GEOMETRY :: <span className="text-red-500">DECRYPTED</span></div>
        <div>STATUS: FULL_ACCESS</div>
      </div>

      <div className="fixed top-[-10%] left-[-10%] w-[50rem] h-[50rem] bg-red-900/10 rounded-full blur-[120px] pointer-events-none z-0"></div>
      <div className="fixed bottom-[-10%] right-[-10%] w-[50rem] h-[50rem] bg-rose-900/5 rounded-full blur-[120px] pointer-events-none z-0"></div>

      {/* ============================================================================================== */}
      {/* 2. MAIN CONTENT & HUD LAYER */}
      {/* ============================================================================================== */}
      
      <div className="max-w-7xl w-full mx-auto relative z-10 flex flex-col lg:flex-row items-start gap-12 mt-4 pb-32">
        
        {/* LEFT COLUMN: Header & Interactive Project Cards */}
        <section className="w-full lg:w-2/3 flex flex-col">
          
          <div className="mb-16 stagger-in relative z-30">
              <div className="mb-6">
                <Link href="/" className="inline-flex items-center gap-2 text-xs font-mono text-slate-500 hover:text-red-400 transition-colors group">
                    <svg className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
                    cd .. /root
                </Link>
              </div>
              <header className="relative">
                <svg className="absolute top-0 left-0 w-8 h-8 text-red-800/30 -translate-x-4 -translate-y-4" fill="none" stroke="currentColor" strokeWidth="0.5" viewBox="0 0 24 24"><path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>
                <h1 className="text-4xl md:text-5xl font-light text-slate-100 mb-4 tracking-tight">
                    /design
                </h1>
                <p className="text-lg text-slate-400 leading-relaxed relative z-10">
                  Visual systems, layout architecture, and 2D/3D integration.
                </p>
                <div className="w-full h-[1px] bg-red-900/30 mt-12"></div>
              </header>
          </div>

          <div className="flex flex-col space-y-6 w-full relative z-20">
            
            <h3 className="text-sm font-mono text-slate-400 uppercase tracking-widest mb-6 mt-4 flex items-center gap-3 stagger-in border-b border-slate-800/60 pb-3">
              <span className="w-2 h-4 bg-red-500/80 animate-pulse"></span>
              [01] // 2D_WORKSPACE_DECRYPTED
            </h3>

            {/* DYNAMIC 2D PROJECT CARDS STACK */}
            {designProjects.map((project) => {
              const isExpanded = expandedProject === project.id;
              
              return (
                <div 
                  key={project.id}
                  onClick={() => setExpandedProject(isExpanded ? null : project.id)}
                  className={`group relative bg-[#12121a]/80 backdrop-blur-sm border rounded-sm p-6 md:p-8 transition-all duration-500 shadow-xl overflow-hidden cursor-pointer stagger-in 
                    ${isExpanded ? `border-${project.color}-500/50 bg-[#12121a]/95` : 'border-slate-800/80 hover:border-slate-600'}`}
                >
                    <div className={`absolute top-0 left-0 w-full h-[2px] transition-colors duration-500 ${isExpanded ? `bg-${project.color}-500` : `bg-${project.color}-500/0 group-hover:bg-${project.color}-500/50`}`}></div>
                    
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
                       <div className="flex items-center gap-2 flex-shrink-0 mt-1">
                         <span className="w-2 h-2 rounded-full bg-teal-500"></span>
                         <span className="text-[10px] font-mono text-slate-500 hidden sm:block">{project.status}</span>
                       </div>
                    </div>

                    <p className={`text-sm text-slate-400 leading-relaxed max-w-2xl transition-all duration-300 ${isExpanded ? 'opacity-0 h-0 hidden' : 'opacity-100 h-auto'}`}>
                      {project.shortDesc}
                    </p>

                    {/* EXPANDABLE CONTENT */}
                    <div className={`grid transition-all duration-500 ease-in-out ${isExpanded ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0 mt-0'}`}>
                      <div className="overflow-hidden">
                        
                        <p className="text-sm text-slate-300 leading-relaxed mb-6">
                          {project.fullDesc}
                        </p>

                        <div className="mb-6">
                           {/* Screenshot Block - ZOOMABLE */}
                           <div 
                              className={`w-full bg-[#07070a] border border-slate-800/80 rounded-sm overflow-hidden flex items-center justify-center relative cursor-zoom-in group/image transition-all duration-300 hover:border-${project.color}-500/50`}
                              onClick={(e) => {
                                e.stopPropagation(); 
                                setSelectedImage(project.image);
                              }}
                           >
                               <img src={project.image} alt={project.title} className="w-full max-h-[500px] object-cover opacity-80 group-hover/image:opacity-100 group-hover/image:scale-[1.02] transition-all duration-500 filter grayscale-[15%] group-hover/image:grayscale-0" />
                               <div className="absolute inset-0 border border-slate-700/30 pointer-events-none transition-opacity group-hover/image:opacity-0"></div>
                               <p className="absolute bottom-4 right-4 text-[10px] font-mono text-slate-400 bg-[#0a0a0e]/90 px-3 py-1 rounded-sm border border-slate-700/50 opacity-0 group-hover/image:opacity-100 transition-opacity backdrop-blur-md">
                                 [ CLICK TO ENLARGE ]
                               </p>
                           </div>
                        </div>

                      </div>
                    </div>

                    <div className="mt-4 flex items-center gap-2 text-xs font-mono text-slate-500 group-hover:text-slate-300 transition-colors">
                      <span className="transform transition-transform">{isExpanded ? '[-]' : '[+]'}</span> 
                      {isExpanded ? 'Collapse Asset' : 'Expand Asset'}
                    </div>
                </div>
              );
            })}

            <h3 className="text-sm font-mono text-slate-400 uppercase tracking-widest mt-12 mb-6 flex items-center gap-3 stagger-in border-b border-slate-800/60 pb-3">
              <span className="w-2 h-4 bg-red-600/80 animate-pulse"></span>
              [02] // 3D_WORKSPACE_DECRYPTED
            </h3>

            {/* DYNAMIC 3D PROJECT CARDS STACK */}
            {cadProjects.map((project) => {
              const isExpanded = expandedProject === project.id;
              
              return (
                <div 
                  key={project.id}
                  onClick={() => setExpandedProject(isExpanded ? null : project.id)}
                  className={`group relative bg-[#12121a]/80 backdrop-blur-sm border rounded-sm p-6 md:p-8 transition-all duration-500 shadow-xl overflow-hidden cursor-pointer stagger-in 
                    ${isExpanded ? `border-${project.color}-500/50 bg-[#12121a]/95` : 'border-slate-800/80 hover:border-slate-600'}`}
                >
                    <div className={`absolute top-0 left-0 w-full h-[2px] transition-colors duration-500 ${isExpanded ? `bg-${project.color}-500` : `bg-${project.color}-500/0 group-hover:bg-${project.color}-500/50`}`}></div>
                    
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
                       <div className="flex items-center gap-2 flex-shrink-0 mt-1">
                         <span className="w-2 h-2 rounded-full bg-red-500"></span>
                         <span className="text-[10px] font-mono text-slate-500 hidden sm:block">{project.status}</span>
                       </div>
                    </div>

                    <p className={`text-sm text-slate-400 leading-relaxed max-w-2xl transition-all duration-300 ${isExpanded ? 'opacity-0 h-0 hidden' : 'opacity-100 h-auto'}`}>
                      {project.shortDesc}
                    </p>

                    {/* EXPANDABLE 3D CONTENT */}
                    <div className={`grid transition-all duration-500 ease-in-out ${isExpanded ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0 mt-0'}`}>
                      <div className="overflow-hidden">
                        
                        <p className="text-sm text-slate-300 leading-relaxed mb-6">
                          {project.fullDesc}
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                           {/* 3D Screenshot Grid - ZOOMABLE */}
                           {project.images.map((img, idx) => (
                             <div 
                                key={idx} 
                                className="w-full bg-[#07070a] border border-slate-800/80 rounded-sm overflow-hidden flex flex-col relative cursor-zoom-in group/image transition-all duration-300 hover:border-red-500/50" 
                                onClick={(e) => { 
                                  e.stopPropagation(); 
                                  setSelectedImage(img.src); 
                                }}
                             >
                                 <div className="aspect-video relative overflow-hidden">
                                    <img src={img.src} alt={img.label} className="w-full h-full object-cover opacity-80 group-hover/image:opacity-100 group-hover/image:scale-[1.02] transition-all duration-500 filter grayscale-[15%] group-hover/image:grayscale-0" />
                                    <div className="absolute inset-0 border border-slate-700/30 pointer-events-none transition-opacity group-hover/image:opacity-0"></div>
                                 </div>
                                 <div className="p-2 border-t border-slate-800/80 bg-[#0a0a0e]">
                                    <p className="font-mono text-[9px] text-slate-500 group-hover/image:text-red-400 transition-colors uppercase tracking-widest text-center">{img.label}</p>
                                 </div>
                             </div>
                           ))}
                        </div>

                      </div>
                    </div>

                    <div className="mt-4 flex items-center gap-2 text-xs font-mono text-slate-500 group-hover:text-slate-300 transition-colors">
                      <span className="transform transition-transform">{isExpanded ? '[-]' : '[+]'}</span> 
                      {isExpanded ? 'Collapse Assembly' : 'Inspect Assembly'}
                    </div>
                </div>
              );
            })}

          </div>
        </section>

        {/* RIGHT COLUMN: STICKY HUD */}
        <section className="w-full lg:w-1/3 hidden lg:flex flex-col gap-8 sticky top-32 h-[calc(100vh-8rem)] z-50 pointer-events-none mt-32">
            
            {/* Visual Directories Tree */}
            <div className="bg-[#07070a]/70 backdrop-blur-xl border border-slate-800/80 p-6 rounded-sm shadow-2xl pointer-events-auto stagger-in">
              <h3 className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-6 flex items-center gap-3">
                <span className="text-red-500/80">&gt;_</span> VISUAL_DIRECTORIES
              </h3>
              
              <div className="font-mono text-xs text-slate-400 space-y-4 relative before:absolute before:inset-y-0 before:left-[5px] before:w-[1px] before:bg-slate-800">
                 
                 <div className="flex items-center gap-3 relative group cursor-default">
                    <div className="w-[11px] h-[1px] bg-slate-800 group-hover:bg-red-500 transition-colors"></div>
                    <span className="text-red-500 group-hover:text-red-400 transition-colors">map.png</span>
                    <span className="text-slate-600">[Telemetry]</span>
                 </div>
                 
                 <div className="flex items-center gap-3 relative group cursor-default">
                    <div className="w-[11px] h-[1px] bg-slate-800 group-hover:bg-amber-500 transition-colors"></div>
                    <span className="text-amber-500 group-hover:text-amber-400 transition-colors">poster.png</span>
                    <span className="text-slate-600">[Compositing]</span>
                 </div>
                 
                 <div className="flex items-center gap-3 relative group cursor-default">
                    <div className="w-[11px] h-[1px] bg-slate-800 group-hover:bg-teal-500 transition-colors"></div>
                    <span className="text-teal-500 group-hover:text-teal-400 transition-colors">deck.png</span>
                    <span className="text-slate-600">[Layout]</span>
                 </div>

                 {/* New Decrypted CAD File entry */}
                 <div className="flex items-center gap-3 relative group cursor-default pt-4">
                    <div className="w-[11px] h-[1px] bg-slate-800 group-hover:bg-red-500 transition-colors"></div>
                    <span className="text-red-600 group-hover:text-red-400 transition-colors">sgm_study.sldasm</span>
                    <span className="text-slate-600">[Kinematics]</span>
                 </div>

              </div>
            </div>

            {/* Design Telemetry Stats */}
            <div className="bg-[#07070a]/70 backdrop-blur-xl border border-slate-800/80 p-6 rounded-sm shadow-2xl pointer-events-auto stagger-in mt-auto mb-8">
              <h3 className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-6 flex items-center gap-3 border-b border-slate-800/60 pb-4">
                RENDER_TELEMETRY.exe
              </h3>
              
              <ul className="space-y-4">
                 <li className="space-y-1">
                    <div className="flex justify-between text-[10px] font-mono text-slate-400 uppercase">
                       <span>Vector / Raster Editing</span>
                       <span className="text-teal-500">Nominal</span>
                    </div>
                    <div className="w-full h-1 bg-slate-800 rounded-full overflow-hidden">
                       <div className="h-full bg-teal-600 w-[95%]"></div>
                    </div>
                 </li>
                 <li className="space-y-1">
                    <div className="flex justify-between text-[10px] font-mono text-slate-400 uppercase">
                       <span>Information Architecture</span>
                       <span className="text-amber-500">Nominal</span>
                    </div>
                    <div className="w-full h-1 bg-slate-800 rounded-full overflow-hidden">
                       <div className="h-full bg-amber-500 w-[85%]"></div>
                    </div>
                 </li>
                 <li className="space-y-1">
                    <div className="flex justify-between text-[10px] font-mono text-slate-400 uppercase">
                       <span>Parametric 3D (CAD)</span>
                       {/* Updated from Encrypting to Nominal */}
                       <span className="text-red-500">Nominal</span>
                    </div>
                    <div className="w-full h-1 bg-slate-800 rounded-full overflow-hidden">
                       {/* Updated width from 45% to 85% */}
                       <div className="h-full bg-red-500 w-[85%]"></div>
                    </div>
                 </li>
              </ul>
            </div>

        </section>

      </div>
    </main>
  );
}