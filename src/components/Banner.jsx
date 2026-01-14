import { useNavigate } from "react-router-dom";
import bannerImg from "../assets/gold.png";

const GoldPromoBanner = () => {
   const navigate = useNavigate();
  return (
    <section className="bg-[#1b1b1b] py-16">
      <div className="max-w-8xl mx-auto px-6 md:px-20">
        <div
          className="
            relative overflow-hidden rounded-2xl
            bg-gradient-to-r from-[#6b6b14] via-[#141414] to-black
            h-auto lg:h-[450px]
          "
        >
          {/* MOBILE / TABLET LAYOUT */}
          <div className="lg:hidden p-6">
            <img
            onClick={()=> navigate('/')}
              src={bannerImg}
              alt="Gold Jewellery"
              className="w-full max-h-65 object-contain mb-6"
            />

            <h2 className="text-2xl font-bodoni font-extrabold text-white mb-3">
              The Best Gold Ever
            </h2>

            <p className="text-sm text-gray-300 mb-6">
              People thinking about the future why gold make high
              value here is the answer for all about
            </p>

            <button
              className="
                w-full h-[48px]
                border border-lime-400
                rounded-md
                text-lime-400 text-sm font-medium
                hover:bg-lime-400 hover:text-black
                transition
              "
            >
              Explore
            </button>
          </div>

          {/* DESKTOP – EXACT FIGMA */}
          <div className="hidden lg:block">
            {/* IMAGE */}
            <img
              src={bannerImg}
              alt="Gold Jewellery"
              className="
                absolute
                left-[10px] top-1/2 -translate-y-1/2
                max-h-[3200px]
              "
            />

            {/* TEXT */}
            <div
              className="
                absolute
                right-[40px] top-1/2 -translate-y-1/2
                max-w-[400px]
                text-white
              "
            >
              <h2 className="text-4xl font-bodoni font-extrabold mb-4">
                The Best Gold Ever
              </h2>

              <p className="text-base text-gray-300 leading-relaxed">
                People thinking about the future why gold make high
                value here is the answer for all about
              </p>
            </div>

            {/* CTA */}
            <button
              className="
                absolute
                right-[120px] bottom-[56px]
                min-w-[260px] h-[56px]
                border border-lime-400
                rounded-md
                text-lime-400 text-sm font-medium
                hover:bg-lime-400 hover:text-black
                transition
              "
            >
              Explore
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoldPromoBanner;
