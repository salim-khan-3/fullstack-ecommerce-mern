import React from "react";
import { ChevronRight } from "lucide-react";
import {
  Apple,
  Drumstick,
  Egg,
  Coffee,
  Cake,
  Snowflake,
  Cookie,
  Leaf,
} from "lucide-react";
import { GiCoffeeCup } from "react-icons/gi";

const categories = [
  { name: "Fruits & Vegetables", icon: Apple },
  { name: "Meats & Seafood", icon: Drumstick },
  { name: "Breakfast & Dairy", icon: Egg },
  {
    name: "Beverages",
      icon: GiCoffeeCup,
    link: "/category/beverages",
    children: ["Soft Drinks", "Juice", "Coffee", "Tea", "Energy Drinks","Energy Drinks","Energy Drinks"],
  },
  { name: "Breads & Bakery", icon: Cake },
  { name: "Frozen Foods", icon: Snowflake },
  { name: "Biscuits & Snacks", icon: Cookie },
  { name: "Grocery & Staples", icon: Leaf },
];

const CategorySideNav = () => {
  return (
    <div className="w-full h-full border border-gray-100 shadow-sm pt-5">
      <ul className="divide-y divide-gray-100">
        {categories.map((item, index) => {
          const Icon = item.icon;

          return (
            <li key={index} className="relative group">
             
              <div
                className="flex items-center justify-between px-5 py-3 cursor-pointer
                text-gray-600 hover:bg-gray-50 hover:text-[#2bbef9] transition"
              >
                <div className="flex items-center gap-3">
                  <Icon
                    size={18}
                    className="text-gray-400 group-hover:text-[#2bbef9]"
                  />
                  <span className="text-[14px] font-medium">{item.name}</span>
                </div>

                {item.children && (
                  <ChevronRight size={16} className="text-gray-400" />
                )}
              </div>

          
              {item.children && (
                <ul
                  className="absolute  top-0 left-full min-w-[180px] bg-white
                  border border-gray-100 rounded-lg shadow-lg
                  opacity-0 invisible group-hover:opacity-100 group-hover:visible
                  transition-all duration-200 "
                >
                  {item.children.map((child, i) => (
                    <li
                      key={i}
                      className="px-4 py-2 z-50 text-[14px] text-gray-600
                      hover:bg-gray-50 hover:text-[#2bbef9] cursor-pointer"
                    >
                      {child}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CategorySideNav;
