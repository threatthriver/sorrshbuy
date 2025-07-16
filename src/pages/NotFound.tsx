import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { AlertTriangle, Home, ShoppingCart, Mail } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      `404 Error: User attempted to access non-existent route: ${location.pathname}`
    );
  }, [location.pathname]);

  return (
    <>
      <Header />
      <main className="min-h-[calc(100vh-200px)] flex items-center justify-center bg-background text-center px-4">
        <div>
          <AlertTriangle className="mx-auto h-20 w-20 text-primary mb-6 animate-bounce" />
          <h1 className="text-6xl font-extrabold text-primary tracking-tighter">404</h1>
          <h2 className="text-3xl font-semibold text-foreground mt-4 mb-2">Page Not Found</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto">
            Sorry, the page you are looking for does not exist or has been moved.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg">
              <Link to="/">
                <Home className="mr-2 h-5 w-5" />
                Go to Homepage
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/shop">
                <ShoppingCart className="mr-2 h-5 w-5" />
                Visit Shop
              </Link>
            </Button>
            <Button asChild variant="ghost" size="lg">
              <Link to="/contact">
                <Mail className="mr-2 h-5 w-5" />
                Contact Us
              </Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default NotFound;
