import { ChevronDown, Folder, ShoppingBag, Home, Smartphone, Camera, Monitor, Heart, Shirt, Baby, Car, Bike, Umbrella } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuGroup,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface CategoriesDropdownProps {
  isScrolled: boolean;
}

const CategoriesDropdown = ({ isScrolled }: CategoriesDropdownProps) => {
  // Organized categories by groups
  const categoryGroups = [
    {
      group: "Fashion",
      icon: <Shirt className="h-4 w-4" />,
      categories: [
        { name: "Men's Accessories", path: "/shop?category=mens-accessories" },
        { name: "Women's Accessories", path: "/shop?category=womens-accessories" },
        { name: "Luggage & Bags", path: "/shop?category=luggage-bags" },
        { name: "Wrist Watches", path: "/shop?category=watches" },
      ]
    },
    {
      group: "Electronics",
      icon: <Monitor className="h-4 w-4" />,
      categories: [
        { name: "Electronics", path: "/shop?category=electronics" },
        { name: "Computer Peripherals", path: "/shop?category=computer-peripherals" },
        { name: "Mobiles & Tabs", path: "/shop?category=mobiles-tabs" },
        { name: "Camera Equipment", path: "/shop?category=camera" },
      ]
    },
    {
      group: "Home & Living",
      icon: <Home className="h-4 w-4" />,
      categories: [
        { name: "Home & Kitchen", path: "/shop?category=home-kitchen" },
        { name: "Patio, Lawn and Garden", path: "/shop?category=garden" },
        { name: "Essentials", path: "/shop?category=essentials" },
      ]
    },
    {
      group: "Health & Lifestyle",
      icon: <Heart className="h-4 w-4" />,
      categories: [
        { name: "Beauty & Health", path: "/shop?category=beauty-health" },
        { name: "Sports & Outdoor", path: "/shop?category=sports-outdoor" },
        { name: "Baby & Toddler", path: "/shop?category=baby" },
      ]
    },
    {
      group: "Automotive & More",
      icon: <Car className="h-4 w-4" />,
      categories: [
        { name: "Automotive", path: "/shop?category=automotive" },
        { name: "Toys & Figurines", path: "/shop?category=toys" },
        { name: "SorrshaBuy Finds", path: "/shop?category=special-finds" },
        { name: "Instagram Spotlight", path: "/shop?category=instagram-spotlight" },
      ]
    },
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className={cn(
            "font-medium flex items-center gap-2 transition-colors",
            isScrolled ? 'text-foreground hover:bg-muted' : 'text-primary-foreground hover:bg-primary-glow/20'
          )}>
          <ShoppingBag className="h-4 w-4" />
          Categories
          <ChevronDown className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-64 bg-white border border-border shadow-product max-h-[80vh] overflow-y-auto"
        align="start"
      >
        <DropdownMenuLabel className="text-center font-bold text-primary py-2 border-b">
          Shop by Category
        </DropdownMenuLabel>
        
        {categoryGroups.map((group, groupIndex) => (
          <div key={group.group}>
            <DropdownMenuGroup>
              <DropdownMenuLabel className="flex items-center gap-2 px-3 py-2 font-semibold text-sm bg-muted/50">
                {group.icon}
                {group.group}
              </DropdownMenuLabel>
              
              {group.categories.map((category, index) => (
                <DropdownMenuItem key={category.path} asChild className="px-0">
                  <Link
                    to={category.path}
                    className="flex items-center w-full gap-3 px-6 py-1.5 text-foreground hover:bg-muted transition-colors cursor-pointer"
                  >
                    <span className="font-medium text-sm">{category.name}</span>
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuGroup>
            {groupIndex < categoryGroups.length - 1 && <DropdownMenuSeparator />}
          </div>
        ))}
        
        <DropdownMenuItem asChild className="mt-1 bg-primary/5 hover:bg-primary/10">
          <Link to="/shop" className="flex justify-center font-medium text-primary">
            View All Categories
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default CategoriesDropdown;
