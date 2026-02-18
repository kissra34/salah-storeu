import React, { useEffect, useState } from 'react';

function TestimonialsSection() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 600);
    return () => clearTimeout(timer);
  }, []);

  const testimonials = [
    { text: 'خدمة ممتازة ومنتجات رائعة!', author: 'أحمد' },
    { text: 'أفضل متجر إلكترونيات على الإطلاق.', author: 'فاطمة' },
    { text: 'أنصح الجميع بالتسوق هنا.', author: 'محمد' },
  ];

  return (
    <section className="p-8 bg-gray-100 rounded-lg mb-8">
      <h2
        className={`text-2xl font-semibold mb-4 transition-all duration-700 ${
          animate ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}
      >
        آراء عملائنا
      </h2>
      <div className="space-y-4">
        {testimonials.map((t, idx) => (
          <p
            key={idx}
            className={`transition-transform duration-700 ${
              animate ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
            } hover:scale-105`}
          >
            "{t.text}" – {t.author}
          </p>
        ))}
      </div>
    </section>
  );
}

export default TestimonialsSection;
