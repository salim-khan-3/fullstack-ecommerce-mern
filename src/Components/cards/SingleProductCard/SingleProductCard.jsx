import { Heart, Maximize2 } from "lucide-react";

const SingleProductCard = ({ product }) => {
  return (
    <div className="w-full border-b border-gray-100 bg-white">
      <div className="flex flex-row p-4 gap-4 relative group/card transition-all duration-300 hover:shadow-2xl cursor-pointer">
        
        {/* Product Image */}
        <div className="w-32 h-32 flex-shrink-0 flex items-center justify-center overflow-hidden">
          <img
            src={product.img}
            alt={product.name}
            className="max-h-full transition-transform duration-500 group-hover/card:scale-110"
          />
        </div>

        {/* Product Info */}
        <div className="flex flex-col flex-grow justify-between">
          <div>
            {/* Badges */}
            <div className="flex gap-2 mb-1">
              <span className="bg-[#2bbef9] text-white text-[11px] font-bold px-2 py-1 rounded shadow-sm">
                {product.discount}
              </span>
              {product.recommended && (
                <span className="bg-[#7141b1] text-white text-[9px] uppercase font-bold px-2 py-1 rounded shadow-sm">
                  Recommended
                </span>
              )}
            </div>

            <h4 className="text-[14px] font-bold text-[#202435] leading-snug line-clamp-2">
              {product.name}
            </h4>
            <p className="text-[#00b853] text-[10px] font-bold uppercase mb-1">
              In Stock
            </p>

            <div className="flex text-yellow-400 text-[10px] mb-1">
              {"★".repeat(product.rating)}
              {"☆".repeat(5 - product.rating)}
            </div>

            <div className="flex items-center gap-2">
              <span className="text-gray-300 line-through text-sm font-medium">
                ${product.oldPrice.toFixed(2)}
              </span>
              <span className="text-[#d51243] font-bold text-lg">
                ${product.price.toFixed(2)}
              </span>
            </div>
          </div>

          {/* Add to Cart & Icons */}
          <div className="flex items-center justify-between mt-2">
            <button className="bg-white border border-[#2bbef9] text-[#2bbef9] py-1 px-3 rounded-full text-xs font-bold hover:bg-[#2bbef9] hover:text-white transition-all active:scale-95 shadow-sm">
              Add to cart
            </button>

            <div className="flex gap-2 opacity-0 group-hover/card:opacity-100 transition-all">
              <button className="p-2 bg-white rounded-full shadow-md hover:bg-[#2bbef9] hover:text-white">
                <Maximize2 size={16} />
              </button>
              <button className="p-2 bg-white rounded-full shadow-md hover:bg-[#2bbef9] hover:text-white">
                <Heart size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProductCard;
