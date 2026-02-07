import { useState } from "react";
import ProductImageZoom from "../ProductImageZoom/ProductImageZoom";
// import ProductImageZoom from "../ProductImageZoom/ProductImageZoom";

const ProductImageGallery = ({ images }) => {
  const [activeImage, setActiveImage] = useState(images[0]);

  return (
    <div className="flex flex-col items-center gap-4">
      
      {/* Main Zoom Image */}
      <div className="w-[280px] sm:w-[360px] md:w-[420px]">
        <ProductImageZoom Image={activeImage} />
      </div>

      {/* Thumbnails */}
      <div className="flex gap-2 sm:gap-3 mt-3">
        {images.map((img, index) => (
          <button
            key={index}
            onClick={() => setActiveImage(img)}
            className={`w-16 h-16 sm:w-20 sm:h-20 border rounded-md overflow-hidden
              ${
                activeImage === img
                  ? "border-blue-500"
                  : "border-gray-300"
              }`}
          >
            <img
              src={img}
              alt={`thumbnail-${index}`}
              className="w-full h-full object-contain"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductImageGallery;
