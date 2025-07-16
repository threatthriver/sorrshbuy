import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Filter, Search } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Skeleton } from "@/components/ui/skeleton";
import { useState, useEffect, useMemo } from "react";
import CategoryHeader from "@/components/CategoryHeader";
import { useSearchParams } from "react-router-dom";
import { products, categories } from "@/data/products";
import ShopSidebar from "@/components/ShopSidebar";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(true);
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  // Filters state
  const selectedCategory = useMemo(() => searchParams.get('category') || 'all', [searchParams]);
  const sortBy = useMemo(() => searchParams.get('sortBy') || 'featured', [searchParams]);
  const priceRange = useMemo(() => {
    const min = searchParams.get('minPrice');
    const max = searchParams.get('maxPrice');
    return [min ? parseInt(min) : 0, max ? parseInt(max) : 2000] as [number, number];
  }, [searchParams]);
  const selectedRating = useMemo(() => parseInt(searchParams.get('minRating') || '0'), [searchParams]);
  const localSearch = useMemo(() => searchParams.get('q') || '', [searchParams]);

  const handleFilterChange = (key: string, value: string | null) => {
    const newSearchParams = new URLSearchParams(searchParams);
    if (value === null || (key === 'category' && value === 'all')) {
      newSearchParams.delete(key);
    } else {
      newSearchParams.set(key, value);
    }
    setSearchParams(newSearchParams, { replace: true });
  };

  const handlePriceChange = (value: [number, number]) => {
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set('minPrice', value[0].toString());
    newSearchParams.set('maxPrice', value[1].toString());
    setSearchParams(newSearchParams, { replace: true });
  }

  const handleRatingChange = (rating: number) => {
    const currentRating = searchParams.get('minRating');
    handleFilterChange('minRating', currentRating === rating.toString() ? null : rating.toString());
  };
  
  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const searchValue = formData.get('search') as string;
    handleFilterChange('q', searchValue || null);
  }

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), 500); // Simulate loading
    return () => clearTimeout(timer);
  }, [searchParams]);

  const filteredProducts = useMemo(() => products.filter(product => {
    const categoryMatch = selectedCategory === 'all' || product.category === selectedCategory;
    const searchMatch = localSearch === '' || product.name.toLowerCase().includes(localSearch.toLowerCase());
    const priceMatch = product.price >= priceRange[0] && product.price <= priceRange[1];
    const ratingMatch = selectedRating === 0 || (product.rating && product.rating >= selectedRating);
    return categoryMatch && searchMatch && priceMatch && ratingMatch;
  }), [selectedCategory, localSearch, priceRange, selectedRating]);

  const currentCategory = useMemo(() => categories.find(cat => cat.id === selectedCategory) || categories[0], [selectedCategory]);
  const categoryDescription = `Browse our curated selection of ${currentCategory.name.toLowerCase()}. Find the latest trends and top-rated items.`;

  const sortedProducts = useMemo(() => [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-asc':
        return a.price - b.price;
      case 'price-desc':
        return b.price - a.price;
      case 'rating':
        return (b.rating || 0) - (a.rating || 0);
      case 'newest':
        return b.id.localeCompare(a.id); 
      default:
        return 0;
    }
  }), [filteredProducts, sortBy]);

  const sidebarProps = {
    categories,
    selectedCategory,
    onCategoryChange: (id: string) => handleFilterChange('category', id),
    priceRange,
    onPriceChange: handlePriceChange,
    selectedRating,
    onRatingChange: handleRatingChange,
  };

  return (
    <>
      <Header />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <CategoryHeader 
          title={currentCategory.name}
          description={categoryDescription}
          productCount={filteredProducts.length}
        />
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <ShopSidebar {...sidebarProps} className="hidden lg:block" />

          {/* Main content */}
          <div className="lg:col-span-3">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6">
                <form onSubmit={handleSearchSubmit} className="relative w-full sm:w-auto mb-4 sm:mb-0">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input 
                    name="search"
                    placeholder="Search products..."
                    className="pl-10 w-full sm:w-64"
                    defaultValue={localSearch}
                  />
                </form>
                <div className="flex items-center gap-4 self-end sm:self-center">
                  <Select value={sortBy} onValueChange={(val) => handleFilterChange('sortBy', val)}>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="featured">Featured</SelectItem>
                      <SelectItem value="newest">Newest</SelectItem>
                      <SelectItem value="price-asc">Price: Low to High</SelectItem>
                      <SelectItem value="price-desc">Price: High to Low</SelectItem>
                    </SelectContent>
                  </Select>
                  <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
                    <SheetTrigger asChild>
                      <Button variant="outline" className="lg:hidden">
                        <Filter className="h-4 w-4 mr-2" />
                        Filters
                      </Button>
                    </SheetTrigger>
                    <SheetContent className="w-[320px] sm:w-[380px] flex flex-col">
                      <SheetHeader>
                        <SheetTitle>Filters</SheetTitle>
                      </SheetHeader>
                      <div className="overflow-y-auto flex-grow pr-6 -mr-6">
                        <ShopSidebar {...sidebarProps} />
                      </div>
                      <Button onClick={() => setIsSheetOpen(false)} className="mt-4">Apply Filters</Button>
                    </SheetContent>
                  </Sheet>
                </div>
              </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-6 gap-y-10">
              {isLoading 
                ? Array.from({ length: 6 }).map((_, index) => (
                    <div key={index} className="space-y-3">
                      <Skeleton className="h-[380px] rounded-lg" />
                      <Skeleton className="h-5 w-3/4 mt-4" />
                      <Skeleton className="h-4 w-1/2" />
                      <Skeleton className="h-5 w-1/4" />
                    </div>
                  ))
                : sortedProducts.map(product => (
                    <ProductCard key={product.id} {...product} />
                  ))
              }
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Shop;