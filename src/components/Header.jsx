import { useState, useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('intro');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Determine which section is currently in view
      const sections = [
        'intro', 
        'how-we-met', 
        'countdown', 
        'events', 
        'travel', 
        'registry', 
        'features', 
        'rsvp'
      ];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Navigation items in logical order
  const navItems = [
    { id: 'intro', label: 'Home' },
    { id: 'how-we-met', label: 'Our Story' },
    { id: 'countdown', label: 'Countdown' },
    { id: 'events', label: 'Events' },
    { id: 'travel', label: 'Travel' },
    { id: 'registry', label: 'Registry' },
    { id: 'features', label: 'Gallery' },
    { id: 'rsvp', label: 'RSVP' }
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white shadow-md py-2' 
        : 'bg-secondary bg-opacity-80 backdrop-blur-sm py-4'
    }`}>
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        {/* Logo/Title */}
        <a href="#intro" className="text-2xl font-serif text-primary mb-4 md:mb-0">
          Susnata & Saiteja
        </a>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden absolute right-4 top-4 text-primary"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex items-center space-x-1 lg:space-x-2">
            {navItems.map(item => (
              <li key={item.id}>
                <a 
                  href={`#${item.id}`} 
                  className={`px-3 py-2 text-sm lg:text-base transition-colors relative ${
                    activeSection === item.id 
                      ? 'text-primary font-medium' 
                      : 'text-gray-700 hover:text-primary'
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary"></span>
                  )}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      
      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="md:hidden bg-white shadow-lg">
          <ul className="flex flex-col py-2">
            {navItems.map(item => (
              <li key={item.id}>
                <a 
                  href={`#${item.id}`} 
                  className={`block px-4 py-3 text-center border-b border-gray-100 ${
                    activeSection === item.id 
                      ? 'bg-primary bg-opacity-5 text-primary font-medium' 
                      : 'hover:bg-gray-50'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;