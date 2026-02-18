import React from 'react';
import Badge from '../ui/Badge';

function FeaturedProducts() {
  return (
    <section className="p-8">
      <h2 className="text-2xl font-semibold mb-4">المنتجات المميزة</h2>
      <div className="grid grid-cols-3 gap-4">
        <div className="border p-4 rounded">
          <h3>هاتف ذكي</h3>
          <Badge text="جديد" />
          <p>أفضل الهواتف الحديثة مع ميزات متقدمة.</p>
        </div>
        <div className="border p-4 rounded">
          <h3>سماعات</h3>
          <Badge text="خصم" />
          <p>استمتع بصوت واضح ونقي مع هذه السماعات.</p>
        </div>
        <div className="border p-4 rounded">
          <h3>كمبيوتر محمول</h3>
          <Badge text="مميز" />
          <p>أداء ممتاز للألعاب والعمل.</p>
        </div>
      </div>
    </section>
  );
}

export default FeaturedProducts;
