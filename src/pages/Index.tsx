import { useEffect } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ChooseSection from '@/components/ChooseSection';
import PromoBanner from '@/components/PromoBanner';
import HeritageSection from '@/components/HeritageSection';
import CampaignsSection from '@/components/CampaignsSection';
import ChargingSection from '@/components/ChargingSection';
import MeetingsWidget from '@/components/MeetingsWidget';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Index = () => {
  useScrollAnimation();

  useEffect(() => {
    // Update page title and meta for SEO
    document.title = 'BMW - Premium Vehicles & Innovation | Official BMW Website';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Discover the BMW range: luxury cars, SUVs, and electric vehicles. Experience premium German engineering, innovative technology, and exceptional performance. Configure your BMW today.');
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ChooseSection />
        <PromoBanner />
        <HeritageSection />
        <CampaignsSection />
        <ChargingSection />
        <section className="py-20 px-4 bg-background">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-foreground">Book Your BMW Experience</h2>
            <MeetingsWidget />
          </div>
        </section>
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
