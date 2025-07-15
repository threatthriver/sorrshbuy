import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Careers: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Careers</h1>
        <div className="max-w-2xl mx-auto bg-card p-8 rounded-xl shadow-card mt-8 text-center">
          <h2 className="text-xl font-semibold mb-2">Join Our Team</h2>
          <p className="text-muted-foreground mb-4">We're always looking for passionate, talented people to join SorrshaBuy. We offer a dynamic, inclusive workplace and opportunities for growth.</p>
          <p className="text-muted-foreground">No openings at the moment. Please check back soon!</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Careers;
