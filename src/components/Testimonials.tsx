import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Priya Sharma",
    rating: 5,
    text: "HappyHearts made my anniversary so special! The decoration was beyond my expectations. Highly recommended!",
    event: "Anniversary Celebration"
  },
  {
    name: "Rahul Gupta", 
    rating: 5,
    text: "Amazing work for my daughter's first birthday. The team was professional and the setup was magical!",
    event: "First Birthday"
  },
  {
    name: "Sneha Patel",
    rating: 5,
    text: "Perfect proposal setup! My fiancé was so surprised. Thank you HappyHearts for making it memorable!",
    event: "Proposal Decoration"
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-pink-50 to-purple-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">What Our Clients Say</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real stories from real celebrations
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                <div>
                  <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                  <p className="text-pink-600 text-sm">{testimonial.event}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;