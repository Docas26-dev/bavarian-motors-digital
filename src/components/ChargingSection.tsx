import chargingImage from '@/assets/bmw-charging.jpg';

const ChargingSection = () => {
  return (
    <section className="bmw-section">
      <div className="bmw-container">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground bmw-fade-in">
                Charge with Confidence
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed bmw-fade-in">
                BMW's comprehensive charging ecosystem ensures you're always powered up and ready for the journey ahead. From home charging solutions to our extensive public charging network, we make electric mobility effortless.
              </p>
            </div>

            <div className="aspect-[16/10] overflow-hidden rounded-xl bmw-fade-in">
              <img 
                src={chargingImage}
                alt="BMW Electric Vehicle Charging"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Sidebar Contact Card */}
          <div className="space-y-6">
            <div className="bmw-card p-8 bmw-fade-in">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Contact & Information
              </h3>
              <div className="space-y-4">
                <a 
                  href="#dealer-locator"
                  className="flex items-center text-accent hover:underline transition-all"
                >
                  <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Dealer Locator
                </a>
                <a 
                  href="#charging-faqs"
                  className="flex items-center text-accent hover:underline transition-all"
                >
                  <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Charging FAQs
                </a>
                <a 
                  href="tel:+1-800-BMW-HELP"
                  className="flex items-center text-accent hover:underline transition-all"
                >
                  <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  BMW Hotline
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChargingSection;