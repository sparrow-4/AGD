import React, { useState, useMemo } from "react";



import Filter from "./Filter";
import TrendingHeader from "./Trending";
import ProductGrid from "./ProductGrid";
import { items } from "../../constants";
import MobileFilterDrawer from "./MobileFilterDrawer";

const All = () => {
   const [filters, setFilters] = useState({
    category: [],
    material: [],
    occasion: [],
  });
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const [sort, setSort] = useState("low-high"); 

  const filteredItems = useMemo(() => {
    let result = items.filter((item) => {
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

   
    if (sort === "low-high") {
      result.sort((a, b) => a.price - b.price);
    }

    if (sort === "high-low") {
      result.sort((a, b) => b.price - a.price);
    }

    return result;
  }, [filters, sort]);

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
        <div className="hidden lg:block">
  <Filter filters={filters} setFilters={setFilters} />
</div>


        {/* RIGHT */}
        <div className="flex-1">
          <TrendingHeader
          total={filteredItems.length}
          filters={filters}
          setFilters={setFilters}
          sort={sort}
          setSort={setSort}
          onOpenFilter={() => setIsFilterOpen(true)}
        />
          <ProductGrid items={filteredItems} />
        </div>
      </div>
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

