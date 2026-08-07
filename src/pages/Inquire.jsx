/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from 'react';
import toast from 'react-hot-toast';

// --- Custom Smooth Scroll Reveal ---
const ScrollReveal = ({ children, delay = 0 }) => {
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
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => { if (ref.current) observer.disconnect(); };
  }, []);

  return (
    <div 
      ref={ref} 
      className={`transition-all duration-1200 ease-[cubic-bezier(0.16,1,0.3,1)] transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`} 
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default function Inquire() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    interest: 'Acquiring a Property',
    budget: '$5M - $10M',
    message: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const payload = {
      access_key: "808586f5-d1d4-434c-8b47-dfe402a4c3b2",
      subject: `New Client Portfolio Inquiry: ${formData.firstName} ${formData.lastName}`,
      from_name: "Hotle Homes Concierge",
      name: `${formData.firstName} ${formData.lastName}`,
      email: formData.email,
      phone: formData.phone,
      interest: formData.interest,
      budget: formData.budget,
      message: formData.message,
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (result.success) {
        toast.success("Inquiry received. A partner will contact you shortly.");
        // Clear form after success
        setFormData({
          firstName: '', lastName: '', email: '', phone: '',
          interest: 'Acquiring a Property', budget: '$5M - $10M', message: ''
        });
      } else {
        toast.error("Transmission failed. Please try again.");
      }
    } catch (error) {
      toast.error("Network error. Check connection and retry.");
      console.error(`Error submitting form: ${error}`)
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full min-h-screen bg-white flex flex-col lg:flex-row pt-20 lg:pt-0">
      
      {/* Left Side - Visual / Branding */}
      <div className="w-full lg:w-5/12 relative min-h-[40vh] lg:min-h-screen lg:sticky lg:top-0 lg:left-0 flex items-end p-8 sm:p-12">
        <div className="absolute inset-0 bg-blue-950">
          <img 
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200&auto=format&fit=crop" 
            alt="Luxury Estate Exterior" 
            className="w-full h-full object-cover mix-blend-overlay opacity-60"
          />
          <div className="absolute inset-0 bg-linear-to-t from-blue-950 via-blue-950/40 to-transparent"></div>
        </div>
        
        <div className="relative z-10 w-full">
          <ScrollReveal>
            <span className="text-amber-400 font-bold tracking-widest uppercase text-xs mb-4 block">
              Private Concierge
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-6 leading-tight">
              Begin Your <br /> Bespoke Journey.
            </h1>
            <p className="text-gray-300 font-light text-sm sm:text-base leading-relaxed max-w-sm">
              Hotle Homes operates strictly by appointment. Submit your portfolio requirements below to initiate a confidential dialogue with our senior partners.
            </p>
          </ScrollReveal>
        </div>
      </div>

      {/* Right Side - The Form */}
      <div className="w-full lg:w-7/12 lg:ml-auto bg-gray-50 flex items-center justify-center p-6 sm:p-12 lg:p-20 xl:p-24 min-h-screen">
  <div className="w-full max-w-2xl">
    <ScrollReveal delay={200}>
      <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 sm:p-12 rounded-4xl shadow-[0_15px_50px_-15px_rgba(23,37,84,0.05)] border border-gray-100">
        
        {/* 1. Name Group */}
        <div className="w-full flex flex-col sm:flex-row border border-gray-200 rounded-2xl shadow-[0_2px_10px_-4px_rgba(0,0,0,0.02)] bg-white overflow-hidden focus-within:border-amber-500 focus-within:ring-1 focus-within:ring-amber-500 transition-all duration-300">
          <div className="relative w-full sm:w-1/2 p-3 sm:p-4 border-b sm:border-b-0 sm:border-r border-gray-200 hover:bg-gray-50 transition-colors group">
            <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 group-focus-within:text-amber-600 transition-colors mb-1">
              First Name
            </label>
            <input 
              type="text" 
              required
              value={formData.firstName}
              onChange={(e) => setFormData({...formData, firstName: e.target.value})}
              className="w-full bg-transparent border-none p-0 text-blue-950 focus:ring-0 text-base placeholder-gray-300 font-medium outline-none"
              placeholder="Alexander"
            />
          </div>
          <div className="relative w-full sm:w-1/2 p-3 sm:p-4 hover:bg-gray-50 transition-colors group">
            <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 group-focus-within:text-amber-600 transition-colors mb-1">
              Last Name
            </label>
            <input 
              type="text" 
              required
              value={formData.lastName}
              onChange={(e) => setFormData({...formData, lastName: e.target.value})}
              className="w-full bg-transparent border-none p-0 text-blue-950 focus:ring-0 text-base placeholder-gray-300 font-medium outline-none"
              placeholder="Sterling"
            />
          </div>
        </div>

        {/* 2. Contact Group */}
        <div className="w-full flex flex-col sm:flex-row border border-gray-200 rounded-2xl shadow-[0_2px_10px_-4px_rgba(0,0,0,0.02)] bg-white overflow-hidden focus-within:border-amber-500 focus-within:ring-1 focus-within:ring-amber-500 transition-all duration-300">
          <div className="relative w-full sm:w-1/2 p-3 sm:p-4 border-b sm:border-b-0 sm:border-r border-gray-200 hover:bg-gray-50 transition-colors group">
            <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 group-focus-within:text-amber-600 transition-colors mb-1">
              Private Email
            </label>
            <input 
              type="email" 
              required
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="w-full bg-transparent border-none p-0 text-blue-950 focus:ring-0 text-base placeholder-gray-300 font-medium outline-none"
              placeholder="alexander@familyoffice.com"
            />
          </div>
          <div className="relative w-full sm:w-1/2 p-3 sm:p-4 hover:bg-gray-50 transition-colors group">
            <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 group-focus-within:text-amber-600 transition-colors mb-1">
              Contact Number
            </label>
            <input 
              type="tel" 
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
              className="w-full bg-transparent border-none p-0 text-blue-950 focus:ring-0 text-base placeholder-gray-300 font-medium outline-none"
              placeholder="+44 7700 900077"
            />
          </div>
        </div>

        {/* 3. Preferences Group */}
        <div className="w-full flex flex-col sm:flex-row border border-gray-200 rounded-2xl shadow-[0_2px_10px_-4px_rgba(0,0,0,0.02)] bg-white overflow-hidden focus-within:border-amber-500 focus-within:ring-1 focus-within:ring-amber-500 transition-all duration-300">
          <div className="relative w-full sm:w-1/2 p-3 sm:p-4 border-b sm:border-b-0 sm:border-r border-gray-200 hover:bg-gray-50 transition-colors group">
            <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 group-focus-within:text-amber-600 transition-colors mb-1">
              Primary Interest
            </label>
            <select 
              value={formData.interest}
              onChange={(e) => setFormData({...formData, interest: e.target.value})}
              className="w-full bg-transparent border-none p-0 text-blue-950 focus:ring-0 text-base font-medium cursor-pointer outline-none"
            >
              <option value="Acquiring a Property">Acquiring a Property</option>
              <option value="Selling a Property">Selling an Estate</option>
              <option value="Off-Market Portfolio">Off-Market Portfolio Review</option>
              <option value="General Advisory">General Advisory</option>
            </select>
          </div>
          <div className="relative w-full sm:w-1/2 p-3 sm:p-4 hover:bg-gray-50 transition-colors group">
            <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 group-focus-within:text-amber-600 transition-colors mb-1">
              Projected Value
            </label>
            <select 
              value={formData.budget}
              onChange={(e) => setFormData({...formData, budget: e.target.value})}
              className="w-full bg-transparent border-none p-0 text-blue-950 focus:ring-0 text-base font-medium cursor-pointer outline-none"
            >
              <option value="Under ₦10M">Under ₦10M</option>
              <option value="₦10M - ₦20M">₦10M - ₦20M</option>
              <option value="₦30M - ₦50M">₦30M - ₦50M</option>
              <option value="₦50M+">₦50M+</option>
              <option value="Undisclosed">Prefer not to disclose</option>
            </select>
          </div>
        </div>

        {/* 4. Message Group */}
        <div className="w-full border border-gray-200 rounded-2xl shadow-[0_2px_10px_-4px_rgba(0,0,0,0.02)] bg-white overflow-hidden focus-within:border-amber-500 focus-within:ring-1 focus-within:ring-amber-500 transition-all duration-300">
          <div className="relative w-full p-3 sm:p-4 hover:bg-gray-50 transition-colors group">
            <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 group-focus-within:text-amber-600 transition-colors mb-1">
              Confidential Details
            </label>
            <textarea 
              rows="3"
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              className="w-full bg-transparent border-none p-0 text-blue-950 focus:ring-0 text-base placeholder-gray-300 font-medium resize-none outline-none"
              placeholder="Share specific locations, architectural requirements, or timelines..."
            ></textarea>
          </div>
        </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className={`w-full py-4 bg-blue-950 text-white font-semibold tracking-widest uppercase text-xs rounded-xl transition-all duration-300 shadow-xl flex items-center justify-center gap-3 ${
                    isSubmitting ? 'opacity-80 cursor-not-allowed' : 'hover:bg-amber-500 hover:text-blue-950 hover:shadow-amber-500/30'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-4 w-4 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Transmitting ...
                    </>
                  ) : (
                    "Submit Inquiry"
                  )}
                </button>
                <p className="text-center text-[10px] text-gray-400 mt-4 uppercase tracking-widest">
                  Hotle Homes
                </p>
              </div>

            </form>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
}