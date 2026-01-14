import React, { useState } from "react";

const ProductGrid = ({ trending }) => {
  const [favorites, setFavorites] = useState(new Set());

  const toggleFavorite = (id) => {
    setFavorites((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  if (!trending || trending.length === 0) {
    return (
      <p className="text-white/60 text-sm">
        No products found.
      </p>
    );
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {trending.map((item) => (
        <div
          key={item.id}
          className="
            bg-[#121212]
            rounded-[16px]
            p-4
            relative
            border border-white/10
            transition
            duration-200
            hover:border-[#E6EE6A]/60
            hover:shadow-[0_0_24px_rgba(230,238,106,0.15)]
          "
        >
          {/* Wishlist */}
          <button
            type="button"
            onClick={() => toggleFavorite(item.id)}
            className="
              absolute top-4 right-4 z-10
              h-8 w-8 rounded-full
              bg-black/60 backdrop-blur
              flex items-center justify-center
              hover:bg-black/80 transition
            "
            aria-label="Toggle wishlist"
          >
            <svg
              className={`h-4 w-4 transition ${
                favorites.has(item.id)
                  ? "fill-red-500 stroke-red-500"
                  : "fill-transparent stroke-white"
              }`}
              viewBox="0 0 24 24"
              strokeWidth="2"
            >
              <path d="M12 21s-7-4.35-9.33-8.28C.78 9.36 2.34 5.5 6.28 5.5c2.1 0 3.57 1.19 4.72 2.73C12.15 6.69 13.62 5.5 15.72 5.5c3.94 0 5.5 3.86 3.61 7.22C19 16.65 12 21 12 21z" />
            </svg>
          </button>

          {/* IMAGE */}
          <div className="h-[180px] flex items-center justify-center">
            <img
              src={item.image}
              alt={item.name}
              className="max-h-full object-contain"
            />
          </div>

          {/* INFO */}
          <div className="mt-3 text-center space-y-1">
            <p className="text-sm font-medium text-white">
              {item.name}
            </p>
            <p className="text-[11px] text-white/60">
              SKU: {item.sku}
            </p>

            <div className="flex justify-center gap-3 text-sm mt-2">
              <span className="text-white font-semibold">
                ₹{item.price}
              </span>
              <span className="text-white/40 line-through">
                ₹{item.oldPrice}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
