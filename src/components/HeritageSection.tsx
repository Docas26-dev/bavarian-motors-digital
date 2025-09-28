import heritageImage from '@/assets/bmw-e30m3.png';

const HeritageSection = () => {
  return (
    <section className="bmw-section">
      <div className="bmw-container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <h2 className="text-4xl lg:text-6xl font-bold text-foreground bmw-fade-in">
              BMW Retromag
            </h2>
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed bmw-fade-in">
                Discover the rich heritage and timeless stories that have shaped BMW's legacy of innovation and performance. From our founding principles to the cutting-edge technology of today.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed bmw-fade-in">
                Every BMW tells a story of engineering excellence, design mastery, and the relentless pursuit of driving pleasure that continues to define our brand.
              </p>
            </div>
            <a 
              href="#heritage"
              className="inline-flex items-center text-accent font-semibold text-lg hover:underline transition-all bmw-fade-in"
            >
              Read the Story
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          {/* Right Content */}
          <div className="relative">
            <div 
              className="h-[500px] lg:h-[600px] bg-cover bg-center rounded-xl bmw-fade-in"
              style={{ backgroundImage: `url(${heritageImage})` }}
            >
              <div className="absolute inset-0 bg-primary/10 rounded-xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeritageSection;