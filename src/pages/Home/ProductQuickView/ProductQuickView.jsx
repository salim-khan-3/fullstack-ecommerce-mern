import { X } from "lucide-react";

const ProductQuickView = ({ product, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white w-[90%] md:w-[800px] rounded-xl p-6 relative animate-scaleUp">

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100"
        >
          <X />
        </button>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Image */}
          <div className="flex items-center justify-center">
            <img
              src={product.img}
              alt={product.name}
              className="max-h-80"
            />
          </div>

          {/* Info */}
          <div>
            <h2 className="text-2xl pr-10 font-bold mb-2">
              {product.name}
            </h2>

            <div className="flex text-yellow-400 mb-3">
              {"★".repeat(product.rating)}
              {"☆".repeat(5 - product.rating)}
            </div>

            <div className="flex items-center gap-3 mb-4">
              <span className="line-through text-gray-400">
                ${product.oldPrice}
              </span>
              <span className="text-2xl font-bold text-red-600">
                ${product.price}
              </span>
              <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded">
                {product.discount} OFF
              </span>
            </div>

            <p className="text-gray-600 mb-6">
              This is a premium quality product with excellent customer reviews.
            </p>

            <button className="w-full bg-blue-600 text-white py-3 rounded-full font-bold hover:bg-blue-700">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductQuickView;
