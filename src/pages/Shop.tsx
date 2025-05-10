
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Layout from "@/components/Layout";
import ProductCard from "@/components/ProductCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { Search, X } from "lucide-react";
import { Product } from "@/types";
import { getProducts, brands, categories } from "@/data/products";

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  
  // Filter states
  const [searchQuery, setSearchQuery] = useState(() => searchParams.get("q") || "");
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 2500000]);
  const [sortBy, setSortBy] = useState("featured");
  
  // Mobile filter visibility
  const [showFilters, setShowFilters] = useState(false);
  
  // Load products
  useEffect(() => {
    const fetchProducts = () => {
      const allProducts = getProducts();
      setProducts(allProducts);
      setFilteredProducts(allProducts);
      
      // Find min and max prices
      const prices = allProducts.map(p => p.price);
      setPriceRange([
        0,
        Math.max(...prices)
      ]);
      
      setIsLoading(false);
    };
    
    // Simulate loading delay
    const timer = setTimeout(() => {
      fetchProducts();
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);
  
  // Apply filters
  useEffect(() => {
    if (isLoading) return;
    
    let result = [...products];
    
    // Search query filter
    if (searchQuery) {
      result = result.filter(p => 
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    // Brand filter
    if (selectedBrands.length > 0) {
      result = result.filter(p => selectedBrands.includes(p.brand));
    }
    
    // Category filter
    if (selectedCategories.length > 0) {
      result = result.filter(p => selectedCategories.includes(p.category));
    }
    
    // Price range filter
    result = result.filter(p => p.price >= priceRange[0] && p.price <= priceRange[1]);
    
    // Sort
    switch (sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'name':
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      default:
        // Default "featured" sorting - no change needed
        break;
    }
    
    setFilteredProducts(result);
  }, [searchQuery, selectedBrands, selectedCategories, priceRange, sortBy, isLoading, products]);
  
  // Handle search form
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchParams(searchQuery ? { q: searchQuery } : {});
  };
  
  // Toggle brand filter
  const toggleBrand = (brand: string) => {
    setSelectedBrands(prev => 
      prev.includes(brand) 
        ? prev.filter(b => b !== brand)
        : [...prev, brand]
    );
  };
  
  // Toggle category filter
  const toggleCategory = (category: string) => {
    setSelectedCategories(prev => 
      prev.includes(category) 
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };
  
  // Clear all filters
  const clearFilters = () => {
    setSearchQuery("");
    setSelectedBrands([]);
    setSelectedCategories([]);
    setPriceRange([0, Math.max(...products.map(p => p.price))]);
    setSortBy("featured");
    setSearchParams({});
  };
  
  return (
    <Layout>
      <div className="container mx-auto py-8 px-4">
        <div className="flex flex-col sm:flex-row justify-between items-start mb-8">
          <h1 className="text-3xl font-bold mb-4">Shop Superbikes</h1>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <form onSubmit={handleSearch} className="relative flex-1">
              <Input
                type="search"
                placeholder="Search bikes..."
                className="w-full sm:w-80"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Button
                type="submit"
                size="icon"
                variant="ghost"
                className="absolute right-0 top-0 h-full"
              >
                <Search className="h-4 w-4" />
              </Button>
            </form>
            
            <div className="flex items-center gap-2">
              <Button 
                variant="outline" 
                onClick={() => setShowFilters(!showFilters)}
                className="sm:hidden"
              >
                {showFilters ? "Hide Filters" : "Show Filters"}
              </Button>
              
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-full sm:w-40">
                  <SelectValue placeholder="Sort By" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured">Featured</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="name">Name: A to Z</SelectItem>
                  <SelectItem value="rating">Rating</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
        
        {/* Active filters badges */}
        {(selectedBrands.length > 0 || selectedCategories.length > 0 || searchQuery) && (
          <div className="flex flex-wrap gap-2 mb-6">
            {selectedBrands.map(brand => (
              <Badge key={brand} variant="outline" className="px-3 py-1">
                {brand}
                <button
                  onClick={() => toggleBrand(brand)}
                  className="ml-2 h-4 w-4 rounded-full"
                >
                  <X className="h-3 w-3" />
                </button>
              </Badge>
            ))}
            
            {selectedCategories.map(category => (
              <Badge key={category} variant="outline" className="px-3 py-1">
                {category}
                <button
                  onClick={() => toggleCategory(category)}
                  className="ml-2 h-4 w-4 rounded-full"
                >
                  <X className="h-3 w-3" />
                </button>
              </Badge>
            ))}
            
            {searchQuery && (
              <Badge variant="outline" className="px-3 py-1">
                Search: {searchQuery}
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setSearchParams({});
                  }}
                  className="ml-2 h-4 w-4 rounded-full"
                >
                  <X className="h-3 w-3" />
                </button>
              </Badge>
            )}
            
            <Button
              variant="ghost"
              size="sm"
              onClick={clearFilters}
              className="ml-2"
            >
              Clear All
            </Button>
          </div>
        )}
        
        <div className="flex flex-col sm:flex-row gap-8">
          {/* Sidebar Filters */}
          <div 
            className={`w-full sm:w-64 sm:shrink-0 sm:block ${
              showFilters ? "block" : "hidden"
            }`}
          >
            <div className="bg-card rounded-lg border p-6">
              <div className="mb-6">
                <h3 className="font-medium text-lg mb-4">Price Range</h3>
                <div className="space-y-6">
                  <Slider
                    defaultValue={[priceRange[0], priceRange[1]]}
                    max={2500000}
                    step={5000}
                    value={[priceRange[0], priceRange[1]]}
                    onValueChange={(value) => setPriceRange(value as [number, number])}
                    className="mb-4"
                  />
                  <div className="flex justify-between">
                    <div className="text-sm">
                      ₹{priceRange[0].toLocaleString()}
                    </div>
                    <div className="text-sm">
                      ₹{priceRange[1].toLocaleString()}
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="font-medium text-lg mb-4">Brands</h3>
                <div className="space-y-2 max-h-48 overflow-y-auto">
                  {brands.map(brand => (
                    <div key={brand.id} className="flex items-center">
                      <Checkbox 
                        id={`brand-${brand.id}`} 
                        checked={selectedBrands.includes(brand.name)}
                        onCheckedChange={() => toggleBrand(brand.name)}
                      />
                      <Label htmlFor={`brand-${brand.id}`} className="ml-2 cursor-pointer">
                        {brand.name}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="font-medium text-lg mb-4">Categories</h3>
                <div className="space-y-2">
                  {categories.map(category => (
                    <div key={category.id} className="flex items-center">
                      <Checkbox 
                        id={`category-${category.id}`} 
                        checked={selectedCategories.includes(category.name)}
                        onCheckedChange={() => toggleCategory(category.name)}
                      />
                      <Label htmlFor={`category-${category.id}`} className="ml-2 cursor-pointer">
                        {category.name}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>
              
              <Button 
                onClick={clearFilters} 
                variant="outline" 
                className="w-full"
              >
                Clear All Filters
              </Button>
            </div>
          </div>
          
          {/* Product Grid */}
          <div className="flex-1">
            {isLoading ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {Array(9).fill(0).map((_, i) => (
                  <div key={i} className="bg-secondary/30 animate-pulse rounded-xl h-[320px]"></div>
                ))}
              </div>
            ) : filteredProducts.length === 0 ? (
              <div className="text-center p-8 bg-card rounded-lg border">
                <h3 className="text-xl font-medium mb-2">No products found</h3>
                <p className="text-muted-foreground">
                  Try adjusting your search or filter criteria
                </p>
                <Button onClick={clearFilters} className="mt-4">
                  Clear Filters
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Shop;
