import logo from "../../../assets/logo.png"

const Logo = () => {
  return (
    <div className="flex items-center gap-3 cursor-pointer group">
      {/* 1. Logo Image Section */}
      <div className="relative w-14 h-14 md:w-16 md:h-16 flex items-center justify-center">
        <img 
          src={logo} // Tomar image path eikhane hobe
          alt="TrendCart Logo" 
          className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
        />
      </div>

      {/* 2. Text Section */}
      <div className="flex flex-col leading-tight">
        <div className="flex items-center">
          <span className="text-2xl md:text-3xl font-black text-[#233a95] tracking-tighter uppercase italic">
            TREND
          </span>
          <span className="text-2xl md:text-3xl font-light text-gray-500 tracking-tighter uppercase italic">
            CART
          </span>
        </div>
        {/* Tagline */}
        <span className="text-[10px] md:text-[11px] font-bold text-gray-400 uppercase tracking-widest mt-[-2px]">
          Smart Shopping, Delivered
        </span>
      </div>
    </div>
  );
};

export default Logo;