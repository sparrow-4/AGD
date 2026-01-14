import React from "react";
import { items } from "../../constants";

const ProductGrid = () => {
  return (
    <div
      className="
        grid
        
        grid-cols-2
        md:grid-cols-3
        lg:grid-cols-4
        xl:grid-cols-4
        gap-6
        
      "
    >
      {/* product cards */}
      {items.map((item) => (
                 <div
        key={item.id}
        className="
          bg-[#0f0f0f]
          rounded-xl
          p-5
          border border-lime-400/20
          hover:border-lime-400/60
          transition
          flex flex-col
          min-h-[260px] md:min-h-[360px]
          bg-linear-to-tr from-black via-nav/5 to-black  
      
          w-[45vw] sm:w-[50vw] md:w-[180px] lg:w-[220px]
          flex-shrink-0
          
        "
      >
        <div cl>
          {/* IMAGE */}
        <div className="h-[140px] md:h-[190px] flex items-center justify-center mb-4">
          <img
            src={item.image}
            alt={item.name}
            className="max-h-[100px] md:max-h-[140px] object-contain drop-shadow-[0_0_22px_rgba(234,247,108,0.6)]"
          />
        </div>
      
        {/* INFO */}
        <div className="text-center">
          <p className="text-sm text-white font-medium">{item.name}</p>
          <p className="text-xs text-gray-400 mb-2">SKU: {item.sku}</p>
      
          <div className="flex items-center justify-center gap-2">
            <span className="text-white font-semibold">₹{item.price}</span>
            <span className="text-gray-500 line-through text-sm">
              ₹{item.oldPrice}
            </span>
          </div>
        </div>
        </div>
      </div>
      
                ))}
    </div>
  );
};

export default ProductGrid;
