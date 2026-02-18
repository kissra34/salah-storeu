import React, { useEffect, useState } from 'react';

function Footer() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <footer
      className={`bg-blue-700 text-white p-4 mt-8 transition-transform duration-700 ${
        animate ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}
    >
      <p className="text-center">© 2026 متجر الإلكترونيات. جميع الحقوق محفوظة.</p>
      <p className="text-center">البريد: info@electronics-shop.com | الهاتف: 0123456789</p>
    </footer>
  );
}

export default Footer;
