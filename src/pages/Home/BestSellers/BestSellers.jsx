import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import pp from "../../../assets/cyber-monday-shopping-sales.jpg"

// Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Heart, Maximize2 } from 'lucide-react';

const BestSellers = () => {
  const products = [
    { id: 1, name: "Werther's Original Caramel Hard Candies", price: 14.97, oldPrice: 20.00, discount: "26%", img: pp, rating: 5 },
    { id: 2, name: "All Natural Italian-Style Chicken Meatballs", price: 7.25, oldPrice: 9.35, discount: "23%", img: pp, rating: 4, recommended: true },
    { id: 3, name: "Angie's Boomchickapop Sweet & Salty Kettle Corn", price: 3.29, oldPrice: 4.29, discount: "24%", img: pp, rating: 5 },
    { id: 4, name: "Field Roast Chao Cheese Creamy Original", price: 19.50, oldPrice: 24.00, discount: "19%", img: pp, rating: 5, organic: true },
    { id: 5, name: "Werther's Original Caramel Hard Candies", price: 14.97, oldPrice: 20.00, discount: "26%", img: pp, rating: 5 },
  ];

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="flex flex-col lg:flex-row gap-8">
        
        {/* Left Side Banner - Fixed Size & Professional Look */}
        <div className="w-full lg:w-[280px] bg-[#fcd34d] rounded-2xl p-8 relative overflow-hidden flex flex-col min-h-[450px] shadow-sm">
          <p className="text-[#8b5e3c] font-medium text-sm">Bacola Natural Foods</p>
          <h2 className="text-3xl font-extrabold text-[#202435] mt-2 leading-tight">
            Special Organic <br /> 
            <span className="font-light">Roats Burger</span>
          </h2>
          <div className="mt-6">
            <p className="text-gray-600 text-xs">only-from</p>
            <p className="text-[#ed174a] text-3xl font-black">$14.99</p>
          </div>
          {/* Burger Image Placeholder */}
          <div className="absolute bottom-4 right-[-20px] w-full">
             <img src="https://i.ibb.co/L5Xv6hB/burger-promo.png" alt="burger" className="w-56 h-auto object-contain transform -rotate-12" />
          </div>
        </div>

        {/* Right Side Content */}
        <div className="flex-1 overflow-hidden">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h3 className="text-xl font-bold text-gray-900 uppercase">Best Sellers</h3>
              <p className="text-xs text-gray-400 font-medium mt-1">Do not miss the current offers until the end of March.</p>
            </div>
            <button className="border border-gray-200 rounded-full px-5 py-2 text-xs font-bold text-gray-500 hover:bg-blue-600 hover:text-white transition-all">View All →</button>
          </div>

          <Swiper
            modules={[Navigation]}
            navigation
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
            className="border-l h-full border-t border-gray-100 "
          >
            {products.map((product) => (
              <SwiperSlide key={product.id} className="border-r h-auto border-b border-gray-100">
                <div className="bg-white p-5 relative group flex flex-col transition-all duration-300 hover:shadow-2xl hover:z-20 cursor-pointer">
                  
                  {/* Top Badges (Left) */}
                  <div className="absolute top-4 left-4 flex flex-col gap-1.5 z-10">
                    <span className="bg-[#2bbef9] text-white text-[11px] font-bold px-2 py-1 rounded shadow-sm w-fit">
                      {product.discount}
                    </span>
                    {product.recommended && (
                      <span className="bg-[#7141b1] text-white text-[9px] uppercase font-bold px-2 py-1 rounded shadow-sm">Recommended</span>
                    )}
                    {product.organic && (
                      <span className="bg-[#e5f8ed] text-[#038e42] text-[9px] uppercase font-bold px-2 py-1 rounded">Organic</span>
                    )}
                  </div>

                  {/* HOVER ICONS (Top Right) */}
                  <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300 z-10">
                    <button className="p-2 bg-white rounded-full shadow-md hover:bg-blue-600 hover:text-white transition-colors">
                      <Maximize2 size={16} />
                    </button>
                    <button className="p-2 bg-white rounded-full shadow-md hover:bg-blue-600 hover:text-white transition-colors">
                      <Heart size={16} />
                    </button>
                  </div>

                  {/* Image Container */}
                  <div className="h-44 flex items-center justify-center mb-4 overflow-hidden mt-4">
                    <img src={product.img} alt={product.name} className="max-h-full transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  
                  {/* Info */}
                  <div className="flex-grow">
                    <h4 className="text-[14px] font-bold text-[#202435] leading-snug mb-2 line-clamp-2 h-10 group-hover:text-blue-700">
                      {product.name}
                    </h4>
                    <p className="text-[#00b853] text-[10px] font-bold uppercase mb-2">In Stock</p>
                    
                    <div className="flex text-yellow-400 text-[10px] mb-3">
                      {'★'.repeat(product.rating)}{'☆'.repeat(5 - product.rating)}
                      <span className="text-gray-300 ml-1">1</span>
                    </div>

                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-gray-300 line-through text-sm font-medium">${product.oldPrice.toFixed(2)}</span>
                      <span className="text-[#d51243] font-bold text-lg">${product.price.toFixed(2)}</span>
                    </div>
                  </div>

                  {/* Add to Cart Button */}
                  <button className="w-full bg-white border border-[#2bbef9] text-[#2bbef9] py-2 rounded-full text-xs font-bold hover:bg-[#2bbef9] hover:text-white transition-all active:scale-95 shadow-sm">
                    Add to cart
                  </button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default BestSellers;