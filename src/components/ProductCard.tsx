
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { Product } from "@/types";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();

  const hasDiscount = product.discountPercentage && product.discountPercentage > 0;
  const discountedPrice = hasDiscount
    ? product.price - (product.price * (product.discountPercentage! / 100))
    : product.price;

  return (
    <div className="group relative bg-background rounded-xl overflow-hidden border border-border hover-scale bike-card-shadow">
      <Link to={`/product/${product.slug}`} className="block aspect-square overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        {hasDiscount && (
          <Badge className="absolute top-3 left-3 bg-primary text-white">
            {product.discountPercentage}% OFF
          </Badge>
        )}
        {product.featured && (
          <Badge variant="outline" className="absolute top-3 right-3 bg-black/50 text-white border-white/20">
            Featured
          </Badge>
        )}
      </Link>
      <div className="p-4">
        <div className="flex items-start justify-between mb-1">
          <Link to={`/product/${product.slug}`} className="block">
            <h3 className="font-medium text-lg line-clamp-1 hover:text-primary transition-colors">
              {product.name}
            </h3>
          </Link>
        </div>
        <div className="flex items-center text-sm text-muted-foreground mb-3">
          <span>{product.category}</span>
          <span className="mx-2">•</span>
          <span>{product.brand}</span>
        </div>
        <div className="flex items-center justify-between">
          <div>
            {hasDiscount ? (
              <div className="flex items-center">
                <span className="font-semibold text-lg">₹{Math.round(discountedPrice).toLocaleString()}</span>
                <span className="ml-2 text-sm text-muted-foreground line-through">
                  ₹{product.price.toLocaleString()}
                </span>
              </div>
            ) : (
              <span className="font-semibold text-lg">₹{product.price.toLocaleString()}</span>
            )}
          </div>
          <Button
            variant="outline"
            size="sm"
            className="rounded-full"
            onClick={() => addToCart(product)}
          >
            <ShoppingCart className="h-4 w-4 mr-2" />
            Add
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
