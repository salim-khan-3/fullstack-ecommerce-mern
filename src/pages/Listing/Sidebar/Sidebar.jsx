import banner3 from "../../../assets/banner3.jpg"
import PriceFilter from "../PriceFilter/PriceFilter";

const Sidebar = () => {

  const brands = [
    { name: "Frito Lay", count: 8 },
    { name: "Nespresso", count: 10 },
    { name: "Oreo", count: 7 },
    { name: "Quaker", count: 1 },
    { name: "Welch's", count: 7 },
    { name: "Oreo", count: 7 },
    { name: "Quaker", count: 1 },
    { name: "Welch's", count: 7 },
    { name: "Oreo", count: 7 },
    { name: "Quaker", count: 1 },
    { name: "Welch's", count: 7 },
  ];
  const categories = [
    "Beverages",
    "Biscuits & Snacks",
    "Breads & Bakery",
    "Breakfast & Dairy",
    "Frozen Foods",
    "Fruits & Vegetables",
    "Grocery & Staples",
    "Household Needs",
    "Meats & Seafood",
  ];

  return (
    <div className=" p-6 borde rounded-lg">
      {/* Title */}
      <h2 className="text-gray-700 font-bold text-lg mb-3 tracking-wide uppercase">
        Product Categories
      </h2>

      {/* Categories List */}
      <div className="space-y-4 mb-10">
        {categories.map((category, index) => (
          <label key={index} className="flex items-center group cursor-pointer">
            {/* Custom Checkbox */}
            <input
              type="checkbox"
              className="w-5 h-5 border-gray-300 rounded text-green-600 focus:ring-green-500 cursor-pointer"
            />

            {/* Category Name */}
            <span className="ml-4 text-gray-500 group-hover:text-green-600 transition-colors duration-200 text-[15px] font-medium">
              {category}
            </span>
          </label>
        ))}
      </div>

      <PriceFilter></PriceFilter>
      {/* 2. Product Status */}
      <div className="mb-10"> 
        <h3 className="text-gray-800 font-bold text-sm tracking-widest uppercase mb-3">
          Product Status
        </h3>
        <div className="space-y-3">
          {["In Stock", "On Sale"].map((status) => (
            <label
              key={status}
              className="flex items-center cursor-pointer group"
            >
              <input
                type="checkbox"
                className="w-4 h-4 border-gray-300 rounded text-blue-600 focus:ring-blue-500"
              />
              <span className="ml-3 text-gray-500 group-hover:text-gray-800 transition-colors">
                {status}
              </span>
            </label>
          ))}
        </div>
      </div>
      {/* 3. Brands */}
      <div className="mb-10">
        <h3 className="text-gray-800 font-bold text-sm tracking-widest uppercase mb-3">
          Brands
        </h3>
        <div className="space-y-3 max-h-48 overflow-y-auto pr-2 custom-scrollbar">
          {brands.map((brand, index) => (
  <label key={`${brand.name}-${index}`} className="flex items-center justify-between cursor-pointer group"
            >
              <div className="flex items-center">
                <input
                  type="checkbox"
                  className="w-4 h-4 border-gray-300 rounded text-blue-600 focus:ring-blue-500"
                />
                <span className="ml-3 text-gray-500 group-hover:text-gray-800 transition-colors">
                  {brand.name}
                </span>
              </div>
              <span className="text-gray-400 text-sm">({brand.count})</span>
            </label>
          ))}
        </div>
      </div>

      {/* banner iamges  */}
      <div className="w-full h-[350px] ">
        <img className="w-full rounded-2xl h-full" src={banner3} alt="" />
      </div>
    </div>
  );
};

export default Sidebar;
