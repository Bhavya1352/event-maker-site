import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      image: '/images/1.jpg',
      title: 'BOOK TODAY GET IT DONE TOMORROW',
      subtitle: 'Fast, reliable event decoration services'
    },
    {
      image: '/images/2.jpg', 
      title: 'YOUR EVENT YOUR WAY',
      subtitle: 'Customized decorations for every celebration'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div 
            className="h-full bg-cover bg-center transform transition-transform duration-1000 hover:scale-105"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-black/40" />
            <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
              <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 drop-shadow-lg">
                  {slide.title}
                </h1>
                <p className="text-xl md:text-2xl text-white/90 mb-8 font-semibold">
                  {slide.subtitle}
                </p>
                <Button className="bg-pink-600 hover:bg-pink-700 text-white text-lg px-8 py-4 rounded-full shadow-xl transform hover:scale-105 transition-all duration-300 font-bold">
                  Book Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}
      
      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;