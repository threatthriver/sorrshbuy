
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useNotifications } from "@/components/NotificationBanner";
import Index from "./pages/Index";
import About from "./pages/About";
import Account from "./pages/Account";
import Authentication from "./pages/Authentication";
import Blog from "./pages/Blog";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";
import Merchant from "./pages/Merchant";
import Shipping from "./pages/Shipping";
import ShippingReturn from "./pages/ShippingReturn";
import Shop from "./pages/Shop";
import Terms from "./pages/Terms";
import Trending from "./pages/Trending";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      refetchOnWindowFocus: false,
    },
  },
});

const App = () => {
  const { NotificationBanner } = useNotifications();

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <NotificationBanner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/account" element={<Account />} />
            <Route path="/authentication" element={<Authentication />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/merchant" element={<Merchant />} />
            <Route path="/shipping" element={<Shipping />} />
            <Route path="/shipping-return" element={<ShippingReturn />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/trending" element={<Trending />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
