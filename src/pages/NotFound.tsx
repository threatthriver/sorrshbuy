import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { AlertTriangle } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <AlertTriangle className="mx-auto h-16 w-16 text-primary mb-6 animate-bounce-gentle" />
        <h1 className="text-5xl font-bold mb-4 text-primary">404</h1>
        <p className="text-xl text-muted-foreground mb-6">Oops! Page not found</p>
        <Button asChild size="lg" className="px-8">
          <a href="/">Return to Home</a>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
