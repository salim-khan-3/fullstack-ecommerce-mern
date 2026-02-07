import { Heart, Shuffle } from "lucide-react";

import img1 from "../../assets/4685339.jpg";
import img2 from "../../assets/8852975.jpg";
import img3 from "../../assets/4685339.jpg";

import ProductImageGallery from "../../Components/Shared/ProductImageGallery/ProductImageGallery";
import QuantityCounter from "../../Components/Shared/QuantityCounter/QuantityCounter";

const ProductDetailsPage = () => {
  const productImages = [img1, img2, img3];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        
        {/* LEFT : Image */}
        <div className="flex justify-center lg:justify-start">
          <ProductImageGallery images={productImages} />
        </div>

        {/* RIGHT : Product Info */}
        <div className="flex flex-col">
          
          <h1 className="text-2xl sm:text-3xl font-semibold mb-2">
            All Natural Italian-Style Chicken Meatballs
          </h1>

          <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-gray-500 mb-4">
            <span>Brand: Welch's</span>
            <span>•</span>
            <span>SKU: ZU49VOR</span>
          </div>

          {/* Price */}
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="line-through text-gray-400 text-sm sm:text-base">
              $9.35
            </span>
            <span className="text-xl sm:text-2xl font-bold text-red-600">
              $7.25
            </span>
            <span className="text-xs sm:text-sm text-green-600 font-medium">
              IN STOCK
            </span>
          </div>

          {/* Description */}
          <p className="text-gray-600 text-sm sm:text-base mb-6 leading-relaxed">
            Vivamus adipiscing nisl ut dolor dignissim semper.
            Nulla luctus malesuada tincidunt. Class aptent taciti
            sociosqu ad litora torquent.
          </p>

          {/* Quantity + Button */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6">
            <QuantityCounter />

            <button className="w-full sm:w-auto bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition">
              Add to cart
            </button>
          </div>

          {/* Wishlist / Compare */}
          <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-6">
            <button className="flex items-center gap-2 hover:text-black">
              <Heart size={16} /> Add to wishlist
            </button>
            <button className="flex items-center gap-2 hover:text-black">
              <Shuffle size={16} /> Compare
            </button>
          </div>

          {/* Extra Info */}
          <ul className="space-y-2 text-sm text-gray-600">
            <li>✔ Type: Organic</li>
            <li>✔ MFG: Jun 4, 2021</li>
            <li>✔ LIFE: 30 days</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
