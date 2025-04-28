
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-shop-purple-light py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-shop-black mb-6">
            Discover Products that Bring Joy
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8">
            Quality products for your daily life. Explore our collection of unique items that combine style, function, and happiness.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg" className="bg-shop-purple hover:bg-shop-purple-dark text-white">
              <Link to="/products">
                Shop Now
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-shop-purple text-shop-purple hover:bg-shop-purple/10">
              <Link to="/about">
                Learn More
              </Link>
            </Button>
          </div>
        </div>
      </div>
      <div className="hidden lg:block absolute right-0 top-0 h-full w-2/5">
        <div className="h-full bg-gradient-to-l from-shop-purple/10 to-transparent"></div>
      </div>
    </section>
  );
};

export default HeroSection;
