import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronRight } from "lucide-react";
import pp from "../../../assets/cyber-monday-shopping-sales.jpg";
import ProductCard from "../../../Components/cards/ProductCard/ProductCard";

const NewProduct = () => {
  const products = [
    { id: 1, name: "Werther's Original Caramel Hard Candies", price: 14.97, oldPrice: 20.0, discount: "26%", img: pp, rating: 5 },
    { id: 2, name: "All Natural Italian-Style Chicken Meatballs", price: 7.25, oldPrice: 9.35, discount: "23%", img: pp, rating: 4, recommended: true },
    { id: 3, name: "Angie's Boomchickapop Sweet & Salty Kettle Corn", price: 3.29, oldPrice: 4.29, discount: "24%", img: pp, rating: 5 },
    { id: 4, name: "Field Roast Chao Cheese Creamy Original", price: 19.5, oldPrice: 24.0, discount: "19%", img: pp, rating: 5, organic: true },
    { id: 5, name: "Fresh Organic Honey Crushed Grapes", price: 12.0, oldPrice: 15.0, discount: "20%", img: pp, rating: 5 },
    { id: 6, name: "Werther's Original Caramel Hard Candies", price: 14.97, oldPrice: 20.0, discount: "26%", img: pp, rating: 5 },
    { id: 7, name: "All Natural Italian-Style Chicken Meatballs", price: 7.25, oldPrice: 9.35, discount: "23%", img: pp, rating: 4 },
    { id: 8, name: "Angie's Boomchickapop Sweet & Salty Kettle Corn", price: 3.29, oldPrice: 4.29, discount: "24%", img: pp, rating: 5 },
    { id: 9, name: "Popcorn Sweet & Salty", price: 3.29, oldPrice: 4.29, discount: "24%", img: pp, rating: 5 },
    { id: 10, name: "Kettle Corn", price: 3.29, oldPrice: 4.29, discount: "24%", img: pp, rating: 5 },
  ];

  // Embla setup: Mobile-e active thakbe, Laptop screen (1024px) theke active: false (mane slider off)
  const [emblaRef] = useEmblaCarousel({
    breakpoints: {
      "(min-width: 1024px)": { active: false },
    },
    align: "start",
    dragFree: true,
  });

  return (
    <div className="flex-grow mb-10">
      {/* Header Section */}
      <div className="flex justify-between items-end mb-8 border-b border-gray-100 pb-4">
        <div>
          <h3 className="text-xl font-bold text-gray-900 uppercase tracking-tight">
            NEW PRODUCTS
          </h3>
          <p className="text-xs text-gray-400 font-medium mt-1 uppercase tracking-wider">
            New products with updated stocks.
          </p>
        </div>

        <button className="flex items-center gap-2 border border-gray-200 rounded-full px-5 py-2 text-xs font-bold text-gray-500 hover:bg-blue-600 hover:text-white transition-all shadow-sm group">
          View All
          <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      {/* Slider & Grid Wrapper */}
      <div className="overflow-hidden lg:overflow-visible" ref={emblaRef}>
        <div className="flex lg:grid lg:grid-cols-4 lg:gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="flex-[0_0_50%] min-w-0 md:flex-[0_0_33.33%] lg:flex-none lg:w-full px-2 lg:px-0"
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewProduct;


