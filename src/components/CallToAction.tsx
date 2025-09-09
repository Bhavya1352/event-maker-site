import { Button } from '@/components/ui/button';

const CallToAction = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-accent to-primary animate-gradient-x" />
      <div className="absolute inset-0 bg-black/20" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center text-white">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Elevate Your Event with Beautiful, Custom Decorations
          </h2>
          <div className="w-32 h-1 bg-white mx-auto rounded-full mb-8 opacity-80" />
          
          <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed opacity-90">
            Transform your event with elegant, custom decorations. Let us bring your vision to life – Book Today!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              size="lg"
              className="bg-white text-primary hover:bg-white/90 px-10 py-6 text-xl font-bold rounded-full transform hover:scale-105 transition-all duration-300 shadow-2xl"
            >
              Book Now - Limited Time Offer!
            </Button>
            
            <Button 
              variant="outline"
              size="lg" 
              className="border-2 border-white text-white hover:bg-white hover:text-primary px-10 py-6 text-xl font-bold rounded-full backdrop-blur-sm"
            >
              Get Free Quote
            </Button>
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl mb-2">⚡</div>
              <h3 className="font-bold text-lg mb-2">Same Day Setup</h3>
              <p className="text-white/80">Quick turnaround for urgent events</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">🎨</div>
              <h3 className="font-bold text-lg mb-2">Custom Designs</h3>
              <p className="text-white/80">Tailored to your unique vision</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">💯</div>
              <h3 className="font-bold text-lg mb-2">100% Satisfaction</h3>
              <p className="text-white/80">We guarantee your happiness</p>
            </div>
          </div>
        </div>
      </div>

      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full animate-pulse" />
        <div className="absolute top-40 right-20 w-20 h-20 bg-white/5 rounded-full animate-bounce" />
        <div className="absolute bottom-32 left-20 w-16 h-16 bg-white/10 rounded-full animate-ping" />
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-white/5 rounded-full animate-pulse" />
      </div>
    </section>
  );
};

export default CallToAction;