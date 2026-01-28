import { Search } from "lucide-react";
import React from "react";

const SearchBox = () => {
  return (
    <div className="hidden md:flex flex-grow max-w-xl relative">
      <input
        type="text"
        placeholder="Search for products..."
        className="w-full bg-gray-100 border-none rounded-md py-3 px-4 focus:ring-2 focus:ring-blue-500 outline-none"
      />
      <Search className="absolute right-3 top-3 text-gray-400" size={20} />
    </div>
  );
};

export default SearchBox;
