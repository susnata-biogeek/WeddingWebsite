import { useEffect, useRef } from 'react';

const Registry = ({ visible }) => {
  const sectionRef = useRef(null);
  
  useEffect(() => {
    if (visible && sectionRef.current) {
      sectionRef.current.classList.remove('animate-hidden');
      sectionRef.current.classList.add('animate-fade-in');
    }
  }, [visible]);

  const registries = [
    {
      name: "Amazon",
      logo: "/images/registry/amazon.png",
      url: "https://www.amazon.com/wedding/registry"
    },
    {
      name: "Crate & Barrel",
      logo: "/images/registry/crate-and-barrel.png",
      url: "https://www.crateandbarrel.com/gift-registry/"
    },
    {
      name: "Zola",
      logo: "/images/registry/zola.png",
      url: "https://www.zola.com/registry"
    },
    {
      name: "Honeymoon Fund",
      logo: "/images/registry/honeymoon.png",
      url: "https://www.honeyfund.com"
    }
  ];

  return (
    <section id="registry" className="section py-20 bg-white" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-serif text-center mb-6">Registry</h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          Your presence at our wedding is the greatest gift of all. However, if you wish to honor us with a gift, 
          we've registered at the following places:
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {registries.map((registry, index) => (
            <a 
              key={index}
              href={registry.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center justify-center text-center"
            >
              <div className="h-24 flex items-center justify-center mb-4">
                <img 
                  src={registry.logo} 
                  alt={`${registry.name} Registry`} 
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <h3 className="text-lg font-medium">{registry.name}</h3>
              <p className="text-sm text-primary mt-2">View Registry</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Registry;