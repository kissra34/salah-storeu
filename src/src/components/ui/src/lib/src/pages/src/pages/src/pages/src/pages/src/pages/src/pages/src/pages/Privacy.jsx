import React, { useEffect, useState } from 'react';

function Privacy() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="p-8 max-w-3xl mx-auto bg-white shadow-lg rounded-lg">
      <h2 className={`text-2xl font-bold mb-4 transition-transform duration-700 ${animate ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        سياسة الخصوصية
      </h2>
      <p className={`mb-2 transition-opacity duration-700 ${animate ? 'opacity-100' : 'opacity-0'}`}>
        نحن نحترم خصوصيتك ونلتزم بحماية بياناتك الشخصية.
      </p>
      <p className={`mb-2 transition-opacity duration-700 ${animate ? 'opacity-100' : 'opacity-0'}`}>
        يتم جمع المعلومات فقط لغرض تحسين تجربتك في الموقع وخدمة العملاء.
      </p>
      <p className={`mb-2 transition-opacity duration-700 ${animate ? 'opacity-100' : 'opacity-0'}`}>
        لا نشارك معلوماتك مع أطراف ثالثة إلا بموافقتك أو وفق القانون.
      </p>
    </section>
  );
}

export default Privacy;
