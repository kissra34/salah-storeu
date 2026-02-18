import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import About from './pages/About';
import Contact from './pages/Contact';
import Checkout from './pages/Checkout';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';

function Layout() {
  return (
    <Router>
      <Header />
      <nav className="bg-gray-200 p-2 flex gap-4">
        <Link to="/">الرئيسية</Link>
        <Link to="/products">المنتجات</Link>
        <Link to="/about">من نحن</Link>
        <Link to="/contact">اتصل بنا</Link>
        <Link to="/checkout">الدفع</Link>
        <Link to="/privacy">الخصوصية</Link>
        <Link to="/terms">الشروط</Link>
      </nav>
      <main className="p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default Layout;
