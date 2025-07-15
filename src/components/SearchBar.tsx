
import { Search, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

interface SearchBarProps {
  onSearch: (query: string) => void;
  placeholder?: string;
  className?: string;
}

const SearchBar = ({ onSearch, placeholder = "Search for products, brands and more...", className = "" }: SearchBarProps) => {
  const [query, setQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query.trim());
  };

  const handleClear = () => {
    setQuery("");
    onSearch("");
  };

  return (
    <form onSubmit={handleSubmit} className={`relative ${className}`}>
      <div className={`relative transition-all duration-200 ${isFocused ? 'shadow-lg' : 'shadow-card'}`}>
        <Input
          type="search"
          placeholder={placeholder}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className="w-full pl-4 pr-20 py-2 lg:py-3 rounded-full border-0 text-foreground bg-white text-sm lg:text-base focus:ring-2 focus:ring-primary/20"
        />
        
        {query && (
          <Button
            type="button"
            size="icon"
            variant="ghost"
            onClick={handleClear}
            className="absolute right-12 top-1/2 transform -translate-y-1/2 h-6 w-6 lg:h-8 lg:w-8 rounded-full hover:bg-muted"
          >
            <X className="h-3 w-3 lg:h-4 lg:w-4" />
          </Button>
        )}
        
        <Button 
          type="submit"
          size="icon" 
          className="absolute right-1 top-1/2 transform -translate-y-1/2 h-7 w-7 lg:h-9 lg:w-9 rounded-full bg-secondary hover:bg-secondary/90"
        >
          <Search className="h-3 w-3 lg:h-4 lg:w-4" />
        </Button>
      </div>
    </form>
  );
};

export default SearchBar;
