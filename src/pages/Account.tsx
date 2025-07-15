import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from 'react';
import { motion } from 'framer-motion';
import { User, CreditCard, Package, Bell, Settings } from "lucide-react";

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

  const handleProfileChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setProfile(prev => ({ ...prev, [id]: value }));
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

  return (
    <div className="bg-background min-h-screen">
      <Header />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="lg:flex lg:items-center lg:justify-between mb-8">
            <div className="flex-1 min-w-0">
              <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
                Welcome back, {profile.firstName}!
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">Here's a quick overview of your account.</p>
            </div>
          </div>

          <Tabs defaultValue="dashboard" className="w-full">
            <div className="overflow-x-auto">
              <TabsList className="inline-grid w-full grid-cols-2 sm:w-auto sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7">
                <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
              <TabsTrigger value="profile">Profile</TabsTrigger>
              <TabsTrigger value="orders">Orders</TabsTrigger>
              <TabsTrigger value="addresses">Addresses</TabsTrigger>
              <TabsTrigger value="payment">Payment</TabsTrigger>
              <TabsTrigger value="notifications">Notifications</TabsTrigger>
              <TabsTrigger value="settings">Settings</TabsTrigger>
            </TabsList>
            </div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <TabsContent value="dashboard" className="mt-6">
                <DashboardTab recentOrders={recentOrders} savedItems={savedItems} dashboardNotifications={dashboardNotifications} />
              </TabsContent>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <TabsContent value="profile">
                <ProfileTab profile={profile} handleProfileChange={handleProfileChange} />
              </TabsContent>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <TabsContent value="orders">
                <OrdersTab recentOrders={recentOrders} />
              </TabsContent>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <TabsContent value="addresses">
                <AddressesTab addresses={addresses} />
              </TabsContent>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <TabsContent value="payment">
                <PaymentTab paymentMethods={paymentMethods} />
              </TabsContent>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <TabsContent value="notifications">
                <NotificationsTab 
                  notifications={notifications} 
                  handleMarkAsRead={handleMarkAsRead} 
                  handleDeleteNotification={handleDeleteNotification}
                  handleMarkAllAsRead={handleMarkAllAsRead}
                  handleClearAll={handleClearAll}
                />
              </TabsContent>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <TabsContent value="settings" className="space-y-6">
                <SettingsTab />
              </TabsContent>
            </motion.div>
          </Tabs>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Account;
