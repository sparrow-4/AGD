import React from "react";
import { IoFilter } from "react-icons/io5";
import { FaSortAmountDown, FaSortAmountUp } from "react-icons/fa";

const TrendingHeader = ({
  filteredCount,
  filters,
  setFilters,
  sort,
  setSort,
  onOpenFilter,
}) => {
  const activeFilters = [
    ...filters.category,
    ...filters.material,
    ...filters.occasion,
  ];

  const removeFilter = (value) => {
    setFilters((prev) => ({
      category: prev.category.filter((v) => v !== value),
      material: prev.material.filter((v) => v !== value),
      occasion: prev.occasion.filter((v) => v !== value),
    }));
  };

  return (
    <div className="mb-6">
      {/* TITLE */}
      <div className="flex items-center gap-6">
        <h2 className="text-[20px] font-semibold text-white">Trending</h2>
        <p className="text-[12px] text-white/60">{filteredCount} items found</p>
      </div>

      {/* BREADCRUMB */}
      <p className="mt-3 text-[12px] text-white/60">
        Home &gt; <span className="text-white">Trending</span>
      </p>

      {/* FILTERS + SORT */}
      <div className="mt-4 flex flex-col lg:flex-row lg:items-center lg:justify-between">
        {/* ACTIVE FILTERS */}
        <div className="flex flex-wrap items-center gap-2">
          {activeFilters.length > 0 && (
            <span className="text-[12px] text-white/60">Filter by :</span>
          )}

          {activeFilters.map((f) => (
            <span
              key={f}
              className="h-7 px-3 rounded-full bg-[#4d4d33] text-[12px] flex items-center gap-2"
            >
              {f}
              <button onClick={() => removeFilter(f)}>✕</button>
            </span>
          ))}
        </div>

        <div className="mt-4 flex  lg:flex-row lg:items-center gap-2 lg:gap-4">
          {/* SORT (always visible) */}
          <button
            onClick={() =>
              setSort((prev) => (prev === "low-high" ? "high-low" : "low-high"))
            }
            className="
      h-10 px-4
      w-12
      rounded-full
      bg-nav hover:bg-[#999907]
      text-black text-[12px]
      flex items-center gap-2
      transition
    "
          >
            
            {sort === "low-high" ? (
    <FaSortAmountDown className="text-[16px]" />
  ) : (
    <FaSortAmountUp className="text-[16px]" />
  )}
  
          </button>

          {/* MOBILE FILTER ONLY */}
          <button
            onClick={onOpenFilter}
            className="
    lg:hidden
    h-10 px-4
    w-12
    rounded-full
    bg-[#4d4d33]
    text-white
    text-[12px]
    flex items-center gap-2
    transition
    hover:bg-[#5a5c3f]
  "
          >
            <IoFilter className="text-[16px]" />
            
          </button>
        </div>
      </div>
    </div>
  );
};

export default TrendingHeader;
