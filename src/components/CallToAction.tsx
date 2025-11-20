import { Button } from '@/components/ui/button';
import { useState } from 'react';
import BookingModal from './BookingModal';

const CallToAction = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  return (
    <section className="py-20 bg-gradient-to-r from-pink-600 via-purple-600 to-pink-600 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-white/10 rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-white/10 rounded-full animate-ping"></div>
        <div className="absolute bottom-40 right-10 w-12 h-12 bg-white/10 rounded-full animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 drop-shadow-lg">
            Elevate Your Event with Beautiful, Custom Decorations – Book Now!
          </h2>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 font-semibold">
            Transform your event with elegant, custom decorations. Let us bring your vision to life – Book Today!
          </p>
          
          <Button 
            onClick={() => setIsBookingModalOpen(true)}
            className="bg-white text-pink-600 hover:bg-gray-100 text-lg px-8 py-4 rounded-full shadow-xl transform hover:scale-105 transition-all duration-300 font-bold"
          >
            Book Your Event Now
          </Button>
        </div>
      </div>
      
      <BookingModal 
        isOpen={isBookingModalOpen} 
        onClose={() => setIsBookingModalOpen(false)} 
      />
    </section>
  );
};

export default CallToAction;