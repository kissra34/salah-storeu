import React from 'react';

function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/0123456789"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600"
    >
      تواصل عبر واتساب
    </a>
  );
}

export default WhatsAppButton;
