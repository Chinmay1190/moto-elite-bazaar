
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const PromoBanner = () => {
  return (
    <section className="py-16 px-4 bg-[url('https://images.unsplash.com/photo-1507036066871-b7e8032b3dea?w=1600&fit=crop')] bg-cover bg-center relative">
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="container mx-auto relative z-10">
        <div className="max-w-2xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Limited Time Offer
          </h2>
          <p className="text-xl mb-8">
            Get up to 10% off on selected premium bikes and free accessories worth ₹25,000
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/promotions">
              <Button size="lg" className="w-full sm:w-auto">
                View Offers <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/shop">
              <Button variant="outline" size="lg" className="w-full sm:w-auto border-white text-white hover:bg-white/20">
                Shop Now
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoBanner;
