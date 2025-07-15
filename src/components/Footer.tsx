import { Facebook, Twitter, Instagram, Youtube, Phone, Shield, Truck, RotateCcw } from "lucide-react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { useNewsletter } from "@/hooks/useNewsletter";

const Footer = () => {
  const { status, error, subscribe } = useNewsletter();
  const [inputEmail, setInputEmail] = useState("");
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const policyLinks = [
    { title: "About Us", href: "/about" },
    { title: "Terms & Conditions", href: "/terms" },
    { title: "Privacy Policy", href: "/privacy" },
    { title: "Shipping Policy", href: "/shipping" },
    { title: "Return Policy", href: "/returns" }
  ];

  const corporateLinks = [
    { title: "Sell With Us", href: "/merchant" },
    { title: "Careers", href: "/careers" },
    { title: "Blog", href: "/blog" },
    { title: "Contact Us", href: "/contact" }
  ];

  const helpLinks = [
    { title: "How to Order", href: "/help/order" },
    { title: "Track Order", href: "/track-order" },
    { title: "Shipping Info", href: "/shipping" },
    { title: "Returns & Refunds", href: "/returns" },
    { title: "FAQs", href: "/faq" }
  ];

  const handleSubscribe = () => {
    if (inputEmail) {
      subscribe(inputEmail);
    }
  };

  return (
    <footer className="bg-background border-t border-border">
      {/* Newsletter Section */}
      {isHomePage && (
        <div className="bg-gradient-to-r from-primary/10 to-primary/5 py-12">
          <div className="container mx-auto px-4 text-center">
            <h3 className="text-2xl lg:text-3xl font-bold text-primary mb-4">
              Stay Updated with Our Latest Deals
            </h3>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              Subscribe to our newsletter and never miss out on exclusive offers and new product launches
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 bg-background/50 border-border focus-visible:ring-primary"
                onChange={(e) => setInputEmail(e.target.value)}
                value={inputEmail}
              />
              <Button 
                variant="outline" 
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-8"
                onClick={handleSubscribe}
                disabled={status === 'loading'}
              >
                {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
              </Button>
            </div>
            {status === 'success' && (
              <p className="mt-2 text-sm text-green-600">Thank you for subscribing!</p>
            )}
            {error && (
              <p className="mt-2 text-sm text-destructive">{error}</p>
            )}
          </div>
        </div>
      )}

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold mb-6 text-foreground">
              SorrshaBuy
            </h3>
            <p className="text-muted-foreground mb-4 text-sm">
              Your trusted destination for authentic products at great prices.
            </p>
            <div className="flex gap-4 mt-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-foreground">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {policyLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-foreground">
              Help
            </h3>
            <ul className="space-y-3">
              {helpLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Corporate */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-foreground">
              Corporate
            </h3>
            <ul className="space-y-3">
              {corporateLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <Separator />

      {/* Trust Features */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
          <div className="flex flex-col items-center">
            <Shield className="h-8 w-8 text-primary mb-2" />
            <h5 className="font-semibold text-foreground">Secure Payments</h5>
            <p className="text-sm text-muted-foreground">100% secure transactions</p>
          </div>
          <div className="flex flex-col items-center">
            <Truck className="h-8 w-8 text-primary mb-2" />
            <h5 className="font-semibold text-foreground">Free Shipping</h5>
            <p className="text-sm text-muted-foreground">On orders above ₹999</p>
          </div>
          <div className="flex flex-col items-center">
            <RotateCcw className="h-8 w-8 text-primary mb-2" />
            <h5 className="font-semibold text-foreground">Easy Returns</h5>
            <p className="text-sm text-muted-foreground">30-day return policy</p>
          </div>
          <div className="flex flex-col items-center">
            <Phone className="h-8 w-8 text-primary mb-2" />
            <h5 className="font-semibold text-foreground">24/7 Support</h5>
            <p className="text-sm text-muted-foreground">Round the clock assistance</p>
          </div>
        </div>
      </div>

      <Separator />

      {/* Bottom Copyright */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} SorrshaBuy. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="/terms" className="hover:text-primary transition-colors">Terms of Service</a>
            <a href="/cookies" className="hover:text-primary transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
