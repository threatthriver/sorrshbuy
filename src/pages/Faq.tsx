import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Faq: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Frequently Asked Questions</h1>
        <div className="max-w-2xl mx-auto space-y-6 mt-8">
          <div className="bg-card p-6 rounded-xl shadow-card">
            <h2 className="text-lg font-semibold mb-2">How do I track my order?</h2>
            <p className="text-muted-foreground">You can track your order status in your account dashboard or by using the Track Order page with your order number.</p>
          </div>
          <div className="bg-card p-6 rounded-xl shadow-card">
            <h2 className="text-lg font-semibold mb-2">What payment methods are accepted?</h2>
            <p className="text-muted-foreground">We accept all major credit cards, debit cards, and secure online payment options.</p>
          </div>
          <div className="bg-card p-6 rounded-xl shadow-card">
            <h2 className="text-lg font-semibold mb-2">How do I return a product?</h2>
            <p className="text-muted-foreground">Visit our Returns & Refunds page for step-by-step instructions on how to return or exchange your purchase.</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Faq;
