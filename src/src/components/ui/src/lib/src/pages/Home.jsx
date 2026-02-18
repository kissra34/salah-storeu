import React from 'react';
import HeroSection from '../components/home/HeroSection';
import FeaturedProducts from '../components/home/FeaturedProducts';
import SpecialOffers from '../components/home/SpecialOffers';
import NewsletterSection from '../components/home/NewsletterSection';
import WhyUsSection from '../components/home/WhyUsSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import LocationSection from '../components/home/LocationSection';

function Home() {
  return (
    <div>
      <HeroSection />
      <FeaturedProducts />
      <SpecialOffers />
      <NewsletterSection />
      <WhyUsSection />
      <TestimonialsSection />
      <LocationSection />
    </div>
  );
}

export default Home;
