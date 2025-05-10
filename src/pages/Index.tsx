
import Layout from "@/components/Layout";
import Hero from "@/components/home/Hero";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import Categories from "@/components/home/Categories";
import Brands from "@/components/home/Brands";
import PromoBanner from "@/components/home/PromoBanner";
import Testimonials from "@/components/home/Testimonials";
import { getProducts } from "@/data/products";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  const productCount = getProducts().length;
  
  return (
    <Layout>
      <Hero />
      <div className="container mx-auto flex justify-center -mt-8 mb-8">
        <Badge variant="outline" className="text-lg py-2 px-4 bg-background/80 backdrop-blur-sm shadow-lg border-primary/50">
          Browse Our Collection of {productCount}+ Premium Superbikes
        </Badge>
      </div>
      <FeaturedProducts />
      <Categories />
      <PromoBanner />
      <Brands />
      <Testimonials />
    </Layout>
  );
};

export default Index;
