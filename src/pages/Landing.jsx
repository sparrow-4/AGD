import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";

import ShopOnBudget from "../components/ShopOnBudget";
import NewArrivals from "../components/NewArrivals";
import GoldPromoBanner from "../components/Banner";
import TopDemandedItems from "../components/TopDemandedItems";

import Recent from "../components/Recent";
import Download from "../components/Download";
import Footer from "../components/Footer";
import Display from "../components/Display";

const Landing = () => {
  return (
   <div>
    <Header />
    <section>
        <Hero />
      </section>
     <main className="w-full overflow-x-hidden max-w-400 mx-auto">
      

      

      <section>
        <ShopOnBudget />
      </section>
      <section>
        <NewArrivals />
      </section>
      <section>
        <GoldPromoBanner />
      </section>
      <section>
        <TopDemandedItems />
      </section>
      <section>
        <Display />
      </section>
      <section>
        <Recent />
      </section>
      
      <section>
        <Download />
      </section>
      
      

     
    </main>
    <section>
        <Footer />
      </section>
   </div>
  );
};

export default Landing;
