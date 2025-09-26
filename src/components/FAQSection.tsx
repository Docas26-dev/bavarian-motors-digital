import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How do I finance or lease a BMW?",
      answer: "BMW offers flexible financing and leasing options through BMW Financial Services. You can choose from traditional financing, lease programs, or our innovative subscription services. Our dealer partners will help you find the perfect solution based on your needs and budget."
    },
    {
      question: "How can I book a test drive online?",
      answer: "Booking a test drive is simple through our website or mobile app. Select your preferred model, choose a convenient date and time, and visit your local BMW dealer. You can also schedule virtual consultations to learn more about specific models before your test drive."
    },
    {
      question: "What maintenance packages are available?",
      answer: "BMW offers comprehensive maintenance packages including BMW Ultimate Service, which covers scheduled maintenance for up to 3 years or 36,000 miles. Our packages include oil changes, inspections, and genuine BMW parts with warranty coverage."
    },
    {
      question: "What charging options do BMW electric models support?",
      answer: "BMW electric vehicles support various charging options including AC charging at home (up to 11kW), DC fast charging (up to 200kW), and BMW's public charging network. All models come with flexible charging cables and access to BMW ChargeNow services."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bmw-section bg-secondary/10">
      <div className="bmw-container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground bmw-fade-in">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bmw-card bmw-fade-in">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-8 text-left flex items-center justify-between hover:bg-secondary/20 transition-colors rounded-xl"
                >
                  <h3 className="text-xl font-semibold text-foreground pr-8">
                    {faq.question}
                  </h3>
                  <ChevronDown 
                    className={`w-6 h-6 text-muted-foreground transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                
                {openIndex === index && (
                  <div className="px-8 pb-8 animate-accordion-down">
                    <p className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;