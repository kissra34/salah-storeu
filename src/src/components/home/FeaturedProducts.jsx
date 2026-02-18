import React, { useEffect, useState } from 'react';
import Badge from '../ui/Badge';

function FeaturedProducts() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 200);
    return () => clearTimeout(timer);
  }, []);

  const products = [
    { title: 'هاتف ذكي', badge: 'جديد', desc: 'أفضل الهواتف الحديثة مع ميزات متقدمة.' },
    { title: 'سماعات', badge: 'خصم', desc: 'استمتع بصوت واضح ونقي مع هذه السماعات.' },
    { title: 'كمبيوتر محمول', badge: 'مميز', desc: 'أداء ممتاز للألعاب والعمل.' },
  ];

  return (
    <section className="p-8">
      <h2 className="text-2xl font-semibold mb-4">المنتجات المميزة</h2>
      <div className="grid grid-cols-3 gap-6">
        {products.map((prod, index) => (
          <div
            key={index}
            className={`border p-4 rounded bg-white shadow-lg transform transition-all duration-700 ${
              animate ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            } hover:scale-105`}
          >
            <h3 className="text-lg font-bold mb-2">{prod.title}</h3>
            <Badge text={prod.badge} />
            <p className="mt-2">{prod.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeaturedProducts;
