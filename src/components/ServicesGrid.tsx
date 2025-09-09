import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const services = [
  {
    title: "Birthday Decoration",
    description: "Celebrate birthdays with vibrant, personalized decorations that bring joy and excitement to every detail. From balloon arches to themed setups, we create unforgettable experiences that make your special day truly shine!",
    image: "/images/22.jpg",
    hoverColor: "group-hover:bg-yellow-500/20"
  },
  {
    title: "Anniversary Decoration", 
    description: "Celebrate love with our elegant anniversary decorations. From romantic setups to timeless details, we create a beautiful ambiance that captures the essence of your special day. Make memories to cherish forever.",
    image: "/images/23.jpg",
    hoverColor: "group-hover:bg-red-500/20"
  },
  {
    title: "Love/Proposal Decoration",
    description: "Set the perfect scene for your love proposal with romantic decor crafted to amaze. From elegant setups to personalized touches, we create an unforgettable ambiance for your special moment.",
    image: "/images/24.jpg",
    hoverColor: "group-hover:bg-pink-500/20"
  },
  {
    title: "First Birthday Decoration",
    description: "Celebrate your little one's first milestone with enchanting decor that captures the joy of the day. From playful themes to elegant setups, we create a magical atmosphere for unforgettable memories.",
    image: "/images/25.jpg",
    hoverColor: "group-hover:bg-blue-500/20"
  },
  {
    title: "Kids Birthday Decoration",
    description: "Make your child's birthday unforgettable with vibrant, playful decorations crafted to spark joy and wonder. From colorful balloon displays to themed setups, we create magical memories for every little guest.",
    image: "/images/26.jpg",
    hoverColor: "group-hover:bg-green-500/20"
  },
  {
    title: "Baby Shower Decoration",
    description: "Celebrate the joy of new beginnings with our beautiful baby shower decorations. From delicate balloon arrangements to charming details, we create a warm, memorable ambiance for you and your loved ones.",
    image: "/images/27.jpg",
    hoverColor: "group-hover:bg-purple-500/20"
  },
  {
    title: "Balloon Bouquet",
    description: "Add a touch of joy to any celebration with our vibrant balloon bouquets. Perfectly arranged for birthdays, anniversaries, or any special occasion, they bring color, fun, and elegance to your event.",
    image: "/images/28.jpg",
    hoverColor: "group-hover:bg-orange-500/20"
  },
  {
    title: "Sequin Panel Decoration",
    description: "Our Sequin Panel Decoration adds a touch of glamour to any event, creating a sparkling backdrop that catches the light beautifully. Perfect for photos, it elevates your celebration with elegance.",
    image: "/images/29.jpg",
    hoverColor: "group-hover:bg-indigo-500/20"
  },
  {
    title: "Ring Decoration",
    description: "Create a breathtaking atmosphere with our exquisite ring decorations. Perfect for any occasion, our designs add elegance and charm, making your event truly memorable. Elevate your celebration with stunning ring decor!",
    image: "/images/30.jpg",
    hoverColor: "group-hover:bg-teal-500/20"
  },
  {
    title: "Themed Decoration",
    description: "Bring your vision to life with our themed decorations, tailored to create the perfect atmosphere for any occasion. From whimsical to elegant, we ensure every detail enhances your celebration's uniqueness.",
    image: "/images/21.jpg",
    hoverColor: "group-hover:bg-rose-500/20"
  }
];

const ServicesGrid = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our comprehensive range of decoration services designed to make every celebration special
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
              <div className="relative overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-all duration-500 filter group-hover:brightness-110 group-hover:contrast-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                <div className={`absolute inset-0 ${service.hoverColor} opacity-0 group-hover:opacity-100 transition-all duration-500`} />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-pink-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {service.description}
                </p>
                <Link to={`/service/${encodeURIComponent(service.title)}`}>
                  <Button className="w-full bg-pink-600 hover:bg-pink-700 text-white font-semibold">
                    Learn More
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;