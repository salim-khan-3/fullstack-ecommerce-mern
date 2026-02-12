import React, { useState } from "react";
import CartTable from "../CartTable/CartTable";
import CartSummary from "../CartSummary/CartSummary";
const Cart = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      name: "Men Alias-N Regular Fit Spread...",
      price: 1500,
      quantity: 1,
      image: "https://via.placeholder.com/60",
      rating: 4,
    },
    {
      id: 2,
      name: "Chikankari Woven Kurta...",
      price: 1200,
      quantity: 3,
      image: "https://via.placeholder.com/60",
      rating: 5,
    },
    {
      id: 3,
      name: "POCO C61, 4GB RAM, 64GB ROM...",
      price: 20000,
      quantity: 1,
      image: "https://via.placeholder.com/60",
      rating: 5,
    },
  ]);

  const handleUpdateQuantity = (id, delta) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: Math.max(1, item.quantity + delta),
            }
          : item
      )
    );
  };

  const subtotal = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="container mx-auto p-4 md:p-10 min-h-screen bg-white">
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">
          YOUR CART
        </h1>
        <p className="text-gray-500 mt-1">
          There are{" "}
          <span className="text-pink-600 font-bold">
            {items.length}
          </span>{" "}
          products in your cart
        </p>
      </div>

      {/* Content */}
      <div className="flex flex-col lg:flex-row gap-12">
        <CartTable
          items={items}
          onUpdateQuantity={handleUpdateQuantity}
        />
        <CartSummary subtotal={subtotal} />
      </div>
    </div>
  );
};

export default Cart;
