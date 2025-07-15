import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const CookiePolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Cookie Policy</h1>
        <p>This is the Cookie Policy page. Content to be added here.</p>
      </main>
      <Footer />
    </div>
  );
};

export default CookiePolicy;
