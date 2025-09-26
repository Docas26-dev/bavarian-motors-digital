import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

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
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/95 backdrop-blur-md shadow-md' 
          : 'bg-background'
      }`}
    >
      <div className="bmw-container">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* BMW Logo */}
          <div className="flex items-center">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">BMW</span>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a href="#models" className="text-foreground hover:text-accent transition-colors font-medium">
              Models
            </a>
            <a href="#offers" className="text-foreground hover:text-accent transition-colors font-medium">
              Offers
            </a>
            <a href="#news" className="text-foreground hover:text-accent transition-colors font-medium">
              News
            </a>
            <a href="#services" className="text-foreground hover:text-accent transition-colors font-medium">
              Services
            </a>
          </nav>

          {/* CTA Button */}
          <Button className="btn-bmw-primary">
            Find a Dealer
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;