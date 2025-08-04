import { useEffect, useRef } from 'react';

const Travel = ({ visible }) => {
  const sectionRef = useRef(null);
  
  useEffect(() => {
    if (visible && sectionRef.current) {
      sectionRef.current.classList.remove('animate-hidden');
      sectionRef.current.classList.add('animate-fade-in');
    }
  }, [visible]);

  const accommodations = [
    {
      name: "The Plaza Hotel",
      description: "Our wedding venue with special rates for guests.",
      address: "768 5th Ave, New York, NY 10019",
      phone: "(212) 759-3000",
      website: "https://www.theplazany.com/",
      discount: "Use code WEDDING2023 for 15% off"
    },
    {
      name: "The Ritz-Carlton",
      description: "Luxury hotel within walking distance to the venue.",
      address: "50 Central Park S, New York, NY 10019",
      phone: "(212) 308-9100",
      website: "https://www.ritzcarlton.com/",
      discount: "No special rate available"
    },
    {
      name: "Park Hyatt New York",
      description: "Modern luxury hotel near the venue.",
      address: "153 W 57th St, New York, NY 10019",
      phone: "(646) 774-1234",
      website: "https://www.hyatt.com/",
      discount: "Use code Susnata&Saiteja for 10% off"
    }
  ];

  return (
    <section id="travel" className="section py-20 bg-secondary" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-serif text-center mb-16">Travel & Accommodations</h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h3 className="text-2xl font-serif mb-4">Getting There</h3>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-medium mb-3">Airports</h4>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary mt-0.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>JFK International Airport (JFK)</strong> - 18 miles from venue (approx. 45-60 min drive)</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary mt-0.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>LaGuardia Airport (LGA)</strong> - 9 miles from venue (approx. 30 min drive)</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary mt-0.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Newark Liberty International Airport (EWR)</strong> - 25 miles from venue (approx. 50-60 min drive)</span>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-serif mb-4">Accommodations</h3>
            {accommodations.map((acc, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md mb-6">
                <h4 className="text-xl font-medium mb-3">{acc.name}</h4>
                <p className="mb-2">{acc.description}</p>
                <p className="mb-2"><strong>Address:</strong> {acc.address}</p>
                <p className="mb-2"><strong>Phone:</strong> {acc.phone}</p>
                <p className="mb-2"><strong>Website:</strong> <a href={acc.website} target="_blank" rel="noopener noreferrer">{acc.website}</a></p>
                <p><strong>Discount:</strong> {acc.discount}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Travel;