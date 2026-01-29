import { Search, ShoppingBag, User } from "lucide-react";
import DropdownModal from "./DropdownModal";

const MiddleHeader = () => {
  return (
    <div className="bg-white w-full border-b border-gray-100">
      <div className="container mx-auto px-4 py-6 flex items-center justify-between gap-5">
        {/* first section  */}
        <div className="flex items-center justify-between gap-8">
          <div className="">
            <h1 className="text-3xl font-black text-blue-700 uppercase italic tracking-tighter">
              bacola
            </h1>
          </div>
          {/* DropdownModal ekhon Logo-r pashe thakbe */}
          <div className="hidden lg:block">
            <DropdownModal />
          </div>
        </div>

        {/* 2. Search Section (Full Width Grow) */}
        <div className="hidden flex-1  md:flex relative w-full max-w-[650px] mx-auto">
          <input
            type="text"
            placeholder="Search for products..."
            className="w-full bg-[#f3f4f7] border border-gray-100 rounded-lg py-3.5 px-5 text-[15px] focus:ring-2 focus:ring-blue-500/20 focus:bg-white outline-none transition-all"
          />
          <Search
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
            size={20}
          />
        </div>

        {/* 3. Action Icons Section */}
        <div className="flex shrink-0  items-center gap-6 justify-self-end">
          {/* User Icon with Circle Border */}
          <div className="p-2.5 border border-gray-200 rounded-full hover:bg-gray-50 cursor-pointer transition-colors">
            <User className="text-gray-700" size={22} />
          </div>

          {/* Cart with Badge */}
          <div className="flex items-center gap-3 cursor-pointer group">
            <div className="relative p-2.5 bg-red-50 rounded-full group-hover:bg-red-100 transition-colors">
              <ShoppingBag size={22} className="text-red-600" />
              <span className="absolute -top-1 -right-1 bg-red-600 text-white text-[11px] font-bold rounded-full w-5 h-5 flex items-center justify-center border-2 border-white">
                1
              </span>
            </div>
            {/* Optional: Cart Value Price */}
            <div className="hidden lg:block text-sm font-bold text-gray-800">
              $0.00
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiddleHeader;
