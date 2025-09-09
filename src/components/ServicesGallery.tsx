import { Card, CardContent } from '@/components/ui/card';

const galleryServices = [
  {
    title: "Birthday Decoration",
    description: "Celebrate birthdays with vibrant, personalized decorations that bring joy and excitement to every detail. From balloon arches to themed setups, we create unforgettable experiences that make your special day truly shine!",
    image: "/api/placeholder/400/300"
  },
  {
    title: "Anniversary Decoration", 
    description: "Celebrate love with our elegant anniversary decorations. From romantic setups to timeless details, we create a beautiful ambiance that captures the essence of your special day. Make memories to cherish forever.",
    image: "/api/placeholder/400/300"
  },
  {
    title: "Love Proposal Decoration",
    description: "Set the perfect scene for your love proposal with romantic decor crafted to amaze. From elegant setups to personalized touches, we create an unforgettable ambiance for your special moment.",
    image: "/api/placeholder/400/300"
  },
  {
    title: "First Birthday Decoration",
    description: "Celebrate your little one's first milestone with enchanting decor that captures the joy of the day. From playful themes to elegant setups, we create a magical atmosphere for unforgettable memories.",
    image: "/api/placeholder/400/300"
  },
  {
    title: "Kids Birthday Decoration",
    description: "Make your child's birthday unforgettable with vibrant, playful decorations crafted to spark joy and wonder. From colorful balloon displays to themed setups, we create magical memories for every little guest.",
    image: "/api/placeholder/400/300"
  },
  {
    title: "Baby Shower Decoration",
    description: "Celebrate the joy of new beginnings with our beautiful baby shower decorations. From delicate balloon arrangements to charming details, we create a warm, memorable ambiance for you and your loved ones.",
    image: "/api/placeholder/400/300"
  },
  {
    title: "Balloon Bouquet",
    description: "Add a touch of joy to any celebration with our vibrant balloon bouquets. Perfectly arranged for birthdays, anniversaries, or any special occasion, they bring color, fun, and elegance to your event.",
    image: "/api/placeholder/400/300"
  },
  {
    title: "Sequin Panel Decoration",
    description: "Our Sequin Panel Decoration adds a touch of glamour to any event, creating a sparkling backdrop that catches the light beautifully. Perfect for photos, it elevates your celebration with elegance.",
    image: "/api/placeholder/400/300"
  },
  {
    title: "Ring Decoration",
    description: "Create a breathtaking atmosphere with our exquisite ring decorations. Perfect for any occasion, our designs add elegance and charm, making your event truly memorable. Elevate your celebration with stunning ring decor!",
    image: "/api/placeholder/400/300"
  },
  {
    title: "Themed Decoration",
    description: "Bring your vision to life with our themed decorations, tailored to create the perfect atmosphere for any occasion. From whimsical to elegant, we ensure every detail enhances your celebration's uniqueness.",
    image: "/api/placeholder/400/300"
  }
];

const ServicesGallery = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Our Services Gallery
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our detailed service offerings with stunning visuals and comprehensive descriptions
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mt-6" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {galleryServices.map((service, index) => (
            <Card 
              key={index}
              className="group hover:shadow-elegant transition-all duration-500 hover:-translate-y-1 border-0 bg-white/80 backdrop-blur-sm overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Overlay content */}
                <div className="absolute bottom-4 left-4 right-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 opacity-0 group-hover:opacity-100">
                  <h3 className="font-bold text-xl mb-2">{service.title}</h3>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="font-bold text-xl mb-3 text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
                
                <div className="mt-4 flex justify-between items-center">
                  <button className="text-primary font-semibold hover:text-primary-dark transition-colors">
                    Learn More →
                  </button>
                  <button className="bg-gradient-to-r from-primary to-accent text-white px-4 py-2 rounded-full text-sm font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300">
                    Book Now
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGallery;