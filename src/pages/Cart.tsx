import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Minus, Plus, Trash2, ShoppingBag, ArrowRight } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { Link, useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, clearCart, isLoading, error } = useCart();
  const navigate = useNavigate();

  if (error) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="text-center py-16">
          <h2 className="text-2xl font-semibold text-destructive mb-4">Error</h2>
          <p className="text-destructive/80 mb-6">{error}</p>
          <Button onClick={() => window.location.reload()}>
            Try Again
          </Button>
        </div>
      </div>
    );
  }

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = 9.99;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-4xl font-bold text-foreground">Shopping Cart</h1>
            {cartItems.length > 0 && (
              <Button variant="outline" onClick={clearCart} disabled={isLoading}>
                <Trash2 className="h-4 w-4 mr-2" />
                Clear Cart
              </Button>
            )}
          </div>
          
          {isLoading ? (
            <div className="text-center py-16">
              <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-primary mx-auto mb-4"></div>
              <p className="text-muted-foreground">Loading cart...</p>
            </div>
          ) : cartItems.length === 0 ? (
            <div className="text-center py-16 bg-card rounded-xl shadow-card">
              <ShoppingBag className="h-24 w-24 text-muted-foreground mx-auto mb-6" />
              <h2 className="text-2xl font-semibold text-foreground mb-2">Your cart is empty</h2>
              <p className="text-muted-foreground mb-8">Looks like you haven't added anything to your cart yet.</p>
              <Button size="lg" className="group" onClick={() => navigate('/shop')}>
                Continue Shopping
                <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          ) : (
            <div className="grid lg:grid-cols-[1fr_400px] gap-12 items-start">
              {/* Cart Items */}
              <div className="space-y-6">
                {cartItems.map((item) => (
                  <div key={item.id} className="bg-card p-4 rounded-xl shadow-card flex items-center gap-6">
                    <Link to={`/product/${item.id}`}>
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-28 h-28 object-cover rounded-lg hover:opacity-80 transition-opacity"
                      />
                    </Link>
                    <div className="flex-1 grid grid-cols-1 md:grid-cols-3 items-center gap-4">
                      <div>
                        <h3 className="font-semibold text-foreground">
                          <Link to={`/product/${item.id}`} className="hover:text-primary transition-colors">
                            {item.name}
                          </Link>
                        </h3>
                        <p className="text-sm text-muted-foreground">${item.price.toFixed(2)}</p>
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex items-center justify-center gap-2">
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="h-9 w-9"
                          disabled={isLoading || item.quantity <= 1}
                        >
                          <Minus className="h-4 w-4" />
                        </Button>
                        <span className="font-bold text-lg w-10 text-center">{item.quantity}</span>
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="h-9 w-9"
                          disabled={isLoading}
                        >
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>

                      <div className="text-right flex items-center justify-end gap-4">
                        <p className="text-lg font-bold text-foreground">
                          ${(item.price * item.quantity).toFixed(2)}
                        </p>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => removeFromCart(item.id)}
                          className="text-muted-foreground hover:text-destructive"
                          disabled={isLoading}
                        >
                          <Trash2 className="h-5 w-5" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Order Summary */}
              <div className="lg:col-span-1">
                <div className="bg-card p-6 rounded-xl shadow-card sticky top-24">
                  <h3 className="text-2xl font-semibold text-foreground mb-6">Order Summary</h3>
                  
                  <div className="space-y-4 text-lg">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span className="font-semibold text-foreground">${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Shipping</span>
                      <span className="font-semibold text-foreground">${shipping.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Tax (8%)</span>
                      <span className="font-semibold text-foreground">${tax.toFixed(2)}</span>
                    </div>
                    <div className="border-t-2 border-dashed border-border my-4"></div>
                    <div className="flex justify-between items-center">
                      <span className="text-xl font-bold">Total</span>
                      <span className="text-2xl font-bold text-primary">${total.toFixed(2)}</span>
                    </div>
                  </div>

                  <div className="mt-8">
                    <h4 className="font-semibold text-foreground mb-3">Promo Code</h4>
                    <div className="flex gap-2">
                      <Input placeholder="Enter code" className="bg-background" />
                      <Button variant="outline">Apply</Button>
                    </div>
                  </div>
                  
                  <Button
                    size="lg"
                    className="w-full mt-8 group"
                    disabled={isLoading}
                    onClick={() => navigate('/checkout')}
                  >
                    {isLoading ? 'Processing...' : 'Proceed to Checkout'}
                    <ArrowRight className="h-5 w-5 ml-2 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Cart;