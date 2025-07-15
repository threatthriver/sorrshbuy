import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Truck, Clock, MapPin, Package, Shield, DollarSign } from "lucide-react";

const Shipping = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">Shipping Information</h1>
            <p className="text-lg text-muted-foreground">
              Fast, reliable, and secure delivery options for all your orders
            </p>
          </div>
          
          {/* Shipping Options */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold text-foreground mb-8">Shipping Options</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-card p-6 rounded-xl shadow-card">
                <div className="flex items-center gap-3 mb-4">
                  <Truck className="h-6 w-6 text-primary" />
                  <h3 className="text-xl font-semibold">Standard Shipping</h3>
                </div>
                <div className="space-y-2">
                  <p className="text-muted-foreground">5-7 business days</p>
                  <p className="text-lg font-semibold text-primary">$4.99</p>
                  <p className="text-sm text-muted-foreground">Free on orders over $99</p>
                </div>
              </div>
              
              <div className="bg-card p-6 rounded-xl shadow-card">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="h-6 w-6 text-secondary" />
                  <h3 className="text-xl font-semibold">Express Shipping</h3>
                </div>
                <div className="space-y-2">
                  <p className="text-muted-foreground">2-3 business days</p>
                  <p className="text-lg font-semibold text-secondary">$9.99</p>
                  <p className="text-sm text-muted-foreground">Available nationwide</p>
                </div>
              </div>
              
              <div className="bg-card p-6 rounded-xl shadow-card">
                <div className="flex items-center gap-3 mb-4">
                  <Package className="h-6 w-6 text-success" />
                  <h3 className="text-xl font-semibold">Next Day Delivery</h3>
                </div>
                <div className="space-y-2">
                  <p className="text-muted-foreground">1 business day</p>
                  <p className="text-lg font-semibold text-success">$19.99</p>
                  <p className="text-sm text-muted-foreground">Order by 2 PM</p>
                </div>
              </div>
            </div>
          </section>
          
          {/* Shipping Zones */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold text-foreground mb-8">Shipping Zones</h2>
            
            <div className="bg-card p-8 rounded-xl shadow-card">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    Domestic Shipping
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• All 50 US states</li>
                    <li>• Washington D.C.</li>
                    <li>• Puerto Rico</li>
                    <li>• US Virgin Islands</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    International Shipping
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Canada: 7-14 business days</li>
                    <li>• Europe: 10-21 business days</li>
                    <li>• Asia Pacific: 12-25 business days</li>
                    <li>• Other regions: 15-30 business days</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          
          {/* Features */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold text-foreground mb-8">Why Choose Our Shipping?</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Secure Packaging</h3>
                <p className="text-muted-foreground">All items are carefully packaged to ensure safe delivery</p>
              </div>
              
              <div className="text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Truck className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Real-time Tracking</h3>
                <p className="text-muted-foreground">Track your order every step of the way with detailed updates</p>
              </div>
              
              <div className="text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Competitive Rates</h3>
                <p className="text-muted-foreground">Best shipping rates with free shipping on qualifying orders</p>
              </div>
            </div>
          </section>
          
          {/* Policies */}
          <section className="bg-muted/30 p-8 rounded-xl">
            <h2 className="text-2xl font-semibold text-foreground mb-6">Shipping Policies</h2>
            
            <div className="space-y-4 text-muted-foreground">
              <div>
                <h4 className="font-semibold text-foreground mb-2">Processing Time</h4>
                <p>Orders are typically processed within 1-2 business days. Custom or personalized items may require additional processing time.</p>
              </div>
              
              <div>
                <h4 className="font-semibold text-foreground mb-2">Delivery Confirmation</h4>
                <p>All shipments include delivery confirmation. Signature confirmation is available for high-value items.</p>
              </div>
              
              <div>
                <h4 className="font-semibold text-foreground mb-2">Address Accuracy</h4>
                <p>Please ensure your shipping address is correct. We are not responsible for packages shipped to incorrect addresses provided by the customer.</p>
              </div>
              
              <div>
                <h4 className="font-semibold text-foreground mb-2">Weather Delays</h4>
                <p>Delivery times may be affected by weather conditions or other circumstances beyond our control.</p>
              </div>
            </div>
          </section>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Shipping;