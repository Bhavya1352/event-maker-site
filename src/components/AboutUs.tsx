const AboutUs = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 relative overflow-hidden">
      {/* Decorative clouds */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-20 bg-white/30 rounded-full blur-xl animate-float"></div>
        <div className="absolute top-32 right-20 w-40 h-24 bg-pink-200/20 rounded-full blur-xl animate-float-delay"></div>
        <div className="absolute bottom-20 left-1/4 w-36 h-22 bg-purple-200/20 rounded-full blur-xl animate-float-delay-2"></div>
        <div className="absolute bottom-40 right-10 w-28 h-18 bg-blue-200/20 rounded-full blur-xl animate-float"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black text-gray-800 mb-8">
            Welcome to <span className="text-pink-600 font-black">HappyHearts</span>
          </h2>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-[3rem] p-8 md:p-12 shadow-2xl border border-white/50 relative overflow-hidden">
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-pink-200/30 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-purple-200/30 rounded-full blur-2xl"></div>
            <div className="space-y-6 text-lg text-gray-800 leading-relaxed font-semibold relative z-10">
              <p>
                – where every celebration turns into a beautiful memory filled with joy, color, and elegance. At HappyHearts, we specialize in creating stunning decorations that transform simple spaces into themed environments, bringing the heart of each occasion to life. Whether you're celebrating a birthday, proposal, anniversary, or baby shower, our mission is to make your event unforgettable with carefully curated decorations and an eye for detail.
              </p>
              
              <p>
                We understand that each event is unique and deserves a personal touch that reflects your style. From intricate balloon arrangements to thoughtfully designed decor setups, HappyHearts brings your vision to life. Our team is experienced in transforming venues of all sizes, crafting everything from intimate, cozy settings to grand, elaborate displays that leave a lasting impression.
              </p>
              
              <p>
                At the heart of our service is our commitment to customer satisfaction. We believe that open communication is key, and we work closely with you to understand your ideas and preferences. From the initial concept discussion to the final setup, our team at HappyHearts ensures that every detail aligns with your vision. We aim to make the entire process stress-free, so you can relax and enjoy your celebration with confidence.
              </p>
              
              <p>
                Creativity and innovation are essential to what we do. We continually explore new trends and styles in event decoration to bring fresh and exciting ideas to our services. Our extensive inventory includes a variety of decor options – from elegant balloon arrangements to thematic accessories and ambient lighting – all chosen to create a perfect backdrop for your celebration. Each event is a reflection of special moments, and we are committed to making those moments stand out with creativity and elegance.
              </p>
              
              <p>
                Quality is at the core of HappyHearts. We use only the finest materials and decorations to ensure every setup looks stunning and meets our high standards for durability and safety. From our choice of balloons and decor pieces to our tools and installation process, we carefully manage every aspect, giving you a flawless presentation. Our dedicated decorators handle every detail with precision, so you can trust us to deliver an exceptional setup every time.
              </p>
              
              <p>
                As HappyHearts grows, our mission remains the same: to bring a touch of magic to each celebration. We are honored to be a part of your special moments, and we take that responsibility seriously, working with care, enthusiasm, and dedication. With HappyHearts, you can focus on enjoying your event while we handle the details of decoration, turning your space into a scene to remember.
              </p>
              
              <p className="font-bold text-pink-600 text-xl">
                Thank you for choosing HappyHearts for your upcoming celebrations. We're excited to bring your vision to life and help create beautiful, lasting memories with our decor services. Contact us today to learn more about how HappyHearts can make your celebration one to cherish.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;