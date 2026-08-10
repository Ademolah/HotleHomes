/* eslint-disable react-hooks/exhaustive-deps */
import  { useEffect, useRef, useState } from 'react';
import toast from 'react-hot-toast'

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

export default function VisitUs() {
  


  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false); // NEW loading state
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    office: 'London',
    inquiryType: 'Private Acquisition',
    message: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true); // Start the loading animation

    // Construct the payload for Web3Forms
    const payload = {
      access_key: "808586f5-d1d4-434c-8b47-dfe402a4c3b2", 
      subject: `New Private Inquiry from ${formData.fullName}`,
      from_name: "Hotle Homes Advisory",
      name: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      office: formData.office,
      inquiry_type: formData.inquiryType,
      message: formData.message,
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitted(true); 
        toast.success("Your request has been submitted successfully. A Senior Partner will contact you shortly.");
      } else {
        console.error("Submission failed", result);
        toast.error("There was an issue submitting your request. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form", error);
      toast.error("A network error occurred. Please try again.");
    } finally {
      setIsSubmitting(false); // Stop the loading animation
    }
  };

  const offices = [
    {
      city: "London",
      district: "Mayfair Headquarters",
      address: "14 Berkeley Square, Mayfair, London W1J 6CB",
      phone: "+44 (0)20 7946 0912",
      email: "london@hotlehomes.com",
      hours: "Mon – Fri: 09:00 – 18:00 BST",
      image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=1200&auto=format&fit=crop"
    },
    {
      city: "New York",
      district: "Manhattan Gallery",
      address: "767 Fifth Avenue, 42nd Floor, New York, NY 10153",
      phone: "+1 (212) 555-0198",
      email: "ny@hotlehomes.com",
      hours: "Mon – Fri: 09:00 – 18:00 EST",
      image: "https://images.unsplash.com/photo-1534430480872-3498386e7856?q=80&w=1200&auto=format&fit=crop"
    },
    {
      city: "Dubai",
      district: "DIFC Advisory Office",
      address: "Gate Village 08, Level 4, DIFC, Dubai, UAE",
      phone: "+971 4 312 8000",
      email: "dubai@hotlehomes.com",
      hours: "Mon – Fri: 09:00 – 18:00 GST",
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1200&auto=format&fit=crop"
    }
  ];

  

  return (
    <div className="w-full bg-white text-blue-950 overflow-hidden">
      
      {/* --- Page Header --- */}
      <section className="pt-36 pb-20 md:pt-48 md:pb-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <ScrollReveal direction="up">
          <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-amber-600 mb-4 block">
            Global Presence & Private Counsel
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-8 leading-tight">
            Connect With Our <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-950 via-blue-900 to-amber-600">
              Private Advisory Hubs.
            </span>
          </h1>
          <p className="max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-gray-500 font-light leading-relaxed">
            Whether visiting our flagship galleries in person or scheduling a confidential virtual briefing, our senior partners are at your immediate disposal.
          </p>
        </ScrollReveal>
      </section>

      {/* --- Global Offices Showcase --- */}
      <section className="py-16 md:py-24 bg-gray-50/60 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs font-bold tracking-widest uppercase text-amber-600 mb-3 block">
                Locations
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-blue-950">
                Flagship Galleries & Offices
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
            {offices.map((office, index) => (
              <ScrollReveal key={office.city} direction="up" delay={index * 150}>
                <div className="bg-white rounded-3xl border border-gray-100 shadow-[0_10px_30px_-15px_rgba(23,37,84,0.08)] hover:shadow-[0_20px_50px_-15px_rgba(23,37,84,0.15)] transition-all duration-500 overflow-hidden flex flex-col justify-between h-full group hover:-translate-y-2">
                  
                  {/* Office Image Frame */}
                  <div className="relative aspect-16/10 overflow-hidden">
                    <img 
                      src={office.image} 
                      alt={`${office.city} Office`} 
                      className="w-full h-full object-cover transition-transform duration-1500 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-blue-950/80 via-blue-950/20 to-transparent"></div>
                    <div className="absolute bottom-4 left-6 text-white">
                      <span className="text-amber-300 text-xs font-bold tracking-widest uppercase block mb-1">
                        {office.district}
                      </span>
                      <h3 className="text-2xl font-bold">{office.city}</h3>
                    </div>
                  </div>

                  {/* Office Details */}
                  <div className="p-6 sm:p-8 grow flex flex-col justify-between">
                    <div className="space-y-4 text-sm text-gray-600 font-light mb-6">
                      <div>
                        <span className="text-xs font-bold uppercase tracking-wider text-amber-600 block mb-1">Address</span>
                        <p className="text-gray-800 font-normal">{office.address}</p>
                      </div>
                      <div>
                        <span className="text-xs font-bold uppercase tracking-wider text-amber-600 block mb-1">Direct Counsel</span>
                        <p className="text-gray-800 font-normal">{office.phone}</p>
                        <a href={`mailto:${office.email}`} className="text-amber-600 hover:text-blue-950 transition-colors">
                          {office.email}
                        </a>
                      </div>
                      <div>
                        <span className="text-xs font-bold uppercase tracking-wider text-amber-600 block mb-1">Hours</span>
                        <p>{office.hours}</p>
                      </div>
                    </div>

                    <a 
                      href="/inquire" 
                      onClick={() => setFormData({ ...formData, office: office.city })}
                      className="w-full py-3 border border-blue-950/20 text-blue-950 text-center rounded-full text-xs font-semibold tracking-widest uppercase hover:bg-blue-950 hover:text-white transition-all duration-300 block"
                    >
                      Book Appointment at {office.city}
                    </a>
                  </div>

                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* --- Private Consultation Form Section --- */}
      <section id="inquire-form" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <ScrollReveal direction="up">
          <div className="bg-blue-950 text-white rounded-4xl p-8 sm:p-12 md:p-16 shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,var(--tw-gradient-stops))] from-blue-900/50 via-transparent to-transparent opacity-60 pointer-events-none"></div>

            <div className="relative z-10 max-w-3xl mx-auto text-center mb-12">
              <span className="text-xs font-bold tracking-widest uppercase text-amber-400 mb-3 block">
                Discreet Advisory
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
                Request Private Counsel
              </h2>
              <p className="text-gray-300 font-light text-sm sm:text-base leading-relaxed">
                Complete the brief details below to connect directly with a Senior Partner at your preferred location.
              </p>
            </div>

            {submitted ? (
              <div className="bg-white/10 border border-amber-400/30 rounded-2xl p-8 text-center text-white backdrop-blur-md relative z-10">
                <h3 className="text-2xl font-bold mb-2 text-amber-300">Consultation Confirmed</h3>
                <p className="text-gray-200 text-sm font-light leading-relaxed max-w-md mx-auto">
                  Thank you. A Senior Partner from our {formData.office} office will reach out within 4 business hours to arrange your private appointment.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="relative z-10 space-y-6 sm:space-y-8">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-widest text-amber-300 mb-2">
                      Full Name *
                    </label>
                    <input 
                      type="text" 
                      required
                      placeholder="e.g. Lord Alexander Sterling" 
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-3.5 text-white placeholder-gray-500 focus:outline-none focus:border-amber-400 focus:bg-white/10 transition-all text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-widest text-amber-300 mb-2">
                      Private Email *
                    </label>
                    <input 
                      type="email" 
                      required
                      placeholder="e.g. sterling@familyoffice.com" 
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-3.5 text-white placeholder-gray-500 focus:outline-none focus:border-amber-400 focus:bg-white/10 transition-all text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-widest text-amber-300 mb-2">
                      Telephone / WhatsApp
                    </label>
                    <input 
                      type="tel" 
                      placeholder="+44 7700 900077" 
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-3.5 text-white placeholder-gray-500 focus:outline-none focus:border-amber-400 focus:bg-white/10 transition-all text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-widest text-amber-300 mb-2">
                      Preferred Advisory Hub
                    </label>
                    <select 
                      value={formData.office}
                      onChange={(e) => setFormData({ ...formData, office: e.target.value })}
                      className="w-full bg-blue-900 border border-white/20 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-amber-400 transition-all text-sm"
                    >
                      <option value="London">London (Mayfair)</option>
                      <option value="New York">New York (Fifth Ave)</option>
                      <option value="Dubai">Dubai (DIFC)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-widest text-amber-300 mb-2">
                    Scope of Inquiry
                  </label>
                  <select 
                    value={formData.inquiryType}
                    onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                    className="w-full bg-blue-900 border border-white/20 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-amber-400 transition-all text-sm"
                  >
                    <option value="Private Acquisition">Private Acquisition</option>
                    <option value="Off-Market Representation">Off-Market Representation</option>
                    <option value="Portfolio Valuation">Portfolio Valuation & Advisory</option>
                    <option value="General Inquiry">General Inquiry</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-widest text-amber-300 mb-2">
                    Confidential Message
                  </label>
                  <textarea 
                    rows="4" 
                    placeholder="Provide any specific requirements or property references..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-3.5 text-white placeholder-gray-500 focus:outline-none focus:border-amber-400 focus:bg-white/10 transition-all text-sm"
                  ></textarea>
                </div>

                <div className="text-center pt-4">
                <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className={`w-full sm:w-auto px-12 py-4 bg-amber-400 text-blue-950 font-semibold tracking-widest uppercase text-xs sm:text-sm rounded-full transition-all duration-300 shadow-xl flex items-center justify-center gap-3 mx-auto ${
                    isSubmitting ? 'opacity-75 cursor-not-allowed' : 'hover:bg-white'
                    }`}
                >
                    {isSubmitting ? (
                    <>
                        {/* Elegant loading spinner */}
                        <svg className="animate-spin h-5 w-5 text-blue-950" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Transmitting...
                    </>
                    ) : (
                    "Submit Confidential Request"
                    )}
                </button>
                </div>

              </form>
            )}

          </div>
        </ScrollReveal>
      </section>

    </div>
  );
}