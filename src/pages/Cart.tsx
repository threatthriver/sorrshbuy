import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
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
          <h1 className="text-4xl font-bold text-foreground mb-8">Shopping Cart</h1>
          
          {isLoading ? (
            <div className="text-center py-16">
              <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-primary mx-auto mb-4"></div>
              <p className="text-muted-foreground">Loading cart...</p>
            </div>
          ) : cartItems.length === 0 ? (
            <div className="text-center py-16">
              <ShoppingBag className="h-24 w-24 text-muted-foreground mx-auto mb-4" />
              <h2 className="text-2xl font-semibold text-foreground mb-2">Your cart is empty</h2>
              <p className="text-muted-foreground mb-6">Add some products to get started</p>
              <Button className="bg-primary hover:bg-primary/90" onClick={() => navigate('/shop')}>
                Continue Shopping
              </Button>
            </div>
          ) : (
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2 space-y-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="bg-card p-6 rounded-xl shadow-card">
                    <div className="flex gap-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-24 h-24 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground mb-2">
                          <Link to={`/product/${item.id}`} className="hover:text-primary transition-colors">
                            {item.name}
                          </Link>
                        </h3>
                        <p className="text-lg font-bold text-primary">${item.price.toFixed(2)}</p>
                        
                        <div className="flex items-center gap-4 mt-4">
                          {/* Quantity Controls */}
                          <div className="flex items-center gap-2">
                            <Button
                              variant="outline"
                              size="icon"
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="h-8 w-8"
                              disabled={isLoading}
                            >
                              <Minus className="h-4 w-4" />
                            </Button>
                            <Input
                              type="number"
                              value={item.quantity}
                              onChange={(e) => updateQuantity(item.id, parseInt(e.target.value) || 1)}
                              className="w-16 text-center"
                              min="1"
                              disabled={isLoading}
                            />
                            <Button
                              variant="outline"
                              size="icon"
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="h-8 w-8"
                              disabled={isLoading}
                            >
                              <Plus className="h-4 w-4" />
                            </Button>
                          </div>
                          
                          {/* Remove Button */}
                          <Button
                            variant="destructive"
                            size="icon"
                            onClick={() => removeFromCart(item.id)}
                            className="ml-auto"
                            disabled={isLoading}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                      
                      <div className="text-right">
                        <p className="text-lg font-bold text-foreground">
                          ${(item.price * item.quantity).toFixed(2)}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Order Summary */}
              <div className="lg:col-span-1">
                <div className="bg-card p-6 rounded-xl shadow-card sticky top-8">
                  <h3 className="text-xl font-semibold text-foreground mb-6">Order Summary</h3>
                  
                  <div className="flex gap-2 mb-6">
                    <Input placeholder="Promo Code" className="bg-background" />
                    <Button variant="outline">Apply</Button>
                  </div>
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span className="font-semibold">${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Shipping</span>
                      <span className="font-semibold">${shipping.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Tax</span>
                      <span className="font-semibold">${tax.toFixed(2)}</span>
                    </div>
                    <div className="border-t border-border pt-3">
                      <div className="flex justify-between">
                        <span className="text-lg font-semibold">Total</span>
                        <span className="text-lg font-bold text-primary">${total.toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                  
                  <Button
                    className="w-full bg-primary hover:bg-primary/90 mb-3 shadow-lg shadow-primary/30"
                    disabled={isLoading}
                    onClick={() => navigate('/checkout')}
                  >
                    {isLoading ? 'Processing...' : 'Proceed to Checkout'}
                  </Button>
                  
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={clearCart}
                    disabled={isLoading}
                  >
                    Clear Cart
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