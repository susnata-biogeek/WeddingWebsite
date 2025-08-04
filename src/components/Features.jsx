import { useState, useEffect, useRef } from 'react';

const Features = ({ visible }) => {
  const sectionRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState(null);
  
  useEffect(() => {
    if (visible && sectionRef.current) {
      sectionRef.current.classList.remove('animate-hidden');
      sectionRef.current.classList.add('animate-fade-in');
    }
  }, [visible]);

  // Sample gallery images - replace with your actual images
  const galleryImages = [
    { id: 1, src: '/images/gallery/image1.jpg', alt: 'Couple photo 1' },
    { id: 2, src: '/images/gallery/image2.jpg', alt: 'Couple photo 2' },
    { id: 3, src: '/images/gallery/image3.jpg', alt: 'Couple photo 3' },
    { id: 4, src: '/images/gallery/image4.jpg', alt: 'Couple photo 4' },
    { id: 5, src: '/images/gallery/image5.jpg', alt: 'Couple photo 5' },
    { id: 6, src: '/images/gallery/image6.jpg', alt: 'Couple photo 6' },
  ];

  const openLightbox = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when lightbox is open
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto'; // Re-enable scrolling
  };

  return (
    <section id="features" className="section py-20 bg-white" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-serif text-center mb-16">Our Gallery</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {galleryImages.map((image) => (
            <div 
              key={image.id} 
              className="overflow-hidden rounded-lg shadow-md cursor-pointer transform transition-transform hover:scale-105"
              onClick={() => openLightbox(image)}
            >
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-64 object-cover"
              />
            </div>
          ))}
        </div>
        
        {/* Lightbox */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <div className="relative max-w-4xl max-h-full">
              <button 
                className="absolute top-4 right-4 text-white text-3xl"
                onClick={closeLightbox}
              >
                &times;
              </button>
              <img 
                src={selectedImage.src} 
                alt={selectedImage.alt} 
                className="max-w-full max-h-[90vh] object-contain"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Features;