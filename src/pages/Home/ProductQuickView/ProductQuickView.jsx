import React, { useState } from "react";
import { ArrowLeftRight, Check, Heart, Minus, Plus, X } from "lucide-react";
import { FaStar } from "react-icons/fa";
import ProductImageZoom from "../ProductImageZoom/ProductImageZoom";

const ProductQuickView = ({ product, onClose }) => {
  // ডামি গ্যালারি (এখানে সরাসরি লিঙ্কও দিতে পারেন)
  const productGallery = [product.img, product.img, product.img];
  const [selectedImg, setSelectedImg] = useState(product.img);
  const [quantity, setQuantity] = useState(1);

  if (!product) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-[100] p-4">
      {/* Modal Container */}
      <div className="bg-white w-full max-w-[900px] max-h-[95vh] overflow-y-auto rounded-2xl p-8 relative animate-scaleUp shadow-2xl">
        
        {/* Header Section */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-[#233a95] mb-2 pr-10">{product.name}</h2>
          <div className="flex items-center gap-6 text-sm text-gray-500">
            <p>Brands: <span className="font-semibold text-gray-800">Welch</span></p>
            <div className="flex items-center gap-1">
              Rating: 
              <div className="flex text-yellow-400">
                <FaStar size={12} />
                <FaStar size={12} />
                <FaStar size={12} />
                <FaStar size={12} />
                <FaStar size={12} />
              </div>
            </div>
          </div>
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-full bg-gray-100 hover:bg-red-500 hover:text-white transition-all"
          >
            <X size={20} />
          </button>
        </div>

        <hr className="mb-8 border-gray-100" />

        <div className="flex flex-col md:flex-row gap-10">
          {/* LEFT SIDE: Image Gallery */}
          <div className="w-full md:w-[45%]">
            <div className="relative border rounded-xl overflow-hidden bg-white h-[350px] flex items-center justify-center">
               {/* জুম কম্পোনেন্ট */}
               <ProductImageZoom Image={selectedImg} />
               
               {/* Badges on Image */}
               <div className="absolute top-4 left-4 flex flex-col gap-2 z-10">
                 <span className="bg-[#2bbef9] text-white text-[11px] font-bold px-2 py-1 rounded shadow-sm">23%</span>
                 <span className="bg-[#7141b1] text-white text-[9px] uppercase font-bold px-2 py-1 rounded shadow-sm">Recommended</span>
               </div>
            </div>

            {/* Thumbnails */}
            <div className="flex gap-3 mt-4 justify-start">
              {productGallery.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImg(img)}
                  className={`w-16 h-16 border-2 rounded-lg overflow-hidden transition-all ${
                    selectedImg === img ? "border-blue-500 scale-105" : "border-gray-100 hover:border-gray-300"
                  }`}
                >
                  <img src={img} alt="thumb" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE: Product Info */}
          <div className="w-full md:w-[55%] flex flex-col gap-5">
            {/* Price */}
            <div className="flex items-center gap-3">
              <span className="text-gray-300 line-through text-xl font-medium">
                ${product.oldPrice.toFixed(2)}
              </span>
              <span className="text-[#d51243] font-bold text-3xl">
                ${product.price.toFixed(2)}
              </span>
            </div>

            {/* Stock */}
            <div className="w-fit bg-[#e5f8ed] text-[#00b853] text-[10px] font-bold px-3 py-1 rounded-full uppercase">
              In Stock
            </div>

            {/* Description */}
            <p className="text-[#71778e] text-[15px] leading-relaxed">
              {product.description}
            </p>

            {/* Actions: Quantity & Cart */}
            <div className="flex items-center gap-4 py-4">
              <div className="flex items-center bg-[#f3f4f7] rounded-full px-4 py-3 border border-gray-100">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="text-gray-500 hover:text-black">
                  <Minus size={18} />
                </button>
                <span className="px-6 font-bold text-gray-700 min-w-[40px] text-center text-lg">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} className="text-gray-500 hover:text-black">
                  <Plus size={18} />
                </button>
              </div>
              <button className="flex-grow bg-[#233a95] text-white py-4 px-8 rounded-full font-bold hover:bg-[#1a2b70] transition-all shadow-lg active:scale-95 uppercase text-sm">
                Add to cart
              </button>
            </div>

            {/* Wishlist & Compare */}
            <div className="flex items-center gap-6">
              <button className="flex items-center gap-2 text-[#233a95] text-xs font-bold uppercase hover:opacity-70 transition-opacity">
                <Heart size={18} className="text-gray-400" />
                Add to Wishlist
              </button>
              <button className="flex items-center gap-2 text-[#233a95] text-xs font-bold uppercase hover:opacity-70 transition-opacity">
                <ArrowLeftRight size={18} className="text-gray-400" />
                Compare
              </button>
            </div>

            {/* Checklist */}
            <div className="space-y-2 pt-6 border-t border-gray-50">
              <div className="flex items-center gap-2 text-[14px]">
                <Check size={16} className="text-[#00b853]" />
                <span className="text-gray-500">Type: <span className="text-gray-800 font-medium ml-1">Organic</span></span>
              </div>
              <div className="flex items-center gap-2 text-[14px]">
                <Check size={16} className="text-[#00b853]" />
                <span className="text-gray-500">MFG: <span className="text-gray-800 font-medium ml-1">Jun 4.2021</span></span>
              </div>
              <div className="flex items-center gap-2 text-[14px]">
                <Check size={16} className="text-[#00b853]" />
                <span className="text-gray-500">LIFE: <span className="text-gray-800 font-medium ml-1">30 days</span></span>
              </div>
            </div>

            {/* Meta */}
            <div className="pt-6 border-t border-gray-50">
              <p className="text-[13px] text-gray-400 mb-1">Category: <span className="text-gray-600 font-medium">Meats & Seafood</span></p>
              <p className="text-[13px] text-gray-400">Tags: <span className="text-gray-600 font-medium italic underline">chicken, natural, organic</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductQuickView;