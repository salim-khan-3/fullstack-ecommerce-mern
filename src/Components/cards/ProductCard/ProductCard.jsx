




import { Heart, Maximize2 } from "lucide-react";
import React from "react";

const ProductCard = ({ product,onQuickView }) => {
  return (
    <div className="flex-[0_0_100%] sm:flex-[0_0_50%] md:flex-[0_0_33.33%] lg:flex-[0_0_25%] min-w-0 border-r border-b border-gray-100 bg-white">
      <div className="p-5 relative group/card flex flex-col h-full transition-all duration-300 hover:shadow-2xl hover:z-20 cursor-pointer">
        {/* Badges, Icons, Image and Info (Same as before) */}
        <div className="absolute top-4 left-4 flex flex-col gap-1.5 z-10">
          <span className="bg-[#2bbef9] text-white text-[11px] font-bold px-2 py-1 rounded shadow-sm w-fit">
            {product.discount}
          </span>
          {product.recommended && (
            <span className="bg-[#7141b1] text-white text-[9px] uppercase font-bold px-2 py-1 rounded shadow-sm">
              Recommended
            </span>
          )}
        </div>

        {/* heart and expand section  */}
        <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover/card:opacity-100 transform translate-x-2 group-hover/card:translate-x-0 transition-all duration-300 z-10">
          <button  onClick={onQuickView} className="p-2 bg-white rounded-full shadow-md hover:bg-blue-600 hover:text-white">
            <Maximize2 size={16} />
          </button>
          <button className="p-2 bg-white rounded-full shadow-md hover:bg-blue-600 hover:text-white">
            <Heart size={16} />
          </button>
        </div>

        <div className="h-44 flex items-center justify-center mb-4 overflow-hidden mt-4">
          <img
            src={product.img}
            alt={product.name}
            className="max-h-full transition-transform duration-500 group-hover/card:scale-110"
          />
        </div>

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

        <button className="w-full bg-white border border-[#2bbef9] text-[#2bbef9] py-2 rounded-full text-xs font-bold hover:bg-[#2bbef9] hover:text-white transition-all active:scale-95 shadow-sm">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
