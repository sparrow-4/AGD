import React from "react";
import {
  CATEGORY_FILTERS,
  MATERIAL_FILTERS,
  OCCASION_FILTERS,
} from "../../constants/filterData";

const Filter = ({ filters, setFilters }) => {
  const toggle = (type, value) => {
    setFilters((prev) => ({
      ...prev,
      [type]: prev[type].includes(value)
        ? prev[type].filter((v) => v !== value)
        : [...prev[type], value],
    }));
  };

  const renderList = (data, type) => (
    <ul className="space-y-2">
      {data.map((item) => (
        <li
          key={item.id}
          className="flex items-center justify-between text-[13px] text-white/70"
        >
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={filters[type].includes(item.label)}
              onChange={() => toggle(type, item.label)}
              className="accent-[#E6EE6A]"
            />
            {item.label}
          </label>
          <span className="text-[12px]">
            {item.count}
          </span>
        </li>
      ))}
    </ul>
  );

  return (
    <aside
      className="
        w-full
        lg:w-[344px]
        bg-[#4f5136]
        rounded-[16px]
        p-4
        sticky
        top-2
        h-[220vh]
        overflow-y-auto
        text-[#F0F0D6]
      "
    >
      {/* TITLE */}
      <h3 className="text-[15px] font-semibold mb-3">
        Filter
      </h3>

      <hr className="border-white/20 mb-4" />

      {/* CATEGORIES */}
      <p className="text-[13px] font-medium mb-3">
        Categories
      </p>
      {renderList(CATEGORY_FILTERS, "category")}

      <hr className="border-white/20 my-6" />

      {/* MATERIAL */}
      <p className="text-[13px] font-medium mb-3">
        Material
      </p>
      {renderList(MATERIAL_FILTERS, "material")}

      <hr className="border-white/20 my-6" />

      {/* OCCASION */}
      <p className="text-[13px] font-medium mb-3">
        Occasion
      </p>
      {renderList(OCCASION_FILTERS, "occasion")}
    </aside>
  );
};

export default Filter;
