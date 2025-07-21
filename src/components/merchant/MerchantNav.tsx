import { NavLink, Link } from 'react-router-dom';
import { Home, Package, ShoppingCart, Settings, BarChart2, ChevronLeft, ChevronRight, Store } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface NavItemData {
  to: string;
  icon: React.ElementType;
  label: string;
}

const navItems: NavItemData[] = [
  { to: '/merchant/app/dashboard', icon: Home, label: 'Dashboard' },
  { to: '/merchant/app/products', icon: Package, label: 'Products' },
  { to: '/merchant/app/orders', icon: ShoppingCart, label: 'Orders' },
  { to: '/merchant/app/analytics', icon: BarChart2, label: 'Analytics' },
  { to: '/merchant/app/settings', icon: Settings, label: 'Settings' },
];

interface MerchantNavProps {
  isCollapsed: boolean;
  onToggle: () => void;
}

const NavItem = ({ item, isCollapsed }: { item: NavItemData; isCollapsed: boolean }) => {
  return (
    <Tooltip delayDuration={0}>
      <TooltipTrigger asChild>
        <li>
          <NavLink
            to={item.to}
            className={({ isActive }) =>
              cn(
                'flex items-center gap-4 px-3 py-2.5 rounded-lg text-sm font-medium transition-all',
                'hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/80',
                isCollapsed ? 'justify-center' : 'justify-start',
                isActive
                  ? 'bg-primary/10 text-primary dark:text-primary-foreground font-semibold dark:bg-primary/20'
                  : 'text-muted-foreground dark:text-muted-foreground/90',
                'group relative overflow-hidden'
              )
            }
            end
          >
            <item.icon 
              className={cn(
                'h-5 w-5 flex-shrink-0 transition-transform duration-200',
                'group-hover:scale-110',
              )} 
              aria-hidden="true"
            />
            <span 
              className={cn(
                'truncate transition-all duration-200', 
                isCollapsed ? 'opacity-0 w-0' : 'opacity-100 w-auto',
                'group-hover:translate-x-1'
              )}
            >
              {item.label}
            </span>
            {!isCollapsed && (
              <span 
                className={cn(
                  'absolute right-3 top-1/2 -translate-y-1/2',
                  'h-1.5 w-1.5 rounded-full bg-primary dark:bg-primary-foreground opacity-0',
                  'transition-opacity duration-200',
                  'group-hover:opacity-100',
                  'group-[[data-active]]:opacity-100'
                )}
                aria-hidden="true"
              />
            )}
          </NavLink>
        </li>
      </TooltipTrigger>
      {isCollapsed && (
        <TooltipContent 
          side="right" 
          sideOffset={8}
          className="bg-foreground text-background dark:bg-background dark:text-foreground border dark:border-gray-700 text-xs font-medium shadow-lg"
        >
          {item.label}
        </TooltipContent>
      )}
    </Tooltip>
  );
};

const MerchantNav = ({ isCollapsed, onToggle }: MerchantNavProps) => {
  return (
    <TooltipProvider delayDuration={0}>
      <nav className="flex flex-col h-full bg-card dark:bg-card text-card-foreground border-r dark:border-gray-800">
        <div className={cn('flex items-center border-b h-[65px]', isCollapsed ? 'justify-center' : 'px-4 justify-between' )}>
          {!isCollapsed && (
            <Link to="/merchant/app/dashboard" className="flex items-center gap-2">
              <h2 className="text-xl font-bold text-primary">Sorrsha</h2>
            </Link>
          )}
          <Button variant="ghost" size="icon" onClick={onToggle} className={cn(isCollapsed && "mx-auto")}>
            {isCollapsed ? <ChevronRight className="h-5 w-5" /> : <ChevronLeft className="h-5 w-5" />}
          </Button>
        </div>

        <div className="flex-grow p-2 space-y-1">
          <ul>
            {navItems.map((item) => (
              <NavItem key={item.to} item={item} isCollapsed={isCollapsed} />
            ))}
          </ul>
        </div>

        <div className="p-2 border-t">
          <Tooltip>
            <TooltipTrigger asChild>
              <Link 
                to="/"
                className={cn(
                  'flex items-center gap-4 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors',
                'text-muted-foreground hover:bg-muted hover:text-foreground',
                'dark:text-muted-foreground/90 dark:hover:bg-muted/80 dark:hover:text-foreground',
                isCollapsed && 'justify-center'
                )}
              >
                <Store className="h-5 w-5 flex-shrink-0" />
                <span className={cn('truncate transition-all duration-200', isCollapsed ? 'w-0 opacity-0' : 'w-auto opacity-100')}>Visit Store</span>
              </Link>
            </TooltipTrigger>
             {isCollapsed && (
              <TooltipContent side="right">
                <p>Visit Store</p>
              </TooltipContent>
            )}
          </Tooltip>
        </div>
      </nav>
    </TooltipProvider>
  );
};

export default MerchantNav;
