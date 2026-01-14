import React from "react";
import Filter from "./Filter";

const MobileFilterDrawer = ({ onClose, filters, setFilters }) => {
  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* BACKDROP */}
      <div
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
      />

      {/* DRAWER */}
      <div
        className="
         absolute left-0 top-0
    h-full
    w-full
    sm:w-[360px]
    bg-[#4f5136]
    shadow-xl
    p-4
    overflow-y-auto
    animate-slide-in
        "
      >
        {/* HEADER */}
        <div className="flex items-center justify-between mb-4">
          
          <button
            onClick={onClose}
            className="text-white text-xl"
          >
            ✕
          </button>
        </div>

        {/* FILTER CONTENT */}
        <Filter filters={filters} setFilters={setFilters} />
      </div>
    </div>
  );
};

export default MobileFilterDrawer;
