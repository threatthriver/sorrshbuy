import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Search, Bell, User, LogOut, Settings, CreditCard } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';

interface MerchantHeaderProps {
  onMenuClick: () => void;
}

const MerchantHeader = ({ onMenuClick }: MerchantHeaderProps) => {
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const toggleSearch = () => setIsSearchVisible(!isSearchVisible);

  return (
    <header className="flex items-center justify-between h-[65px] px-4 bg-card dark:bg-card border-b dark:border-gray-800 shrink-0 sticky top-0 z-40">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" className="md:hidden" onClick={onMenuClick} aria-label="Toggle menu">
          <Menu className="h-6 w-6" />
        </Button>
        
        {/* Search toggle button for mobile */}
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden" 
          onClick={toggleSearch}
          aria-label="Search"
        >
          <Search className="h-5 w-5" />
        </Button>

        {/* Search bar */}
        <div className={cn(
          "absolute left-0 right-0 top-[65px] md:relative md:top-0",
          "bg-background md:bg-transparent transition-all duration-200 ease-in-out",
          isSearchVisible ? "block" : "hidden md:block"
        )}>
          <div className="container mx-auto px-4 py-2 md:py-0 md:px-0 md:block">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground dark:text-muted-foreground/80" />
              <Input 
                placeholder="Search products, orders..." 
                className="pl-10 w-full md:w-80 bg-background dark:bg-card border-gray-200 dark:border-gray-700 focus-visible:ring-primary/50"
                autoFocus={isSearchVisible}
              />
              <Button 
                variant="ghost" 
                size="icon" 
                className="absolute right-1 top-1/2 -translate-y-1/2 md:hidden"
                onClick={toggleSearch}
                aria-label="Close search"
              >
                <span className="text-muted-foreground">×</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex items-center gap-2">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5" />
              <span className="sr-only">Notifications</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-80 bg-background dark:bg-card border-gray-200 dark:border-gray-700">
            <DropdownMenuLabel className="font-semibold">Notifications</DropdownMenuLabel>
            <DropdownMenuSeparator className="bg-gray-200 dark:bg-gray-700" />
            <div className="p-4 text-sm text-center text-muted-foreground dark:text-muted-foreground/80">
              No new notifications
            </div>
            {/* Example Notification Item */}
            {/* <DropdownMenuItem className="flex items-start gap-2">
              <Avatar className="h-8 w-8">
                <AvatarImage src="/avatars/01.png" alt="@shadcn" />
                <AvatarFallback>OM</AvatarFallback>
              </Avatar>
              <div className="grid gap-1">
                <p className="text-sm font-medium">New order #ORD-005</p>
                <p className="text-xs text-muted-foreground">From Olivia Martin</p>
              </div>
            </DropdownMenuItem> */}
          </DropdownMenuContent>
        </DropdownMenu>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="relative h-9 w-9 rounded-full">
              <Avatar className="h-9 w-9">
                <AvatarImage src="https://source.unsplash.com/random/100x100/?portrait" alt="Merchant" />
                <AvatarFallback>M</AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuLabel>
              <div className="flex flex-col space-y-1">
                <p className="text-sm font-medium leading-none">Sorrsha Merchant</p>
                <p className="text-xs leading-none text-muted-foreground">merchant@sorrsha.com</p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <Link to="/merchant/app/settings">
                <User className="mr-2 h-4 w-4" />
                <span>Profile</span>
              </Link>
            </DropdownMenuItem>
             <DropdownMenuItem asChild>
              <Link to="/merchant/app/settings">
                <CreditCard className="mr-2 h-4 w-4" />
                <span>Billing</span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link to="/merchant/app/settings">
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <LogOut className="mr-2 h-4 w-4" />
              <span>Log out</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default MerchantHeader;
