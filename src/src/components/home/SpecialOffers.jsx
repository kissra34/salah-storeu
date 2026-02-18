import React, { useEffect, useState } from 'react';
import Badge from '../ui/Badge';

function SpecialOffers() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const offers = [
    { title: 'هاتف ذكي', badge: 'خصم 20%', desc: 'اغتنم الفرصة قبل نفاد الكمية.' },
    { title: 'سماعات', badge: 'خصم 15%', desc: 'استمتع بصوت رائع مع الخصم المحدود.' },
    { title: 'كمبيوتر محمول', badge: 'خصم 10%', desc: 'أفضل العروض للأجهزة الحديثة.' },
  ];

  return (
    <section className="p-8 bg-gray-50">
      <h2 className="text-2xl font-semibold mb-4">عروض خاصة</h2>
      <div className="grid grid-cols-3 gap-6">
        {offers.map((offer, index) => (
          <div
            key={index}
            className={`border p-4 rounded bg-white shadow-lg transform transition-all duration-700 ${
              animate ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            } hover:scale-105 hover:shadow-2xl`}
          >
            <h3 className="text-lg font-bold mb-2">{offer.title}</h3>
            <Badge text={offer.badge} />
            <p className="mt-2">{offer.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SpecialOffers;
