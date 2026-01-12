import React from "react";

import {budgets} from "../constants/index.js";



const ShopOnBudget = () => {
  return (
    <section className="bg-[#1b1b1b] py-16">
      <div className="max-w-8xl mx-auto px-6 md:px-20">
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
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
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
