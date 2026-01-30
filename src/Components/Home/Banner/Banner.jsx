import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";

// Swiper styles আমদানি করা হচ্ছে
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const Banner = () => {
  const slides = [
    {
      id: 1,
      title: "Fresh Arrivals: Explore Our Latest Collection",
      desc: "Upgrade your wardrobe with this season's most anticipated fashion trends. Style meets comfort in every piece.",
      bg: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070",
      buttonText: "Shop New Arrivals",
    },
    {
      id: 2,
      title: "Unbeatable Deals: Up to 50% Off Everything!",
      desc: "Limited time offer! Grab your favorites at half the price before they are gone forever.",
      bg: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=2070",
      buttonText: "Grab the Deals Now",
    },
    {
      id: 3,
      title: "Premium Electronics: Power Your Life",
      desc: "Discover the latest gadgets and smart devices designed to make your daily life smoother and faster.",
      bg: "https://images.unsplash.com/photo-1498049794561-7780e7231661?q=80&w=2070",
      buttonText: "Discover Gadgets",
    },
    {
      id: 4,
      title: "Fashion Forward: Dress for Every Occasion",
      desc: "From casual streetwear to elegant evening outfits—find everything you need to stand out from the crowd.",
      bg: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070",
      buttonText: "Explore Fashion",
    },
    {
      id: 5,
      title: "Home & Living: Comfort Meets Luxury",
      desc: "Transform your living space with our premium furniture and minimalist decor collection.",
      bg: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=2070",
      buttonText: "Shop Home Decor",
    },
  ];

  return (
    <div className="relative w-full h-[600px] pl-5 pt-5 ">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        effect="fade"
        speed={800}
        loop={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        className="h-full w-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="relative w-full h-full flex items-center justify-center bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.bg})` }}
            >
              {/* Overlay: টেক্সট স্পষ্ট করার জন্য */}
              <div className="absolute inset-0 bg-black/50"></div>

              {/* Content */}
              <div className="relative z-10 text-center text-white px-4">
                <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
                  {slide.desc}
                </p>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition-all transform hover:scale-105">
                  Explore Now
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Custom Navigation Arrows */}
        <div className="custom-prev absolute left-5 top-1/2 -translate-y-1/2 z-20 cursor-pointer bg-white/20 hover:bg-white/40 p-3 rounded-full backdrop-blur-sm transition-all text-white hidden md:block">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </div>
        <div className="custom-next absolute right-5 top-1/2 -translate-y-1/2 z-20 cursor-pointer bg-white/20 hover:bg-white/40 p-3 rounded-full backdrop-blur-sm transition-all text-white hidden md:block">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </div>
      </Swiper>

      {/* Tailwind দিয়ে Pagination ডট কাস্টমাইজ করার টিপস */}
      {/* Navigation Arrows & Pagination CSS */}
    <style>{`
      .swiper {
        height: 600px !important; /* এখানে হাইট ফোর্স করা হয়েছে */
      }
      .swiper-pagination-bullet { background: white !important; opacity: 0.5; }
      .swiper-pagination-bullet-active { opacity: 1; width: 25px; border-radius: 5px; transition: all 0.3s; }
    `}</style>
    </div>
  );
};

export default Banner;
