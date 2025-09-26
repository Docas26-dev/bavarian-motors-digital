import interiorImage from '@/assets/bmw-interior.jpg';
import usedCarImage from '@/assets/bmw-certified-used.jpg';
import configuratorImage from '@/assets/bmw-configurator.jpg';

const ChooseSection = () => {
  const cards = [
    {
      title: "Book a Test Drive",
      description: "Experience BMW performance firsthand with a personalized test drive at your convenience.",
      image: interiorImage,
      link: "#test-drive"
    },
    {
      title: "Certified Used Cars",
      description: "Discover premium pre-owned BMW vehicles with comprehensive warranty and quality assurance.",
      image: usedCarImage,
      link: "#used-cars"
    },
    {
      title: "Configure & Order",
      description: "Build your perfect BMW with our advanced online configurator and customization options.",
      image: configuratorImage,
      link: "#configure"
    }
  ];

  return (
    <section className="bmw-section bg-secondary/30">
      <div className="bmw-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 bmw-fade-in">
            Choose your next BMW
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div key={index} className="bmw-card group cursor-pointer bmw-fade-in">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-accent transition-colors">
                  {card.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {card.description}
                </p>
                <a 
                  href={card.link}
                  className="inline-flex items-center text-accent font-semibold hover:underline transition-all"
                >
                  Learn More
                  <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChooseSection;