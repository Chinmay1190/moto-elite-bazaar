
import { Link } from "react-router-dom";
import { brands } from "@/data/products";
import { cn } from "@/lib/utils";

const Brands = () => {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">Featured Brands</h2>
          <p className="text-muted-foreground">We partner with the world's top motorcycle manufacturers</p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
          {brands.map((brand) => (
            <Link
              key={brand.id}
              to={`/brand/${brand.slug}`}
              className={cn(
                "flex flex-col items-center justify-center w-24 md:w-32 group transition-all",
                "opacity-70 hover:opacity-100 hover:scale-110"
              )}
            >
              <div className="h-16 w-16 md:h-20 md:w-20 flex items-center justify-center bg-secondary/50 dark:bg-secondary/30 rounded-full mb-2">
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="h-10 w-10 md:h-12 md:w-12 object-contain"
                />
              </div>
              <span className="text-sm text-center font-medium text-muted-foreground group-hover:text-foreground">
                {brand.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;
