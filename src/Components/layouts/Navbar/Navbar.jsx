import { ChevronDown, Menu, Search, ShoppingBag, User, X } from "lucide-react";
import React, { useState } from "react";
import CountryDropdown from "../../Header/CountryDropdown";
import SearchBox from "../../Header/SearchBox";
import CategoryNav from "../../Header/CategoryNav";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // নেভিগেশন আইটেমগুলো এক জায়গায় রাখলাম
  const navItems = [
    { name: "Home", hasDropdown: true },
    { name: "Shop", hasDropdown: true },
    { name: "Meats & Seafood", hasDropdown: false },
    { name: "Bakery", hasDropdown: false },
    { name: "Beverages", hasDropdown: false },
    { name: "Blog", hasDropdown: false },
    { name: "Contact", hasDropdown: false },
  ];

  return (
    <div className="relative">
      {/* ১. Notice Bar & ২. Top Bar (তোর আগের কোড ঠিক আছে) */}
      <div className="w-full bg-[#233a95] text-white py-2 text-center text-[11px] md:text-xs font-medium">
        Due to the COVID 19 epidemic, orders may be processed with a slight delay
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-5">
        <div className="flex items-center justify-between gap-4">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-black text-blue-700 uppercase italic">bacola</h1>
          </div>

          <CountryDropdown />
          <SearchBox />

          <div className="flex items-center gap-4">
            <User className="hidden sm:block cursor-pointer" size={24} />
            <div className="relative cursor-pointer">
              <ShoppingBag size={24} />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] rounded-full w-5 h-5 flex items-center justify-center">1</span>
            </div>
            
            <button className="lg:hidden" onClick={() => setIsMenuOpen(true)}>
              <Menu size={28} />
            </button>
          </div>
        </div>
      </div>

      {/* Desktop Navigation (আলাদা কম্পোনেন্ট) */}
      <CategoryNav />

      {/* --- MOBILE SIDEBAR DRAWER --- */}
      <div 
        className={`fixed inset-0 bg-black/50 z-[999] transition-opacity ${isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
        onClick={() => setIsMenuOpen(false)}
      ></div>

      <div className={`fixed top-0 left-0 h-full w-[280px] bg-white z-[1000] transform transition-transform duration-300 p-5 flex flex-col ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}>
        
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-blue-700 italic">bacola</h2>
          <button onClick={() => setIsMenuOpen(false)}><X size={24} /></button>
        </div>

        {/* Mobile Search */}
        <div className="relative mb-6">
          <input type="text" placeholder="Search..." className="w-full bg-gray-100 rounded-lg py-2 px-4 text-sm outline-none" />
          <Search className="absolute right-3 top-2.5 text-gray-400" size={18} />
        </div>
        {/* <SearchBox></SearchBox> */}

        {/* Dynamic Navigation Links (Map ব্যবহার করে) */}
        <div className="flex flex-col gap-1 overflow-y-auto flex-grow">
          <p className="text-[10px] font-bold text-gray-400 uppercase mb-2">Main Menu</p>
          
          {navItems.map((item, index) => (
            <a 
              key={index} 
              href="#" 
              className="py-3 px-2 border-b border-gray-50 font-medium hover:text-blue-600 flex justify-between items-center"
            >
              {item.name} 
              {item.hasDropdown && <ChevronDown size={16}/>}
            </a>
          ))}
        </div>

        <div className="mt-auto pt-6 border-t">
          <button className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg flex items-center justify-center gap-2">
            <User size={18} /> Sign In
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;






// // 2nd
// import { ChevronDown, Menu, Search, ShoppingBag, User, X } from "lucide-react";
// import React, { useState } from "react";
// import CountryDropdown from "../../Header/CountryDropdown";
// import SearchBox from "../../Header/SearchBox";
// import CategoryNav from "../../Header/CategoryNav";
// // import CategoryNav from "./CategoryNav";

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   return (
//     <div className="relative">
//       {/* ১. Top Blue Notice Bar */}
//       <div className="w-full bg-[#233a95] text-white py-2 text-center text-[11px] md:text-xs font-medium">
//         Due to the <span className="font-bold">COVID 19</span> epidemic, orders may be processed with a slight delay
//       </div>

//       {/* Top Thin Bar - Hidden on Mobile */}
//       <div className="hidden lg:block border-b border-gray-100 py-2 text-xs text-gray-500">
//         <div className="container mx-auto flex justify-between px-4">
//           <div className="flex gap-4">
//             <a href="#" className="hover:text-blue-600">About Us</a>
//             <a href="#" className="hover:text-blue-600">My account</a>
//             <a href="#" className="hover:text-blue-600">Wishlist</a>
//           </div>
//           <div className="flex gap-4 items-center text-[#3bb77e] font-semibold">
//             <span>100% Secure delivery without contacting the courier</span>
//           </div>
//         </div>
//       </div>

//       {/* Main Header */}
//       <div className="container mx-auto px-4 py-5">
//         <div className="flex items-center justify-between gap-4">
//           <div className="flex-shrink-0">
//             <h1 className="text-2xl font-black text-blue-700 tracking-tighter uppercase italic">bacola</h1>
//             <p className="text-[10px] text-gray-400 -mt-1 uppercase">Online Grocery Shopping</p>
//           </div>

//           <CountryDropdown />
//           <SearchBox />

//           <div className="flex items-center gap-4">
//             <User className="cursor-pointer hover:text-blue-600 hidden sm:block" size={24} />
//             <div className="relative cursor-pointer">
//               <ShoppingBag size={24} />
//               <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] rounded-full w-5 h-5 flex items-center justify-center">1</span>
//             </div>
            
//             {/* মোবাইল মেনু বাটন */}
//             <button className="lg:hidden" onClick={() => setIsMenuOpen(true)}>
//               <Menu size={28} />
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Desktop Navigation */}
//       <CategoryNav />

//       {/* --- MOBILE SIDEBAR DRAWER --- */}
//       {/* Background Overlay */}
//       <div 
//         className={`fixed inset-0 bg-black/50 z-[999] transition-opacity duration-300 ${isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
//         onClick={() => setIsMenuOpen(false)}
//       ></div>

//       {/* Sidebar Content */}
//       <div className={`fixed top-0 left-0 h-full w-[280px] bg-white z-[1000] shadow-2xl transform transition-transform duration-300 ease-in-out p-5 flex flex-col ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}>
        
//         {/* Close Button & Logo */}
//         <div className="flex items-center justify-between mb-6">
//           <h2 className="text-xl font-bold text-blue-700 italic">bacola</h2>
//           <button onClick={() => setIsMenuOpen(false)} className="p-1 hover:bg-gray-100 rounded-full">
//             <X size={24} className="text-gray-600" />
//           </button>
//         </div>

//         {/* Mobile Search Field */}
//         <div className="relative mb-6">
//           <input 
//             type="text" 
//             placeholder="Search for products..." 
//             className="w-full bg-gray-100 border border-gray-200 rounded-lg py-2 px-4 text-sm outline-none focus:border-blue-400"
//           />
//           <Search className="absolute right-3 top-2.5 text-gray-400" size={18} />
//         </div>

//         {/* Categories / Navigation Links */}
//         <div className="flex flex-col gap-1 overflow-y-auto flex-grow">
//           <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Main Menu</p>
//           <a href="#" className="py-3 px-2 border-b border-gray-50 font-medium hover:text-blue-600 flex justify-between">Home <ChevronDown size={16}/></a>
//           <a href="#" className="py-3 px-2 border-b border-gray-50 font-medium hover:text-blue-600 flex justify-between">Shop <ChevronDown size={16}/></a>
//           <a href="#" className="py-3 px-2 border-b border-gray-50 font-medium hover:text-blue-600">Meats & Seafood</a>
//           <a href="#" className="py-3 px-2 border-b border-gray-50 font-medium hover:text-blue-600">Bakery</a>
//           <a href="#" className="py-3 px-2 border-b border-gray-50 font-medium hover:text-blue-600">Beverages</a>
//           <a href="#" className="py-3 px-2 border-b border-gray-50 font-medium hover:text-blue-600">Blog</a>
//           <a href="#" className="py-3 px-2 border-b border-gray-50 font-medium hover:text-blue-600">Contact</a>
//         </div>

//         {/* Sign In Button at Bottom */}
//         <div className="mt-auto pt-6 border-t">
//           <button className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-blue-700 transition-all">
//             <User size={18} />
//             Sign In
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

// 1st
// import { ChevronDown, Menu, Search, ShoppingBag, User, X } from "lucide-react";
// import React, { useState } from "react";
// import CountryDropdown from "../../Header/CountryDropdown";
// import SearchBox from "../../Header/SearchBox";
// import CategoryNav from "../../Header/CategoryNav";

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   return (
//     <div>
//         {/* ১. Top Blue Notice Bar (COVID-19 Alert) */}
//       <div className="w-full bg-[#233a95] text-white py-2 text-center text-[11px] md:text-xs font-medium">
//         Due to the <span className="font-bold">COVID 19</span> epidemic, orders may be processed with a slight delay
//       </div>
//       {/* Top Thin Bar - Hidden on Mobile */}
//       <div className="hidden lg:block border-b border-gray-100 py-2 text-xs text-gray-500">
//         <div className="container mx-auto flex justify-between px-4">
//           <div className="flex gap-4">
//             <a href="#" className="hover:text-blue-600">
//               About Us
//             </a>
//             <a href="#" className="hover:text-blue-600">
//               My account
//             </a>
//             <a href="#" className="hover:text-blue-600">
//               Wishlist
//             </a>
//           </div>
//           <div className="flex gap-4 items-center">
//             <span>100% Secure delivery without contacting the courier</span>
//             <span className="border-l pl-4 flex items-center gap-1">
//               Need help? Call Us:{" "}
//               <span className="text-blue-600 font-bold">+ 0020 500</span>
//             </span>
//           </div>
//         </div>
//       </div>

//       {/* Main Header */}
//       <div className="container mx-auto px-4 py-5">
//         <div className="flex items-center justify-between gap-4">
//           {/* Logo */}
//           <div className="flex-shrink-0">
//             <h1 className="text-2xl font-black text-blue-700 tracking-tighter uppercase italic">
//               bacola
//             </h1>
//             <p className="text-[10px] text-gray-400 -mt-1 uppercase">
//               Online Grocery Shopping
//             </p>
//           </div>

//           {/* Location Selector (Hidden on small mobile) */}
//             <CountryDropdown></CountryDropdown>

//           {/* Search Bar */}
       
//             <SearchBox></SearchBox>
//           {/* Icons/Actions */}
//           <div className="flex items-center gap-4">
//             <User
//               className="cursor-pointer hover:text-blue-600 hidden sm:block"
//               size={24}
//             />
//             <div className="relative cursor-pointer">
//               <ShoppingBag size={24} />
//               <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] rounded-full w-5 h-5 flex items-center justify-center">
//                 1
//               </span>
//             </div>
//             {/* Mobile Menu Toggle */}
//             <button
//               className="lg:hidden"
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//             >
//               {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Categories & Main Nav - Hidden on Mobile */}
//       <CategoryNav></CategoryNav>

//       {/* Mobile Drawer Menu */}
//       {isMenuOpen && (
//         <div className="lg:hidden bg-white border-t p-4 space-y-4">
//           <div className="relative">
//             <input
//               type="text"
//               placeholder="Search..."
//               className="w-full bg-gray-100 rounded p-2"
//             />
//             <Search
//               className="absolute right-2 top-2 text-gray-400"
//               size={18}
//             />
//           </div>
//           <div className="flex flex-col gap-3 font-medium">
//             <a href="#" className="py-2 border-b">
//               Home
//             </a>
//             <a href="#" className="py-2 border-b">
//               Shop
//             </a>
//             <a href="#" className="py-2 border-b">
//               Categories
//             </a>
//             <a href="#" className="py-2 border-b">
//               My Account
//             </a>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Navbar;
