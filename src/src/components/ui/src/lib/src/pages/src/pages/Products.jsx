import React, { useEffect, useState } from 'react';
import Badge from '../components/ui/Badge';
import { animateDelay } from '../lib/utils';

function Products() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 200);
    return () => clearTimeout(timer);
  }, []);

  const products = [
    { title: 'هاتف ذكي', badge: 'جديد', desc: 'أفضل الهواتف الحديثة.' },
    { title: 'سماعات', badge: 'خصم', desc: 'صوت واضح ونقي.' },
    { title: 'كمبيوتر محمول', badge: 'مميز', desc: 'أداء ممتاز للألعاب والعمل.' },
    { title: 'كاميرا رقمية', badge: 'جديد', desc: 'تصوير عالي الجودة.' },
  ];

  return (
    <section className="p-8">
      <h2 className="text-2xl font-semibold mb-4">جميع المنتجات</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((prod, index) => (
          <div
            key={index}
            style={animateDelay(index, 100)}
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

export default Products;
