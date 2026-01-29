import { useContext, useEffect, useState } from "react";
import { MyContext } from "../../../App";
import { ChevronDown, Search, X } from "lucide-react";

const DropdownModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("Georgia");
  const { countryList } = useContext(MyContext);

  const [filteredList, setFilteredList] = useState([]);
  
  useEffect(() => {
    setFilteredList(countryList);
  }, [countryList, isOpen]);

  // 2. Search Functionality
  const filterList = (e) => {
    const keyword = e.target.value.toLowerCase();

    if (keyword !== "") {
      const list = countryList.filter((item) => {
        return item.country.toLowerCase().includes(keyword);
      });
      setFilteredList(list);
    } else {
      setFilteredList(countryList);
    }
  };


  return (
    <div>
      <button
        onClick={() => setIsOpen(true)}
        className="flex w-full flex-1 items-center justify-between gap-4 border border-gray-200 rounded-lg px-5 py-2.5 text-sm shadow-sm hover:bg-white hover:border-blue-400 hover:shadow-md transition-all duration-300 bg-gray-50/50"
      >
        <div className="flex flex-col text-left">
          <span className="block text-[10px] text-gray-500 uppercase font-extrabold tracking-widest mb-0.5">
            Your Location
          </span>
          <span className="text-blue-700 font-bold text-base truncate max-w-[150px]">
            {selectedCountry}
          </span>
        </div>

        <div className="flex items-center gap-2 text-gray-400 border-l pl-3 border-gray-200">
          <Search size={16} />
          <ChevronDown
            size={16}
            className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
          />
        </div>
      </button>

      {/* Modal Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center p-4">
          {/* Backdrop with Blur */}
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
            onClick={() => setIsOpen(false)}
          ></div>

          {/* Modal Content */}
          <div className="relative bg-white w-full max-w-md rounded-2xl shadow-2xl overflow-hidden transform transition-all animate-in fade-in zoom-in duration-300">
            {/* Modal Header */}
            <div className="p-6 border-b border-gray-100 flex justify-between items-center">
              <div>
                <h3 className="text-lg font-bold text-gray-800">
                  Choose your Location
                </h3>
                <p className="text-xs text-gray-400">
                  Enter your address and we will specify the offer for your
                  area.
                </p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X size={20} className="text-gray-500" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6">
              {/* Search Bar inside Modal */}
              <div className="relative mb-4">
                <Search
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                  size={16}
                />
                <input
                  type="text"
                  onChange={filterList}
                  placeholder="Search your area..."
                  className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                />
              </div>

              {/* Country List */}
              <ul className="max-h-[300px] overflow-y-auto space-y-1 custom-scrollbar">
                {filteredList.map((item, index) => (
                  <li key={index}>
                    <button
                      onClick={() => {
                        setSelectedCountry(item.country);
                        setIsOpen(false);
                      }}
                      className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                        selectedCountry === item.country
                          ? "bg-blue-50 text-blue-600 border border-blue-100"
                          : "text-gray-600 hover:bg-gray-50 hover:text-blue-600"
                      }`}
                    >
                      {item.country} {/* display the string */}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownModal;
