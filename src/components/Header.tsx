import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Menu, X, ChevronDown, User } from 'lucide-react';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import BookingModal from './BookingModal';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToServices = () => {
    if (location.pathname === '/') {
      const servicesSection = document.getElementById('services-section');
      if (servicesSection) {
        servicesSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/#services');
    }
  };

  const handleBookNow = () => {
    setIsBookingModalOpen(true);
  };

  return (
    <header className="bg-white/95 backdrop-blur-sm shadow-lg py-4 px-6 flex items-center justify-between fixed top-0 left-0 w-full z-50">
      <div className="flex items-center">
        <img src="/images/logo.jpg" alt="HappyHearts Logo" className="h-12 mr-4 rounded-lg" />
        <span className="text-2xl font-bold text-pink-600 hidden sm:block">HappyHearts</span>
        
        <nav className="hidden lg:flex space-x-8 ml-8">
          <a href="/" className="text-gray-700 hover:text-pink-600 font-semibold transition-all duration-300 hover:scale-110 hover:bg-pink-50 px-3 py-2 rounded-full">Home</a>
          
          <div className="relative group">
            <button 
              onClick={scrollToServices}
              className="text-gray-700 hover:text-pink-600 font-semibold transition-all duration-300 hover:scale-110 hover:bg-pink-50 px-3 py-2 rounded-full flex items-center"
            >
              Services <ChevronDown className="w-4 h-4 ml-1" />
            </button>
            <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-xl border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
              <button onClick={scrollToServices} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-pink-50 hover:text-pink-600 rounded-t-lg">Anniversary</button>
              <button onClick={scrollToServices} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-pink-50 hover:text-pink-600">Birthdays</button>
              <button onClick={scrollToServices} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-pink-50 hover:text-pink-600">Baby Shower</button>
              <button onClick={scrollToServices} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-pink-50 hover:text-pink-600">Love/Proposal</button>
              <button onClick={scrollToServices} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-pink-50 hover:text-pink-600">Balloon Bouquet</button>
              <button onClick={scrollToServices} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-pink-50 hover:text-pink-600">Themed Decoration</button>
              <button onClick={scrollToServices} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-pink-50 hover:text-pink-600">Kids Birthday</button>
              <button onClick={scrollToServices} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-pink-50 hover:text-pink-600 rounded-b-lg">Ring Decoration</button>
            </div>
          </div>
          
          <a href="/about" className="text-gray-700 hover:text-pink-600 font-semibold transition-all duration-300 hover:scale-110 hover:bg-pink-50 px-3 py-2 rounded-full">About Us</a>
          <a href="/contact" className="text-gray-700 hover:text-pink-600 font-semibold transition-all duration-300 hover:scale-110 hover:bg-pink-50 px-3 py-2 rounded-full">Contact</a>
        </nav>
      </div>
      
      <div className="flex items-center space-x-4">
        <div className="relative hidden md:block">
          <Input 
            type="text" 
            placeholder="Search services..." 
            className="pl-10 pr-4 py-2 rounded-full border-2 border-pink-200 focus:border-pink-500 focus:ring-pink-500 w-64"
          />
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-pink-400 w-4 h-4" />
        </div>
        
        <div className="relative group hidden md:block">
          <button className="text-gray-700 hover:text-pink-600 font-semibold transition-all duration-300 hover:scale-110 hover:bg-pink-50 px-3 py-2 rounded-full flex items-center mr-4">
            <User className="w-4 h-4 mr-1" /> Login
          </button>
          <div className="absolute top-full right-0 mt-2 w-40 bg-white rounded-lg shadow-xl border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
            <a href="/login" className="block px-4 py-2 text-gray-700 hover:bg-pink-50 hover:text-pink-600 rounded-t-lg">Sign In</a>
            <a href="/register" className="block px-4 py-2 text-gray-700 hover:bg-pink-50 hover:text-pink-600 rounded-b-lg">Sign Up</a>
          </div>
        </div>
        
        <Button 
          onClick={handleBookNow}
          className="bg-pink-600 hover:bg-pink-700 text-white rounded-full px-6 py-2 font-semibold shadow-lg transform hover:scale-105 transition-all duration-300 hidden md:block"
        >
          Book Now
        </Button>
        
        {/* Mobile menu button */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden p-2 text-gray-700 hover:text-pink-600"
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg lg:hidden">
          <nav className="flex flex-col p-4 space-y-4">
            <a href="/" className="text-gray-700 hover:text-pink-600 font-semibold transition-all duration-300 hover:bg-pink-50 px-3 py-2 rounded-lg">Home</a>
            <a href="/services" className="text-gray-700 hover:text-pink-600 font-semibold transition-all duration-300 hover:bg-pink-50 px-3 py-2 rounded-lg">Services</a>
            <a href="/about" className="text-gray-700 hover:text-pink-600 font-semibold transition-all duration-300 hover:bg-pink-50 px-3 py-2 rounded-lg">About Us</a>
            <a href="/contact" className="text-gray-700 hover:text-pink-600 font-semibold transition-all duration-300 hover:bg-pink-50 px-3 py-2 rounded-lg">Contact</a>
            <Button 
              onClick={handleBookNow}
              className="bg-pink-600 hover:bg-pink-700 text-white rounded-full px-6 py-2 font-semibold w-full"
            >
              Book Now
            </Button>
          </nav>
        </div>
      )}
      
      <BookingModal 
        isOpen={isBookingModalOpen} 
        onClose={() => setIsBookingModalOpen(false)} 
      />
    </header>
  );
};

export default Header;