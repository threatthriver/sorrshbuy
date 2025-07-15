import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { RotateCcw, Package, CheckCircle, XCircle, AlertCircle, Calendar } from "lucide-react";

const ShippingReturn = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">Returns & Exchanges</h1>
            <p className="text-lg text-muted-foreground">
              Easy returns and exchanges with our 30-day hassle-free policy
            </p>
          </div>
          
          {/* Return Policy Overview */}
          <section className="mb-16">
            <div className="bg-gradient-primary text-primary-foreground p-8 rounded-xl mb-8">
              <div className="text-center">
                <RotateCcw className="h-16 w-16 mx-auto mb-4 text-white" />
                <h2 className="text-2xl font-bold mb-4">30-Day Return Policy</h2>
                <p className="text-lg text-white/90">
                  Not satisfied with your purchase? Return it within 30 days for a full refund or exchange.
                </p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-card p-6 rounded-xl shadow-card text-center">
                <CheckCircle className="h-12 w-12 text-success mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">Easy Process</h3>
                <p className="text-muted-foreground">Simple online return request with prepaid shipping labels</p>
              </div>
              
              <div className="bg-card p-6 rounded-xl shadow-card text-center">
                <Package className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">Original Packaging</h3>
                <p className="text-muted-foreground">Items must be in original condition with all packaging</p>
              </div>
              
              <div className="bg-card p-6 rounded-xl shadow-card text-center">
                <Calendar className="h-12 w-12 text-secondary mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">Fast Refunds</h3>
                <p className="text-muted-foreground">Refunds processed within 3-5 business days of receipt</p>
              </div>
            </div>
          </section>
          
          {/* Return Process */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold text-foreground mb-8">How to Return an Item</h2>
            
            <div className="space-y-6">
              <div className="flex gap-4 p-6 bg-card rounded-xl shadow-card">
                <div className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Start Your Return</h3>
                  <p className="text-muted-foreground">Log into your account and go to "My Orders" to initiate a return request.</p>
                </div>
              </div>
              
              <div className="flex gap-4 p-6 bg-card rounded-xl shadow-card">
                <div className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Print Return Label</h3>
                  <p className="text-muted-foreground">Download and print the prepaid return shipping label we provide.</p>
                </div>
              </div>
              
              <div className="flex gap-4 p-6 bg-card rounded-xl shadow-card">
                <div className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Package & Ship</h3>
                  <p className="text-muted-foreground">Pack the item securely in its original packaging and attach the return label.</p>
                </div>
              </div>
              
              <div className="flex gap-4 p-6 bg-card rounded-xl shadow-card">
                <div className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                  4
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Get Your Refund</h3>
                  <p className="text-muted-foreground">Receive your refund within 3-5 business days after we receive your return.</p>
                </div>
              </div>
            </div>
          </section>
          
          {/* Return Conditions */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold text-foreground mb-8">Return Conditions</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-card p-6 rounded-xl shadow-card">
                <h3 className="text-xl font-semibold text-success mb-4 flex items-center gap-2">
                  <CheckCircle className="h-5 w-5" />
                  Returnable Items
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Items in original condition</li>
                  <li>• Unused and unworn products</li>
                  <li>• Items with original packaging</li>
                  <li>• Products with all accessories</li>
                  <li>• Items returned within 30 days</li>
                </ul>
              </div>
              
              <div className="bg-card p-6 rounded-xl shadow-card">
                <h3 className="text-xl font-semibold text-destructive mb-4 flex items-center gap-2">
                  <XCircle className="h-5 w-5" />
                  Non-Returnable Items
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Personalized or custom items</li>
                  <li>• Perishable goods</li>
                  <li>• Underwear and intimate apparel</li>
                  <li>• Digital downloads</li>
                  <li>• Gift cards</li>
                </ul>
              </div>
            </div>
          </section>
          
          {/* Exchanges */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold text-foreground mb-8">Exchanges</h2>
            
            <div className="bg-card p-8 rounded-xl shadow-card">
              <div className="text-center mb-6">
                <RotateCcw className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">Need a Different Size or Color?</h3>
                <p className="text-muted-foreground">
                  We offer free exchanges for size and color changes on most items.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Exchange Process</h4>
                  <ul className="space-y-1 text-muted-foreground text-sm">
                    <li>• Select "Exchange" when initiating your return</li>
                    <li>• Choose your preferred size/color</li>
                    <li>• We'll ship the new item once we receive your return</li>
                    <li>• No additional shipping charges for exchanges</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Exchange Timeline</h4>
                  <ul className="space-y-1 text-muted-foreground text-sm">
                    <li>• Return processing: 1-2 business days</li>
                    <li>• New item ships within 24 hours</li>
                    <li>• Standard shipping applies to exchanged items</li>
                    <li>• Total exchange time: 5-10 business days</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          
          {/* Contact for Help */}
          <section className="bg-muted/30 p-8 rounded-xl text-center">
            <AlertCircle className="h-12 w-12 text-primary mx-auto mb-4" />
            <h2 className="text-2xl font-semibold text-foreground mb-4">Need Help with Your Return?</h2>
            <p className="text-muted-foreground mb-6">
              Our customer service team is here to help with any questions about returns or exchanges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-primary hover:bg-primary/90">
                Contact Support
              </Button>
              <Button variant="outline">
                Live Chat
              </Button>
            </div>
          </section>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ShippingReturn;