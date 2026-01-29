// import { ChevronDown, Menu, Search, ShoppingBag, User, X } from "lucide-react";
// import CountryDropdown from "../../Header/CountryDropdown";
// import SearchBox from "../../Header/SearchBox";
// import CategoryNav from "../../Header/CategoryNav";

// const Navbar = () => {
//   return (
//     <div className="relative">
//       <div className="w-full bg-[#233a95] text-white py-2 text-center text-[11px] md:text-xs font-medium">
//         Due to the COVID 19 epidemic, orders may be processed with a slight
//         delay
//       </div>

//       {/* Main Header */}
//       <div className="container mx-auto px-5 py-5">
//         <div className="flex items-center justify-between gap-4">
//           <CountryDropdown />
//           <SearchBox />

//           <div className="flex items-center gap-4">
//             <User className="hidden sm:block cursor-pointer" size={24} />
//             <div className="relative cursor-pointer">
//               <ShoppingBag size={24} />
//               <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] rounded-full w-5 h-5 flex items-center justify-center">
//                 1
//               </span>
//             </div>

//             {/* <button className="lg:hidden" onClick={() => setIsMenuOpen(true)}>
//               <Menu size={28} />
//             </button> */}
//           </div>
//         </div>
//       </div>

//       {/* Desktop Navigation (আলাদা কম্পোনেন্ট) */}
//       <CategoryNav />

//       {/* --- MOBILE SIDEBAR DRAWER --- */}
//       {/* <div
//         className={`fixed inset-0 bg-black/50 z-[999] transition-opacity ${isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
//         onClick={() => setIsMenuOpen(false)}
//       ></div> */}

//       {/* <div
//         className={`fixed top-0 left-0 h-full w-[280px] bg-white z-[1000] transform transition-transform duration-300 p-5 flex flex-col ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}
//       >
//         <div className="flex items-center justify-between mb-6">
//           <h2 className="text-xl font-bold text-blue-700 italic">bacola</h2>
//           <button onClick={() => setIsMenuOpen(false)}>
//             <X size={24} />
//           </button>
//         </div>
//         <div className="relative mb-6">
//           <input
//             type="text"
//             placeholder="Search..."
//             className="w-full bg-gray-100 rounded-lg py-2 px-4 text-sm outline-none"
//           />
//           <Search
//             className="absolute right-3 top-2.5 text-gray-400"
//             size={18}
//           />
//         </div>
       
//         <div className="flex flex-col gap-1 overflow-y-auto flex-grow">
//           <p className="text-[10px] font-bold text-gray-400 uppercase mb-2">
//             Main Menu
//           </p>

//           {navItems.map((item, index) => (
//             <a
//               key={index}
//               href="#"
//               className="group relative py-3 px-2 border-b border-gray-50 font-medium text-gray-700 hover:text-blue-600 transition-all duration-300 flex justify-between items-center overflow-hidden"
//             >
  
//               <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1">
//                 {item.name}
//               </span>

//               {item.hasDropdown && (
//                 <ChevronDown
//                   size={16}
//                   className="transition-transform duration-300 group-hover:rotate-180 group-hover:text-blue-600"
//                 />
//               )}


//               <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-blue-600 transition-all duration-300 group-hover:w-full" />


//               <span className="absolute inset-0 bg-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-0" />
//             </a>
//           ))}
//         </div>

//         <div className="mt-auto pt-6 border-t">
//           <button className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg flex items-center justify-center gap-2">
//             <User size={18} /> Sign In
//           </button>
//         </div>
//       </div> */}
//     </div>
//   );
// };

// export default Navbar;



import TopStrip from '../../Header/TopStrip/TopStrip';
import MiddleHeader from '../../Header/MiddleHeader/MiddleHeader';
import CategoryNavigation from '../../Header/CategoryNavigation/CategoryNavigation';

const Navbar = () => {
  return (
    <header>
      <TopStrip></TopStrip>
      <MiddleHeader></MiddleHeader>
      <CategoryNavigation></CategoryNavigation>
    </header>
  );
};

export default Navbar;
