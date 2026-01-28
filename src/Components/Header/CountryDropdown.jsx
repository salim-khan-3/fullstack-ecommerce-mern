import { ChevronDown } from "lucide-react";
import React from "react";

const CountryDropdown = () => {
  return (
    <div>
      <button className="hidden sm:flex items-center gap-2 border rounded-md px-3 py-2 text-sm shadow-sm hover:bg-gray-50">
        <div className="text-left">
          <span className="block text-[10px] text-gray-400">Your Location</span>
          <span className="text-blue-600 font-medium">Georgia</span>
        </div>
        <ChevronDown size={14} />
      </button>
    </div>
  );
};

export default CountryDropdown;
