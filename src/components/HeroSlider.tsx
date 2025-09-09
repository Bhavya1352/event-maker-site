import { useState, useEffect } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Button } from '@/components/ui/button';

const heroImages = [
  "/api/placeholder/1920/800",
  "/api/placeholder/1920/800", 
  "/api/placeholder/1920/800"
];

const heroTexts = [
  "BOOK TODAY GET IT DONE TOMORROW",
  "YOUR EVENT YOUR WAY"
];

const HeroSlider = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % heroTexts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">
      <Carousel className="h-full">
        <CarouselContent className="h-full">
          {heroImages.map((image, index) => (
            <CarouselItem key={index} className="h-full relative">
              <div 
                className="h-full bg-cover bg-center bg-no-repeat relative"
                style={{ backgroundImage: `url(${image})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60" />
                
                {/* Hero Content */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white z-10 max-w-4xl mx-auto px-4">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
                      <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                        {heroTexts[currentTextIndex]}
                      </span>
                    </h1>
                    <p className="text-xl md:text-2xl mb-8 text-white/90 animate-fade-in">
                      Transform your celebrations with stunning decorations
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Button 
                        size="lg" 
                        className="bg-primary hover:bg-primary-dark text-white px-8 py-4 text-lg font-semibold transform hover:scale-105 transition-all duration-300 shadow-elegant"
                      >
                        Book Now
                      </Button>
                      <Button 
                        variant="outline" 
                        size="lg"
                        className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg font-semibold backdrop-blur-sm"
                      >
                        View Portfolio
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Floating particles */}
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute top-20 left-10 w-4 h-4 bg-accent rounded-full animate-pulse opacity-60" />
                  <div className="absolute top-40 right-20 w-6 h-6 bg-primary rounded-full animate-bounce opacity-40" />
                  <div className="absolute bottom-32 left-20 w-3 h-3 bg-accent rounded-full animate-ping opacity-50" />
                  <div className="absolute bottom-20 right-10 w-5 h-5 bg-primary rounded-full animate-pulse opacity-30" />
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-8 bg-white/20 border-white/20 text-white hover:bg-white hover:text-primary" />
        <CarouselNext className="right-8 bg-white/20 border-white/20 text-white hover:bg-white hover:text-primary" />
      </Carousel>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSlider;