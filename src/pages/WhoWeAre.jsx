/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from 'react';

// Import CEO photo from assets (fallback provided in code if image is missing)
import ceoImage from '../assets/ceo.jpg';

// --- Custom Smooth Scroll Reveal Component ---
const ScrollReveal = ({ children, direction = "up", delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(ref.current);
        }
      },
      { threshold: 0.12 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.disconnect();
    };
  }, []);

  const baseClasses = "transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] transform";
  let transformClasses = "opacity-0 translate-y-12";
  
  if (direction === "left") transformClasses = "opacity-0 translate-x-12";
  if (direction === "right") transformClasses = "opacity-0 -translate-x-12";
  if (direction === "scale") transformClasses = "opacity-0 scale-95";
  if (isVisible) transformClasses = "opacity-100 translate-y-0 translate-x-0 scale-100";

  return (
    <div 
      ref={ref} 
      className={`${baseClasses} ${transformClasses}`} 
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default function WhoWeAre() {
  const pillars = [
    {
      number: "01",
      title: "Absolute Discretion",
      description: "Representing high-net-worth individuals requires total anonymity. Over 60% of our portfolio transactions occur completely off-market."
    },
    {
      number: "02",
      title: "Architectural Curation",
      description: "We do not merely sell real estate; we curate living art. Every home in our archive represents exceptional design and engineering."
    },
    {
      number: "03",
      title: "Global Intelligence",
      description: "With advisory networks spanning London, New York, and Dubai, our insight into ultra-prime property trends is unmatched."
    }
  ];

  return (
    <div className="w-full bg-white text-blue-950 overflow-hidden">
      
      {/* --- Page Header / Vision Statement --- */}
      <section className="pt-36 pb-20 md:pt-48 md:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <ScrollReveal direction="up">
          <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-amber-600 mb-4 block">
            Our Identity
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-8 leading-tight">
            Architects of Extraordinary <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-950 via-blue-900 to-amber-600">
              Real Estate Legacies.
            </span>
          </h1>
          <p className="max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-gray-500 font-light leading-relaxed">
            Hotle Homes was founded on a singular premise: to redefine real estate representation for the ultra-prime market through discretion, architectural appreciation, and flawless client dedication.
          </p>
        </ScrollReveal>
      </section>

      {/* --- The CEO / Leadership Feature Section --- */}
      <section className="py-16 md:py-24 bg-gray-50/60 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            
            {/* CEO Image Box Frame */}
            <div className="w-full lg:w-1/2">
              <ScrollReveal direction="scale">
                <div className="relative p-2 sm:p-4 bg-white rounded-4xl shadow-[0_15px_50px_-15px_rgba(23,37,84,0.12)] border border-gray-100 group">
                  <div className="relative aspect-4/5 overflow-hidden rounded-xl sm:rounded-3xl bg-gray-100">
                    <img 
                      src={ceoImage} 
                      alt="CEO & Founder" 
                      onError={(e) => {
                        // High-end Unsplash portrait fallback if ceo.jpg is not yet added
                        e.target.src = "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1200&auto=format&fit=crop";
                      }}
                      className="w-full h-full object-cover object-top transition-transform duration-1500 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-blue-950/60 via-transparent to-transparent"></div>
                    
                    {/* Floating Title Overlay on Mobile/Hover */}
                    <div className="absolute bottom-6 left-6 right-6 text-white">
                      <span className="text-amber-300 text-xs font-bold tracking-widest uppercase block mb-1">
                        Founder & Chief Executive
                      </span>
                      <p className="text-xl font-bold tracking-wide">Hotle Homes Executive Leadership</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* CEO Quote & Ethos */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center">
              <ScrollReveal direction="left" delay={200}>
                <span className="text-amber-600 font-bold tracking-widest uppercase text-xs mb-4 block">
                  Leadership Ethos
                </span>
                
                <blockquote className="text-2xl sm:text-3xl md:text-4xl font-serif font-light text-blue-950 leading-snug mb-8">
                  "True luxury in real estate is not defined by square footage alone. It is found in precision, privacy, and architectural soul."
                </blockquote>

                <div className="space-y-4 text-gray-600 font-light text-base sm:text-lg leading-relaxed mb-8">
                  <p>
                    Under visionary leadership, Hotle Homes has grown from an exclusive advisory boutique into a trusted global partner for high-net-worth investors, family offices, and architectural enthusiasts.
                  </p>
                  <p>
                    Our approach treats every estate as a unique masterpiece—ensuring every transaction is conducted with the elegance and confidentiality our clients command.
                  </p>
                </div>

                <div className="pt-6 border-t border-gray-200 flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-blue-950">Liberty Brown Moses</h3>
                    <h3 className="text-lg font-bold text-blue-950">Chief Executive Officer</h3>
                    <p className="text-sm text-gray-400">Hotle Homes Global</p>
                  </div>
                  <a 
                    href="/contact" 
                    className="px-6 py-3 rounded-full border border-blue-950 text-blue-950 text-xs font-semibold tracking-widest uppercase hover:bg-blue-950 hover:text-white transition-all duration-300"
                  >
                    Private Counsel
                  </a>
                </div>
              </ScrollReveal>
            </div>

          </div>
        </div>
      </section>

      {/* --- Pillars of Distinction (Values Grid) --- */}
      <section className="py-24 md:py-36 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <ScrollReveal direction="up">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-xs font-bold tracking-widest uppercase text-amber-600 mb-3 block">
              Our Principles
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
              The Foundations of Our Firm
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {pillars.map((pillar, index) => (
            <ScrollReveal key={pillar.number} direction="up" delay={index * 150}>
              <div className="p-8 sm:p-10 rounded-2xl bg-white border border-gray-100 shadow-[0_10px_30px_-15px_rgba(23,37,84,0.05)] hover:shadow-[0_20px_40px_-15px_rgba(23,37,84,0.12)] transition-all duration-500 hover:-translate-y-2 h-full flex flex-col justify-between">
                <div>
                  <span className="text-4xl font-extrabold text-amber-500/80 block mb-6 font-mono">
                    {pillar.number}
                  </span>
                  <h3 className="text-xl font-bold mb-4 text-blue-950">
                    {pillar.title}
                  </h3>
                  <p className="text-gray-500 font-light text-sm sm:text-base leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* --- Page CTA --- */}
      <section className="bg-blue-950 text-white py-24 sm:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-blue-900/40 via-transparent to-transparent opacity-50 pointer-events-none"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <ScrollReveal direction="up">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 tracking-tight">
              Experience the Hotle Standard.
            </h2>
            <p className="text-gray-300 text-base sm:text-lg mb-12 font-light max-w-2xl mx-auto leading-relaxed">
              Whether acquiring a new primary residence or seeking discreet representation for a luxury sale, our advisors are at your service.
            </p>
            <a 
              href="/contact" 
              className="inline-block px-10 py-4 bg-white text-blue-950 rounded-full font-medium tracking-widest uppercase text-xs sm:text-sm hover:bg-amber-400 hover:text-blue-950 transition-all duration-500 shadow-2xl"
            >
              Connect With Us
            </a>
          </ScrollReveal>
        </div>
      </section>

    </div>
  );
}