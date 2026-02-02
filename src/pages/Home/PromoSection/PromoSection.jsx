import React from "react";

const PromoSection = () => {
  return (
    <div className="container mx-auto py-10 px-4">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Left Side: Customer Comment (Testimonial) */}
        {/* <div className="md:col-span-3 bg-[#fffef2] p-8 rounded-2xl border border-yellow-100 flex flex-col justify-between shadow-sm">
          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-4">
              The Best Marketplace
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="mt-8 flex items-center gap-4">
            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="Tina Mcdonnell"
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <h4 className="text-sm font-bold text-gray-900">
                Tina Mcdonnell
              </h4>
              <p className="text-xs text-gray-400">Sales Manager</p>
            </div>
          </div>
        </div> */}

        {/* Middle Banner: Legumes & Cereals */}
        <div className="md:col-span-4 relative group overflow-hidden rounded-2xl h-[280px] cursor-pointer">
          <img
            src="https://images.unsplash.com/photo-1512149177596-f817c7ef5d4c?auto=format&fit=crop&q=80&w=800"
            alt="Legumes"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/5 group-hover:bg-black/10 transition-colors"></div>
          <div className="relative z-10 p-8 h-full flex flex-col justify-center">
            <span className="text-green-600 font-bold text-xs uppercase tracking-widest mb-2">
              Weekend Discount 40%
            </span>
            <h2 className="text-2xl font-extrabold text-[#202435] mb-2">
              Legumes & <br /> Cereals
            </h2>
            <p className="text-gray-500 text-sm mb-6">
              Feed your family the best
            </p>
            <button className="bg-[#2bbef9] text-white px-6 py-2 rounded-full text-xs font-bold w-fit hover:bg-[#209dd1] transition-colors shadow-md">
              Shop Now
            </button>
          </div>
        </div>

        {/* Right Banner: Dairy & Eggs */}
        <div className="md:col-span-5 relative group overflow-hidden rounded-2xl h-[280px] cursor-pointer">
          <img
            src="https://images.unsplash.com/photo-1528750997573-59b89d56f4f7?auto=format&fit=crop&q=80&w=800"
            alt="Dairy & Eggs"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/5 group-hover:bg-black/10 transition-colors"></div>
          <div className="relative z-10 p-8 h-full flex flex-col justify-center">
            <span className="text-green-600 font-bold text-xs uppercase tracking-widest mb-2">
              Weekend Discount 40%
            </span>
            <h2 className="text-2xl font-extrabold text-[#202435] mb-2">
              Dairy & Eggs
            </h2>
            <p className="text-gray-500 text-sm mb-6">
              A different kind of grocery store
            </p>
            <button className="bg-[#2bbef9] text-white px-6 py-2 rounded-full text-xs font-bold w-fit hover:bg-[#209dd1] transition-colors shadow-md">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromoSection;
