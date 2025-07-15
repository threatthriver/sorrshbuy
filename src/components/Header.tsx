
import { ShoppingCart, User, Menu, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import CategoriesDropdown from "./CategoriesDropdown";
import SearchBar from "./SearchBar";
import MobileMenu from "./MobileMenu";

import { useWishlist } from "@/hooks/useWishlist";
import { useCart } from "@/contexts/CartContext";

const Header = () => {
  const navigate = useNavigate();
  const { wishlistCount } = useWishlist();
  const { cartItems } = useCart();

  const handleSearch = (query: string) => {
    if (query.trim()) {
      navigate(`/shop?q=${encodeURIComponent(query.trim())}`);
    }
  };

  return (
    <header className="bg-gradient-to-r from-primary to-primary/90 text-primary-foreground sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between gap-4">
          {/* Logo & Mobile Menu */}
          <div className="flex items-center gap-3">
            <div className="lg:hidden">
              <MobileMenu />
            </div>
            <Link to="/">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-white to-orange-200 bg-clip-text text-transparent hover:scale-105 transition-transform cursor-pointer">
                SorrshaBuy
              </h1>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex flex-1 items-center justify-center gap-4 xl:gap-6">
            <CategoriesDropdown />
            <Link to="/shop?category=electronics" className="text-primary-foreground hover:text-orange-200 transition-colors font-medium whitespace-nowrap hover:scale-105 transform duration-200">
              New Arrivals
            </Link>
            <Link to="/trending" className="text-primary-foreground hover:text-orange-200 transition-colors font-medium whitespace-nowrap hover:scale-105 transform duration-200">
              Trending
            </Link>
            <Link to="/shop?category=beauty" className="text-primary-foreground hover:text-orange-200 transition-colors font-medium whitespace-nowrap hover:scale-105 transform duration-200">
              Shop by Brand
            </Link>
          </nav>

          <div className="flex items-center gap-2">
            {/* Search Bar */}
            <div className="hidden md:block flex-1 max-w-xs lg:max-w-sm">
              <SearchBar onSearch={handleSearch} />
            </div>

            {/* User Actions */}
            <div className="flex items-center gap-1">
              <Link to="/wishlist">
                <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary-glow/20 relative h-9 w-9">
                  <Heart className="h-5 w-5" />
                  {wishlistCount > 0 && (
                    <span className="absolute -top-1 -right-1 bg-secondary text-secondary-foreground text-xs rounded-full h-4 w-4 flex items-center justify-center text-[10px] animate-bounce-gentle">
                      {wishlistCount}
                    </span>
                  )}
                </Button>
              </Link>
              
              <Link to="/cart">
                <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary-glow/20 relative h-9 w-9">
                  <ShoppingCart className="h-5 w-5" />
                  <span className="absolute -top-1 -right-1 bg-secondary text-secondary-foreground text-xs rounded-full h-4 w-4 flex items-center justify-center text-[10px]">
                    {cartItems.length}
                  </span>
                </Button>
              </Link>
              
              <Link to="/account">
                <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary-glow/20 h-9 w-9">
                  <User className="h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
