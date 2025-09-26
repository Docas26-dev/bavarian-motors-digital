import ixImage from '@/assets/bmw-ix.jpg';
import i4ChargingImage from '@/assets/bmw-i4-charging.jpg';
import m4SideImage from '@/assets/bmw-m4-side.jpg';

const CampaignsSection = () => {
  const campaigns = [
    {
      title: "Summer Leasing Offers",
      description: "Discover exceptional leasing deals on our latest BMW models with flexible terms and premium benefits.",
      image: ixImage,
      tag: "Limited Time"
    },
    {
      title: "BMW Charging Solutions",
      description: "Experience seamless electric mobility with our comprehensive charging network and home solutions.",
      image: i4ChargingImage,
      tag: "Electric"
    },
    {
      title: "Future of M Performance",
      description: "The next generation of BMW M models brings unprecedented performance and innovative technology.",
      image: m4SideImage,
      tag: "Performance"
    }
  ];

  return (
    <section className="bmw-section bg-secondary/20">
      <div className="bmw-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground bmw-fade-in">
            Current Campaigns
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {campaigns.map((campaign, index) => (
            <div key={index} className="bmw-card group cursor-pointer bmw-fade-in">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img 
                  src={campaign.image}
                  alt={campaign.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-semibold">
                    {campaign.tag}
                  </span>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-accent transition-colors">
                  {campaign.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {campaign.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CampaignsSection;