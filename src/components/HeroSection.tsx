import { Button } from '@/components/ui/button';
import heroImage from '@/assets/bmw-m4-hero.jpg';
import sideImage from '@/assets/bmw-m4-side.jpg';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/20" />
      </div>

      <div className="relative z-10 bmw-container">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-32">
          {/* Left Content */}
          <div className="text-white space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight bmw-fade-in">
                M4 Coupé
              </h1>
              <p className="text-xl lg:text-2xl text-white/90 max-w-lg bmw-fade-in">
                Pure driving dynamics. Iconic performance with motorsport DNA.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 bmw-fade-in">
              <Button className="btn-bmw-primary bg-accent text-accent-foreground px-8 py-4 text-lg">
                Configure Your M4
              </Button>
              <Button className="btn-bmw-secondary border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg">
                View Specs
              </Button>
            </div>
          </div>

          {/* Right Content - Desktop Only */}
          <div className="hidden lg:block">
            <div className="relative">
              <img 
                src={sideImage} 
                alt="BMW M4 Coupé Side Profile"
                className="w-full h-auto object-cover rounded-xl bmw-fade-in"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;