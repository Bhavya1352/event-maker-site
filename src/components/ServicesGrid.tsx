import { Card, CardContent } from '@/components/ui/card';

const services = [
  {
    title: "Birthday Decoration",
    icon: "🎂",
    description: "Vibrant, personalized decorations for unforgettable birthday celebrations"
  },
  {
    title: "Anniversary Decoration", 
    icon: "💕",
    description: "Elegant romantic setups to celebrate your love story"
  },
  {
    title: "Love/Proposal Decoration",
    icon: "💍", 
    description: "Perfect romantic ambiance for your special proposal moment"
  },
  {
    title: "First Birthday Decoration",
    icon: "🍼",
    description: "Magical setups to celebrate your little one's first milestone"
  },
  {
    title: "Kids Birthday Decoration",
    icon: "🎈",
    description: "Colorful, playful themes that spark joy and wonder"
  },
  {
    title: "Baby Shower Decoration",
    icon: "👶",
    description: "Beautiful decorations to welcome new beginnings"
  },
  {
    title: "Balloon Bouquet",
    icon: "🎈",
    description: "Vibrant balloon arrangements for any celebration"
  },
  {
    title: "Sequin Panel Decoration",
    icon: "✨",
    description: "Glamorous sparkling backdrops for stunning photos"
  },
  {
    title: "Ring Decoration",
    icon: "🌸",
    description: "Exquisite ring decorations for elegant celebrations"
  },
  {
    title: "Themed Decoration",
    icon: "🎭",
    description: "Custom themed setups tailored to your unique vision"
  }
];

const ServicesGrid = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-secondary/50 to-muted/30">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From birthdays to proposals, we create magical moments with our comprehensive decoration services
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 border-0 bg-white/80 backdrop-blur-sm"
            >
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="font-bold text-lg mb-3 text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
                
                {/* Hover effect gradient border */}
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-sm" />
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-primary to-accent text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-elegant hover:scale-105 transition-all duration-300">
            View All Services
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;