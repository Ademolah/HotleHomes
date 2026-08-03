import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Detect scroll to toggle transparent/solid background
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when the mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    // Cleanup in case component unmounts
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'Our Portfolio', href: '#portfolio' },
    { name: 'Who We Are', href: '#about' },
    { name: 'Visit Us', href: '#contact' },
  ];

  return (
    <>
      {/* 
        Main Navbar
        Transitions seamlessly from transparent (py-6) to white/blurred (py-4)
      */}
      <header 
        className={`fixed w-full top-0 z-50 transition-all duration-500 ease-in-out border-b ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md border-gray-200 shadow-sm py-4 text-blue-950' 
            : 'bg-transparent border-transparent py-6 text-white'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            
            {/* Left: Brand Icon & Logo */}
            <a href="/" className="group flex items-center gap-3 z-50 relative">
              <div className={`transition-colors duration-500 ${isScrolled ? 'text-amber-500' : 'text-amber-300'}`}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 21V9L12 2L21 9V21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9 21V12H15V21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="text-xl font-bold tracking-widest uppercase mt-1">
                Hotle<span className={isScrolled ? 'text-amber-600' : 'text-amber-300'}>Homes</span>
              </span>
            </a>

            {/* Center/Right: Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-10">
              {navLinks.map((link) => (
                <a 
                  key={link.name}
                  href={link.href} 
                  className="text-sm font-medium tracking-wide relative group overflow-hidden"
                >
                  {link.name}
                  {/* Underline hover effect */}
                  <span className={`absolute left-0 bottom-0 w-full h-[1px] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out ${
                    isScrolled ? 'bg-blue-950' : 'bg-white'
                  }`}></span>
                </a>
              ))}
              
              {/* Desktop CTA Button */}
              <a 
                href="#inquire" 
                className={`px-6 py-2.5 text-xs font-semibold tracking-widest uppercase transition-all duration-300 border ${
                  isScrolled 
                    ? 'border-blue-950 text-blue-950 hover:bg-blue-950 hover:text-white' 
                    : 'border-white text-white hover:bg-white hover:text-blue-950'
                }`}
              >
                Inquire
              </a>
            </nav>

            {/* Right: Mobile Hamburger Button */}
            <button 
              className="md:hidden z-50 relative p-2 focus:outline-none"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <div className="w-6 h-5 flex flex-col justify-between items-end">
                <span className={`block h-[2px] transition-all duration-300 ease-out ${
                  isMobileMenuOpen ? 'w-6 rotate-45 translate-y-[9px] bg-white' : `w-6 ${isScrolled ? 'bg-blue-950' : 'bg-white'}`
                }`}></span>
                <span className={`block h-[2px] transition-all duration-300 ease-out ${
                  isMobileMenuOpen ? 'opacity-0 bg-white' : `w-4 ${isScrolled ? 'bg-blue-950' : 'bg-white'}`
                }`}></span>
                <span className={`block h-[2px] transition-all duration-300 ease-out ${
                  isMobileMenuOpen ? 'w-6 -rotate-45 -translate-y-[9px] bg-white' : `w-6 ${isScrolled ? 'bg-blue-950' : 'bg-white'}`
                }`}></span>
              </div>
            </button>

          </div>
        </div>
      </header>

      {/* 
        Mobile Full-Screen Menu Overlay
        Uses a deep cinematic blur to match the premium aesthetic
      */}
      <div 
        className={`fixed inset-0 z-40 bg-black/95 backdrop-blur-xl transition-opacity duration-500 md:hidden flex flex-col justify-center items-center ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <nav className="flex flex-col items-center space-y-8 w-full px-6">
          {navLinks.map((link, index) => (
            <a 
              key={link.name}
              href={link.href} 
              onClick={() => setIsMobileMenuOpen(false)}
              className={`text-3xl sm:text-4xl font-light tracking-wide text-white transition-all duration-700 transform ${
                isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {link.name}
            </a>
          ))}
          
          <div 
            className={`w-full max-w-xs pt-12 border-t border-white/10 mt-8 transition-all duration-700 transform ${
              isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
            style={{ transitionDelay: '300ms' }}
          >
            <a 
              href="#inquire" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full py-4 text-center border border-amber-500/50 text-amber-400 font-medium tracking-widest uppercase text-sm hover:bg-amber-500 hover:text-black transition-colors"
            >
              Inquire Now
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}