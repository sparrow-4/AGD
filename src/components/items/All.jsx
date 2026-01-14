import React, { useState, useMemo } from "react";

import Filter from "./Filter";
import TrendingHeader from "./Trending";
import ProductGrid from "./ProductGrid";
import MobileFilterDrawer from "./MobileFilterDrawer";
import { trending } from "../../constants/filterData";

const All = () => {
  const [filters, setFilters] = useState({
    category: [],
    material: [],
    occasion: [],
  });

  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [sort, setSort] = useState("low-high");

  const filteredItems = useMemo(() => {
    let result = trending.filter((item) => {
      const categoryOk =
        filters.category.length === 0 ||
        filters.category.includes(item.category);

      const materialOk =
        filters.material.length === 0 ||
        filters.material.includes(item.material);

      const occasionOk =
        filters.occasion.length === 0 ||
        filters.occasion.includes(item.occasion);

      return categoryOk && materialOk && occasionOk;
    });

    // IMPORTANT: clone before sort (no mutation)
    const sorted = [...result];

    if (sort === "low-high") {
      sorted.sort((a, b) => a.price - b.price);
    } else {
      sorted.sort((a, b) => b.price - a.price);
    }

    return sorted;
  }, [trending, filters, sort]);

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
        {/* DESKTOP FILTER */}
        <div className="hidden lg:block">
          <Filter filters={filters} setFilters={setFilters} />
        </div>

        {/* RIGHT */}
        <div className="flex-1">
          <TrendingHeader
            filteredCount={filteredItems.length}  
            filters={filters}
            setFilters={setFilters}
            sort={sort}
            setSort={setSort}
            onOpenFilter={() => setIsFilterOpen(true)}
          />

          <ProductGrid trending={filteredItems} />
        </div>
      </div>

      {/* MOBILE FILTER */}
      {isFilterOpen && (
        <MobileFilterDrawer
          onClose={() => setIsFilterOpen(false)}
          filters={filters}
          setFilters={setFilters}
        />
      )}
    </section>
  );
};

export default All;
