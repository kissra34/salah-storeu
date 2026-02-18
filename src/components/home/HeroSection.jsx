import React, { useEffect, useState } from 'react';
import Button from '../ui/Button';

function HeroSection() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative bg-gradient-to-r from-blue-500 to-blue-700 text-white p-20 text-center overflow-hidden">
      <h1
        className={`text-5xl font-bold mb-4 transition-transform duration-1000 ${
          animate ? 'translate-y-0 scale-100' : 'translate-y-10 scale-50'
        }`}
      >
        مرحبا بكم في متجر الإلكترونيات
      </h1>
      <p
        className={`text-xl mb-6 transition-opacity duration-1500 ${
          animate ? 'opacity-100' : 'opacity-0'
        }`}
      >
        هذا المتجر متخصص في بيع أفضل الإلكترونيات
      </p>
      <Button>تسوق الآن</Button>

      {/* تأثير ثلاثي الأبعاد خفيف */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute w-40 h-40 bg-white opacity-10 rounded-full animate-ping -top-10 -left-10"></div>
        <div className="absolute w-60 h-60 bg-white opacity-10 rounded-full animate-ping -bottom-20 -right-20"></div>
      </div>
    </section>
  );
}

export default HeroSection;
