import { useState } from 'react';
import toast from 'react-hot-toast';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); 

  const handleSubscribe = async (e) => {
  e.preventDefault();
  if (!email) return;
  
  setStatus('loading');

  const payload = {
    access_key: "808586f5-d1d4-434c-8b47-dfe402a4c3b2",
    email: email
  }
  
  try {
    
    const response = await fetch('https://api.web3forms.com/submit', {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });


    if (!response.ok) throw new Error('Subscription failed');

    const result = await response.json()
    if (result.success) {
        toast.success('You have successfully subscribed to the Private Registry!')
    }
    setStatus('success');
    
    // Reset the form after 4 seconds
    setTimeout(() => {
      setStatus('idle');
      setEmail('');
    }, 4000);
    
  } catch (error) {
    setStatus('error');
    setTimeout(() => setStatus('idle'), 4000);
    console.error(error)
  }
};

  return (
    <footer className="bg-blue-950 text-white border-t border-white/10">
      
      {/* Top Section: Private Registry / Newsletter */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-10">
            <div className="text-center lg:text-left max-w-xl">
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight mb-3">
                Join the Private Registry
              </h3>
              <p className="text-gray-300 text-sm sm:text-base font-light">
                Receive discreet updates on off-market architectural masterpieces and exclusive portfolio additions.
              </p>
            </div>
            
            <div className="w-full lg:w-auto shrink-0 relative">
  <form className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto relative" onSubmit={handleSubscribe}>
    
    <div className="relative w-full sm:w-72">
      <input 
        type="email" 
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        disabled={status === 'loading' || status === 'success'}
        placeholder="Email Address" 
        className="w-full bg-transparent border-b border-white/30 px-2 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-amber-400 transition-colors rounded-none disabled:opacity-50 disabled:cursor-not-allowed"
        required
      />
      {/* Floating status message - absolutely positioned to prevent layout shift */}
      <div className={`absolute left-2 -bottom-5 text-[10px] font-medium tracking-widest uppercase transition-all duration-300 ${status === 'success' ? 'opacity-100 text-amber-400' : 'opacity-0'} ${status === 'error' ? 'opacity-100 text-red-400' : ''}`}>
        {status === 'success' && 'Welcome to the list'}
        {status === 'error' && 'Something went wrong'}
      </div>
    </div>

    <button 
      type="submit" 
      disabled={status === 'loading' || status === 'success'}
      className="px-8 py-3 bg-white text-blue-950 font-medium tracking-widest uppercase text-xs hover:bg-amber-400 transition-colors duration-300 min-w-35 flex items-center justify-center disabled:opacity-80 disabled:hover:bg-white disabled:cursor-not-allowed"
    >
      {status === 'idle' && 'Subscribe'}
      
      {status === 'loading' && (
        <svg className="animate-spin h-4 w-4 text-blue-950" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      )}
      
      {status === 'success' && 'Done'}
      {status === 'error' && 'Retry'}
    </button>
    
  </form>
</div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Brand Column (Spans larger area) */}
          <div className="lg:col-span-4 flex flex-col items-center md:items-start text-center md:text-left">
            <a href="/" className="inline-block mb-6">
              {/* Assuming you have a light/white version of the logo for dark backgrounds */}
              <img 
                src="/Hotlelogo.png" 
                alt="Hotle Homes" 
                className="h-10 w-auto object-contain brightness-0 invert" 
              />
            </a>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs font-light">
              Exclusively representing the world's most distinguished architectural properties and estates for the ultra-prime market.
            </p>
          </div>

          {/* Navigation Columns */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold tracking-widest uppercase text-amber-500 mb-6 text-center md:text-left">
              The Firm
            </h4>
            <ul className="space-y-4 flex flex-col items-center md:items-start list-none p-0 m-0">
              <li><a href="#ethos" className="text-gray-300 text-sm hover:text-amber-400 transition-colors">Our Ethos</a></li>
              <li><a href="#leadership" className="text-gray-300 text-sm hover:text-amber-400 transition-colors">Leadership</a></li>
              <li><a href="#press" className="text-gray-300 text-sm hover:text-amber-400 transition-colors">Global Press</a></li>
              <li><a href="#careers" className="text-gray-300 text-sm hover:text-amber-400 transition-colors">Careers</a></li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold tracking-widest uppercase text-amber-500 mb-6 text-center md:text-left">
              Portfolio
            </h4>
            <ul className="space-y-4 flex flex-col items-center md:items-start list-none p-0 m-0">
              <li><a href="#signature" className="text-gray-300 text-sm hover:text-amber-400 transition-colors">Signature Estates</a></li>
              <li><a href="#penthouses" className="text-gray-300 text-sm hover:text-amber-400 transition-colors">Penthouses</a></li>
              <li><a href="#private-islands" className="text-gray-300 text-sm hover:text-amber-400 transition-colors">Private Islands</a></li>
              <li><a href="#off-market" className="text-gray-300 text-sm hover:text-amber-400 transition-colors">Off-Market</a></li>
            </ul>
          </div>

          {/* Contact & Locations */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold tracking-widest uppercase text-amber-500 mb-6 text-center md:text-left">
              Global Offices
            </h4>
            <div className="space-y-4 flex flex-col items-center md:items-start text-sm text-gray-300">
              <p>London</p>
              <p>New York</p>
              <p>Dubai</p>
              <a href="mailto:inquiries@hotlehomes.com" className="mt-4 text-amber-400 hover:text-white transition-colors border-b border-amber-400/30 hover:border-white pb-1 inline-block">
                inquiries@hotlehomes.com
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar: Copyright & Legal */}
      <div className="border-t border-white/10 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-xs tracking-wide">
              &copy; {currentYear} Hotle Homes. All rights reserved.
            </p>
            
            <div className="flex space-x-6 text-xs text-gray-500 font-medium tracking-wide">
              <a href="#privacy" className="hover:text-amber-400 transition-colors">Privacy Policy</a>
              <a href="#terms" className="hover:text-amber-400 transition-colors">Terms of Service</a>
              <a href="#legal" className="hover:text-amber-400 transition-colors">Legal Disclosures</a>
            </div>
          </div>
        </div>
      </div>
      
    </footer>
  );
}