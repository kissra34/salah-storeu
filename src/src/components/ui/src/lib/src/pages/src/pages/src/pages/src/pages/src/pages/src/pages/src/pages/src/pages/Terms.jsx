import React, { useEffect, useState } from 'react';

function Terms() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="p-8 max-w-3xl mx-auto bg-white shadow-lg rounded-lg">
      <h2 className={`text-2xl font-bold mb-4 transition-transform duration-700 ${animate ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        الشروط والأحكام
      </h2>
      <p className={`mb-2 transition-opacity duration-700 ${animate ? 'opacity-100' : 'opacity-0'}`}>
        باستخدامك هذا الموقع، فإنك توافق على الالتزام بالشروط والأحكام التالية.
      </p>
      <p className={`mb-2 transition-opacity duration-700 ${animate ? 'opacity-100' : 'opacity-0'}`}>
        لا تتحمل إدارة الموقع أي مسؤولية عن الأضرار الناتجة عن استخدام المنتجات أو المعلومات.
      </p>
      <p className={`mb-2 transition-opacity duration-700 ${animate ? 'opacity-100' : 'opacity-0'}`}>
        جميع المحتويات محمية بحقوق الطبع والنشر ولا يجوز نسخها أو إعادة نشرها بدون إذن.
      </p>
    </section>
  );
}

export default Terms;
