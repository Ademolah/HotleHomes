import Hero from '../components/Hero';

export default function Home() {
  return (
    <div className="w-full bg-[#FAFAFA] selection:bg-amber-100 selection:text-blue-950 overflow-x-hidden">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Corporate Brand Ethos & Pillars Section */}
      <section className="py-20 lg:py-36 relative overflow-hidden">
        {/* Ambient Glow Effects for Cinematic Visual Depth */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-amber-200/30 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 -right-32 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-28">
            
            {/* Left Column: Sticky Editorial Header (Unchanged on Desktop) */}
            <div className="lg:w-5/12">
              <div className="lg:sticky lg:top-32 text-center lg:text-left">
                <div className="inline-flex items-center gap-3 mb-6">
                  <span className="h-px w-8 bg-amber-500 hidden lg:inline-block"></span>
                  <span className="text-xs font-bold tracking-[0.25em] uppercase text-amber-600 bg-amber-50 px-3.5 py-1.5 lg:px-0 lg:py-0 rounded-full border border-amber-200/50 lg:border-none">
                    The Hotle Standard
                  </span>
                </div>
                
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-blue-950 leading-[1.12] mb-6">
                  Crafting <br className="hidden sm:inline" />
                  <span className="bg-gradient-to-r from-blue-950 via-blue-800 to-amber-600 bg-clip-text text-transparent">
                    Extraordinary
                  </span><br />
                  <span className="font-serif italic font-light text-amber-700">Sanctuaries</span>
                </h2>
                
                <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-md mx-auto lg:mx-0 font-normal">
                  Hotle Homes operates at the absolute intersection of monumental architecture, ultra-prime advisory, and bespoke luxury development. We do not just find properties; we <span className="font-semibold text-blue-950 underline decoration-amber-400 decoration-2 underline-offset-4">curate legacies</span>.
                </p>
              </div>
            </div>

            {/* Right Column: 3 Pillars (Alternating Mobile Alignment + Colorful Text) */}
            <div className="lg:w-7/12 flex flex-col gap-10 sm:gap-16 mt-6 lg:mt-0">
              
              {/* Pillar 1: Left Aligned on Mobile */}
              <div className="group flex flex-col items-start text-left sm:flex-row sm:items-start gap-6 sm:gap-8 bg-white/80 backdrop-blur-md p-6 sm:p-0 rounded-3xl sm:bg-transparent border border-blue-50 sm:border-none shadow-sm sm:shadow-none transition-all duration-500">
                <div className="shrink-0 p-4 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-100/50 shadow-md border border-blue-100/80 group-hover:scale-105 group-hover:shadow-xl transition-all duration-500">
                  <svg width="56" height="56" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="64" height="64" rx="16" fill="#EFF6FF"/>
                    <path d="M16 48V28L32 16L48 28V48H16Z" fill="#1E3A8A" fillOpacity="0.15"/>
                    <path d="M24 48V32H40V48H24Z" fill="#F59E0B"/>
                    <path d="M32 16L16 28L18 30L32 19.5L46 30L48 28L32 16Z" fill="#1E3A8A"/>
                    <circle cx="32" cy="24" r="3.5" fill="#0284C7"/>
                  </svg>
                </div>
                <div>
                  <span className="text-[11px] font-extrabold tracking-widest text-amber-600 uppercase mb-1 block">01 / Architectural Curation</span>
                  <h3 className="text-2xl font-bold text-blue-950 mb-2 group-hover:text-amber-600 transition-colors duration-300">
                    Structural <span className="bg-gradient-to-r from-blue-950 to-blue-700 bg-clip-text text-transparent">Artistry</span>
                  </h3>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    We represent properties that <span className="text-blue-950 font-semibold">redefine skyline aesthetics</span>, combining sustainable engineering with monumental structural mastery.
                  </p>
                </div>
              </div>

              {/* Pillar 2: Right Aligned on Mobile (Cinematic Alternating Step) */}
              <div className="group flex flex-col items-end text-right sm:flex-row sm:items-start sm:text-left gap-6 sm:gap-8 bg-amber-50/60 backdrop-blur-md p-6 sm:p-0 rounded-3xl sm:bg-transparent border border-amber-100 sm:border-none shadow-sm sm:shadow-none transition-all duration-500 self-end sm:self-auto w-full">
                <div className="shrink-0 p-4 rounded-2xl bg-gradient-to-br from-amber-50 to-orange-100/50 shadow-md border border-amber-200/80 group-hover:scale-105 group-hover:shadow-xl transition-all duration-500 sm:order-first">
                  <svg width="56" height="56" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="64" height="64" rx="16" fill="#FFFBEB"/>
                    <path d="M32 16L48 32L32 48L16 32L32 16Z" fill="#F59E0B" fillOpacity="0.25"/>
                    <path d="M32 22L42 32L32 42L22 32L32 22Z" fill="#1E3A8A"/>
                    <path d="M32 16L48 32H16L32 16Z" fill="#D97706"/>
                    <circle cx="32" cy="32" r="4" fill="#0EA5E9"/>
                  </svg>
                </div>
                <div>
                  <span className="text-[11px] font-extrabold tracking-widest text-amber-700 uppercase mb-1 block">02 / Private Wealth</span>
                  <h3 className="text-2xl font-bold text-blue-950 mb-2 group-hover:text-amber-600 transition-colors duration-300">
                    Discreet <span className="bg-gradient-to-r from-amber-600 to-amber-800 bg-clip-text text-transparent">Advisory</span>
                  </h3>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    High-touch consultation for <span className="text-blue-950 font-semibold">UHNW individuals & family offices</span> acquiring signature international real estate holdings.
                  </p>
                </div>
              </div>

              {/* Pillar 3: Left Aligned on Mobile */}
              <div className="group flex flex-col items-start text-left sm:flex-row sm:items-start gap-6 sm:gap-8 bg-white/80 backdrop-blur-md p-6 sm:p-0 rounded-3xl sm:bg-transparent border border-teal-50 sm:border-none shadow-sm sm:shadow-none transition-all duration-500">
                <div className="shrink-0 p-4 rounded-2xl bg-gradient-to-br from-teal-50 to-emerald-100/50 shadow-md border border-teal-100/80 group-hover:scale-105 group-hover:shadow-xl transition-all duration-500">
                  <svg width="56" height="56" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="64" height="64" rx="16" fill="#F0FDFA"/>
                    <path d="M20 44V36C20 29.3726 25.3726 24 32 24C38.6274 24 44 29.3726 44 36V44" stroke="#1E3A8A" strokeWidth="4"/>
                    <rect x="24" y="32" width="16" height="12" rx="2" fill="#F59E0B"/>
                    <path d="M16 48H48" stroke="#0EA5E9" strokeWidth="4" strokeLinecap="round"/>
                  </svg>
                </div>
                <div>
                  <span className="text-[11px] font-extrabold tracking-widest text-emerald-600 uppercase mb-1 block">03 / Interior Design</span>
                  <h3 className="text-2xl font-bold text-blue-950 mb-2 group-hover:text-amber-600 transition-colors duration-300">
                    Bespoke <span className="bg-gradient-to-r from-emerald-600 to-teal-800 bg-clip-text text-transparent">Sanctuaries</span>
                  </h3>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    Collaborating with world-renowned interior architects to transform expansive raw spaces into <span className="text-blue-950 font-semibold">tailored living art</span>.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 3. NEW SECTION: Cinematic Signature Estate Showcase */}
      <section className="relative py-24 sm:py-32 bg-blue-950 text-white overflow-hidden">
        {/* Background Radial Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/60 via-blue-950 to-black opacity-95" />
        <div className="absolute -top-40 right-0 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
          
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6 border-b border-white/10 pb-8">
            <div>
              <span className="text-xs font-bold tracking-[0.25em] uppercase text-amber-400 mb-3 block">
                Curated Showcase
              </span>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
                Signature <span className="font-serif italic font-light text-amber-300">Estate</span>
              </h2>
            </div>
            <p className="text-gray-300 text-sm sm:text-base max-w-md font-light">
              An exclusive look into Hotle Homes' off-market portfolio representing unmatched international luxury.
            </p>
          </div>

          {/* Featured Property Card */}
          <div className="group relative rounded-3xl overflow-hidden border border-white/10 bg-slate-900 shadow-2xl transition-all duration-700">
            
            {/* Cinematic Image */}
            <div className="relative h-[480px] sm:h-[600px] w-full overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" 
                alt="The Monolith Sanctuary" 
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-1000 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-950 via-blue-950/30 to-transparent" />
            </div>

            {/* Glassmorphism Info Panel */}
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10 flex flex-col md:flex-row items-start md:items-end justify-between gap-6 backdrop-blur-md bg-blue-950/70 border-t border-white/10">
              <div className="max-w-xl">
                <div className="flex items-center gap-4 mb-4">
                <div className="h-[1px] w-8 bg-amber-500/60"></div>
                <span className="text-[10px] font-bold tracking-[0.3em] text-amber-400 uppercase">
                  Off-Market Exclusive
                </span>
              </div>
                <h3 className="text-2xl sm:text-4xl font-bold text-white mb-2">
                  The Monolith Sanctuary
                </h3>
                <p className="text-gray-300 text-xs sm:text-sm font-light flex items-center gap-2">
                  <span>📍 Maitama, Abuja</span>
                  <span>•</span>
                  <span>16,400 sq. ft.</span>
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full md:w-auto justify-between">
                <div>
                  <span className="text-[10px] uppercase text-gray-400 tracking-widest block font-medium">Guide Price</span>
                  <span className="text-2xl sm:text-3xl font-extrabold text-amber-400">₦152,000,000</span>
                </div>

                <a 
                  href="#inquire" 
                  className="px-6 py-3.5 bg-white text-blue-950 hover:bg-amber-400 transition-all duration-300 rounded-full text-xs font-bold tracking-widest uppercase shadow-lg hover:shadow-amber-400/20 hover:-translate-y-0.5 text-center w-full sm:w-auto"
                >
                  Request Dossier
                </a>
              </div>
            </div>

          </div>

        </div>
      </section>
    </div>
  );
}