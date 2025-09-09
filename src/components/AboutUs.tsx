const AboutUs = () => {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            About HappyHearts
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Welcome to <span className="font-bold text-primary">HappyHearts</span> – where every celebration turns into a beautiful memory filled with joy, color, and elegance. At HappyHearts, we specialize in creating stunning decorations that transform simple spaces into themed environments, bringing the heart of each occasion to life.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              We understand that each event is unique and deserves a personal touch that reflects your style. From intricate balloon arrangements to thoughtfully designed decor setups, HappyHearts brings your vision to life.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              At the heart of our service is our commitment to customer satisfaction. We believe that open communication is key, and we work closely with you to understand your ideas and preferences.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="text-center p-6 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10">
                <h3 className="text-3xl font-bold text-primary mb-2">500+</h3>
                <p className="text-muted-foreground">Happy Events</p>
              </div>
              <div className="text-center p-6 rounded-lg bg-gradient-to-br from-accent/10 to-primary/10">
                <h3 className="text-3xl font-bold text-primary mb-2">100%</h3>
                <p className="text-muted-foreground">Satisfaction</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 p-8 flex items-center justify-center">
              <div className="text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mb-6 mx-auto">
                  <span className="text-4xl">🎉</span>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Creating Magic Since Day One
                </h3>
                <p className="text-muted-foreground">
                  Quality is at the core of HappyHearts. We use only the finest materials and decorations to ensure every setup looks stunning.
                </p>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-accent rounded-full animate-pulse" />
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-primary rounded-full animate-bounce" />
          </div>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-primary/5 to-accent/5 rounded-full blur-xl" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-accent/5 to-primary/5 rounded-full blur-xl" />
      </div>
    </section>
  );
};

export default AboutUs;