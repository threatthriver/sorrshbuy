import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import MerchantNav from '@/components/merchant/MerchantNav';
import MerchantHeader from '@/components/merchant/MerchantHeader';
import { cn } from '@/lib/utils';

const MerchantLayout = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const toggleSidebar = () => setIsCollapsed(!isCollapsed);
  const toggleMobileNav = () => setIsMobileNavOpen(!isMobileNavOpen);
  return (
    <div className="flex h-screen bg-background overflow-hidden">
      {/* Desktop Sidebar */}
      <div 
        className={cn(
          'hidden md:block flex-shrink-0 transition-all duration-300 h-screen sticky top-0 overflow-y-auto',
          isCollapsed ? 'w-20' : 'w-64'
        )}
      >
        <MerchantNav isCollapsed={isCollapsed} onToggle={toggleSidebar} />
      </div>

      {/* Mobile Sidebar */}
      <div 
        className={cn(
          'fixed inset-y-0 left-0 z-50 w-64 bg-card transition-transform duration-300 ease-in-out md:hidden',
          isMobileNavOpen ? 'translate-x-0' : '-translate-x-full',
          'shadow-xl'
        )}
      >
        <MerchantNav isCollapsed={false} onToggle={toggleMobileNav} />
      </div>
      
      {/* Overlay for mobile menu */}
      {isMobileNavOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black/50 md:hidden transition-opacity duration-300" 
          onClick={toggleMobileNav}
          aria-hidden="true"
        />
      )}

      {/* Main content area */}
      <div className="flex flex-col flex-1 min-w-0">
        <MerchantHeader onMenuClick={toggleMobileNav} />
        <main className="flex-1 p-4 md:p-6 overflow-y-auto">
          <div className="max-w-7xl mx-auto w-full">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default MerchantLayout;
