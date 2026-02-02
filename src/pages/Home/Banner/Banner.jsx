import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { ChevronLeft, ChevronRight } from 'lucide-react';

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
    }
  ];

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 5000 })]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  // Pagination update logic
  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className="relative w-full h-[650px] overflow-hidden group">
      {/* Embla Viewport */}
      <div className="h-full w-full" ref={emblaRef}>
        <div className="flex h-full">
          {slides.map((slide, index) => (
            <div 
              key={slide.id} 
              className="relative flex-[0_0_100%] h-full flex items-center justify-center bg-cover bg-center transition-transform duration-700 ease-in-out"
              style={{ backgroundImage: `url(${slide.bg})` }}
            >
              {/* Premium Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>

              {/* Content with Animation */}
              <div className={`relative z-10 container mx-auto px-10 md:px-20 text-white transition-all duration-1000 transform ${selectedIndex === index ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                <span className="inline-block bg-blue-600 text-xs font-bold px-4 py-1.5 rounded-full mb-6 tracking-widest uppercase">
                  Trending 2026
                </span>
                <h1 className="text-5xl md:text-7xl font-extrabold mb-6 max-w-3xl leading-[1.1] tracking-tight">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-xl mb-10 max-w-xl text-gray-200 leading-relaxed font-light">
                  {slide.desc}
                </p>
                <div className="flex gap-4">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-xl font-bold transition-all shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 active:scale-95">
                    {slide.buttonText}
                  </button>
                  <button className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white px-10 py-4 rounded-xl font-bold transition-all">
                    Watch Demo
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modern Navigation Buttons */}
      <button 
        onClick={scrollPrev}
        className="absolute left-8 top-1/2 -translate-y-1/2 z-30 p-4 rounded-full border border-white/20 bg-black/10 backdrop-blur-lg text-white opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-blue-600"
      >
        <ChevronLeft size={28} />
      </button>
      <button 
        onClick={scrollNext}
        className="absolute right-8 top-1/2 -translate-y-1/2 z-30 p-4 rounded-full border border-white/20 bg-black/10 backdrop-blur-lg text-white opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-blue-600"
      >
        <ChevronRight size={28} />
      </button>

      {/* Progress-style Pagination */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => emblaApi && emblaApi.scrollTo(index)}
            className={`h-1.5 transition-all duration-500 rounded-full ${selectedIndex === index ? 'w-10 bg-blue-600' : 'w-4 bg-white/30 hover:bg-white/50'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Banner;