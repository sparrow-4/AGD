import React from "react";

import img1 from "../assets/budget1.png";
import img2 from "../assets/budget2.png";
import img3 from "../assets/budget3.png";
import img4 from "../assets/budget4.png";

const budgets = [
  { img: img1, title: "Over 250k", subtitle: "72000 styles" },
  { img: img2, title: "100k - 250k", subtitle: "58000 styles" },
  { img: img3, title: "50k - 100k", subtitle: "34000 styles" },
  { img: img4, title: "Under 50k", subtitle: "18000 styles" },
];

const ShopOnBudget = () => {
  return (
    <section className="bg-[#1b1b1b] py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-20">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-3xl font-bodoni font-semibold text-nav">
            Shop on Budget
          </h2>
          <p className="text-gray-400 mt-2 text-sm">
            We have every style at your affordable budget
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {budgets.map((item) => (
            <div
              key={item.title}
              className="relative overflow-hidden rounded-md group"
            >
              {/* Image */}
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-[320px] object-cover transition-transform duration-300 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/20" />

              {/* Text */}
              <div className="absolute bottom-4 left-0 right-0 text-center">
                <h3 className="text-white font-semibold text-lg">
                  {item.title}
                </h3>
                <p className="text-yellow-400 text-sm">
                  {item.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopOnBudget;
