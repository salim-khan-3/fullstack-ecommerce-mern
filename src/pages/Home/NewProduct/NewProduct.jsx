import { ChevronRight, Heart, Maximize2 } from "lucide-react";
import React from "react";

import pp from "../../../assets/cyber-monday-shopping-sales.jpg"

const NewProduct = () => {

     const products = [
        { id: 1, name: "Werther's Original Caramel Hard Candies", price: 14.97, oldPrice: 20.0, discount: "26%", img: pp, rating: 5 },
        { id: 2, name: "All Natural Italian-Style Chicken Meatballs", price: 7.25, oldPrice: 9.35, discount: "23%", img: pp, rating: 4, recommended: true },
        { id: 3, name: "Angie's Boomchickapop Sweet & Salty Kettle Corn", price: 3.29, oldPrice: 4.29, discount: "24%", img: pp, rating: 5 },
        { id: 4, name: "Field Roast Chao Cheese Creamy Original", price: 19.5, oldPrice: 24.0, discount: "19%", img: pp, rating: 5, organic: true },
        { id: 5, name: "Fresh Organic Honey Crushed Grapes", price: 12.0, oldPrice: 15.0, discount: "20%", img: pp, rating: 5 },
        { id: 6, name: "Werther's Original Caramel Hard Candies", price: 14.97, oldPrice: 20.0, discount: "26%", img: pp, rating: 5 },
        { id: 7, name: "All Natural Italian-Style Chicken Meatballs", price: 7.25, oldPrice: 9.35, discount: "23%", img: pp, rating: 4, recommended: true },
        { id: 8, name: "Angie's Boomchickapop Sweet & Salty Kettle Corn", price: 3.29, oldPrice: 4.29, discount: "24%", img: pp, rating: 5 },
      ];

  return (
    <div className="flex-grow">
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
          <ChevronRight
            size={14}
            className="group-hover:translate-x-1 transition-transform"
          />
        </button>
      </div>

      {/* Product Grid - Gap property added here */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="group/card relative p-5 bg-white border border-gray-100 rounded-2xl hover:shadow-xl hover:border-blue-100 transition-all duration-300 flex flex-col h-full"
          >
            {/* Top Badges */}
            <div className="absolute top-4 left-4 flex flex-col gap-1.5 z-10">
              <span className="bg-[#2bbef9] text-white text-[11px] font-bold px-2 py-1 rounded shadow-sm w-fit">
                {product.discount}
              </span>
              {product.recommended && (
                <span className="bg-[#7141b1] text-white text-[9px] uppercase font-bold px-2 py-1 rounded shadow-sm w-fit">
                  Recommended
                </span>
              )}
              {product.organic && (
                <span className="bg-[#e5f8ed] text-[#038e42] text-[9px] uppercase font-bold px-2 py-1 rounded shadow-sm w-fit">
                  Organic
                </span>
              )}
            </div>

            {/* Hover Actions */}
            <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover/card:opacity-100 transform translate-x-2 group-hover/card:translate-x-0 transition-all duration-300 z-10">
              <button className="p-2 bg-white rounded-full shadow-md border border-gray-50 hover:bg-blue-600 hover:text-white transition-colors">
                <Maximize2 size={16} />
              </button>
              <button className="p-2 bg-white rounded-full shadow-md border border-gray-0 hover:bg-blue-600 hover:text-white transition-colors">
                <Heart size={16} />
              </button>
            </div>

            {/* Product Image */}
            <div className="h-40 flex items-center justify-center mb-4 mt-6">
              <img
                src={product.img}
                alt={product.name}
                className="max-h-full transition-transform duration-500 group-hover/card:scale-105"
              />
            </div>

            {/* Product Info */}
            <div className="flex-grow text-left">
              <h4 className="text-[14px] font-bold text-[#202435] leading-snug mb-2 line-clamp-2 h-10 group-hover/card:text-blue-700">
                {product.name}
              </h4>
              <p className="text-[#00b853] text-[10px] font-bold uppercase mb-2">
                In Stock
              </p>
              <div className="flex text-yellow-400 text-[10px] mb-3">
                {"★".repeat(product.rating)}
                {"☆".repeat(5 - product.rating)}
              </div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-gray-300 line-through text-sm font-medium">
                  ${product.oldPrice.toFixed(2)}
                </span>
                <span className="text-[#d51243] font-bold text-lg">
                  ${product.price.toFixed(2)}
                </span>
              </div>
            </div>

            {/* Add to Cart Button */}
            <button className="w-full cursor-pointer bg-white border border-[#2bbef9] text-[#2bbef9] py-2.5 rounded-full text-xs font-bold hover:bg-[#2bbef9] hover:text-white transition-all active:scale-95 shadow-sm mt-auto">
              Add to cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewProduct;
