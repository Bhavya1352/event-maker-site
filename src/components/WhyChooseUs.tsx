import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, Star, Palette, Award, Heart, Clock } from 'lucide-react';

const reasons = [
  {
    icon: <Star className="w-8 h-8 text-pink-600" />,
    title: "Expertise in Customized Event Decorations",
    description: "Years of experience creating unique, personalized decorations for every type of celebration."
  },
  {
    icon: <CheckCircle className="w-8 h-8 text-pink-600" />,
    title: "Attention to Detail in Every Setup",
    description: "We meticulously plan and execute every element to ensure perfection in your event decoration."
  },
  {
    icon: <Palette className="w-8 h-8 text-pink-600" />,
    title: "Creative Designs Tailored to Your Vision",
    description: "Our creative team brings your unique ideas to life with innovative and stunning designs."
  },
  {
    icon: <Award className="w-8 h-8 text-pink-600" />,
    title: "Quality Materials for Stunning Results",
    description: "We use only premium materials and decorations to ensure your event looks absolutely spectacular."
  },
  {
    icon: <Heart className="w-8 h-8 text-pink-600" />,
    title: "Exceptional Customer Service and Support",
    description: "Our dedicated team provides outstanding support throughout your entire event planning journey."
  },
  {
    icon: <Clock className="w-8 h-8 text-pink-600" />,
    title: "Timely Setup for Stress-Free Celebrations",
    description: "We guarantee punctual setup and takedown, so you can focus on enjoying your special moment."
  }
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Why Choose Us?</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover what makes HappyHearts the perfect choice for your event decoration needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-white border-0">
              <CardContent className="p-8 text-center">
                <div className="mb-6 flex justify-center">
                  <div className="p-4 bg-pink-100 rounded-full group-hover:bg-pink-200 transition-colors duration-300">
                    {reason.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-pink-600 transition-colors">
                  {reason.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {reason.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;