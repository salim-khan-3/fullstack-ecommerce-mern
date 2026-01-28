import React from "react";
import { ChevronDown, Menu } from "lucide-react";
import { GiSteak, GiCupcake, GiCoffeeCup } from "react-icons/gi"; // icons এর জন্য react-icons ব্যবহার করতে পারো

const CategoryNav = () => {
  return (
    <div className="hidden lg:block border-t border-b border-gray-100">
      <div className="container mx-auto px-4 flex items-center justify-between gap-8">
        
        {/* All Categories Button with Badge */}
        <div className="relative group py-3">
          <button className="bg-[#2bbef9] text-white px-6 py-4 flex items-center gap-3 rounded-full transition-all hover:bg-[#233a95]">
            <Menu size={18} />
            <span className="font-bold text-[13px]">ALL CATEGORIES</span>
            <ChevronDown size={16} />
          </button>
          
          {/* Badge: Total Products */}
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-gray-100 text-[#71778e] text-[9px] px-2 py-0.5 rounded-full border border-gray-200 font-bold whitespace-nowrap">
            TOTAL 63 PRODUCTS
          </div>
        </div>

        {/* Nav Links */}
        <div className="flex gap-7 items-center text-[13px] font-bold uppercase tracking-wide text-[#233a95]">
          <a href="#" className="flex items-center gap-1 text-[#2bbef9] bg-blue-50 px-4 py-2 rounded-full">
            Home <ChevronDown size={14} />
          </a>
          
          <a href="#" className="flex items-center gap-1 hover:text-[#2bbef9] transition-colors">
            Shop <ChevronDown size={14} />
          </a>

          <a href="#" className="flex items-center gap-2 hover:text-[#2bbef9] transition-colors">
            <GiSteak className="text-gray-400" size={18} />
            Meats & Seafood
          </a>

          <a href="#" className="flex items-center gap-2 hover:text-[#2bbef9] transition-colors">
            <GiCupcake className="text-gray-400" size={18} />
            Bakery
          </a>

          <a href="#" className="flex items-center gap-2 hover:text-[#2bbef9] transition-colors">
            <GiCoffeeCup className="text-gray-400" size={18} />
            Beverages
          </a>

          <a href="#" className="hover:text-[#2bbef9] transition-colors">Blog</a>
          <a href="#" className="hover:text-[#2bbef9] transition-colors">Contact</a>
        </div>
      </div>
    </div>
  );
};

export default CategoryNav;