import React from 'react';
import Badge from '../ui/Badge';

function SpecialOffers() {
  return (
    <section className="p-8 bg-white">
      <h2 className="text-2xl font-semibold mb-4">عروض خاصة</h2>
      <div className="grid grid-cols-3 gap-4">
        <div className="border p-4 rounded">
          <h3>هاتف ذكي</h3>
          <Badge text="خصم 20%" />
          <p>اغتنم الفرصة قبل نفاد الكمية.</p>
        </div>
        <div className="border p-4 rounded">
          <h3>سماعات</h3>
          <Badge text="خصم 15%" />
          <p>استمتع بصوت رائع مع الخصم المحدود.</p>
        </div>
        <div className="border p-4 rounded">
          <h3>كمبيوتر محمول</h3>
          <Badge text="خصم 10%" />
          <p>أفضل العروض للأجهزة الحديثة.</p>
        </div>
      </div>
    </section>
  );
}

export default SpecialOffers;
