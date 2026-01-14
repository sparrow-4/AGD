import React from "react";
import Logo from "../assets/logoo.svg"; 
import { useNavigate } from "react-router-dom";

const Footer = () => {
   const navigate = useNavigate();
  return (
    <footer className="bg-[#4f570e] text-[#F0F0D6]">
      <div className="max-w-7xl mx-auto px-6 md:px-20 py-16">
        
        {/* TOP */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* BRAND */}
          <div onClick={()=> {navigate('/');
            window.scrollTo({ top: 0, behavior: "smooth" });
          }} className="lg:col-span-1 flex items-center gap-3 cursor-pointer">
  {/* LOGO ICON */}
  <img
    src={Logo}
    
    alt="AGD Logo"
    className="h-10 md:h-12 object-contain "
  />

  {/* LOGO TEXT */}
  <div className="leading-tight">
    <h1 className="text-2xl md:text-3xl font-bodoni font-semibold text-[#F0F0D6]">
      AGD
    </h1>
    <p className="text-[10px] md:text-xs tracking-widest text-[#e5e5c8]">
      GOLD & DIAMONDS
    </p>
  </div>
</div>


          {/* COMPANY */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li className="hover:underline cursor-pointer">Products</li>
              <li className="hover:underline cursor-pointer">About</li>
            </ul>
          </div>

          {/* LEGAL */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li className="hover:underline cursor-pointer">
                Privacy Policy
              </li>
              <li className="hover:underline cursor-pointer">
                Terms & Conditions
              </li>
            </ul>
          </div>

          {/* SOCIAL */}
          <div>
            <h4 className="font-semibold mb-4">Link Up with Friends!</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2 cursor-pointer hover:underline">
                Instagram
              </li>
              <li className="flex items-center gap-2 cursor-pointer hover:underline">
                YouTube
              </li>
              <li className="flex items-center gap-2 cursor-pointer hover:underline">
                LinkedIn
              </li>
            </ul>
          </div>

          {/* HELP */}
          <div className="flex flex-col items-end gap-8">
            <h4 className="font-semibold">
              Questions? Comments? Concerns?
            </h4>
            <button className="w-fit px-6 py-2 bg-[#F0F0D6] text-[#4f570e] rounded-md text-sm font-medium hover:opacity-90 transition">
              Help
            </button>
          </div>

        </div>

        {/* BOTTOM */}
        <div className="border-t border-[#6b7416] mt-12 pt-6 text-center text-sm text-[#e5e5c8]">
          © 2025 Gold E commerce. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;
