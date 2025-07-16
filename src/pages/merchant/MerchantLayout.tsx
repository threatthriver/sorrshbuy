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
    <div className="flex h-screen bg-background">
      {/* Desktop Sidebar */}
      <div className={cn('hidden md:block flex-shrink-0 transition-all duration-300', isCollapsed ? 'w-20' : 'w-64')}>
        <MerchantNav isCollapsed={isCollapsed} onToggle={toggleSidebar} />
      </div>

      {/* Mobile Sidebar */}
      <div className={cn('fixed inset-y-0 left-0 z-50 w-64 bg-card transition-transform duration-300 md:hidden', isMobileNavOpen ? 'translate-x-0' : '-translate-x-full')}>
        <MerchantNav isCollapsed={false} onToggle={toggleMobileNav} />
      </div>
      {isMobileNavOpen && <div className="fixed inset-0 z-40 bg-black/50 md:hidden" onClick={toggleMobileNav} />}

      <div className="flex flex-col flex-1">
        <MerchantHeader onMenuClick={toggleMobileNav} />
        <main className="flex-1 p-6 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MerchantLayout;
