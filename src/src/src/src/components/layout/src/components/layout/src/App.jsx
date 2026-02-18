import React from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

function App() {
  return (
    <div>
      <Header />
      <main className="p-4">
        <h2 className="text-xl font-semibold">مرحباً بك في متجر الإلكترونيات</h2>
        <p>هنا ستجد أفضل المنتجات الإلكترونية.</p>
      </main>
      <Footer />
    </div>
  );
}

export default App;
