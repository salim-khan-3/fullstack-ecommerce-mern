import React from 'react';
import { X, Minus, Plus } from 'lucide-react';

const CartItem = ({ item, onUpdateQuantity }) => {
  return (
    <tr className="text-sm border-b border-gray-100 last:border-0">
      <td className="py-6 flex items-center gap-4">
        <img src={item.image} alt={item.name} className="w-16 h-20 object-cover rounded shadow-sm" />
        <div>
          <p className="font-semibold text-gray-800 mb-1">{item.name}</p>
          <div className="flex text-yellow-400">
            {'★'.repeat(item.rating)}{'☆'.repeat(5 - item.rating)}
          </div>
        </div>
      </td>
      <td className="py-6 text-gray-600">Rs {item.price}</td>
      <td className="py-6">
        <div className="flex items-center justify-center gap-3">
          <button 
            onClick={() => onUpdateQuantity(item.id, -1)} 
            className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
          >
            <Minus size={14} />
          </button>
          <span className="w-4 text-center font-medium">{item.quantity}</span>
          <button 
            onClick={() => onUpdateQuantity(item.id, 1)} 
            className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
          >
            <Plus size={14} />
          </button>
        </div>
      </td>
      <td className="py-6 font-medium text-gray-700">Rs. {item.price * item.quantity}</td>
      <td className="py-6 text-center">
        <button className="text-gray-400 hover:text-red-500 transition-colors">
          <X size={20} />
        </button>
      </td>
    </tr>
  );
};

export default CartItem;