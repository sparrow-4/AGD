import Gpy from "../assets/gpy.png";
import Apple from "../assets/apple.png";

const Download = () => {
  return (
    <section className="bg-[#1b1b1b] py-16">
      <div className="max-w-8xl mx-auto px-6 md:px-20">
        <div
          className="
            relative overflow-hidden rounded-2xl
            bg-[#010F17] border border-nav
            h-auto lg:h-[380px]
          "
        >
          {/* MOBILE + TABLET */}
          <div className="lg:hidden flex flex-col items-center p-8 text-center">
            <h2 className="text-xl font-bodoni font-extrabold text-nav mb-3">
              Download Our Mobile App
            </h2>

            <p className="text-sm text-gray-300 mb-6 max-w-xl">
              Get the top E-commerce app on your phone! We’ve got you covered
              with a super user-friendly experience and tons of events to check
              out. Dive in and explore!
            </p>

            <div className="flex items-center gap-4">
              <img
                src={Gpy}
                alt="Google Play"
                className="w-[140px] object-contain cursor-pointer"
              />
              <img
                src={Apple}
                alt="Apple Store"
                className="w-[140px] object-contain cursor-pointer"
              />
            </div>
          </div>

          {/* DESKTOP (EXACT, CENTERED) */}
          <div className="hidden lg:flex absolute inset-0 flex-col items-center justify-center text-center">
            <h2 className="text-4xl font-bodoni font-extrabold text-nav mb-4">
              Download Our Mobile App
            </h2>

            <p className="text-base text-gray-300 mb-8 max-w-2xl leading-relaxed">
              Get the top E-commerce app on your phone! We’ve got you covered
              with a super user-friendly experience and tons of events to check
              out. Dive in and explore!
            </p>

            <div className="flex items-center gap-6">
              <img
                src={Gpy}
                alt="Google Play"
                className="w-[175px] object-contain cursor-pointer"
              />
              <img
                src={Apple}
                alt="Apple Store"
                className="w-[175px] object-contain cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Download;
