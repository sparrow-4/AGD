import React from "react";

const TrendingHeader = () => {
  return (
    <div
      className="
        flex
        flex-col
        sm:flex-row
        sm:items-center
        sm:justify-between
        gap-3
        mb-6
      "
    >
      <div>
        <h2 className="text-2xl md:text-3xl font-playfair text-white">
          Trending
        </h2>
        <p className="text-sm text-white/60">
          234 new items added
        </p>
      </div>

      <button
        className="
          bg-[#E6EE6A]
          text-black
          px-4
          py-2
          rounded-full
          text-sm
          self-start
          sm:self-auto
        "
      >
        Low to high
      </button>
    </div>
  );
};

export default TrendingHeader;
