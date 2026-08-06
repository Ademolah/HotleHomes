/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from 'react';


import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.jpg';
import image4 from '../assets/image4.jpg';
import image5 from '../assets/image5.jpg';
import image6 from '../assets/image6.jpg';
import image7 from '../assets/image7.jpg';
import image8 from '../assets/image8.jpg';
import image9 from '../assets/image9.jpg';
import image10 from '../assets/image10.jpg';

// --- Custom Cinematic Scroll Reveal Wrapper ---
const ScrollReveal = ({ children, direction = "up", delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(ref.current); // Only animate once
        }
      },
      { threshold: 0.15 } // Triggers when 15% of the element is visible
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.disconnect();
    };
  }, []);

  // Set translation directions based on props
  const baseClasses = "transition-all duration-[1200ms] ease-[cubic-bezier(0.25,0.8,0.25,1)] transform";
  let transformClasses = "opacity-0 translate-y-16"; // default 'up'
  
  if (direction === "left") transformClasses = "opacity-0 translate-x-16";
  if (direction === "right") transformClasses = "opacity-0 -translate-x-16";
  if (isVisible) transformClasses = "opacity-100 translate-y-0 translate-x-0 scale-100";
  else if (direction === "scale") transformClasses = "opacity-0 scale-95";

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

export default function Portfolio() {
  // 2. Map your images to luxurious property data
  const soldProperties = [
    { id: 1, image: image1, title: "The Sovereign Estate", location: "Bel Air, California", year: "2023", specs: "14,000 sq ft • 8 Beds • 12 Baths" },
    { id: 2, image: image2, title: "Palais de Lumière", location: "French Riviera", year: "2022", specs: "Coastal Villa • Private Dock" },
    { id: 3, image: image3, title: "Skyward Penthouse", location: "Manhattan, New York", year: "2024", specs: "Full Floor • 360° Views" },
    { id: 4, image: image4, title: "Villa Serenity", location: "Lake Como, Italy", year: "2023", specs: "Historic Restoration • 5 Acres" },
    { id: 5, image: image5, title: "The Obsidian House", location: "Aspen, Colorado", year: "2021", specs: "Modern Alpine • Ski-In/Ski-Out" },
    { id: 6, image: image6, title: "Palm Jumeirah Retreat", location: "Dubai, UAE", year: "2024", specs: "Private Beach • 11,500 sq ft" },
    { id: 7, image: image7, title: "Equestrian Manor", location: "Wellington, Florida", year: "2022", specs: "20 Acres • 12-Stall Barn" },
    { id: 8, image: image8, title: "The Glass House", location: "Tokyo, Japan", year: "2023", specs: "Architectural Award Winner" },
    { id: 9, image: image9, title: "Oceanfront Compound", location: "Malibu, California", year: "2021", specs: "Double Lot • Infinity Pool" },
    { id: 10, image: image10, title: "The Crown Jewel", location: "London, UK", year: "2024", specs: "Mayfair Townhouse • Heritage" },
  ];

  return (
    <div className="w-full bg-white text-blue-950">
      
      {/* --- Page Header --- */}
      <section className="pt-32 pb-20 md:pt-48 md:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col items-center text-center">
        <ScrollReveal direction="up">
          <span className="text-sm font-bold tracking-widest uppercase text-amber-600 mb-4 block">
            The Archive
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-8">
            A Legacy of <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-950 via-blue-800 to-amber-600">
              Extraordinary Estates.
            </span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-500 font-light leading-relaxed">
            A curated visual anthology of our most significant transactions. These masterpieces define the pinnacle of ultra-prime real estate.
          </p>
        </ScrollReveal>
      </section>

      {/* --- Cinematic Image Layout --- */}
      <section className="pb-32 px-4 sm:px-6 lg:px-8 max-w-360 mx-auto overflow-hidden">
        <div className="flex flex-col gap-24 md:gap-40">
          {soldProperties.map((property, index) => {
            // Alternate layout: Even numbers on the left, Odd on the right
            const isEven = index % 2 === 0;

            return (
              <div 
                key={property.id} 
                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-8 lg:gap-16 xl:gap-24 group`}
              >
                
                {/* Image Container with Parallax-style Scale Reveal */}
                <div className="w-full lg:w-3/5">
                <ScrollReveal direction="scale">
                    
                    {/* --- The Designed Architectural Gallery Frame --- */}
                    <div className="relative p-2 sm:p-4 bg-white rounded-3xl shadow-[0_10px_40px_-10px_rgba(23,37,84,0.08)] border border-gray-100 transition-all duration-1000 ease-out group-hover:shadow-[0_20px_60px_-15px_rgba(23,37,84,0.15)] group-hover:-translate-y-2">
                    
                    {/* Inner Image Mask */}
                    <div className="relative aspect-4/3 md:aspect-16/10 overflow-hidden rounded-xl sm:rounded-2xl">
                        <img 
                        src={property.image} 
                        alt={property.title} 
                        className="w-full h-full object-cover transition-transform duration-2000 ease-out group-hover:scale-110"
                        />
                        
                        {/* Subtle dark gradient overlay to ensure premium feel */}
                        <div className="absolute inset-0 bg-blue-950/10 group-hover:bg-transparent transition-colors duration-1000"></div>
                        
                        {/* Inner glass reflection ring for that ultra-premium crisp edge */}
                        <div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-xl sm:rounded-2xl pointer-events-none"></div>
                    </div>

                    </div>

                </ScrollReveal>
                </div>

                {/* Text Content */}
                <div className="w-full lg:w-2/5 flex flex-col justify-center">
                  <ScrollReveal direction={isEven ? 'right' : 'left'} delay={200}>
                    <div className="border-l-2 border-amber-500 pl-6 lg:pl-10">
                      <span className="text-amber-600 font-semibold tracking-widest uppercase text-xs mb-3 block">
                        Sold • {property.year}
                      </span>
                      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 tracking-tight">
                        {property.title}
                      </h2>
                      <p className="text-gray-500 text-lg mb-2 font-light">
                        {property.location}
                      </p>
                      <p className="text-gray-400 text-sm tracking-wide">
                        {property.specs}
                      </p>
                    </div>
                  </ScrollReveal>
                </div>

              </div>
            );
          })}
        </div>
      </section>

      {/* --- Footer CTA for the Portfolio Page --- */}
      <section className="bg-gray-50/50 py-32 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <ScrollReveal direction="up">
            <h2 className="text-3xl md:text-5xl font-bold mb-8 text-blue-950">
              Acquire Your Next Masterpiece.
            </h2>
            <p className="text-gray-500 text-lg mb-12 font-light max-w-2xl mx-auto">
              Our active portfolio contains off-market estates not publicly disclosed. Contact our advisory team for a private consultation.
            </p>
            <a 
              href="#inquire" 
              className="inline-block px-10 py-4 bg-blue-950 text-white rounded-full font-medium tracking-widest uppercase text-sm hover:bg-amber-600 transition-colors duration-500 shadow-xl shadow-blue-950/20"
            >
              Contact Advisory
            </a>
          </ScrollReveal>
        </div>
      </section>

    </div>
  );
}