
import Hero from '../components/Hero';

export default function Home() {
  return (
    <div className="w-full bg-white">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Corporate Brand Ethos & Pillars Section */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header with Gradient Typography */}
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-amber-600 mb-3 block">
              The Hotle Homes Standard
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-blue-950 leading-tight">
              Crafting Extraordinary <br />
              <span className="bg-linear-to-r from-blue-950 via-blue-700 to-amber-600 bg-clip-text text-transparent">
                Living Sanctuaries
              </span>
            </h2>
            <p className="mt-6 text-base sm:text-lg text-gray-600 leading-relaxed font-normal">
              Hotle Homes operates at the intersection of monumental architecture, ultra-prime real estate advisory, and bespoke luxury development.
            </p>
          </div>

          {/* 3 Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            
            {/* Pillar 1 */}
            <div className="p-8 sm:p-10 border border-gray-100 bg-gray-50/40 hover:bg-white hover:shadow-2xl hover:border-amber-200/60 transition-all duration-500 group">
              <div className="w-12 h-12 mb-8 bg-blue-950 text-amber-400 flex items-center justify-center font-bold text-lg shadow-md group-hover:scale-110 transition-transform">
                01
              </div>
              <h3 className="text-xl font-bold text-blue-950 mb-3">Architectural Curation</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We represent properties that redefine skyline aesthetics, combining sustainable engineering with world-class structural artistry.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="p-8 sm:p-10 border border-gray-100 bg-gray-50/40 hover:bg-white hover:shadow-2xl hover:border-amber-200/60 transition-all duration-500 group">
              <div className="w-12 h-12 mb-8 bg-blue-950 text-amber-400 flex items-center justify-center font-bold text-lg shadow-md group-hover:scale-110 transition-transform">
                02
              </div>
              <h3 className="text-xl font-bold text-blue-950 mb-3">Private Wealth Advisory</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Discreet, high-touch consultation for ultra-high-net-worth individuals and family offices acquiring signature international holdings.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="p-8 sm:p-10 border border-gray-100 bg-gray-50/40 hover:bg-white hover:shadow-2xl hover:border-amber-200/60 transition-all duration-500 group">
              <div className="w-12 h-12 mb-8 bg-blue-950 text-amber-400 flex items-center justify-center font-bold text-lg shadow-md group-hover:scale-110 transition-transform">
                03
              </div>
              <h3 className="text-xl font-bold text-blue-950 mb-3">Bespoke Interiors</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Collaborating with world-renowned interior architects to transform expansive spaces into tailored, intimate sanctuaries.
              </p>
            </div>

          </div>

        </div>
      </section>
    </div>
  );
}