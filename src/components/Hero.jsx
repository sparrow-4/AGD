import React from "react";
import bgImage from "../assets/main.png";
import woman from "../assets/woman.svg";

import shipping from "../assets/shipping.svg";
import moneyback from "../assets/moneyback.svg";
import support from "../assets/support.svg";
import secure from "../assets/secure.svg";

const features = [
  { icon: shipping, title: "Free shipping", desc: "On order over ₹2000" },
  { icon: moneyback, title: "Moneyback", desc: "Moneyback guarantee" },
  { icon: support, title: "24/7 Support", desc: "Online consultations" },
  { icon: secure, title: "Secure payment", desc: "Safe Shopping Guarantee" },
];

const Hero = () => {
  return (
    <section className="relative w-full h-[100vh] min-h-[520px] overflow-hidden">
      {/* BACKGROUND IMAGE DIV */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      />

      {/* LEFT GRADIENT OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />

      {/* TEXT (BEHIND WOMAN) */}
     <div className="relative z-10 h-full flex items-center">
  <div className="w-full px-6 md:px-20 lg:px-28">
    <div className="max-w-2xl text-white">
      <h1 className="text-3xl md:text-5xl font-bold font-solway leading-tight mb-4">
        The World First Jewelry <br />
        Commerce Platform <br />
        The Future Tale
      </h1>
      <p className="text-sm md:text-base text-gray-200">
        Discover the future of jewelry shopping with our <br /> innovative
        e-commerce platform, showcasing exceptional<br /> talent and unique
        designs.
      </p>
    </div>
  </div>
</div>

      {/* WOMAN FOREGROUND IMAGE */}
      <img
        src={woman}
        alt="Model"
        className="absolute right-0 -bottom-73 h-[180vh] z-20 object-contain pointer-events-none hidden lg:block"
      />

      {/* BOTTOM GLASS STRIP */}
      <div className="absolute bottom-0 left-0 w-full z-30">
        <div className="bg-black/40 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-20 py-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-white">
              {features.map((item) => (
                <div key={item.title} className="flex flex-col items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-bgclr  flex items-center justify-center">
                    <img
                      src={item.icon}
                      alt={item.title}
                      className="h-6 w-6 brightness-200"
                    />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold">{item.title}</h4>
                    <p className="text-xs text-gray-300">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
