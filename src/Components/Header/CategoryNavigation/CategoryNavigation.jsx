import React from "react";
import { ChevronDown, Menu } from "lucide-react";
import { GiCoffeeCup, GiCupcake, GiSteak } from "react-icons/gi";

const CategoryNavigation = () => {
  const navLinks = [
    { name: "Home", hasDropdown: true, isActive: true },
    { name: "Shop", hasDropdown: true },
    { name: "Meats & Seafood", icon: <GiSteak size={18} /> },
    { name: "Bakery", icon: <GiCupcake size={18} /> },
    { name: "Beverages", icon: <GiCoffeeCup size={18} /> },
    { name: "Blog" },
    { name: "Contact" },
  ];

  return (
    <div className="w-full bg-white border-b border-gray-100 shadow-sm">
      <div className="container mx-auto px-4 flex items-center">
        {/* 1. All Categories Button with Dropdown Logic */}
        <div className="relative group mr-10 py-4">
          <button className="bg-[#2bbef9] text-white px-7 py-4 flex items-center gap-3 rounded-full transition-all duration-300 hover:bg-[#233a95] shadow-lg shadow-blue-200">
            <Menu size={20} />
            <span className="font-bold text-[14px] tracking-wide">
              ALL CATEGORIES
            </span>
            <ChevronDown
              size={16}
              className="group-hover:rotate-180 transition-transform duration-300"
            />
          </button>

          {/* Badge: Total Products */}
          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 bg-[#f3f4f7] text-[#71778e] text-[10px] px-3 py-1 rounded-full border border-gray-200 font-bold whitespace-nowrap shadow-sm">
            TOTAL 63 PRODUCTS
          </div>

          {/* Hidden Dropdown Menu (Example) */}
          <div className="absolute top-[100%] left-0 w-[250px] bg-white shadow-xl border border-gray-100 rounded-lg py-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
            <ul className="flex flex-col text-gray-600 font-medium">
              <li className="px-6 py-3 hover:bg-blue-50 hover:text-blue-500 cursor-pointer border-b border-gray-50">
                Fruits & Vegetables
              </li>
              <li className="px-6 py-3 hover:bg-blue-50 hover:text-blue-500 cursor-pointer border-b border-gray-50">
                Meats & Seafood
              </li>
              <li className="px-6 py-3 hover:bg-blue-50 hover:text-blue-500 cursor-pointer">
                Beverages
              </li>
            </ul>
          </div>
        </div>

        {/* 2. Navigation Links */}
        <nav className="flex items-center gap-2">
          {navLinks.map((item, index) => (
            <div key={index} className="relative group">
              <a
                href="#"
                className={`flex items-center gap-2 px-4 py-8 text-[13px] font-bold uppercase tracking-wider transition-all duration-300
                  ${item.isActive ? "text-[#2bbef9]" : "text-[#233a95] hover:text-[#2bbef9]"}
                `}
              >
                {item.icon && (
                  <span className="text-gray-400 group-hover:text-[#2bbef9] transition-colors duration-300">
                    {item.icon}
                  </span>
                )}

                {item.name}

                {item.hasDropdown && (
                  <ChevronDown
                    size={14}
                    className="opacity-50 group-hover:rotate-180 transition-transform duration-300"
                  />
                )}

                {/* Animated Underline */}
                <span
                  className={`absolute bottom-[25px] left-4 h-[2px] bg-[#2bbef9] transition-all duration-300 
                  ${item.isActive ? "w-[calc(100%-32px)]" : "w-0 group-hover:w-[calc(100%-32px)]"}`}
                />
              </a>

              {/* Home/Shop Dropdown indicator (Optional) */}
              {item.isActive && (
                <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-blue-400 rounded-full" />
              )}
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default CategoryNavigation;
