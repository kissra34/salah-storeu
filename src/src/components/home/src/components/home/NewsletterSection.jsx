import React, { useState, useEffect } from 'react';
import Button from '../ui/Button';
import Input from '../ui/Input';

function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 400);
    return () => clearTimeout(timer);
  }, []);

  const handleSubscribe = () => {
    alert(`تم الاشتراك بالبريد: ${email}`);
  };

  return (
    <section className="bg-blue-600 p-8 text-white text-center rounded-lg mb-8">
      <h2
        className={`text-2xl font-semibold mb-4 transition-all duration-700 ${
          animate ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}
      >
        اشترك في النشرة البريدية
      </h2>
      <div
        className={`flex justify-center gap-2 transition-all duration-700 ${
          animate ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}
      >
        <Input
          type="email"
          placeholder="أدخل بريدك الإلكتروني"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button onClick={handleSubscribe}>اشترك</Button>
      </div>
    </section>
  );
}

export default NewsletterSection;
