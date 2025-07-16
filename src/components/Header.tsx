
import { ShoppingCart, User, Menu, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import CategoriesDropdown from "./CategoriesDropdown";
import SearchBar from "./SearchBar";
import MobileMenu from "./MobileMenu";

import { useWishlist } from "@/hooks/useWishlist";
import { useCart } from "@/contexts/CartContext";

const Header = () => {
  const navigate = useNavigate();
  const { wishlistCount } = useWishlist();
  const { cartItems } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let isMounted = true;
    const handleScroll = () => {
      if (isMounted) {
        setIsScrolled(window.scrollY > 10);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      isMounted = false;
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleSearch = (query: string) => {
    if (query.trim()) {
      navigate(`/shop?q=${encodeURIComponent(query.trim())}`);
    }
  };

  const headerClasses = `sticky top-0 z-50 transition-all duration-300 bg-background/95 backdrop-blur-sm shadow-md border-b border-border/20`;

  const navLinkClasses = `transition-colors font-medium whitespace-nowrap hover:scale-105 transform duration-200 text-foreground hover:text-primary`;

  const logoClasses = `text-2xl font-bold bg-clip-text text-transparent hover:scale-105 transition-transform cursor-pointer bg-gradient-to-r from-primary to-orange-500`;

  const iconButtonClasses = `relative h-9 w-9 transition-colors text-foreground hover:bg-muted`;

  return (
    <header className={headerClasses}>
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between gap-4">
          {/* Logo & Mobile Menu */}
          <div className="flex items-center gap-3">
            <div className="lg:hidden">
              <MobileMenu />
            </div>
            <Link to="/">
              <h1 className={logoClasses}>
                SorrshaBuy
              </h1>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex flex-1 items-center justify-center gap-4 xl:gap-6">
            <CategoriesDropdown isScrolled={isScrolled} />
            <Link to="/shop?category=electronics" className={navLinkClasses}>
              New Arrivals
            </Link>
            <Link to="/trending" className={navLinkClasses}>
              Trending
            </Link>
            <Link to="/shop?category=beauty" className={navLinkClasses}>
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
                <Button variant="ghost" size="icon" className={iconButtonClasses}>
                  <Heart className="h-5 w-5" />
                  {wishlistCount > 0 && (
                    <span className="absolute -top-1 -right-1 bg-secondary text-secondary-foreground text-xs rounded-full h-4 w-4 flex items-center justify-center text-[10px] animate-bounce-gentle">
                      {wishlistCount}
                    </span>
                  )}
                </Button>
              </Link>
              
              <Link to="/cart">
                <Button variant="ghost" size="icon" className={iconButtonClasses}>
                  <ShoppingCart className="h-5 w-5" />
                  <span className="absolute -top-1 -right-1 bg-secondary text-secondary-foreground text-xs rounded-full h-4 w-4 flex items-center justify-center text-[10px]">
                    {cartItems.length}
                  </span>
                </Button>
              </Link>
              
              <Link to="/account">
                <Button variant="ghost" size="icon" className={iconButtonClasses}>
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
