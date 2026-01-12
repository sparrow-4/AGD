
import {items} from "../constants/index.js";

const TopDemandedItems = () => {
  return (
    <section className="bg-[#1b1b1b] py-20">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* HEADER */}
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bodoni text-white mb-2">
            Top Demanded Items
          </h2>
          <p className="text-sm text-gray-400">
            234 New item added
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {items.map((item) => (
            <div
              key={item.id}
              className="
                bg-[#0f0f0f]
                rounded-xl
                p-5
                border
                border-lime-400/20
                hover:border-lime-400/60
                transition
                flex flex-col
                min-h-[260px] md:min-h-[360px]

              "
            >
              {/* IMAGE */}
              <div className=" h-[120px] md:aspect-square flex-1 flex items-center justify-center mb-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="max-h-[140px] object-contain drop-shadow-[0_0_22px_rgba(234,247,108,0.6)]"
                />
              </div>

              {/* INFO */}
              <div className="text-center">
                <p className="text-sm text-white font-medium">
                  {item.name}
                </p>
                <p className="text-xs text-gray-400 mb-3">
                  SKU: {item.sku}
                </p>

                <div className="flex items-center justify-center gap-2">
                  <span className="text-white font-semibold">
                    ₹{item.price}
                  </span>
                  <span className="text-gray-500 line-through text-sm">
                    ₹{item.oldPrice}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TopDemandedItems;
