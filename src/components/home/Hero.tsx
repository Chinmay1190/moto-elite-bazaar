
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const slides = [
  {
    id: 1,
    title: "Experience the Thrill",
    subtitle: "Discover the ultimate collection of premium superbikes",
    image: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=1600&h=800&fit=crop",
    cta: "Shop Now",
    url: "/shop"
  },
  {
    id: 2,
    title: "Performance Unleashed",
    subtitle: "Ride with confidence with our high-performance machines",
    image: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=1600&h=800&fit=crop",
    cta: "Explore Collection",
    url: "/categories"
  },
  {
    id: 3,
    title: "Premium Brands",
    subtitle: "Choose from the world's most prestigious motorcycle brands",
    image: "https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=1600&h=800&fit=crop",
    cta: "View Brands",
    url: "/brands"
  }
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <section className="relative h-[80vh] md:h-[85vh] overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div 
          key={slide.id}
          className={cn(
            "absolute inset-0 transition-opacity duration-1000",
            index === currentSlide ? "opacity-100" : "opacity-0 pointer-events-none"
          )}
        >
          {/* Background image with overlay */}
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
          
          {/* Content */}
          <div className="relative h-full flex flex-col items-center justify-center text-center text-white p-4">
            <div className="animate-fade-in max-w-3xl mx-auto">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-shadow">
                {slide.title}
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl mb-8 text-white/90">
                {slide.subtitle}
              </p>
              <Link to={slide.url}>
                <Button size="lg" className="rounded-full font-semibold px-8 py-6">
                  {slide.cta} <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      ))}
      
      {/* Slide indicators */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={cn(
              "w-3 h-3 rounded-full transition-all",
              index === currentSlide 
                ? "bg-white w-8" 
                : "bg-white/50 hover:bg-white/80"
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
