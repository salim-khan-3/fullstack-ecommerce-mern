"use client";
import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import category from "../../../assets/category.jpg"
const categories = [
  { id: 1, name: "Red Apple", img: category, bg: "bg-red-50" },
  { id: 2, name: "Red Apple", img: category, bg: "bg-green-50" },
  { id: 3, name: "Red Apple", img: category, bg: "bg-orange-50" },
  { id: 4, name: "Red Apple", img: category, bg: "bg-yellow-50" },
  { id: 5, name: "Red Apple", img: category, bg: "bg-purple-50" },
  { id: 6, name: "Red Apple", img: category, bg: "bg-pink-50" },
  { id: 7, name: "Red Apple", img: category, bg: "bg-blue-50" },
  { id: 8, name: "Red Apple", img: category, bg: "bg-emerald-50" },
  { id: 9, name: "Red Apple", img: category, bg: "bg-amber-50" },
  { id: 10, name: "Red Apple", img: category, bg: "bg-lime-50" },
  { id: 11, name: "Red Apple", img: category, bg: "bg-emerald-50" },
  { id: 12, name: "Red Apple", img: category, bg: "bg-amber-50" },
  { id: 13, name: "Red Apple", img: category, bg: "bg-lime-50" },
];

const FeaturedCategories = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: false,
    dragFree: true,
  });

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  return (
    <section className="container mx-auto px-4 py-10">
      {/* Title Section */}
      <div className="mb-8">
        <h2 className="text-xl font-bold text-gray-800 uppercase tracking-wide">
          Featured Categories
        </h2>
      </div>

      <div className="relative group">
        {/* Embla Viewport */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-4">
            {categories.map((item) => (
              <div
                key={item.id}
                className="flex-[0_0_45%] sm:flex-[0_0_25%] md:flex-[0_0_18%] lg:flex-[0_0_10%] min-w-0"
              >
                <div
                  className={`${item.bg} h-40 rounded-xl flex flex-col items-center justify-center gap-3 transition-all duration-300 hover:shadow-md cursor-pointer border border-transparent hover:border-gray-200`}
                >
                  <div className="w-16 h-16 flex items-center justify-center">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="text-sm font-semibold text-gray-700 text-center">
                    {item.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows (Image matching style) */}
        <button
          onClick={scrollPrev}
          className="absolute -left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white shadow-lg rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-50 z-10 border border-gray-100 opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <ChevronLeft size={20} />
        </button>

        <button
          onClick={scrollNext}
          className="absolute -right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white shadow-lg rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-50 z-10 border border-gray-100"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </section>
  );
};

export default FeaturedCategories;