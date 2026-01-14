import React from "react";
import Filter from "./Filter";
import TrendingHeader from "./Trending";
import ProductGrid from "./ProductGrid";


const All = () => {
  return (
    <section className="bg-[#1b1b1b] py-4">
      <div
        className="
          mx-auto
          max-w-[1440px]
          px-4
          md:px-8
          lg:px-12
          flex
          flex-col
          lg:flex-row
          gap-6
        "
      >
        {/* LEFT */}
        <Filter />

        {/* RIGHT */}
        <div className="flex-1">
          <TrendingHeader />
          <ProductGrid />
        </div>
      </div>
    </section>
  );
};

export default All;