import React, { useEffect, useState } from 'react';
import Button from '../components/ui/Button';
import Badge from '../components/ui/Badge';

function ProductDetails() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 200);
    return () => clearTimeout(timer);
  }, []);

  const product = {
    title: 'هاتف ذكي',
    badge: 'جديد',
    desc: 'أفضل الهواتف الحديثة مع كاميرا قوية وبطارية طويلة العمر.',
    price: 1200,
  };

  return (
    <section className="p-8 max-w-2xl mx-auto bg-white shadow-lg rounded-lg">
      <h2
        className={`text-2xl font-bold mb-4 transition-transform duration-700 ${
          animate ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}
      >
        {product.title} <Badge text={product.badge} />
      </h2>
      <p className={`mb-4 transition-opacity duration-700 ${animate ? 'opacity-100' : 'opacity-0'}`}>
        {product.desc}
      </p>
      <p className={`text-xl font-semibold mb-4 transition-transform duration-700 ${animate ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        السعر: {product.price} د.إ
      </p>
      <Button>أضف إلى السلة</Button>
    </section>
  );
}

export default ProductDetails;
