import React from "react";
import heart from "../assets/heart.svg"; // outline heart
import heartFill from "../assets/heart-fill.svg"; // optional
import ring1 from "../assets/ring1.png";
import ring2 from "../assets/ring2.png";
import ring3 from "../assets/ring3.png";
import ring4 from "../assets/ring4.png";

const products = [
  {
    id: 1,
    name: "Diamond ring",
    sku: "18037",
    price: "27000",
    image: ring4,
  },
  {
    id: 2,
    name: "Diamond ring",
    sku: "18037",
    price: "27000",
    image: ring3,
  },
  {
    id: 3,
    name: "Diamond ring",
    sku: "18037",
    price: "27000",
    image: ring2,
  },
  {
    id: 4,
    name: "Diamond ring",
    sku: "18037",
    price: "27000",
    image: ring1,
  },
];

const NewArrivals = () => {
  return (
    <section className="bg-[#1b1b1b] py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-20">
        {/* Header */}
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-4xl font-playfair text-white">
              New Arrivals
            </h2>
            <p className="text-sm text-gray-400 mt-1">
              234 New item added
            </p>
          </div>
          <button className="text-sm text-white hover:underline">
            See all
          </button>
        </div>

        {/* Products */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {products.map((item) => (
            <div
              key={item.id}
              className="bg-crd rounded-xl p-4 relative"
            >
              {/* Wishlist */}
              <button className="absolute top-4 right-4 z-10">
                <img src={heart} alt="wishlist" className="h-5" />
              </button>

              {/* Image */}
              <div className="h-[220px] flex items-center justify-center">
  <img
    src={item.image}
    alt={item.name}
    className="max-h-full object-contain drop-shadow-[0_0_22px_rgba(234,247,108,0.6)]"
  />
</div>


              {/* Info */}
              <div className="mt-4">
                <p className="text-sm text-white">
                  {item.name}
                </p>
                <p className="text-xs text-gray-400">
                  SKU: {item.sku}
                </p>

                <div className="flex items-center justify-between mt-4">
                  <span className="text-white font-semibold">
                    {item.price}
                  </span>
                </div>

                {/* Actions */}
                <div className="flex gap-2 mt-4">
                  <button className="flex-1 bg-lime-400 text-black text-sm py-2 rounded-md font-medium hover:bg-lime-500 transition">
                    ADD TO CART
                  </button>
                  <button className="w-10 flex items-center justify-center border border-lime-400 rounded-md">
                    <img src={heartFill} alt="fav" className="h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;
