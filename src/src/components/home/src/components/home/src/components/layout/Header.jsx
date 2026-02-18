import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const links = [
    { name: 'الرئيسية', to: '/' },
    { name: 'المنتجات', to: '/products' },
    { name: 'من نحن', to: '/about' },
    { name: 'اتصل بنا', to: '/contact' },
  ];

  return (
    <header className="bg-blue-700 text-white p-4 flex justify-between items-center shadow-md">
      <h1 className="text-xl font-bold">متجر الإلكترونيات</h1>
      <nav className="space-x-4">
        {links.map((link, idx) => (
          <Link
            key={idx}
            to={link.to}
            className={`transition-transform duration-500 ${
              animate ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            } hover:scale-105`}
          >
            {link.name}
          </Link>
        ))}
      </nav>
    </header>
  );
}

export default Header;
