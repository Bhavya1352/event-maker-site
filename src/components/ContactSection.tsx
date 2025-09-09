import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '', 
    phone: '',
    eventType: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const whatsappNumber = "+1234567890"; // Replace with actual WhatsApp number
  const whatsappMessage = "Hi! I'm interested in your decoration services. Can you help me plan my event?";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Let's Create Something Beautiful Together
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your event? Get in touch with us and let's bring your vision to life!
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mt-6" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <Card className="border-0 bg-white/80 backdrop-blur-sm shadow-elegant">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-foreground">Send Us a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name" className="text-sm font-semibold text-foreground">Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                      className="mt-1 border-border/50 focus:border-primary"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="text-sm font-semibold text-foreground">Phone *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Your phone number"
                      className="mt-1 border-border/50 focus:border-primary"
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email" className="text-sm font-semibold text-foreground">Email *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your.email@example.com"
                    className="mt-1 border-border/50 focus:border-primary"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="eventType" className="text-sm font-semibold text-foreground">Event Type</Label>
                  <Input
                    id="eventType"
                    name="eventType"
                    value={formData.eventType}
                    onChange={handleInputChange}
                    placeholder="Birthday, Anniversary, Wedding, etc."
                    className="mt-1 border-border/50 focus:border-primary"
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="text-sm font-semibold text-foreground">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your event, preferred date, budget, and any special requirements..."
                    className="mt-1 min-h-32 border-border/50 focus:border-primary"
                    required
                  />
                </div>

                <Button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary to-accent text-white font-semibold py-3 rounded-full hover:shadow-elegant hover:scale-105 transition-all duration-300"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info & WhatsApp */}
          <div className="space-y-8">
            {/* WhatsApp Card */}
            <Card className="border-0 bg-gradient-to-br from-green-500/10 to-green-600/10 shadow-elegant">
              <CardContent className="p-8 text-center">
                <div className="text-6xl mb-4">📱</div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">Chat with us on WhatsApp</h3>
                <p className="text-muted-foreground mb-6">
                  Get instant responses and quick quotes via WhatsApp. We're available 24/7 to help you!
                </p>
                <a 
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <Button className="bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-3 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300">
                    💬 Chat on WhatsApp
                  </Button>
                </a>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <Card className="border-0 bg-white/80 backdrop-blur-sm shadow-elegant">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-foreground">Get in Touch</h3>
                
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center text-white">
                      📧
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Email</h4>
                      <p className="text-muted-foreground">info@happyhearts.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center text-white">
                      📞
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Phone</h4>
                      <p className="text-muted-foreground">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center text-white">
                      📍
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Service Area</h4>
                      <p className="text-muted-foreground">City Wide & Surrounding Areas</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center text-white">
                      ⏰
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Working Hours</h4>
                      <p className="text-muted-foreground">Mon - Sun: 9:00 AM - 9:00 PM</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Response Promise */}
            <Card className="border-0 bg-gradient-to-br from-primary/10 to-accent/10 shadow-elegant">
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-3">⚡</div>
                <h4 className="font-bold text-lg mb-2 text-foreground">Quick Response Guarantee</h4>
                <p className="text-sm text-muted-foreground">
                  We respond to all inquiries within 2 hours during business hours!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-20 right-10 w-32 h-32 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-20 left-10 w-40 h-40 bg-gradient-to-br from-accent/10 to-primary/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>
    </section>
  );
};

export default ContactSection;