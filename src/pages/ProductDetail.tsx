
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Heart, Share2, ArrowLeft, Star } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { toast } from "sonner";
import { getProductBySlug, getProductsByCategory } from "@/data/products";
import { Product } from "@/types";
import ProductCard from "@/components/ProductCard";

const ProductDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [selectedImage, setSelectedImage] = useState<string>("");
  const [quantity, setQuantity] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  const { addToCart } = useCart();
  const navigate = useNavigate();
  
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);

    if (!slug) {
      navigate("/shop");
      return;
    }

    const fetchProduct = () => {
      const productData = getProductBySlug(slug);
      
      if (!productData) {
        navigate("/shop");
        return;
      }
      
      setProduct(productData);
      setSelectedImage(productData.image);
      
      // Get related products from same category
      const related = getProductsByCategory(productData.category)
        .filter(p => p.id !== productData.id)
        .slice(0, 4);
      
      setRelatedProducts(related);
      setIsLoading(false);
    };
    
    // Simulate loading delay
    const timer = setTimeout(() => {
      fetchProduct();
    }, 500);
    
    return () => clearTimeout(timer);
  }, [slug, navigate]);
  
  const handleAddToCart = () => {
    if (product) {
      for (let i = 0; i < quantity; i++) {
        addToCart(product);
      }
      
      toast.success(
        quantity === 1
          ? `${product.name} added to your cart`
          : `${quantity} ${product.name} added to your cart`
      );
    }
  };
  
  const handleQuantityChange = (value: number) => {
    if (value >= 1 && value <= 10) {
      setQuantity(value);
    }
  };

  const handleAddToWishlist = () => {
    toast.success("Added to wishlist");
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: product?.name,
        text: product?.description,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast.success("Link copied to clipboard");
    }
  };

  if (isLoading) {
    return (
      <Layout>
        <div className="container mx-auto py-12 px-4">
          <div className="flex flex-col md:flex-row gap-8 animate-pulse">
            <div className="w-full md:w-1/2">
              <div className="bg-secondary/30 rounded-xl h-96 w-full"></div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="h-8 bg-secondary/30 rounded w-3/4 mb-4"></div>
              <div className="h-6 bg-secondary/30 rounded w-1/4 mb-6"></div>
              <div className="h-4 bg-secondary/30 rounded w-full mb-2"></div>
              <div className="h-4 bg-secondary/30 rounded w-full mb-2"></div>
              <div className="h-4 bg-secondary/30 rounded w-3/4 mb-8"></div>
              <div className="h-12 bg-secondary/30 rounded w-1/3 mb-6"></div>
              <div className="h-12 bg-secondary/30 rounded w-full"></div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  if (!product) {
    return (
      <Layout>
        <div className="container mx-auto py-12 px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Product not found</h2>
          <p className="mb-6">The product you're looking for doesn't exist or has been removed.</p>
          <Button onClick={() => navigate("/shop")}>
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Shop
          </Button>
        </div>
      </Layout>
    );
  }
  
  // Calculate discounted price if there's a discount
  const hasDiscount = product.discountPercentage && product.discountPercentage > 0;
  const discountedPrice = hasDiscount
    ? product.price - (product.price * (product.discountPercentage! / 100))
    : product.price;

  return (
    <Layout>
      <div className="container mx-auto py-12 px-4">
        <Button
          variant="ghost"
          className="mb-4"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Back
        </Button>

        <div className="flex flex-col lg:flex-row gap-8 mb-16">
          {/* Product Images */}
          <div className="w-full lg:w-1/2">
            <div className="relative mb-4 aspect-square overflow-hidden rounded-xl bg-secondary/30">
              <img
                src={selectedImage}
                alt={product.name}
                className="w-full h-full object-cover object-center"
              />
              {product.featured && (
                <Badge className="absolute top-4 right-4 bg-primary text-white">
                  Featured
                </Badge>
              )}
              {hasDiscount && (
                <Badge className="absolute top-4 left-4 bg-primary text-white">
                  {product.discountPercentage}% OFF
                </Badge>
              )}
            </div>
            
            {/* Additional images - simulated for now */}
            <div className="grid grid-cols-4 gap-2">
              <div 
                className="aspect-square rounded-md overflow-hidden cursor-pointer border-2 border-primary"
                onClick={() => setSelectedImage(product.image)}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              {[1, 2, 3].map((_, index) => (
                <div 
                  key={index}
                  className="aspect-square rounded-md overflow-hidden cursor-pointer border border-border hover:border-primary"
                  onClick={() => setSelectedImage(`${product.image}?v=${index + 1}`)}
                >
                  <img
                    src={`${product.image}?v=${index + 1}`}
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
          
          {/* Product Info */}
          <div className="w-full lg:w-1/2">
            <div className="flex flex-col h-full">
              <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
              
              <div className="flex items-center mb-4">
                <div className="flex mr-4">
                  {Array(5).fill(0).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4"
                      fill={i < Math.floor(product.rating) ? "currentColor" : "none"}
                    />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">{product.rating} out of 5</span>
              </div>
              
              <div className="flex items-baseline mb-6">
                {hasDiscount ? (
                  <>
                    <span className="text-3xl font-bold mr-3">
                      ₹{Math.round(discountedPrice).toLocaleString()}
                    </span>
                    <span className="text-xl text-muted-foreground line-through">
                      ₹{product.price.toLocaleString()}
                    </span>
                    <Badge variant="outline" className="ml-3 text-primary border-primary">
                      Save ₹{Math.round(product.price - discountedPrice).toLocaleString()}
                    </Badge>
                  </>
                ) : (
                  <span className="text-3xl font-bold">
                    ₹{product.price.toLocaleString()}
                  </span>
                )}
              </div>
              
              <div className="text-muted-foreground mb-8">
                <p>{product.description}</p>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div>
                  <span className="text-sm text-muted-foreground">Brand</span>
                  <p className="font-medium">{product.brand}</p>
                </div>
                <div>
                  <span className="text-sm text-muted-foreground">Category</span>
                  <p className="font-medium">{product.category}</p>
                </div>
                <div>
                  <span className="text-sm text-muted-foreground">Availability</span>
                  <p className={product.available ? "font-medium text-green-600" : "font-medium text-red-600"}>
                    {product.available ? "In Stock" : "Out of Stock"}
                  </p>
                </div>
              </div>
              
              <div className="mt-auto space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="flex border rounded-md">
                    <button
                      className="px-4 py-2 border-r"
                      onClick={() => handleQuantityChange(quantity - 1)}
                      disabled={quantity <= 1}
                    >
                      -
                    </button>
                    <input
                      type="number"
                      min="1"
                      max="10"
                      value={quantity}
                      onChange={(e) => handleQuantityChange(parseInt(e.target.value))}
                      className="w-16 text-center bg-transparent py-2"
                    />
                    <button
                      className="px-4 py-2 border-l"
                      onClick={() => handleQuantityChange(quantity + 1)}
                      disabled={quantity >= 10}
                    >
                      +
                    </button>
                  </div>
                  
                  <Button
                    className="flex-1"
                    onClick={handleAddToCart}
                    disabled={!product.available}
                  >
                    <ShoppingCart className="mr-2 h-5 w-5" />
                    Add to Cart
                  </Button>
                </div>
                
                <div className="flex space-x-4">
                  <Button variant="outline" className="flex-1" onClick={handleAddToWishlist}>
                    <Heart className="mr-2 h-5 w-5" />
                    Wishlist
                  </Button>
                  <Button variant="outline" className="flex-1" onClick={handleShare}>
                    <Share2 className="mr-2 h-5 w-5" />
                    Share
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Product Details Tabs */}
        <Tabs defaultValue="specifications" className="mb-16">
          <TabsList className="w-full grid grid-cols-3">
            <TabsTrigger value="specifications">Specifications</TabsTrigger>
            <TabsTrigger value="features">Features</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
          </TabsList>
          
          <TabsContent value="specifications" className="p-6 bg-card rounded-md border mt-2">
            <h3 className="text-xl font-bold mb-4">Technical Specifications</h3>
            
            <div className="grid md:grid-cols-2 gap-4">
              {product.specifications && Object.entries(product.specifications).map(([key, value]) => (
                <div key={key} className="flex border-b py-2">
                  <span className="font-medium capitalize w-1/2">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                  <span className="w-1/2">{value}</span>
                </div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="features" className="p-6 bg-card rounded-md border mt-2">
            <h3 className="text-xl font-bold mb-4">Key Features</h3>
            
            <ul className="list-disc pl-5 space-y-2">
              <li>High-performance {product.specifications?.engine} engine</li>
              <li>Advanced braking system for superior control</li>
              <li>Premium suspension for smooth riding experience</li>
              <li>Digital instrument cluster with smartphone connectivity</li>
              <li>LED lighting system for better visibility</li>
              <li>Ergonomic design for maximum comfort</li>
            </ul>
          </TabsContent>
          
          <TabsContent value="reviews" className="p-6 bg-card rounded-md border mt-2">
            <h3 className="text-xl font-bold mb-4">Customer Reviews</h3>
            
            <div className="flex items-center mb-6">
              <div className="flex mr-4">
                {Array(5).fill(0).map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5"
                    fill={i < Math.floor(product.rating) ? "currentColor" : "none"}
                  />
                ))}
              </div>
              <span className="text-lg">{product.rating} out of 5</span>
            </div>
            
            <div className="space-y-6">
              {/* Sample reviews */}
              <div className="border-b pb-4">
                <div className="flex justify-between mb-1">
                  <h4 className="font-semibold">Rahul Sharma</h4>
                  <div className="flex">
                    {Array(5).fill(0).map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4"
                        fill={i < 5 ? "currentColor" : "none"}
                      />
                    ))}
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-1">Verified Purchase • 3 months ago</p>
                <p>Amazing bike! The performance is exceptional and the design is stunning. Worth every rupee.</p>
              </div>
              
              <div className="border-b pb-4">
                <div className="flex justify-between mb-1">
                  <h4 className="font-semibold">Amit Patel</h4>
                  <div className="flex">
                    {Array(4).fill(0).map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4"
                        fill={i < 4 ? "currentColor" : "none"}
                      />
                    ))}
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-1">Verified Purchase • 1 month ago</p>
                <p>Great bike overall. The handling is perfect but the seat could be a bit more comfortable for long rides.</p>
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <h4 className="font-semibold">Priya Singh</h4>
                  <div className="flex">
                    {Array(5).fill(0).map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4"
                        fill={i < 5 ? "currentColor" : "none"}
                      />
                    ))}
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-1">Verified Purchase • 2 weeks ago</p>
                <p>Absolutely love this bike! The power delivery is smooth and the braking is fantastic. It's a head-turner wherever I go.</p>
              </div>
            </div>
          </TabsContent>
        </Tabs>
        
        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div>
            <h3 className="text-2xl font-bold mb-6">Related Products</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map(relProduct => (
                <ProductCard key={relProduct.id} product={relProduct} />
              ))}
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default ProductDetail;
