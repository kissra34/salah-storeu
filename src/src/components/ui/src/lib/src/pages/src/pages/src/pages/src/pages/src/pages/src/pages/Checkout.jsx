import React, { useEffect, useState } from 'react';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';
import { useCart } from '../components/ui/CartContext';

function Checkout() {
  const [animate, setAnimate] = useState(false);
  const { cartItems } = useCart();
  const [form, setForm] = useState({ name: '', address: '', card: '' });

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 200);
    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('تمت عملية الدفع بنجاح!');
  };

  return (
    <section className="p-8 max-w-2xl mx-auto bg-white shadow-lg rounded-lg">
      <h2 className={`text-2xl font-bold mb-4 transition-transform duration-700 ${animate ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        الدفع
      </h2>

      {cartItems.length === 0 ? (
        <p>سلة التسوق فارغة.</p>
      ) : (
        <ul className={`mb-4 transition-opacity duration-700 ${animate ? 'opacity-100' : 'opacity-0'}`}>
          {cartItems.map((item, idx) => (
            <li key={idx}>{item.title}</li>
          ))}
        </ul>
      )}

      <form onSubmit={handleSubmit} className={`space-y-4 transition-opacity duration-700 ${animate ? 'opacity-100' : 'opacity-0'}`}>
        <Input name="name" placeholder="الاسم الكامل" value={form.name} onChange={handleChange} />
        <Input name="address" placeholder="عنوان الشحن" value={form.address} onChange={handleChange} />
        <Input name="card" placeholder="رقم البطاقة" value={form.card} onChange={handleChange} />
        <Button type="submit">إتمام الدفع</Button>
      </form>
    </section>
  );
}

export default Checkout;
