import { Button } from '@/components/ui/button';
import x1FamilyImage from '@/assets/bmw-x1-family.jpg';

const PromoBanner = () => {
  return (
    <section className="relative overflow-hidden">
      <div 
        className="h-[400px] lg:h-[500px] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${x1FamilyImage})` }}
      >
        <div className="absolute inset-0 bg-primary/80" />
        
        <div className="relative z-10 bmw-container h-full flex items-center">
          <div className="text-center lg:text-left text-white max-w-2xl mx-auto lg:mx-0">
            <h2 className="text-4xl lg:text-6xl font-bold mb-6 bmw-fade-in">
              The BMW X1 Family
            </h2>
            <p className="text-xl lg:text-2xl text-white/90 mb-8 bmw-fade-in">
              Leasing from €295/month + VAT
            </p>
            <Button className="btn-bmw-primary bg-accent text-accent-foreground px-8 py-4 text-lg bmw-fade-in">
              Discover Offers
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoBanner;