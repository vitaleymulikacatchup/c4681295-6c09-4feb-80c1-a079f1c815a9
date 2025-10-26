import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { name: 'Our House', href: '#about' },
    { name: 'Eat & Drink', href: '#eat-drink' },
    { name: 'Events', href: '#events' },
    { name: 'Location', href: '#location' }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/90 backdrop-blur-sm' : 'bg-transparent'
    }`}>
      <div className="container-custom">
        <div className="flex items-center justify-between py-4">
          {/* Navigation - Left */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-white hover:text-delray-gold transition-colors duration-300 font-medium"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Logo - Center */}
          <div className="flex-1 lg:flex-none flex justify-center lg:justify-center">
            <div className="text-center">
              <div className="text-white text-xs font-light tracking-widest mb-1">HOUSE OF</div>
              <div className="text-white text-2xl font-bold tracking-wider">DELRAY</div>
              <div className="text-white text-xs font-light tracking-widest mt-1">TEL AVIV</div>
            </div>
          </div>

          {/* CTA Buttons - Right */}
          <div className="hidden lg:flex items-center space-x-4">
            <button className="btn-secondary text-sm">
              RESERVE TABLE
            </button>
            <button className="btn-primary text-sm">
              BOOK ROOM
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white p-2"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-black/95 backdrop-blur-sm">
          <div className="container-custom py-6">
            <nav className="flex flex-col space-y-4 mb-6">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-white hover:text-delray-gold transition-colors duration-300 font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </nav>
            <div className="flex flex-col space-y-3">
              <button className="btn-secondary text-sm">
                RESERVE TABLE
              </button>
              <button className="btn-primary text-sm">
                BOOK ROOM
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;