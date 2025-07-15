import { ChevronDown, Folder } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link } from "react-router-dom";

const CategoriesDropdown = () => {
  const categories = [
    { name: "About", path: "/about", icon: "📋" },
    { name: "Account", path: "/account", icon: "👤" },
    { name: "Authentication", path: "/authentication", icon: "🔐" },
    { name: "Blog", path: "/blog", icon: "📝" },
    { name: "Cart", path: "/cart", icon: "🛒" },
    { name: "Contact", path: "/contact", icon: "📞" },
    { name: "Merchant", path: "/merchant", icon: "🏪" },
    { name: "Shipping", path: "/shipping", icon: "📦" },
    { name: "Shipping Return", path: "/shipping-return", icon: "↩️" },
    { name: "Shop", path: "/shop", icon: "🛍️" },
    { name: "Terms", path: "/terms", icon: "📄" },
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="ghost" 
          className="text-primary-foreground hover:bg-primary-glow/20 font-medium flex items-center gap-2"
        >
          <Folder className="h-4 w-4" />
          Categories
          <ChevronDown className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        className="w-56 bg-white border border-border shadow-product"
        align="start"
      >
        {categories.map((category, index) => (
          <div key={category.path}>
            <DropdownMenuItem asChild>
              <Link 
                to={category.path}
                className="flex items-center gap-3 px-3 py-2 text-foreground hover:bg-muted transition-colors cursor-pointer"
              >
                <span className="text-sm">{category.icon}</span>
                <span className="font-medium">{category.name}</span>
              </Link>
            </DropdownMenuItem>
            {index < categories.length - 1 && <DropdownMenuSeparator />}
          </div>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default CategoriesDropdown;