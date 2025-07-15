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
    { name: "Electronics", path: "/shop?category=electronics", icon: "📱" },
    { name: "Fashion & Clothing", path: "/shop?category=fashion", icon: "👕" },
    { name: "Home & Kitchen", path: "/shop?category=home", icon: "🏠" },
    { name: "Sports & Outdoors", path: "/shop?category=sports", icon: "⚽" },
    { name: "Books & Media", path: "/shop?category=books", icon: "📚" },
    { name: "Beauty & Personal Care", path: "/shop?category=beauty", icon: "💄" },
    { name: "Toys & Games", path: "/shop?category=toys", icon: "🎮" },
    { name: "Automotive", path: "/shop?category=automotive", icon: "🚗" },
    { name: "Health & Wellness", path: "/shop?category=health", icon: "💊" },
    { name: "Garden & Outdoor", path: "/shop?category=garden", icon: "🌱" },
    { name: "Pet Supplies", path: "/shop?category=pets", icon: "🐕" },
    { name: "Office Supplies", path: "/shop?category=office", icon: "📝" },
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