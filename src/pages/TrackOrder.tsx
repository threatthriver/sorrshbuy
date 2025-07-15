import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const TrackOrder: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Track Order</h1>
        <div className="max-w-md mx-auto bg-card p-8 rounded-xl shadow-card mt-8">
          <label htmlFor="orderNumber" className="block text-sm font-medium mb-2">Order Number</label>
          <input id="orderNumber" type="text" placeholder="Enter your order number" className="w-full mb-4 px-4 py-2 rounded-md border border-border focus:ring-2 focus:ring-primary" />
          <button className="w-full bg-primary text-primary-foreground font-semibold py-2 rounded-md hover:bg-primary/90 transition">Track Order</button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TrackOrder;
