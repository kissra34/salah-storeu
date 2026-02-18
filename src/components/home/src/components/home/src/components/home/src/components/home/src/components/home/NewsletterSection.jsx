import React, { useState } from 'react';
import Button from '../ui/Button';
import Input from '../ui/Input';

function NewsletterSection() {
  const [email, setEmail] = useState('');

  const handleSubscribe = () => {
    alert(`تم الاشتراك بالبريد: ${email}`);
  };

  return (
    <section className="bg-gray-200 p-8 text-center">
      <h2 className="text-2xl font-semibold mb-4">اشترك في النشرة البريدية</h2>
      <div className="flex justify-center gap-2">
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
