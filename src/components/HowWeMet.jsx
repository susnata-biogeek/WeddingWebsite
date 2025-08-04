import { useEffect, useRef } from 'react';

const HowWeMet = ({ visible }) => {
  const sectionRef = useRef(null);
  
  useEffect(() => {
    if (visible && sectionRef.current) {
      sectionRef.current.classList.remove('animate-hidden');
      sectionRef.current.classList.add('animate-fade-in');
    }
  }, [visible]);

  return (
    <section id="how-we-met" className="section py-20 bg-white" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-serif text-center mb-16">How We Met</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="hidden md:block">
            <img 
              src="/images/couple-1.jpg" 
              alt="Couple photo 1" 
              className="rounded-lg shadow-md w-full h-auto animate-hidden animate-item animate-fade-in-right" 
            />
          </div>
          
          <div className="md:col-span-1">
            <p className="text-lg leading-relaxed animate-hidden animate-item animate-fade-in">
              I first saw Antara in the Fall of 2008 when we started our undergrad. I was instantly attracted to
              her but was far too nervous to speak to her. I had told my friend I liked her and news had traveled
              fast and she soon found out. Her first reaction was "Who is Ram?" and she began searching for me in
              the class. She started to take notice of me and no matter how boring the lecture was, we never
              missed a class after that. After a good few months I finally plucked up the courage to ask her out
              and the rest is history :)
            </p>
          </div>
          
          <div className="hidden md:block">
            <img 
              src="/images/couple-2.jpg" 
              alt="Couple photo 2" 
              className="rounded-lg shadow-md w-full h-auto animate-hidden animate-item animate-fade-in-left" 
            />
          </div>
          
          {/* Mobile images (visible only on small screens) */}
          <div className="grid grid-cols-2 gap-4 md:hidden">
            <img 
              src="/images/couple-1.jpg" 
              alt="Couple photo 1" 
              className="rounded-lg shadow-md w-full h-auto animate-hidden animate-item animate-fade-in-up" 
            />
            <img 
              src="/images/couple-2.jpg" 
              alt="Couple photo 2" 
              className="rounded-lg shadow-md w-full h-auto animate-hidden animate-item animate-fade-in-up animate-delay-200" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeMet;