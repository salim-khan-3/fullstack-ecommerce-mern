import { useState } from "react";

const QuantityCounter = ({ onChange }) => {
  const [qty, setQty] = useState(1);

  const increment = () => {
    const newQty = qty + 1;
    setQty(newQty);
    onChange?.(newQty);
  };

  const decrement = () => {
    if (qty > 1) {
      const newQty = qty - 1;
      setQty(newQty);
      onChange?.(newQty);
    }
  };

  return (
    <div className="flex items-center gap-3 border rounded-full px-3 py-1 w-fit">
      <button
        onClick={decrement}
        className="text-xl px-2 text-gray-600 hover:text-black"
      >
        −
      </button>
      <span className="min-w-[20px] text-center font-medium">{qty}</span>
      <button
        onClick={increment}
        className="text-xl px-2 text-gray-600 hover:text-black"
      >
        +
      </button>
    </div>
  );
};

export default QuantityCounter;
