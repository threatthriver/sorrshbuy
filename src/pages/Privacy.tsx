import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Privacy: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
        <p>This is the Privacy Policy page. Content to be added here.</p>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;
