
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin, Shield, CreditCard, Truck, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  const policyLinks = [
    { title: "About Us", href: "/about" },
    { title: "Covid-19 Precautions", href: "/covid-precautions" },
    { title: "Our Promise", href: "/promise" },
    { title: "Terms & Conditions", href: "/terms" },
    { title: "Customs Tariffs and Fees", href: "/customs" },
    { title: "Privacy Policy", href: "/privacy" }
  ];

  const corporateLinks = [
    { title: "International Services", href: "/international" },
    { title: "Sell With Us", href: "/merchant" },
    { title: "Career Opportunities", href: "/careers" },
    { title: "Our Blog", href: "/blog" },
    { title: "Sitemap", href: "/sitemap" }
  ];

  const helpLinks = [
    { title: "How SorrshaBuy Works", href: "/how-it-works" },
    { title: "My Orders", href: "/account?tab=orders" },
    { title: "Shipping Policies", href: "/shipping" },
    { title: "Return and Cancellation Policies", href: "/shipping-return" },
    { title: "Refund and Replacement Policies", href: "/refund" },
    { title: "Our Authenticity", href: "/authenticity" },
    { title: "FAQs", href: "/faq" }
  ];

  const sellWithUsLinks = [
    { title: "General Information", href: "/merchant/info" },
    { title: "Signup", href: "/merchant/signup" },
    { title: "Merchant Dashboard", href: "/merchant" },
    { title: "Seller Support", href: "/merchant/support" }
  ];

  const paymentMethods = [
    { name: "RuPay", logo: "💳" },
    { name: "MasterCard", logo: "💳" },
    { name: "Visa", logo: "💳" },
    { name: "UPI", logo: "📱" },
    { name: "Paytm", logo: "📱" },
    { name: "Google Pay", logo: "📱" }
  ];

  return (
    <footer className="bg-background border-t border-border">
      {/* Newsletter Section */}
      <div className="bg-gradient-secondary py-12">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl lg:text-3xl font-bold text-secondary-foreground mb-4">
            Stay Updated with Our Latest Deals
          </h3>
          <p className="text-lg text-secondary-foreground/80 mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter and never miss out on exclusive offers and new product launches
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Your Email Address"
              className="flex-1 bg-white border-0 text-foreground"
            />
            <Button 
              variant="outline" 
              className="bg-white text-secondary border-white hover:bg-gray-100 font-semibold px-8"
            >
              Subscribe
            </Button>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Our Policies */}
          <div>
            <h3 className="text-lg font-semibold mb-6 flex items-center gap-2 text-foreground">
              📋 OUR POLICIES
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

          {/* Corporate */}
          <div>
            <h3 className="text-lg font-semibold mb-6 flex items-center gap-2 text-foreground">
              🏢 CORPORATE
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

          {/* Help */}
          <div>
            <h3 className="text-lg font-semibold mb-6 flex items-center gap-2 text-foreground">
              🙋 HELP
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

          {/* Sell With Us */}
          <div>
            <h3 className="text-lg font-semibold mb-6 flex items-center gap-2 text-foreground">
              🛒 SELL WITH US
            </h3>
            <ul className="space-y-3">
              {sellWithUsLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-6 flex items-center gap-2 text-foreground">
              📞 SUPPORT
            </h3>
            <div className="space-y-4">
              <div className="bg-muted/50 p-4 rounded-lg">
                <p className="text-sm font-medium text-foreground mb-2">📞 10 AM to 6 PM</p>
                <p className="text-sm text-muted-foreground mb-1">Customer Support</p>
                <p className="text-xs text-muted-foreground">
                  Get your texts/emails answered in your native language
                </p>
              </div>
              
              <div className="text-sm space-y-2">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-primary" />
                  <div>
                    <p className="font-medium text-foreground">SorrshaBuy</p>
                    <p className="text-muted-foreground text-xs">Flat No. 1, 1T-4-637/1</p>
                    <p className="text-muted-foreground text-xs">Tech Chambers, A.C Guard</p>
                    <p className="text-muted-foreground text-xs">Hyderabad, Telangana 500004</p>
                  </div>
                </div>
              </div>

              <div className="flex space-x-2">
                <Button variant="ghost" size="icon" className="hover:bg-primary/10 text-foreground">
                  <Instagram className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="hover:bg-primary/10 text-foreground">
                  <Youtube className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="hover:bg-primary/10 text-foreground">
                  <Twitter className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="hover:bg-primary/10 text-foreground">
                  <Facebook className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Separator />

      {/* Payment Methods Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-6">
          <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center justify-center gap-2">
            <Shield className="h-5 w-5" />
            Trusted Payments
          </h4>
          <div className="flex flex-wrap justify-center items-center gap-6">
            {paymentMethods.map((method, index) => (
              <div key={index} className="flex items-center gap-2 bg-card p-3 rounded-lg shadow-sm border">
                <span className="text-lg">{method.logo}</span>
                <span className="text-sm font-medium text-foreground">{method.name}</span>
              </div>
            ))}
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
          <p>© 2024 SorrshaBuy. All rights reserved.</p>
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
