import React, { useState } from 'react';
import Button from '../ui/Button';

function CartDrawer() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => setIsOpen(!isOpen);

  return (
    <>
      <Button onClick={toggleDrawer}>سلة التسوق</Button>
      {isOpen && (
        <div className="fixed top-0 right-0 w-80 h-full bg-white shadow-lg p-4">
          <h2 className="text-xl font-semibold mb-4">سلة التسوق</h2>
          <p>هنا سيتم عرض المنتجات المضافة.</p>
          <Button onClick={toggleDrawer}>إغلاق</Button>
        </div>
      )}
    </>
  );
}

export default CartDrawer;
