import React, { useEffect, useState } from 'react';

function WhyUsSection() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const reasons = ['أفضل الأسعار', 'منتجات أصلية', 'خدمة عملاء متميزة'];

  return (
    <section className="p-8 bg-white mb-8">
      <h2
        className={`text-2xl font-semibold mb-4 transition-all duration-700 ${
          animate ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}
      >
        لماذا تختار متجرنا؟
      </h2>
      <ul className="list-disc pl-6 space-y-2">
        {reasons.map((reason, idx) => (
          <li
            key={idx}
            className={`transition-transform duration-700 ${
              animate ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
            } hover:scale-105`}
          >
            {reason}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default WhyUsSection;
