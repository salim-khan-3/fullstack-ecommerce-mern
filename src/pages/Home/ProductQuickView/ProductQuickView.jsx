import React, { useState } from 'react';

const ProductQuickView = ({ product, closeModal }) => {
//   const [selectedSize, setSelectedSize] = useState('Xs');
  const [quantity, setQuantity] = useState(1);
  if (!product) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-[999]">
      <div className="bg-white w-full max-w-4xl rounded-lg shadow-2xl overflow-hidden relative p-6 md:p-8 animate-in fade-in zoom-in duration-200">
        
        {/* Close Icon */}
        <button 
          onClick={closeModal}
          className="absolute top-4 right-4 bg-gray-100 hover:bg-red-500 hover:text-white rounded-full p-1 transition-all z-20"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="mb-6 border-b border-gray-100 pb-4">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-800">{product.name}</h2>
          <p className="text-sm mt-1 text-gray-500">Brands: <span className="font-bold text-gray-800">{product.brand}</span></p>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-[45%]">
            <div className="relative rounded-2xl overflow-hidden bg-gray-50">
              <img src={product.img} alt="Product" className="w-full h-auto object-cover" />
            </div>
          </div>

          <div className="md:w-[55%] flex flex-col">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-gray-400 line-through text-lg italic">Rs: {product.oldPrice}</span>
              <span className="text-[#e91e63] text-2xl font-bold">Rs: {product.price}</span>
            </div>

            <p className="text-gray-500 text-[13px] leading-relaxed mb-6">{product.description}</p>

            {/* Actions */}
            <div className="flex items-center gap-4 mb-8 mt-auto">
              <div className="flex items-center bg-[#f0f2f5] rounded-full px-2 py-1">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="w-10 h-10 text-xl font-bold">-</button>
                <span className="w-10 text-center font-semibold">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} className="w-10 h-10 text-xl font-bold">+</button>
              </div>
              <button className="flex-1 bg-[#f11e51] hover:bg-[#d41a46] text-white font-bold py-3.5 rounded-full uppercase text-sm transition-all shadow-lg active:scale-95">
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductQuickView;