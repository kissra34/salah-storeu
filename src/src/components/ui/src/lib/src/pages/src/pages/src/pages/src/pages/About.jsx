import React, { useEffect, useState } from 'react';

function About() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="p-8 max-w-3xl mx-auto bg-white shadow-lg rounded-lg">
      <h2 className={`text-2xl font-bold mb-4 transition-transform duration-700 ${animate ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        من نحن
      </h2>
      <p className={`transition-opacity duration-700 ${animate ? 'opacity-100' : 'opacity-0'}`}>
        متجر الإلكترونيات هو وجهتك الأفضل للحصول على أحدث الأجهزة الإلكترونية بأفضل الأسعار.
        هدفنا تقديم منتجات أصلية وخدمة عملاء ممتازة لضمان رضاكم الكامل.
      </p>
    </section>
  );
}

export default About;
