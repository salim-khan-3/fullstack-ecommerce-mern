import { useCallback, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Heart, Maximize2, ChevronLeft, ChevronRight } from "lucide-react";
import pp from "../../../assets/cyber-monday-shopping-sales.jpg";
import ProductCard from "../../../Components/cards/ProductCard/ProductCard";
import ProductQuickView from "../ProductQuickView/ProductQuickView";

const BestSeller = () => {
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
      description:
        "Classic smooth and creamy caramel candies made with real butter and fresh cream for a rich, melting taste.",
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
      description:
        "Flavorful, pre-cooked meatballs seasoned with Italian herbs and spices. Perfect for pasta, subs, or as a quick snack.",
    },
    {
      id: 3,
      name: "Angie's Boomchickapop Sweet & Salty Kettle Corn",
      price: 3.29,
      oldPrice: 4.29,
      discount: "24%",
      img: pp,
      rating: 5,
      description:
        "The perfect balance of sugar and sea salt. Non-GMO, gluten-free, and only 70 calories per cup for guilt-free snacking.",
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
      description:
        "A coconut-based vegan cheese alternative that melts beautifully. Creamy and rich with a sophisticated savory finish.",
    },
    {
      id: 5,
      name: "Fresh Organic Honey Crushed Grapes",
      price: 12.0,
      oldPrice: 15.0,
      discount: "20%",
      img: pp,
      rating: 5,
      description:
        "Farm-fresh, organic grapes bursting with natural sweetness. A healthy, juicy addition to your daily fruit bowl.",
    },
  ];

const [emblaRef, emblaApi] = useEmblaCarousel(
  {
    loop: true,
    align: "start",
    dragFree: true,
  },
  [Autoplay({ delay: 4000, stopOnInteraction: false })]
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
    <div className="flex-grow mb-10 px-4 lg:px-0">
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
                className="
        flex-shrink-0
        w-full
        sm:w-1/2
        md:w-1/3
        lg:w-1/4
      "
              >
                <ProductCard
                  product={product}
                  onQuickView={() => setSelectedProduct(product)}
                />
              </div>
            ))}
          </div>
        </div>

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
      {/* 🔥 MODAL */}
      {selectedProduct && (
        <ProductQuickView
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
};

export default BestSeller;
