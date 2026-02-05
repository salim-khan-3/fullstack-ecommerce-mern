import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
  ];

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5000 }),
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className="relative mt-5 lg:mt-0 w-full overflow-hidden group rounded-2xl lg:rounded-none">
      {/* Banner Container - Height Adjustments */}
      <div className="h-[250px] md:h-[350px] lg:h-[650px] w-full" ref={emblaRef}>
        <div className="flex h-full">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className="relative flex-[0_0_100%] h-full flex items-center bg-cover bg-center transition-transform duration-700 ease-in-out"
              style={{ backgroundImage: `url(${slide.bg})` }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>

              {/* Content Container - Width & Padding Adjustment */}
              <div
                className={`relative z-10 w-full px-6 md:px-12 lg:px-20 text-white transition-all duration-1000 transform ${
                  selectedIndex === index ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
                }`}
              >
                <span className="inline-block bg-blue-600 text-[10px] md:text-xs font-bold px-3 py-1 rounded-full mb-3 md:mb-4 tracking-widest uppercase">
                  Trending 2026
                </span>

                <h1 className="text-xl md:text-4xl lg:text-7xl font-extrabold mb-2 md:mb-6 max-w-[280px] md:max-w-2xl lg:max-w-4xl leading-[1.2] md:leading-tight">
                  {slide.title}
                </h1>

                <p className="hidden md:block text-sm lg:text-xl mb-6 lg:mb-10 max-w-xl text-gray-200">
                  {slide.desc}
                </p>

                <div className="flex items-center gap-3 mt-4 md:mt-0">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 md:px-10 py-2.5 md:py-4 rounded-lg md:rounded-xl text-xs md:text-base font-bold transition-all whitespace-nowrap">
                    {slide.buttonText}
                  </button>
                  <button className="hidden sm:block bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white px-6 md:px-10 py-3 md:py-4 rounded-lg md:rounded-xl text-xs md:text-base font-bold whitespace-nowrap">
                    Watch Demo
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Controls - Hidden on Mobile for better UX */}
      <button
        onClick={scrollPrev}
        className="hidden md:flex absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 p-3 md:p-4 rounded-full bg-black/20 text-white opacity-0 group-hover:opacity-100 transition-all hover:bg-blue-600"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={scrollNext}
        className="hidden md:flex absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 p-3 md:p-4 rounded-full bg-black/20 text-white opacity-0 group-hover:opacity-100 transition-all hover:bg-blue-600"
      >
        <ChevronRight size={24} />
      </button>

      {/* Progress Bars / Dots */}
      <div className="absolute bottom-4 md:bottom-8 left-6 md:left-12 lg:left-20 z-30 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => emblaApi && emblaApi.scrollTo(index)}
            className={`h-1 transition-all duration-500 rounded-full ${
              selectedIndex === index ? "w-8 md:w-12 bg-blue-600" : "w-3 md:w-4 bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Banner;





// import React, { useCallback, useEffect, useState } from "react";
// import useEmblaCarousel from "embla-carousel-react";
// import Autoplay from "embla-carousel-autoplay";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// const Banner = () => {
//   const slides = [
//     {
//       id: 1,
//       title: "Fresh Arrivals: Explore Our Latest Collection",
//       desc: "Upgrade your wardrobe with this season's most anticipated fashion trends. Style meets comfort in every piece.",
//       bg: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070",
//       buttonText: "Shop New Arrivals",
//     },
//     {
//       id: 2,
//       title: "Unbeatable Deals: Up to 50% Off Everything!",
//       desc: "Limited time offer! Grab your favorites at half the price before they are gone forever.",
//       bg: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=2070",
//       buttonText: "Grab the Deals Now",
//     },
//     {
//       id: 3,
//       title: "Premium Electronics: Power Your Life",
//       desc: "Discover the latest gadgets and smart devices designed to make your daily life smoother and faster.",
//       bg: "https://images.unsplash.com/photo-1498049794561-7780e7231661?q=80&w=2070",
//       buttonText: "Discover Gadgets",
//     },
//   ];

//   const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
//     Autoplay({ delay: 5000 }),
//   ]);
//   const [selectedIndex, setSelectedIndex] = useState(0);

//   const scrollPrev = useCallback(
//     () => emblaApi && emblaApi.scrollPrev(),
//     [emblaApi],
//   );
//   const scrollNext = useCallback(
//     () => emblaApi && emblaApi.scrollNext(),
//     [emblaApi],
//   );

//   // Pagination update logic
//   const onSelect = useCallback(() => {
//     if (!emblaApi) return;
//     setSelectedIndex(emblaApi.selectedScrollSnap());
//   }, [emblaApi]);

//   useEffect(() => {
//     if (!emblaApi) return;
//     onSelect();
//     emblaApi.on("select", onSelect);
//   }, [emblaApi, onSelect]);

//   return (
//     <div className="relative w-full h-[650px] overflow-hidden group">
//       {/* Embla Viewport */}
//       <div className="h-full w-full" ref={emblaRef}>
//         <div className="flex h-full">
//           {slides.map((slide, index) => (
//             <div
//               key={slide.id}
//               className="relative flex-[0_0_100%] h-full flex items-center justify-center bg-cover bg-center transition-transform duration-700 ease-in-out"
//               style={{ backgroundImage: `url(${slide.bg})` }}
//             >
//               {/* Premium Gradient Overlay */}
//               <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>

//               {/* Content with Animation */}
//               <div
//                 className={`relative z-10 container mx-auto px-10 md:px-20 text-white transition-all duration-1000 transform ${selectedIndex === index ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
//               >
//                 <span className="inline-block bg-blue-600 text-xs font-bold px-4 py-1.5 rounded-full mb-6 tracking-widest uppercase">
//                   Trending 2026
//                 </span>
//                 <h1 className="text-5xl md:text-7xl font-extrabold mb-6 max-w-3xl leading-[1.1] tracking-tight">
//                   {slide.title}
//                 </h1>
//                 <p className="text-lg md:text-xl mb-10 max-w-xl text-gray-200 leading-relaxed font-light">
//                   {slide.desc}
//                 </p>
//                 <div className="flex gap-4">
//                   <button className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-xl font-bold transition-all shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 active:scale-95">
//                     {slide.buttonText}
//                   </button>
//                   <button className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white px-10 py-4 rounded-xl font-bold transition-all">
//                     Watch Demo
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Modern Navigation Buttons */}
//       <button
//         onClick={scrollPrev}
//         className="absolute left-8 top-1/2 -translate-y-1/2 z-30 p-4 rounded-full border border-white/20 bg-black/10 backdrop-blur-lg text-white opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-blue-600"
//       >
//         <ChevronLeft size={28} />
//       </button>
//       <button
//         onClick={scrollNext}
//         className="absolute right-8 top-1/2 -translate-y-1/2 z-30 p-4 rounded-full border border-white/20 bg-black/10 backdrop-blur-lg text-white opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-blue-600"
//       >
//         <ChevronRight size={28} />
//       </button>

//       {/* Progress-style Pagination */}
//       <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex gap-3">
//         {slides.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => emblaApi && emblaApi.scrollTo(index)}
//             className={`h-1.5 transition-all duration-500 rounded-full ${selectedIndex === index ? "w-10 bg-blue-600" : "w-4 bg-white/30 hover:bg-white/50"}`}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Banner;
