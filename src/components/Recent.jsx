import React from "react";

import { items } from "../constants/index.js";

const Recent = () => {
  return (
    <section className="bg-[#1b1b1b] pb-10">
      <div className="max-w-8xl mx-auto px-6 md:px-20">
        {/* Heading */}
        <div className="text-start mb-12">
          <h2 className="text-4xl md:text-4.5xl font-bodoni font-semibold text-[#F0F0D6]">
            Recent Searched
          </h2>
          <p className="text-gray-500 mt-2 text-sm">234 New item added</p>
        </div>

        <div
          className="flex gap-6
    overflow-x-auto
    pb-4
    -mx-6 px-6
    scroll-smooth
    whitespace-nowrap
     scrollbar-hide
  "
        >
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

    w-[45vw] sm:w-[50vw] md:w-[180px] lg:w-[220px]
    flex-shrink-0
  "
>
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

          ))}
        </div>
      </div>
    </section>
  );
};

export default Recent;
