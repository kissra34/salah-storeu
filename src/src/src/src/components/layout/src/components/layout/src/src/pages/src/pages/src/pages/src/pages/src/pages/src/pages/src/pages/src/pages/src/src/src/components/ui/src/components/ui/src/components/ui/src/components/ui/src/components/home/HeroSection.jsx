import React from 'react';
import Button from '../ui/Button';

function HeroSection() {
  return (
    <section className="bg-gray-100 p-8 text-center">
      <h1 className="text-3xl font-bold mb-4">أفضل الإلكترونيات بين يديك</h1>
      <p className="mb-6">اكتشف مجموعة واسعة من المنتجات الحديثة.</p>
      <Button>تسوق الآن</Button>
    </section>
  );
}

export default HeroSection;
