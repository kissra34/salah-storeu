import React, { useEffect, useState } from 'react';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';

function Contact() {
  const [animate, setAnimate] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 200);
    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('تم إرسال الرسالة!');
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section className="p-8 max-w-2xl mx-auto bg-white shadow-lg rounded-lg">
      <h2 className={`text-2xl font-bold mb-4 transition-transform duration-700 ${animate ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        اتصل بنا
      </h2>
      <form onSubmit={handleSubmit} className={`space-y-4 transition-opacity duration-700 ${animate ? 'opacity-100' : 'opacity-0'}`}>
        <Input name="name" placeholder="الاسم" value={form.name} onChange={handleChange} />
        <Input name="email" placeholder="البريد الإلكتروني" value={form.email} onChange={handleChange} />
        <Input name="message" placeholder="الرسالة" value={form.message} onChange={handleChange} />
        <Button type="submit">إرسال</Button>
      </form>
    </
