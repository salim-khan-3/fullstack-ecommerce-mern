import { useCallback, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Heart, Maximize2, ChevronLeft, ChevronRight } from "lucide-react";
import pp from "../../../assets/cyber-monday-shopping-sales.jpg";
import ProductQuickView from "../ProductQuickView/ProductQuickView";

const BestSeller = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const products = [
    {
      id: 1,
      name: "Werther's Original Caramel Hard Candies",
      price: 14.97,
      oldPrice: 20.0,
      discount: "26%",
      img: pp,
      rating: 5,
    },
    {
      id: 2,
      name: "All Natural Italian-Style Chicken Meatballs",
      price: 7.25,
      oldPrice: 9.35,
      discount: "23%",
      img: pp,
      rating: 4,
      recommended: true,
    },
    {
      id: 3,
      name: "Angie's Boomchickapop Sweet & Salty Kettle Corn",
      price: 3.29,
      oldPrice: 4.29,
      discount: "24%",
      img: pp,
      rating: 5,
    },
    {
      id: 4,
      name: "Field Roast Chao Cheese Creamy Original",
      price: 19.5,
      oldPrice: 24.0,
      discount: "19%",
      img: pp,
      rating: 5,
      organic: true,
    },
    {
      id: 5,
      name: "Fresh Organic Honey Crushed Grapes",
      price: 12.0,
      oldPrice: 15.0,
      discount: "20%",
      img: pp,
      rating: 5,
    },
  ];

  const openModal = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start" },
    [Autoplay({ delay: 4000, stopOnInteraction: false })],
  );

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi],
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi],
  );
  return (
    <div className="flex-grow mb-10">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h3 className="text-xl font-bold text-gray-900 uppercase tracking-tight">
            Best Sellers
          </h3>
          <p className="text-xs text-gray-400 font-medium mt-1">
            Do not miss the current offers until the end of March.
          </p>
        </div>
        <button className="border border-gray-200 rounded-full px-5 py-2 text-xs font-bold text-gray-500 hover:bg-blue-600 hover:text-white transition-all shadow-sm">
          View All →
        </button>
      </div>

      {/* Slider Wrapper with Relative Position */}
      <div className="relative group">
        {/* Viewport */}
        <div
          className="overflow-hidden border-l border-t border-gray-100 rounded-lg"
          ref={emblaRef}
        >
          <div className="flex">
            {products.map((product) => (
              <div
                key={product.id}
                className="flex-[0_0_100%] sm:flex-[0_0_50%] md:flex-[0_0_33.33%] lg:flex-[0_0_25%] min-w-0 border-r border-b border-gray-100 bg-white"
              >
                <div className="p-5 relative group/card flex flex-col h-full transition-all duration-300 hover:shadow-2xl hover:z-20 cursor-pointer">
                  {/* Badges, Icons, Image and Info (Same as before) */}
                  <div className="absolute top-4 left-4 flex flex-col gap-1.5 z-10">
                    <span className="bg-[#2bbef9] text-white text-[11px] font-bold px-2 py-1 rounded shadow-sm w-fit">
                      {product.discount}
                    </span>
                    {product.recommended && (
                      <span className="bg-[#7141b1] text-white text-[9px] uppercase font-bold px-2 py-1 rounded shadow-sm">
                        Recommended
                      </span>
                    )}
                  </div>

                  <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover/card:opacity-100 transform translate-x-2 group-hover/card:translate-x-0 transition-all duration-300 z-10">
                    <button  onClick={() => openModal(product)} className="p-2 bg-white rounded-full shadow-md hover:bg-blue-600 hover:text-white">
                      <Maximize2 size={16} />
                    </button>
                    <button className="p-2 bg-white rounded-full shadow-md hover:bg-blue-600 hover:text-white">
                      <Heart size={16} />
                    </button>
                  </div>

                  <div className="h-44 flex items-center justify-center mb-4 overflow-hidden mt-4">
                    <img
                      src={product.img}
                      alt={product.name}
                      className="max-h-full transition-transform duration-500 group-hover/card:scale-110"
                    />
                  </div>

                  <div className="flex-grow text-left">
                    <h4 className="text-[14px] font-bold text-[#202435] leading-snug mb-2 line-clamp-2 h-10 group-hover/card:text-blue-700">
                      {product.name}
                    </h4>
                    <p className="text-[#00b853] text-[10px] font-bold uppercase mb-2">
                      In Stock
                    </p>
                    <div className="flex text-yellow-400 text-[10px] mb-3">
                      {"★".repeat(product.rating)}
                      {"☆".repeat(5 - product.rating)}
                    </div>
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-gray-300 line-through text-sm font-medium">
                        ${product.oldPrice.toFixed(2)}
                      </span>
                      <span className="text-[#d51243] font-bold text-lg">
                        ${product.price.toFixed(2)}
                      </span>
                    </div>
                  </div>

                  <button className="w-full bg-white border border-[#2bbef9] text-[#2bbef9] py-2 rounded-full text-xs font-bold hover:bg-[#2bbef9] hover:text-white transition-all active:scale-95 shadow-sm">
                    Add to cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Side Navigation Icons (Angles) */}
        {isModalOpen && (
          <ProductQuickView
            product={selectedProduct}
            closeModal={() => setIsModalOpen(false)}
          />
        )}
        <button
          onClick={scrollPrev}
          className="absolute -left-5 top-1/2 -translate-y-1/2 bg-white border border-gray-200 p-3 rounded-full shadow-xl z-30 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-blue-600 hover:text-white"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={scrollNext}
          className="absolute -right-5 top-1/2 -translate-y-1/2 bg-white border border-gray-200 p-3 rounded-full shadow-xl z-30 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-blue-600 hover:text-white"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default BestSeller;
