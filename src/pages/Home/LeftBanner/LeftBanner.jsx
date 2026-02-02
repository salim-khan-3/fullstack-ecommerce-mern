const LeftBanner = () => {
  return (
    <div className="sticky top-10">
      <div className="w-[375px] mb-10 min-w-[375px] lg:w-[280px] bg-[#fcd34d] h-[550px] rounded-2xl p-8 relative overflow-hidden flex flex-col shrink-0 shadow-sm">
        <p className="text-[#8b5e3c] font-medium text-sm">
          Bacola Natural Foods
        </p>
        <h2 className="text-3xl font-extrabold text-[#202435] mt-2 leading-tight">
          Special Organic <br />
          <span className="font-light">Roats Burger</span>
        </h2>
        <div className="mt-6">
          <p className="text-gray-600 text-xs">only-from</p>
          <p className="text-[#ed174a] text-3xl font-black">$14.99</p>
        </div>
        <div className="absolute bottom-4 right-[-20px] w-full">
          <img
            src="https://i.ibb.co/L5Xv6hB/burger-promo.png"
            alt="burger"
            className="w-56 h-auto object-contain transform -rotate-12"
          />
        </div>
      </div>

      <div className="w-[375px] min-w-[375px]  bg-[#fcd34d] h-[550px] rounded-2xl p-8 relative overflow-hidden flex flex-col shrink-0 shadow-sm hidden lg:flex">
        <p className="text-[#8b5e3c] font-medium text-sm">
          Bacola Natural Foods
        </p>
        <h2 className="text-3xl font-extrabold text-[#202435] mt-2 leading-tight">
          Special Organic <br />
          <span className="font-light">Roats Burger</span>
        </h2>
        <div className="mt-6">
          <p className="text-gray-600 text-xs">only-from</p>
          <p className="text-[#ed174a] text-3xl font-black">$14.99</p>
        </div>
        <div className="mt-auto relative z-10">
          <img
            src="https://i.ibb.co/L5Xv6hB/burger-promo.png"
            alt="burger"
            className="w-56 h-auto object-contain transform -rotate-12 translate-x-10"
          />
        </div>
      </div>
    </div>
  );
};

export default LeftBanner;
