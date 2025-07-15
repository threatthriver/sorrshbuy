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
    { name: "Men's Accessories", path: "/shop?category=electronics"},
    { name: "Women's Accessories", path: "/shop?category=fashion"},
    { name: "Automotive", path: "/shop?category=home"},
    { name: "Baby & Toddler", path: "/shop?category=sports"},
    { name: "Beauty & Health", path: "/shop?category=books"},
    { name: "Camera Equipment", path: "/shop?category=beauty"},
    { name: "Computer Peripherals", path: "/shop?category=toys"},
    { name: "Electronics", path: "/shop?category=automotive"},
    { name: "Essentials", path: "/shop?category=health"},
    { name: "Home & Kitchen", path: "/shop?category=garden"},
    { name: "Instagram Spotlight", path: "/shop?category=pets"},
    { name: "Luggage & Bags", path: "/shop?category=office"},
    { name: "SorrshaBuy Finds", path: "/shop?category=office"},
    { name: "Mobiles & Tabs", path: "/shop?category=office"},
    { name: "Patio, Lawn and Garden", path: "/shop?category=office"},
    { name: "Sports & Outdoor", path: "/shop?category=office"},
    { name: "Toys & Figurines", path: "/shop?category=office"},
    { name: "Wrist Watches", path: "/shop?category=office"},
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
