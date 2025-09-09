import { Heart, Phone, Mail, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Heart className="w-8 h-8 text-pink-500 mr-2" />
              <span className="text-2xl font-bold">HappyHearts</span>
            </div>
            <p className="text-gray-400 mb-4">
              Creating magical moments with beautiful decorations for every celebration.
            </p>
            <div className="flex space-x-4">
              <Instagram className="w-5 h-5 text-pink-500 hover:text-pink-400 cursor-pointer" />
              <Facebook className="w-5 h-5 text-pink-500 hover:text-pink-400 cursor-pointer" />
              <Twitter className="w-5 h-5 text-pink-500 hover:text-pink-400 cursor-pointer" />
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-400 hover:text-pink-500">Home</a></li>
              <li><a href="/services" className="text-gray-400 hover:text-pink-500">Services</a></li>
              <li><a href="/about" className="text-gray-400 hover:text-pink-500">About Us</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-pink-500">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="/services" className="text-gray-400 hover:text-pink-500">Birthday Decoration</a></li>
              <li><a href="/services" className="text-gray-400 hover:text-pink-500">Anniversary Setup</a></li>
              <li><a href="/services" className="text-gray-400 hover:text-pink-500">Proposal Decoration</a></li>
              <li><a href="/services" className="text-gray-400 hover:text-pink-500">Baby Shower</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="w-4 h-4 text-pink-500 mr-2" />
                <span className="text-gray-400">+91 98765 43210</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 text-pink-500 mr-2" />
                <span className="text-gray-400">hello@happyhearts.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 text-pink-500 mr-2" />
                <span className="text-gray-400">Mumbai, India</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">© 2024 HappyHearts. All rights reserved. Made with ❤️ for celebrations.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;