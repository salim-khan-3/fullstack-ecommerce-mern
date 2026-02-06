import React, { useState } from "react";
import {
  LayoutGrid,
  List,
  Grid3X3,
  TableCellsSplit,
  ChevronDown,
} from "lucide-react";

const ProductControls = ({ onChangeColumns, columns }) => {
  // Dropdown ওপেন/ক্লোজ করার জন্য স্টেট
  const [sortOpen, setSortOpen] = useState(false);
  const [showOpen, setShowOpen] = useState(false);

  const activeClass =
    "text-[#2bbef9] bg-white shadow-sm border border-gray-100 rounded-md";

  // ডিফল্ট সিলেক্টেড ভ্যালু
  const [sortBy, setSortBy] = useState("Sort by latest");
  const [showCount, setShowCount] = useState(12);

  const sortOptions = [
    "Sort by latest",
    "Price: Low to High",
    "Price: High to Low",
    "Rating: High to Low",
  ];
  const showOptions = [12, 24, 36, 48];

  return (
    <div className="flex flex-wrap justify-between items-center py-3 px-5 bg-[#f8f9fa] border border-gray-100 rounded-xl mb-6 relative z-30">
      {/* বাম পাশের আইকনগুলো */}
      <div className="flex items-center gap-2">
        <button
          onClick={() => onChangeColumns(1)}
          className={`p-2 transition-colors ${
            columns === 1 ? activeClass : "text-gray-400 hover:text-[#2bbef9]"
          }`}
        >
          <List size={20} />
        </button>

        <button
          onClick={() => onChangeColumns(2)}
          className={`p-2 transition-colors ${
            columns === 2 ? activeClass : "text-gray-400 hover:text-[#2bbef9]"
          }`}
        >
          <LayoutGrid size={20} />
        </button>

        <button
          onClick={() => onChangeColumns(3)}
          className={`p-2 transition-colors ${
            columns === 3 ? activeClass : "text-gray-400 hover:text-[#2bbef9]"
          }`}
        >
          <Grid3X3 size={20} />
        </button>

        <button
          onClick={() => onChangeColumns(4)}
          className={`p-2 transition-colors ${
            columns === 4 ? activeClass : "text-gray-400 hover:text-[#2bbef9]"
          }`}
        >
          <TableCellsSplit size={20} />
        </button>
      </div>

      {/* ডান পাশের ড্রপডাউনগুলো */}
      <div className="flex items-center gap-6">
        {/* Sort Dropdown */}
        <div className="relative">
          <div
            onClick={() => {
              setSortOpen(!sortOpen);
              setShowOpen(false);
            }}
            className="flex items-center gap-2 group cursor-pointer"
          >
            <span className="text-gray-500 text-[14px]">{sortBy}</span>
            <ChevronDown
              size={16}
              className={`text-gray-400 transition-transform ${sortOpen ? "rotate-180" : ""}`}
            />
          </div>

          {/* Sort Options Menu */}
          {sortOpen && (
            <div className="absolute top-full right-0 mt-2 w-48 bg-white border border-gray-100 shadow-xl rounded-lg py-2 overflow-hidden z-50">
              {sortOptions.map((option) => (
                <div
                  key={option}
                  onClick={() => {
                    setSortBy(option);
                    setSortOpen(false);
                  }}
                  className="px-4 py-2 text-sm text-gray-600 hover:bg-[#2bbef9]/10 hover:text-[#2bbef9] cursor-pointer transition-colors"
                >
                  {option}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Show Count Dropdown */}
        <div className="relative">
          <div
            onClick={() => {
              setShowOpen(!showOpen);
              setSortOpen(false);
            }}
            className="flex items-center gap-2 group cursor-pointer"
          >
            <span className="text-gray-500 text-[14px]">
              Show{" "}
              <span className="text-gray-800 font-bold ml-1">{showCount}</span>
            </span>
            <ChevronDown
              size={16}
              className={`text-gray-400 transition-transform ${showOpen ? "rotate-180" : ""}`}
            />
          </div>

          {/* Show Options Menu */}
          {showOpen && (
            <div className="absolute top-full right-0 mt-2 w-24 bg-white border border-gray-100 shadow-xl rounded-lg py-2 overflow-hidden z-50">
              {showOptions.map((num) => (
                <div
                  key={num}
                  onClick={() => {
                    setShowCount(num);
                    setShowOpen(false);
                  }}
                  className="px-4 py-2 text-sm text-gray-600 hover:bg-[#2bbef9]/10 hover:text-[#2bbef9] cursor-pointer text-center"
                >
                  {num}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductControls;
