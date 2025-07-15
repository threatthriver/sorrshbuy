
import { useState } from "react";
import { Menu, X, Home, ShoppingBag, TrendingUp, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Home", path: "/", icon: Home },
    { name: "Shop", path: "/shop", icon: ShoppingBag },
    { name: "Electronics", path: "/shop?category=electronics", icon: ShoppingBag },
    { name: "Fashion", path: "/shop?category=fashion", icon: ShoppingBag },
    { name: "Home & Kitchen", path: "/shop?category=home", icon: Home },
    { name: "Sports", path: "/shop?category=sports", icon: ShoppingBag },
    { name: "Trending", path: "/trending", icon: TrendingUp },
    { name: "Beauty", path: "/shop?category=beauty", icon: ShoppingBag },
    { name: "Account", path: "/account", icon: User },
  ];

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="lg:hidden text-primary-foreground hover:bg-primary-glow/20">
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-80 p-0">
        <SheetHeader className="p-6 bg-gradient-primary text-primary-foreground">
          <SheetTitle className="text-left text-xl font-bold text-white">
            SorrshaBuy
          </SheetTitle>
        </SheetHeader>
        
        <div className="flex flex-col p-6 space-y-2">
          {menuItems.map((item) => {
            const IconComponent = item.icon;
            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors text-foreground hover:text-primary"
              >
                <IconComponent className="h-5 w-5" />
                <span className="font-medium">{item.name}</span>
              </Link>
            );
          })}
        </div>

        <div className="mt-auto p-6 border-t">
          <div className="text-center text-sm text-muted-foreground">
            <p>© 2024 SorrshaBuy</p>
            <p>Quality products, trusted service</p>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
