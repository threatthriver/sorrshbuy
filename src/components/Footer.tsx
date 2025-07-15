import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
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
              placeholder="Enter your email address"
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

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-white to-orange-200 bg-clip-text text-transparent">
              SorrshaBuy
            </h2>
            <p className="text-primary-foreground/80 mb-6 leading-relaxed">
              Your trusted online marketplace for quality products at unbeatable prices. 
              Shop with confidence and enjoy fast, reliable delivery.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="hover:bg-primary-glow/20 text-primary-foreground">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-primary-glow/20 text-primary-foreground">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-primary-glow/20 text-primary-foreground">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-primary-glow/20 text-primary-foreground">
                <Youtube className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-primary-foreground/80 hover:text-orange-200 transition-colors">About Us</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-orange-200 transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-orange-200 transition-colors">FAQ</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-orange-200 transition-colors">Shipping Info</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-orange-200 transition-colors">Returns</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-orange-200 transition-colors">Size Guide</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Categories</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-primary-foreground/80 hover:text-orange-200 transition-colors">Electronics</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-orange-200 transition-colors">Fashion</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-orange-200 transition-colors">Home & Kitchen</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-orange-200 transition-colors">Sports</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-orange-200 transition-colors">Books</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-orange-200 transition-colors">Beauty</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-secondary" />
                <span className="text-primary-foreground/80">
                  123 Commerce Street<br />
                  New York, NY 10001
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-secondary" />
                <span className="text-primary-foreground/80">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-secondary" />
                <span className="text-primary-foreground/80">support@sorrshbuy.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-glow/30 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/60 text-sm">
              © 2024 SorrshaBuy. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-primary-foreground/60 hover:text-orange-200 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-orange-200 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-orange-200 transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;