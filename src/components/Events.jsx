import { useEffect, useRef } from 'react';

const Events = ({ visible }) => {
  const sectionRef = useRef(null);
  
  useEffect(() => {
    if (visible && sectionRef.current) {
      sectionRef.current.classList.remove('animate-hidden');
      sectionRef.current.classList.add('animate-fade-in');
    }
  }, [visible]);

  const events = [
    {
      title: "Ceremony",
      time: "3:00 PM - 4:00 PM",
      location: "St. Patrick's Cathedral",
      address: "5th Ave, New York, NY 10022",
      description: "Join us as we exchange vows and begin our journey together."
    },
    {
      title: "Reception",
      time: "5:00 PM - 11:00 PM",
      location: "The Plaza Hotel",
      address: "768 5th Ave, New York, NY 10019",
      description: "Celebrate with dinner, dancing, and festivities."
    }
  ];

  return (
    <section id="events" className="section py-20 bg-white" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-serif text-center mb-8">Event Details</h2>

        <div className="max-w-2xl mx-auto text-center mb-12">
          <p className="mb-2"><strong>When:</strong> November 26, 2025</p>
          <p className="mb-2"><strong>Where:</strong> St. Patrick's Cathedral, New York, NY</p>
          <p><strong>Number of Days:</strong> One day of festivities</p>
        </div>

        <h3 className="text-3xl font-serif text-center mb-8">Event Schedule</h3>
        <div className="grid md:grid-cols-2 gap-12">
          {events.map((event, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-lg shadow-md animate-hidden animate-item">
              <h3 className="text-2xl font-serif mb-2">{event.title}</h3>
              <p className="text-gray-600 mb-4">{event.time}</p>
              <p className="font-medium mb-1">{event.location}</p>
              <p className="text-gray-600 mb-4">{event.address}</p>
              <p>{event.description}</p>
              
              <button className="mt-6 text-primary flex items-center">
                Add to Calendar
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;