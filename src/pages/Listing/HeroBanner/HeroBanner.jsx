import React from "react";

const HeroBanner = () => {
  return (
    <div
      className="relative mb-5 w-full bg-cover bg-center py-20 md:py-36 flex items-center justify-center text-center overflow-hidden rounded-2xl shadow-sm"
      style={{
        backgroundImage:
          'url("https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
  

      {/* কন্টেন্ট সেকশন */}
      <div className="relative z-10 text-gray-800 px-4 max-w-2xl">
        <p className="text-lg md:text-xl font-medium text-gray-500 mb-2 tracking-wide">
          Organic Meals Prepared
        </p>

        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-5 text-[#222]">
          Delivered to{" "}
          <span className="bg-gradient-to-r from-[#2bbef9] to-[#0770cf] bg-clip-text text-transparent">
            your Home
          </span>
        </h1>
        <p className="text-md md:text-lg font-medium max-w-md mx-auto bg-gradient-to-r from-[#2bbef9] to-[#0770cf] bg-clip-text text-transparent">
          Fully prepared & delivered nationwide. Freshness guaranteed at your
          doorstep.
        </p>
      </div>

      {/* ডেকোরেটিভ লিফ (ঐচ্ছিক) */}
      <div className="absolute top-10 left-10 text-3xl opacity-20 rotate-12 hidden lg:block">
        🍃
      </div>
      <div className="absolute bottom-10 right-10 text-3xl opacity-20 -rotate-12 hidden lg:block">
        🍃
      </div>
    </div>
  );
};

export default HeroBanner;
