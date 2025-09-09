import { Card, CardContent } from '@/components/ui/card';

const reasons = [
  {
    title: "Expertise in Customized Event Decorations",
    icon: "🎨",
    description: "Years of experience creating unique, personalized decorations for every type of celebration"
  },
  {
    title: "Attention to Detail in Every Setup",
    icon: "🔍", 
    description: "We meticulously plan and execute every element to ensure perfection in your event"
  },
  {
    title: "Creative Designs Tailored to Your Vision",
    icon: "💡",
    description: "Our creative team brings innovative ideas and custom solutions to life"
  },
  {
    title: "Quality Materials for Stunning Results",
    icon: "⭐",
    description: "We use only premium materials and decorations that meet our high standards"
  },
  {
    title: "Exceptional Customer Service and Support",
    icon: "🤝",
    description: "Dedicated support team ensuring smooth communication and satisfaction"
  },
  {
    title: "Timely Setup for Stress-Free Celebrations",
    icon: "⏰",
    description: "Reliable, punctual service so you can focus on enjoying your special moment"
  }
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-muted/30 to-secondary/50 relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Why Choose HappyHearts?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover what makes us the preferred choice for creating magical celebrations
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <Card 
              key={index}
              className="group hover:shadow-elegant transition-all duration-500 hover:-translate-y-2 border-0 bg-white/80 backdrop-blur-sm relative overflow-hidden"
            >
              <CardContent className="p-8 text-center relative z-10">
                <div className="text-5xl mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                  {reason.icon}
                </div>
                
                <h3 className="font-bold text-xl mb-4 text-foreground group-hover:text-primary transition-colors leading-tight">
                  {reason.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {reason.description}
                </p>

                {/* Number badge */}
                <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-r from-primary to-accent text-white rounded-full flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </div>
                
                {/* Hover effect gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg" />
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Statistics section */}
        <div className="mt-20 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <h3 className="text-4xl font-bold text-primary mb-2">500+</h3>
              <p className="text-muted-foreground">Events Completed</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl font-bold text-primary mb-2">100%</h3>
              <p className="text-muted-foreground">Client Satisfaction</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl font-bold text-primary mb-2">24/7</h3>
              <p className="text-muted-foreground">Customer Support</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl font-bold text-primary mb-2">3+</h3>
              <p className="text-muted-foreground">Years Experience</p>
            </div>
          </div>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-br from-accent/10 to-primary/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-gradient-to-br from-primary/5 to-accent/5 rounded-full blur-2xl" />
      </div>
    </section>
  );
};

export default WhyChooseUs;