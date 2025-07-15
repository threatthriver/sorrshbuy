import { Search, ShoppingCart, User, Menu, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import CategoriesDropdown from "./CategoriesDropdown";

const Header = () => {
  return (
    <header className="bg-gradient-primary text-primary-foreground sticky top-0 z-50 shadow-glow">
      {/* Top banner */}
      <div className="bg-primary-glow text-center py-2 text-sm">
        <p>Free shipping on orders over $99! Limited time offer.</p>
      </div>
      
      {/* Main header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" className="lg:hidden text-primary-foreground hover:bg-primary-glow/20">
              <Menu className="h-6 w-6" />
            </Button>
            <h1 className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-white to-orange-200 bg-clip-text text-transparent">
              SorrshaBuy
            </h1>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-2xl mx-4">
            <div className="relative">
              <Input
                type="search"
                placeholder="Search for products, brands and more..."
                className="w-full pl-4 pr-12 py-3 rounded-full border-0 shadow-card text-foreground bg-white"
              />
              <Button 
                size="icon" 
                className="absolute right-1 top-1 h-9 w-9 rounded-full bg-secondary hover:bg-secondary/90"
              >
                <Search className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* User Actions */}
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary-glow/20 relative">
              <Heart className="h-6 w-6" />
              <span className="absolute -top-1 -right-1 bg-secondary text-secondary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                2
              </span>
            </Button>
            
            <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary-glow/20 relative">
              <ShoppingCart className="h-6 w-6" />
              <span className="absolute -top-1 -right-1 bg-secondary text-secondary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                5
              </span>
            </Button>
            
            <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary-glow/20">
              <User className="h-6 w-6" />
            </Button>
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden lg:flex items-center gap-8 mt-4 pt-4 border-t border-primary-glow/30">
          <a href="#" className="text-primary-foreground hover:text-orange-200 transition-colors font-medium">
            Electronics
          </a>
          <a href="#" className="text-primary-foreground hover:text-orange-200 transition-colors font-medium">
            Fashion
          </a>
          <a href="#" className="text-primary-foreground hover:text-orange-200 transition-colors font-medium">
            Home & Kitchen
          </a>
          <a href="#" className="text-primary-foreground hover:text-orange-200 transition-colors font-medium">
            Sports
          </a>
          <a href="#" className="text-primary-foreground hover:text-orange-200 transition-colors font-medium">
            Books
          </a>
          <a href="#" className="text-primary-foreground hover:text-orange-200 transition-colors font-medium">
            Beauty
          </a>
          <a href="#" className="text-primary-foreground hover:text-orange-200 transition-colors font-medium">
            Deals
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;