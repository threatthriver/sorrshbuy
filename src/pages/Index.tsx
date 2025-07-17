
import Header from "@/components/Header";
import HeroCarousel from "@/components/HeroCarousel";
import CategorySection from "@/components/CategorySection";
import ProductGrid from "@/components/ProductGrid";
import FeatureAnnouncement from "@/components/FeatureAnnouncement";
import FlashSale from "@/components/FlashSale";
import AISupport from "@/components/AISupport";
import Footer from "@/components/Footer";
import { Truck, Lock, Undo2 } from "lucide-react";

import AnimatedSection from '@/components/AnimatedSection';

const Index = () => {

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-[65px]">
        <AnimatedSection>
          <HeroCarousel />
        </AnimatedSection>
        <AnimatedSection>
          <CategorySection />
        </AnimatedSection>
        <AnimatedSection>
          <ProductGrid />
        </AnimatedSection>
        <AnimatedSection>
          <FlashSale />
        </AnimatedSection>
        <AnimatedSection>
          <FeatureAnnouncement />
        </AnimatedSection>
        <AnimatedSection>
          <section className="py-16 bg-muted/40">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl lg:text-4xl font-bold text-center text-foreground mb-12">
                Why Choose SorrshaBuy?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-card p-8 rounded-xl shadow-sm text-center transition-transform hover:-translate-y-2">
                  <div className="bg-primary/10 text-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Truck className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Fast Shipping</h3>
                  <p className="text-muted-foreground">Get your orders delivered in record time</p>
                </div>
                <div className="bg-card p-8 rounded-xl shadow-sm text-center transition-transform hover:-translate-y-2">
                  <div className="bg-primary/10 text-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Lock className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Secure Payment</h3>
                  <p className="text-muted-foreground">100% secure payment processing</p>
                </div>
                <div className="bg-card p-8 rounded-xl shadow-sm text-center transition-transform hover:-translate-y-2">
                  <div className="bg-primary/10 text-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Undo2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Easy Returns</h3>
                  <p className="text-muted-foreground">30-day hassle-free returns</p>
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>
        <AnimatedSection>
          <AISupport />
        </AnimatedSection>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
