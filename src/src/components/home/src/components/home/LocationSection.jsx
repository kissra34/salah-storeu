import React, { useEffect, useState } from 'react';

function LocationSection() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 700);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="p-8 bg-white rounded-lg mb-8">
      <h2
        className={`text-2xl font-semibold mb-4 transition-all duration-700 ${
          animate ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}
      >
        موقعنا
      </h2>
      <p
        className={`transition-transform duration-700 ${
          animate ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
        }`}
      >
        يمكنكم زيارة المتجر في المدينة أو التواصل معنا لمعرفة الفروع القريبة منك.
      </p>
    </section>
  );
}

export default LocationSection;
