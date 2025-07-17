import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from 'react';
import { motion } from 'framer-motion';
import { User, CreditCard, Package, Bell, Settings, LayoutDashboard } from "lucide-react";
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

import DashboardTab from '@/components/account/DashboardTab';
import ProfileTab from '@/components/account/ProfileTab';
import OrdersTab from '@/components/account/OrdersTab';
import AddressesTab from '@/components/account/AddressesTab';
import PaymentTab from '@/components/account/PaymentTab';
import NotificationsTab from '@/components/account/NotificationsTab';
import SettingsTab from '@/components/account/SettingsTab';
import headphones from "@/assets/product-headphones.jpg";
import shoes from "@/assets/product-shoes.jpg";
import laptop from "@/assets/product-laptop.jpg";

const Account = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [profile, setProfile] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phone: '+1 234 567 8900',
    bio: 'Loves to shop for the latest tech gadgets and sustainable products. Avid reader and coffee enthusiast.',
  });

  const [addresses, setAddresses] = useState([
    { id: 1, type: 'Home', name: 'John Doe', address: '123 Main St, San Francisco, CA 94103, USA', isDefault: true },
    { id: 2, type: 'Work', name: 'John Doe', address: '456 Market St, San Francisco, CA 94105, USA', isDefault: false },
  ]);

  const [paymentMethods, setPaymentMethods] = useState([
    { id: 1, cardType: 'Visa', last4: '1234', expiry: '12/25', isDefault: true },
    { id: 2, cardType: 'Mastercard', last4: '5678', expiry: '08/26', isDefault: false },
  ]);

  const [notifications, setNotifications] = useState([
    { id: 1, message: "Your order #12345 has been delivered", time: "2 hours ago", read: false },
    { id: 2, message: "50% off on Electronics - Limited time offer", time: "1 day ago", read: true },
    { id: 3, message: "Profile updated successfully", time: "3 days ago", read: true },
  ]);

  const handleProfileChange = (data: typeof profile) => {
    setProfile(data);
  };

  const handleMarkAsRead = (id: number) => {
    setNotifications(notifications.map(n => n.id === id ? { ...n, read: true } : n));
  };

  const handleDeleteNotification = (id: number) => {
    setNotifications(notifications.filter(n => n.id !== id));
  };

  const handleMarkAllAsRead = () => {
    setNotifications(notifications.map(n => ({ ...n, read: true })));
  };

  const handleClearAll = () => {
    setNotifications([]);
  };

  const recentOrders = [
    { id: "#12345", items: 2, total: "$299.98", status: "Delivered", date: "Dec 15, 2024" },
    { id: "#12344", items: 1, total: "$899.99", status: "Processing", date: "Dec 12, 2024" },
    { id: "#12343", items: 3, total: "$156.50", status: "Shipped", date: "Dec 10, 2024" },
  ];

  const savedItems = [
    { name: "Wireless Headphones", price: "$149.99", image: headphones },
    { name: "Running Shoes", price: "$89.99", image: shoes },
    { name: "Coffee Maker", price: "$199.99", image: laptop },
  ];

  const dashboardNotifications = [
    { message: "Your order #12345 has been delivered", time: "2 hours ago" },
    { message: "50% off on Electronics", time: "1 day ago" },
    { message: "Profile updated successfully", time: "3 days ago" },
  ];

  const navItems = [
    { value: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { value: 'profile', label: 'Profile', icon: User },
    { value: 'orders', label: 'Orders', icon: Package },
    { value: 'addresses', label: 'Addresses', icon: CreditCard },
    { value: 'payment', label: 'Payment Methods', icon: CreditCard },
    { value: 'notifications', label: 'Notifications', icon: Bell },
    { value: 'settings', label: 'Settings', icon: Settings },
  ];

  return (
    <div className="bg-background min-h-screen">
      <Header />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="lg:flex lg:items-center lg:justify-between mb-8">
            <div className="flex-1 min-w-0">
              <h2 className="text-2xl font-bold leading-7 text-foreground sm:text-3xl sm:truncate">
                Welcome back, {profile.firstName}!
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">Here's a quick overview of your account.</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-[280px_1fr] gap-8 items-start">
            {/* Left Sidebar Navigation */}
            <aside className="hidden lg:block sticky top-24">
              <nav className="flex flex-col space-y-2">
                {navItems.map((item) => (
                  <Button
                    key={item.value}
                    variant={activeTab === item.value ? 'default' : 'ghost'}
                    className="w-full justify-start h-12 text-base"
                    onClick={() => setActiveTab(item.value)}
                  >
                    <item.icon className="mr-3 h-5 w-5" />
                    {item.label}
                  </Button>
                ))}
              </nav>
            </aside>

            {/* Main Content */}
            <main>
              <motion.div key={activeTab} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
                {activeTab === 'dashboard' && <DashboardTab recentOrders={recentOrders} savedItems={savedItems} dashboardNotifications={dashboardNotifications} />}
                {activeTab === 'profile' && <ProfileTab profile={profile} handleProfileChange={handleProfileChange} />}
                {activeTab === 'orders' && <OrdersTab recentOrders={recentOrders} />}
                {activeTab === 'addresses' && <AddressesTab addresses={addresses} />}
                {activeTab === 'payment' && <PaymentTab paymentMethods={paymentMethods} />}
                {activeTab === 'notifications' && 
                  <NotificationsTab 
                    notifications={notifications} 
                    handleMarkAsRead={handleMarkAsRead} 
                    handleDeleteNotification={handleDeleteNotification}
                    handleMarkAllAsRead={handleMarkAllAsRead}
                    handleClearAll={handleClearAll}
                  />
                }
                {activeTab === 'settings' && <SettingsTab />}
              </motion.div>
            </main>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Account;
