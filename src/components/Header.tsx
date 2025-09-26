import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import bmwLogo from '@/assets/bmw-logo-roundel.png';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 bg-white ${
        isScrolled 
          ? 'shadow-lg border-b border-border' 
          : 'border-b border-border/30'
      }`}
    >
      <div className="bmw-container">
        <div className="flex items-center justify-between h-20">
          {/* BMW Logo - Left */}
          <div className="flex items-center">
            <img 
              src={bmwLogo} 
              alt="BMW Logo" 
              className="w-12 h-12 object-contain"
            />
          </div>

          {/* Navigation Links - Center */}
          <nav className="hidden lg:flex items-center justify-center flex-1">
            <div className="flex items-center space-x-8">
              <a 
                href="#models" 
                className="text-text-primary font-medium text-base transition-colors duration-300 hover:text-accent px-4 py-2"
              >
                Models
              </a>
              <a 
                href="#offers" 
                className="text-text-primary font-medium text-base transition-colors duration-300 hover:text-accent px-4 py-2"
              >
                Offers
              </a>
              <a 
                href="#news" 
                className="text-text-primary font-medium text-base transition-colors duration-300 hover:text-accent px-4 py-2"
              >
                News
              </a>
              <a 
                href="#services" 
                className="text-text-primary font-medium text-base transition-colors duration-300 hover:text-accent px-4 py-2"
              >
                Services
              </a>
            </div>
          </nav>

          {/* CTA Button - Right */}
          <div className="flex items-center">
            <Button className="bg-accent hover:bg-accent/90 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 hover:shadow-lg">
              Find a Dealer
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;