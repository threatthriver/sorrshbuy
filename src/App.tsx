

import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useNotifications } from "@/hooks/useNotifications";
import NotificationBanner from "@/components/NotificationBanner";

import { CartProvider } from "@/contexts/CartContext";
import Index from "./pages/Index";
import About from "./pages/About";
import Account from "./pages/Account";
import Authentication from "./pages/Authentication";
import Blog from "./pages/Blog";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";
import MerchantOnboarding from "./pages/MerchantOnboarding";
import MerchantLayout from "./pages/merchant/MerchantLayout";
import MerchantDashboard from "./pages/merchant/Dashboard";
import MerchantProducts from "./pages/merchant/Products";
import MerchantOrders from "./pages/merchant/Orders";
import MerchantAnalytics from "./pages/merchant/Analytics";
import MerchantSettings from "./pages/merchant/Settings";
import Shipping from "./pages/Shipping";
import ShippingReturn from "./pages/ShippingReturn";
import Shop from "./pages/Shop";
import Terms from "./pages/Terms";
import Trending from "./pages/Trending";
import Privacy from "./pages/Privacy";
import Careers from "./pages/Careers";
import TrackOrder from "./pages/TrackOrder";
import Faq from "./pages/Faq";
import CookiePolicy from "./pages/CookiePolicy";
import HowToOrder from "./pages/HowToOrder";
import NotFound from "./pages/NotFound";
import Wishlist from "./pages/Wishlist";
import ProductDetail from "./pages/ProductDetail";
import Checkout from "./pages/Checkout";
import ProductPage from "./pages/merchant/ProductPage";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      refetchOnWindowFocus: false,
    },
  },
});

const App = () => {
  const { notifications, dismissNotification } = useNotifications();

  return (
    <QueryClientProvider client={queryClient}>
      <CartProvider>
        <Sonner richColors closeButton />
        <TooltipProvider>
          <NotificationBanner notifications={notifications} onDismiss={dismissNotification} />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/account" element={<Account />} />
              <Route path="/auth" element={<Authentication />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/merchant" element={<MerchantOnboarding />} />
              <Route path="/merchant/app" element={<MerchantLayout />}>
                <Route index element={<Navigate to="/merchant/app/dashboard" replace />} />
                <Route path="dashboard" element={<MerchantDashboard />} />
                <Route path="products" element={<MerchantProducts />} />
                <Route path="products/new" element={<ProductPage />} />
                <Route path="products/:productId" element={<ProductPage />} />
                <Route path="orders" element={<MerchantOrders />} />
                <Route path="analytics" element={<MerchantAnalytics />} />
                <Route path="settings" element={<MerchantSettings />} />
              </Route>
              <Route path="/shipping" element={<Shipping />} />
              <Route path="/shipping-return" element={<ShippingReturn />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/trending" element={<Trending />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/track-order" element={<TrackOrder />} />
              <Route path="/faq" element={<Faq />} />
              <Route path="/cookies" element={<CookiePolicy />} />
              <Route path="/help/order" element={<HowToOrder />} />
              <Route path="/wishlist" element={<Wishlist />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/checkout" element={<Checkout />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </CartProvider>
    </QueryClientProvider>
  );
};

export default App;
