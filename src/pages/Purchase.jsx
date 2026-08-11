import { useState } from 'react';

// Property 1 Images
import prop1_1 from '../assets/prop1_1.jpg';
import prop1_2 from '../assets/prop1_2.jpg';
import prop1_3 from '../assets/prop1_3.jpg';
import prop1_4 from '../assets/prop1_4.jpg';
import prop1_5 from '../assets/prop1_5.jpg';

// Property 2 Images
import prop2_1 from '../assets/prop2_1.jpg';
import prop2_2 from '../assets/prop2_2.jpg';
import prop2_3 from '../assets/prop2_3.jpg';
import prop2_4 from '../assets/prop2_4.jpg';
import prop2_5 from '../assets/prop2_5.jpg';

// Property 3 Images
import prop3_1 from '../assets/prop3_1.jpg';
import prop3_2 from '../assets/prop3_2.jpg';
import prop3_3 from '../assets/prop3_3.jpg';
import prop3_4 from '../assets/prop3_4.jpg';
import prop3_5 from '../assets/prop3_5.jpg';

// ==========================================
// 2. PROPERTY DATA
// ==========================================
const propertiesData = [
  {
    id: 1,
    title: "2 units of 4bedroom semidetached twin duplex",
    locality: "Before Still Estate, back of Efab Estate,Idu, Railway station",
    state: "FCT Abuja",
    price: "₦ 350,000,000",
    specs: "5 Beds • 6 Baths • 1,200 sqm",
    description: "A monumental achievement in modern architecture featuring panoramic city views, an infinity pool, and bespoke interior finishes.",
    images: [prop1_1, prop1_2, prop1_3, prop1_4, prop1_5]
  },
  {
    id: 2,
    title: "BRAND-NEW 5-BEDROOM DETACHED DUPLEX",
    locality: "Apo - Resttlement",
    state: "FCT Abuja",
    price: "₦ 750,000,000",
    specs: "5 Beds • 7 Baths • 1,500 sqm",
    description: "Boys' Quarters - 4 Generously Sized Living Rooms - Fully Fitted Kitchen - Rooftop Lounge - Study Room - Walk-in Closet - Balcony - Swimming Pool - Elevator Shaft - Guest Toilet - Serene & Secure Environment Kindly contact for more information.",
    images: [prop2_1, prop2_2, prop2_3, prop2_4, prop2_5]
  },
  {
    id: 3,
    title: "A 3 Bedroom semi-detached Duplex & BQ with Modern finishing",
    locality: "Idu, Abuja, directly opposite Idu Railway Station.",
    state: "FCT Abuja",
    price: "₦ 175,000,000",
    specs: "4 Beds • 4.5 Baths • 850 sqm",
    description: "Good road access road, fast-developing area with strong investment value.",
    images: [prop3_1, prop3_2, prop3_3, prop3_4, prop3_5]
  }
];

// ==========================================
// 3. PROPERTY CARD COMPONENT (With Carousel)
// ==========================================
const PropertyCard = ({ property }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === property.images.length - 1 ? 0 : prev + 1));
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? property.images.length - 1 : prev - 1));
  };

  // WhatsApp Checkout Handler
  const handleWhatsAppInquiry = () => {
    // Replace with your actual business number (remove the + and just use 234...)
    const phoneNumber = "2347017455196"; 
    const message = `Hello Hotle Homes, I am interested in acquiring "${property.title}" located in ${property.locality}, ${property.state}. Please provide more details.`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500">
      
      {/* Image Carousel Header */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
        
        {/* Images mapping */}
        <div 
          className="flex transition-transform duration-500 ease-out h-full"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {property.images.map((img, index) => (
            <img 
              key={index}
              src={img} 
              alt={`${property.title} - View ${index + 1}`}
              className="w-full h-full object-cover flex-shrink-0"
            />
          ))}
        </div>

        {/* Exclusive Badge - The Active Pulse */}
        <div className="absolute top-4 left-4 z-10">
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 bg-black/40 backdrop-blur-md border border-white/20 text-white text-[10px] font-bold tracking-[0.2em] uppercase rounded-full shadow-sm">
            <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
            </span>
            Available
        </div>
        </div>

        {/* Navigation Arrows (Always visible on mobile, visible on group hover on desktop) */}
        <button 
          onClick={prevImage}
          className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-white/80 backdrop-blur-sm hover:bg-white text-slate-800 rounded-full shadow-md transition-opacity duration-300 z-10 opacity-100 lg:opacity-0 lg:group-hover:opacity-100"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
        </button>

        <button 
          onClick={nextImage}
          className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-white/80 backdrop-blur-sm hover:bg-white text-slate-800 rounded-full shadow-md transition-opacity duration-300 z-10 opacity-100 lg:opacity-0 lg:group-hover:opacity-100"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
        </button>

        {/* Pagination Dots */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-1.5 z-10">
          {property.images.map((_, idx) => (
            <div 
              key={idx} 
              className={`h-1.5 rounded-full transition-all duration-300 ${currentIndex === idx ? 'w-4 bg-white' : 'w-1.5 bg-white/50'}`}
            />
          ))}
        </div>
      </div>

      {/* Property Details */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="text-lg font-bold text-blue-950 leading-tight">
              {property.title}
            </h3>
            <p className="text-sm text-slate-500 mt-1">
              {property.locality}, {property.state}
            </p>
          </div>
          <span className="text-lg font-extrabold text-blue-950 shrink-0">
            {property.price}
          </span>
        </div>

        <p className="text-sm font-semibold text-amber-600 mb-4 tracking-wide">
          {property.specs}
        </p>

        <p className="text-sm text-slate-600 line-clamp-2 mb-6 flex-grow">
          {property.description}
        </p>

        {/* WhatsApp CTA */}
        <button 
          onClick={handleWhatsAppInquiry}
          className="w-full flex items-center justify-center gap-2 bg-blue-950 hover:bg-amber-600 text-white py-3.5 px-4 rounded-xl font-semibold text-sm transition-colors duration-300 shadow-md hover:shadow-lg"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.82 9.82 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
          </svg>
          Inquire via WhatsApp
        </button>
      </div>
    </div>
  );
};

// ==========================================
// 4. MAIN PAGE COMPONENT
// ==========================================
export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-32">
      
      {/* Editorial Header */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 mb-16 text-center">
        <div className="inline-flex items-center gap-3 mb-4">
          <span className="h-px w-8 bg-amber-500 inline-block"></span>
          <span className="text-xs font-bold tracking-[0.25em] uppercase text-amber-600">
            Exclusive Listings
          </span>
          <span className="h-px w-8 bg-amber-500 inline-block"></span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-blue-950 mb-4">
          Curated <span className="font-serif italic font-light text-amber-700">Portfolios</span>
        </h1>
        <p className="text-slate-600 max-w-2xl mx-auto">
          Explore our collection of ultra-prime real estate. Each sanctuary is hand-selected for its monumental architecture and unparalleled luxury.
        </p>
      </div>

      {/* Properties Grid */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {propertiesData.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>
    </div>
  );
}