import { useState } from 'react';
import ExplosionIntro from '../components/ExplosionIntro';
import HeroSlider from '../components/HeroSlider';
import AboutUs from '../components/AboutUs';
import ServicesGrid from '../components/ServicesGrid';
import CallToAction from '../components/CallToAction';
import ServicesGallery from '../components/ServicesGallery';
import WhyChooseUs from '../components/WhyChooseUs';
import ContactSection from '../components/ContactSection';

const Index = () => {
  const [showContent, setShowContent] = useState(false);

  const handleExplosionComplete = () => {
    setShowContent(true);
  };

  return (
    <>
      {!showContent && <ExplosionIntro onComplete={handleExplosionComplete} />}
      {showContent && (
        <div className="content-enter">
          <HeroSlider />
          <AboutUs />
          <ServicesGrid />
          <CallToAction />
          <ServicesGallery />
          <WhyChooseUs />
          <ContactSection />
        </div>
      )}
    </>
  );
};

export default Index;
