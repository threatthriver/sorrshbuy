
import { Search, X, SearchCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface SearchBarProps {
  onSearch: (query: string) => void;
  placeholder?: string;
  className?: string;
}

const SearchBar = ({ onSearch, placeholder = "Search for products, brands and more...", className = "" }: SearchBarProps) => {
  const [query, setQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Auto-focus and expand on mount if needed
  useEffect(() => {
    if (isFocused && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isFocused]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query.trim());
  };

  const handleClear = () => {
    setQuery("");
    onSearch("");
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    setIsTyping(true);
    const timer = setTimeout(() => setIsTyping(false), 300);
    return () => clearTimeout(timer);
  };

  return (
    <form onSubmit={handleSubmit} className={cn("relative w-full max-w-2xl mx-auto", className)}>
      <motion.div 
        ref={containerRef}
        layout
        className={cn(
          "relative bg-white dark:bg-card rounded-full transition-all duration-300",
          isFocused 
            ? "shadow-lg ring-2 ring-primary/50" 
            : "shadow-md hover:shadow-lg hover:ring-1 hover:ring-primary/30"
        )}
        animate={{
          scale: isFocused ? 1.02 : 1,
        }}
      >
        <div className="relative">
          <Input
            ref={inputRef}
            type="search"
            placeholder={placeholder}
            value={query}
            onChange={handleChange}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            className={cn(
              "w-full pl-12 pr-20 py-4 lg:py-5 rounded-full border-0 text-foreground",
              "text-sm lg:text-base bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0",
              "placeholder:text-muted-foreground/70"
            )}
            aria-label="Search products"
          />
          
          <motion.div 
            className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground"
            animate={{
              scale: isFocused || query ? 1.1 : 1,
              rotate: isFocused ? 5 : 0,
            }}
            transition={{ type: "spring", stiffness: 500, damping: 15 }}
          >
            <Search className={cn(
              "h-4 w-4 lg:h-5 lg:w-5 transition-colors",
              isFocused ? "text-primary" : "text-muted-foreground"
            )} />
          </motion.div>
          
          <AnimatePresence>
            {(query || isFocused) && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center space-x-1"
              >
                {query && (
                  <Button
                    type="button"
                    size="icon"
                    variant="ghost"
                    onClick={handleClear}
                    className={cn(
                      "h-8 w-8 rounded-full bg-transparent hover:bg-muted/50",
                      "transition-all duration-200"
                    )}
                    aria-label="Clear search"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                )}
                
                <motion.div
                  animate={{
                    scale: isTyping ? [1, 1.1, 1] : 1,
                  }}
                  transition={{ repeat: isTyping ? Infinity : 0, duration: 0.8 }}
                >
                  <Button 
                    type="submit"
                    size="icon"
                    className={cn(
                      "h-9 w-9 rounded-full transition-all duration-300",
                      "bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary/80",
                      "shadow-md hover:shadow-lg hover:shadow-primary/20"
                    )}
                    aria-label="Search"
                  >
                    {isTyping ? (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      >
                        <Search className="h-4 w-4" />
                      </motion.div>
                    ) : (
                      <SearchCheck className="h-4 w-4" />
                    )}
                  </Button>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        
        <motion.div 
          className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary/20 rounded-full overflow-hidden"
          initial={false}
          animate={{
            width: isFocused ? '100%' : '0%',
            opacity: isFocused ? 1 : 0,
          }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <motion.div 
            className="h-full bg-gradient-to-r from-primary to-primary/70"
            animate={{
              x: ["-100%", "100%"],
            }}
            transition={{
              repeat: Infinity,
              duration: 2,
              ease: "linear",
              repeatType: "loop" as const,
            }}
          />
        </motion.div>
      </motion.div>
    </form>
  );
};

export default SearchBar;
