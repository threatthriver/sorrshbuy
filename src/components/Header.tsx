
import { ShoppingCart, User, Menu, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState } from "react";
import CategoriesDropdown from "./CategoriesDropdown";
import SearchBar from "./SearchBar";
import ThemeToggle from "./ThemeToggle";
import { useWishlist } from "@/hooks/useWishlist";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { wishlistCount } = useWishlist();

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    console.log("Searching for:", query);
    // Implement search functionality here
  };

  return (
    <header className="bg-gradient-primary text-primary-foreground sticky top-0 z-50 shadow-glow">
      {/* Top banner */}
      <div className="bg-primary-glow text-center py-2 text-sm">
        <p>Up to Rs.500 Off on Prepaid Purchases - Use Coupon "PREPAID"</p>
      </div>
      
      {/* Main header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" className="lg:hidden text-primary-foreground hover:bg-primary-glow/20">
              <Menu className="h-6 w-6" />
            </Button>
            <Link to="/">
              <h1 className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-white to-orange-200 bg-clip-text text-transparent hover:scale-105 transition-transform cursor-pointer">
                SorrshaBuy
              </h1>
            </Link>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-2xl mx-2 lg:mx-4">
            <SearchBar onSearch={handleSearch} />
          </div>

          {/* User Actions */}
          <div className="flex items-center gap-1 lg:gap-2">
            <ThemeToggle />
            
            <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary-glow/20 relative h-8 w-8 lg:h-10 lg:w-10">
              <Heart className="h-4 w-4 lg:h-6 lg:w-6" />
              {wishlistCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-secondary text-secondary-foreground text-xs rounded-full h-4 w-4 lg:h-5 lg:w-5 flex items-center justify-center text-[10px] lg:text-xs animate-bounce-gentle">
                  {wishlistCount}
                </span>
              )}
            </Button>
            
            <Link to="/cart">
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary-glow/20 relative h-8 w-8 lg:h-10 lg:w-10">
                <ShoppingCart className="h-4 w-4 lg:h-6 lg:w-6" />
                <span className="absolute -top-1 -right-1 bg-secondary text-secondary-foreground text-xs rounded-full h-4 w-4 lg:h-5 lg:w-5 flex items-center justify-center text-[10px] lg:text-xs">
                  5
                </span>
              </Button>
            </Link>
            
            <Link to="/account">
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary-glow/20 h-8 w-8 lg:h-10 lg:w-10">
                <User className="h-4 w-4 lg:h-6 lg:w-6" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden lg:flex items-center gap-4 xl:gap-8 mt-4 pt-4 border-t border-primary-glow/30 overflow-x-auto">
          <CategoriesDropdown />
          <Link to="/shop?category=electronics" className="text-primary-foreground hover:text-orange-200 transition-colors font-medium whitespace-nowrap hover:scale-105 transform duration-200">
            Electronics
          </Link>
          <Link to="/shop?category=fashion" className="text-primary-foreground hover:text-orange-200 transition-colors font-medium whitespace-nowrap hover:scale-105 transform duration-200">
            Fashion
          </Link>
          <Link to="/shop?category=home" className="text-primary-foreground hover:text-orange-200 transition-colors font-medium whitespace-nowrap hover:scale-105 transform duration-200">
            Home & Kitchen
          </Link>
          <Link to="/shop?category=sports" className="text-primary-foreground hover:text-orange-200 transition-colors font-medium whitespace-nowrap hover:scale-105 transform duration-200">
            Sports
          </Link>
          <Link to="/trending" className="text-primary-foreground hover:text-orange-200 transition-colors font-medium whitespace-nowrap hover:scale-105 transform duration-200">
            Trending
          </Link>
          <Link to="/shop?category=beauty" className="text-primary-foreground hover:text-orange-200 transition-colors font-medium whitespace-nowrap hover:scale-105 transform duration-200">
            Beauty
          </Link>
          <Link to="/shop" className="text-primary-foreground hover:text-orange-200 transition-colors font-medium whitespace-nowrap hover:scale-105 transform duration-200">
            All Products
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
