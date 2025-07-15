import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const HowToOrder: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">How To Order</h1>
        <div className="grid md:grid-cols-3 gap-8 mt-8">
          <div className="bg-card p-6 rounded-xl shadow-card text-center">
            <span className="inline-block bg-primary/10 rounded-full p-4 mb-4"><span role="img" aria-label="Browse">🛒</span></span>
            <h2 className="text-xl font-semibold mb-2">1. Browse Products</h2>
            <p className="text-muted-foreground">Explore our wide range of products and find your favorites.</p>
          </div>
          <div className="bg-card p-6 rounded-xl shadow-card text-center">
            <span className="inline-block bg-primary/10 rounded-full p-4 mb-4"><span role="img" aria-label="Cart">🛍️</span></span>
            <h2 className="text-xl font-semibold mb-2">2. Add to Cart</h2>
            <p className="text-muted-foreground">Add items to your cart and review your selection before checkout.</p>
          </div>
          <div className="bg-card p-6 rounded-xl shadow-card text-center">
            <span className="inline-block bg-primary/10 rounded-full p-4 mb-4"><span role="img" aria-label="Checkout">💳</span></span>
            <h2 className="text-xl font-semibold mb-2">3. Secure Checkout</h2>
            <p className="text-muted-foreground">Complete your purchase with our secure and easy checkout process.</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HowToOrder;
