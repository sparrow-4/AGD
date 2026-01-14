import { useState } from "react";
import heart from "../assets/heart.svg";
import heartFill from "../assets/heart-fill.svg";

import {products} from "../constants/index.js";
import { useNavigate } from "react-router-dom";


const NewArrivals = () => {
  const [favorites, setFavorites] = useState(new Set());
  const navigate = useNavigate();

  const toggleFavorite = (id) => {
    setFavorites((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  return (
    <section className="bg-[#1b1b1b] py-16">
      <div className="max-w-8xl mx-auto px-6 md:px-20">
        {/* Header */}
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 onClick={() => navigate("/Trending")} className="text-4xl cursor-pointer font-playfair text-white">
              New Arrivals
            </h2>
            <p className="text-sm text-gray-400 mt-1">
              234 New items added
            </p>
          </div>
          <button onClick={() => navigate("/Trending")} className="text-sm text-white hover:underline">
            See all
          </button>
        </div>

        {/* Products */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {products.map((item) => {
            const isFav = favorites.has(item.id);

            return (
              <div
                key={item.id}
                className="bg-crd rounded-xl p-3 sm:p-4 relative bg-linear-to-tr from-black via-nav/5 to-black"
              >
                {/* Wishlist */}
          <button
  onClick={() => toggleFavorite(item.id)}
  className="absolute top-4 right-4 z-10"
>
  {isFav ? <div className="heart" /> : (
    <img src={heart} alt="wishlist" className="h-5" />
  )}
</button>



                {/* Image */}
                <div className="aspect-square flex items-center justify-center mb-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="max-h-full object-contain drop-shadow-[0_0_22px_rgba(234,247,108,0.6)]"
                  />
                </div>

                {/* Info */}
                <div className="flex flex-col flex-1">
                  <p className="text-sm text-white">{item.name}</p>
                  <p className="text-xs text-gray-400">
                    SKU: {item.sku}
                  </p>

                  <span className="text-white font-semibold mt-3">
                    ₹{item.price}
                  </span>

                  {/* Actions */}
                  <div className="flex items-center gap-3 mt-auto pt-4">
  <button className="flex-1 bg-nav text-black text-sm py-2.5 whitespace-nowrap px-1 rounded-md font-medium hover:bg-lime-500 transition">
    ADD TO CART
  </button>

  <button className="w-12 h-8 sm:w-12 sm:h-10  flex items-center justify-center border border-nav rounded-md hover:border-lime-500 px-1 transition">
    <img src={heartFill} alt="fav" className="h-6" />
  </button>
</div>

                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;
