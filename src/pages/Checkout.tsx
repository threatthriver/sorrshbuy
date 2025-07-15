import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useCart } from "@/contexts/CartContext";
import { Lock } from 'lucide-react';

const Checkout = () => {
  const { cartItems, isLoading } = useCart();

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = cartItems.length > 0 ? 9.99 : 0;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-8 text-center">Checkout</h1>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Shipping & Payment Forms */}
            <div className="bg-card p-8 rounded-xl shadow-card">
              {/* Shipping Information */}
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-6">Shipping Information</h2>
                <div className="grid grid-cols-2 gap-4">
                  <div className="col-span-1"><Label htmlFor="firstName">First Name</Label><Input id="firstName" placeholder="John" /></div>
                  <div className="col-span-1"><Label htmlFor="lastName">Last Name</Label><Input id="lastName" placeholder="Doe" /></div>
                  <div className="col-span-2"><Label htmlFor="address">Address</Label><Input id="address" placeholder="123 Main St" /></div>
                  <div className="col-span-2"><Label htmlFor="apartment">Apartment, suite, etc. (optional)</Label><Input id="apartment" /></div>
                  <div><Label htmlFor="city">City</Label><Input id="city" placeholder="San Francisco" /></div>
                  <div><Label htmlFor="state">State</Label><Input id="state" placeholder="CA" /></div>
                  <div><Label htmlFor="zip">ZIP Code</Label><Input id="zip" placeholder="94103" /></div>
                  <div><Label htmlFor="country">Country</Label><Input id="country" placeholder="USA" /></div>
                </div>
              </section>

              {/* Payment Details */}
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-6">Payment Details</h2>
                <div className="space-y-4">
                  <div><Label htmlFor="card-number">Card Number</Label><Input id="card-number" placeholder="•••• •••• •••• 1234" /></div>
                  <div><Label htmlFor="card-name">Name on Card</Label><Input id="card-name" placeholder="John M. Doe" /></div>
                  <div className="grid grid-cols-2 gap-4">
                    <div><Label htmlFor="expiry">Expiration</Label><Input id="expiry" placeholder="MM / YY" /></div>
                    <div><Label htmlFor="cvc">CVC</Label><Input id="cvc" placeholder="123" /></div>
                  </div>
                </div>
              </section>
            </div>

            {/* Order Summary */}
            <div className="bg-card p-8 rounded-xl shadow-card self-start sticky top-8">
              <h2 className="text-2xl font-semibold text-foreground mb-6">Order Summary</h2>
              <div className="space-y-4 mb-6">
                {cartItems.map(item => (
                  <div key={item.id} className="flex justify-between items-center">
                    <div className="flex items-center gap-4">
                      <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-md" />
                      <div>
                        <p className="font-semibold line-clamp-1">{item.name}</p>
                        <p className="text-sm text-muted-foreground">Qty: {item.quantity}</p>
                      </div>
                    </div>
                    <p className="font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                ))}
              </div>

              <div className="border-t border-border pt-6 space-y-3">
                 <div className="flex justify-between text-muted-foreground">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-muted-foreground">
                    <span>Shipping</span>
                    <span>${shipping.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-muted-foreground">
                    <span>Tax</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-lg font-bold text-foreground pt-3 border-t border-border">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
              </div>

              <Button size="lg" className="w-full mt-8 bg-primary hover:bg-primary/90 shadow-lg shadow-primary/30" disabled={isLoading || cartItems.length === 0}>
                <Lock className="h-5 w-5 mr-2" />
                {isLoading ? 'Processing...' : 'Place Order'}
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Checkout;
