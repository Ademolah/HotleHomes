import { useState } from 'react';
import toast from 'react-hot-toast';


// Paste this right BEFORE your component function starts
const socialLinks = [
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/share/1FE2R4Af75/?mibextid=wwXIfr',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/hotlehomes__?igsh=MTBjZTM2M2VicnB5eA%3D%3D&utm_source=qr',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    name: 'TikTok',
    url: 'https://www.tiktok.com/@hotlehomes_?_r=1&_t=ZS-98fDdQGc70f',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12.525.02c1.31-.02 2.61-.01 3.91.04 1.56.06 3.12.3 4.56 1.02.5.25.96.58 1.34.98.05.05.08.1.13.15v4.29c-.76-.41-1.55-.72-2.38-.9-1.02-.23-2.06-.31-3.1-.22-.65.05-1.28.21-1.89.44v9.06c-.01 1.76-.66 3.48-1.86 4.74-1.2 1.25-2.84 2-4.57 2.15-1.83.16-3.69-.17-5.23-1.09-1.42-.85-2.5-2.19-2.98-3.76-.46-1.51-.35-3.19.26-4.64.6-1.42 1.72-2.58 3.09-3.26 1.34-.67 2.9-.89 4.38-.63V11.2c-2.45-.14-4.87.89-6.4 2.82-1.39 1.74-1.85 4.1-1.2 6.2.66 2.15 2.23 3.92 4.29 4.75 2.19.88 4.75.82 6.89-.25 2.05-1.03 3.51-2.9 3.95-5.13.14-.72.2-1.46.19-2.19V2.82c1.64.71 3.4 1.12 5.18 1.17v-4.06c-1.63-.12-3.23-.55-4.66-1.28-.7-.36-1.34-.82-1.9-1.36-.05-.05-.09-.12-.13-.17v-.1Z" />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/company/hotle-homes/',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    name: 'YouTube',
    url: 'https://www.youtube.com/@hotlehomes?si=_6BR3HyHTwIF95O_',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    name: 'X',
    url: 'https://x.com/hotlehomes_?s=11',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
      </svg>
    ),
  },
  {
    name: 'Threads',
    url: 'https://www.threads.com/@hotlehomes__?igshid=NTc4MTIwNjQ2YQ==',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M16.8 11.233c-.044-3.155-1.929-5.61-5.127-5.61-3.238 0-5.469 2.508-5.469 5.895 0 3.327 2.164 5.923 5.378 5.923 2.215 0 3.844-1.077 4.542-2.732.18-.42.062-.898-.276-1.189-.356-.307-.887-.3-1.218.044-.452.467-1.378 1.139-2.913 1.139-1.97 0-3.08-1.229-3.325-3.013h8.349c.176 0 .324-.132.338-.308.019-.247.03-.51.03-.79l-.309.641zm-8.25-1.026c.264-1.558 1.4-2.585 2.946-2.585 1.488 0 2.553.945 2.784 2.585H8.55zm13.16-5.85C20.406 2.582 17.58 1 14.156 1 9.07 1 5 5.07 5 10.156c0 5.086 4.07 9.156 9.156 9.156 2.583 0 4.962-1.066 6.662-2.923.364-.4.364-1.022.002-1.42l-.128-.142c-.347-.384-.94-.413-1.324-.067-1.353 1.215-3.167 1.954-5.163 1.954-4.225 0-7.656-3.431-7.656-7.656 0-4.225 3.431-7.656 7.656-7.656 3.013 0 5.617 1.745 6.892 4.382.724 1.498.932 3.125.59 4.67-.323 1.464-1.127 2.766-2.285 3.714-1.138.932-2.559 1.465-4.045 1.503-.133.004-.265-.002-.395-.015-1.41-.144-2.613-.9-3.37-2.12-.767-1.238-.973-2.734-.582-4.205.352-1.328 1.133-2.476 2.215-3.255.976-.703 2.148-1.06 3.33-1.015.426.015.753.374.753.8v7.697c0 .484.394.877.88.877h.036c.484 0 .878-.393.878-.877V9.75c0-1.496-1.144-2.709-2.63-2.709-1.411 0-2.585 1.096-2.628 2.506l-.002.19v4.218c0 .248-.12.482-.32.628-.21.155-.487.195-.733.106-.214-.078-.392-.236-.484-.442-.257-.577-.383-1.209-.371-1.874.024-1.306.495-2.518 1.34-3.45a5.5 5.5 0 0 1 4.103-1.84c1.884 0 3.633.916 4.707 2.467a8.558 8.558 0 0 1 1.42 4.498c.324 2.825-.668 5.658-2.748 7.63-2.072 1.964-4.88 3.018-7.794 2.92-3.136-.106-6.07-1.572-8.118-4.05-1.996-2.417-2.986-5.553-2.73-8.65.253-3.076 1.705-5.908 4.01-7.822 2.274-1.887 5.244-2.923 8.358-2.923 4.17 0 8.043 2.054 10.378 5.494.24.354.178.835-.145 1.116l-.27.234c-.3.26-.75.24-1.026-.05z" />
      </svg>
    ),
  },
];

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
    className="w-max min-w-35 px-8 py-3.5 bg-white text-blue-950 text-sm font-semibold tracking-wide rounded-full shadow-sm hover:shadow-md hover:bg-amber-400 hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center disabled:opacity-60 disabled:hover:bg-white disabled:hover:translate-y-0 disabled:hover:shadow-sm disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-transparent"
    >
    {status === 'idle' && 'Subscribe'}
    
    {status === 'loading' && (
        <svg className="animate-spin h-5 w-5 text-blue-950" viewBox="0 0 24 24">
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
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs font-light mb-8">
              Exclusively representing the world's most distinguished architectural properties and estates for the ultra-prime market.
            </p>

            {/* NEW: Social Media Icons map directly below the text */}
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-amber-400 transition-all duration-300 hover:-translate-y-1"
                  aria-label={`Follow us on ${social.name}`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
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