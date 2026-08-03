/* eslint-disable react-hooks/exhaustive-deps */
import  { useState, useEffect } from 'react';

export default function Hero() {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(70);
  const [showSubContent, setShowSubContent] = useState(false);
  const [loopNum, setLoopNum] = useState(0); // Tracks which phrase we are on
  
  // The luxurious phrases to cycle through
  const phrases = [
    "Hotle Homes. The standard of extraordinary.",
    "Curating the world's most exclusive estates.",
    "Redefining the art of luxury living."
  ];
  
  useEffect(() => {
    let timer;
    const currentPhrase = phrases[loopNum % phrases.length]; // Loops back to the start automatically

    const handleTyping = () => {
      // Determine the next text state based on whether we are deleting or typing
      setText(
        isDeleting 
          ? currentPhrase.substring(0, text.length - 1) 
          : currentPhrase.substring(0, text.length + 1)
      );

      // Set baseline speeds for typing and deleting
      setTypingSpeed(isDeleting ? 30 : 70);

      // Logic for when the text is fully written out
      if (!isDeleting && text === currentPhrase) {
        setShowSubContent(true); // Ensure the subtitle fades in and stays
        setTypingSpeed(3000);    // Pause for 3 seconds before deleting
        setIsDeleting(true);
      } 
      // Logic for when the text is fully deleted
      else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1); // Move to the next phrase in the array
        setTypingSpeed(500);     // Pause for half a second before typing the next phrase
      }
    };

    timer = setTimeout(handleTyping, typingSpeed);
    
    return () => clearTimeout(timer);
  }, [text, isDeleting, typingSpeed, loopNum]);

  return (
    <section className="relative h-[100dvh] w-full flex items-center justify-center overflow-hidden bg-black">
      
      {/* Background Layer */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop" 
          alt="Hotle Homes Luxury Estate" 
          className="w-full h-full object-cover opacity-90 transition-transform duration-[20s] ease-linear scale-110" 
        />
        <div className="absolute inset-0 bg-blue-950/30 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/40"></div>
      </div>

      {/* Content Layer */}
      <div className="relative z-10 flex flex-col items-center justify-center px-4 sm:px-6 w-full text-center mt-8 md:mt-0">
        
        {/* Fluid Typography Container */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 sm:mb-8 min-h-[120px] sm:min-h-[100px] flex items-center justify-center flex-wrap max-w-5xl mx-auto leading-tight">
          <span className="bg-gradient-to-r from-white via-amber-100 to-amber-300 bg-clip-text text-transparent drop-shadow-lg text-center">
            {text}
          </span>
          {/* Pulsing Vertical Cursor */}
          <span className="inline-block w-[2px] sm:w-[3px] h-[0.9em] bg-amber-300 ml-1 sm:ml-2 animate-pulse align-middle shadow-[0_0_8px_rgba(252,211,77,0.6)]"></span>
        </h1>

        <div 
          className={`transition-all duration-1000 ease-out transform flex flex-col items-center w-full max-w-3xl ${
            showSubContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-gray-200 text-base sm:text-lg md:text-xl font-light tracking-wide mb-10 sm:mb-12 px-2 sm:px-0 leading-relaxed">
            Exclusively representing the world's most distinguished architectural masterpieces.
          </p>

          <a 
                href="#portfolio" 
                className="px-8 py-3.5 sm:px-10 sm:py-4 rounded-full border border-white/40 text-white font-medium tracking-widest uppercase text-xs sm:text-sm hover:bg-white hover:text-blue-950 transition-all duration-500 backdrop-blur-sm"
                >
                Enter Portfolio
                </a>
        </div>

      </div>
    </section>
  );
}