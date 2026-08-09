
import Hero from '../components/Hero';

export default function Home() {
  return (
    <div className="w-full bg-[#FAFAFA] selection:bg-amber-100 selection:text-blue-950">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Corporate Brand Ethos & Pillars Section */}
      <section className="py-24 lg:py-40 relative">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          
          <div className="flex flex-col lg:flex-row gap-20 lg:gap-32">
            
            {/* Left Column: Sticky Editorial Header */}
            <div className="lg:w-5/12">
              <div className="sticky top-32">
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-px w-8 bg-amber-500"></div>
                  <span className="text-xs font-bold tracking-[0.2em] uppercase text-amber-600">
                    The Hotle Standard
                  </span>
                </div>
                
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-blue-950 leading-[1.1] mb-8">
                  Crafting <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-950 to-blue-700">
                    Extraordinary
                  </span><br />
                  <span className="font-serif italic font-light text-gray-500">Sanctuaries</span>
                </h2>
                
                <p className="text-lg text-gray-600 leading-relaxed max-w-md font-light">
                  Hotle Homes operates at the absolute intersection of monumental architecture, ultra-prime advisory, and bespoke luxury development. We do not just find properties; we curate legacies.
                </p>
              </div>
            </div>

            {/* Right Column: The 3 Pillars */}
            <div className="lg:w-7/12 flex flex-col gap-16 sm:gap-24 mt-10 lg:mt-0">
              
              {/* Pillar 1 */}
              <div className="group flex flex-col sm:flex-row gap-8 items-start">
                <div className="shrink-0 p-4 rounded-2xl bg-white shadow-sm border border-gray-100 group-hover:shadow-xl group-hover:-translate-y-1 transition-all duration-500">
                  {/* Colorful Custom SVG: Architecture */}
                  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="64" height="64" rx="16" fill="#F0F5FF"/>
                    <path d="M16 48V28L32 16L48 28V48H16Z" fill="#1E3A8A" fillOpacity="0.1"/>
                    <path d="M24 48V32H40V48H24Z" fill="#F59E0B"/>
                    <path d="M32 16L16 28L18 30L32 19.5L46 30L48 28L32 16Z" fill="#1E3A8A"/>
                    <circle cx="32" cy="24" r="3" fill="#38BDF8"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-blue-950 mb-3 group-hover:text-amber-600 transition-colors duration-300">
                    Architectural Curation
                  </h3>
                  <p className="text-gray-500 text-base leading-relaxed font-light">
                    We represent properties that redefine skyline aesthetics, combining sustainable engineering with world-class structural artistry. Every home is a masterpiece of spatial design.
                  </p>
                </div>
              </div>

              {/* Pillar 2 */}
              <div className="group flex flex-col sm:flex-row gap-8 items-start">
                <div className="shrink-0 p-4 rounded-2xl bg-white shadow-sm border border-gray-100 group-hover:shadow-xl group-hover:-translate-y-1 transition-all duration-500">
                  {/* Colorful Custom SVG: Wealth/Advisory */}
                  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="64" height="64" rx="16" fill="#FFFBEB"/>
                    <path d="M32 16L48 32L32 48L16 32L32 16Z" fill="#F59E0B" fillOpacity="0.2"/>
                    <path d="M32 22L42 32L32 42L22 32L32 22Z" fill="#1E3A8A"/>
                    <path d="M32 16L48 32H16L32 16Z" fill="#F59E0B"/>
                    <circle cx="32" cy="32" r="4" fill="#38BDF8"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-blue-950 mb-3 group-hover:text-amber-600 transition-colors duration-300">
                    Private Wealth Advisory
                  </h3>
                  <p className="text-gray-500 text-base leading-relaxed font-light">
                    Discreet, high-touch consultation for ultra-high-net-worth individuals and family offices acquiring signature international holdings. Your portfolio is handled with absolute precision.
                  </p>
                </div>
              </div>

              {/* Pillar 3 */}
              <div className="group flex flex-col sm:flex-row gap-8 items-start">
                <div className="shrink-0 p-4 rounded-2xl bg-white shadow-sm border border-gray-100 group-hover:shadow-xl group-hover:-translate-y-1 transition-all duration-500">
                  {/* Colorful Custom SVG: Bespoke Interiors */}
                  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="64" height="64" rx="16" fill="#F0FDFA"/>
                    <path d="M20 44V36C20 29.3726 25.3726 24 32 24C38.6274 24 44 29.3726 44 36V44" stroke="#1E3A8A" strokeWidth="4"/>
                    <rect x="24" y="32" width="16" height="12" rx="2" fill="#F59E0B"/>
                    <path d="M16 48H48" stroke="#38BDF8" strokeWidth="4" strokeLinecap="round"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-blue-950 mb-3 group-hover:text-amber-600 transition-colors duration-300">
                    Bespoke Interiors
                  </h3>
                  <p className="text-gray-500 text-base leading-relaxed font-light">
                    Collaborating with world-renowned interior architects to transform expansive spaces into tailored, intimate sanctuaries. We bridge the gap between raw space and living art.
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>
    </div>
  );
}