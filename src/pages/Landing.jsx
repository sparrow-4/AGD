import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";

import ShopOnBudget from "../components/ShopOnBudget";
import NewArrivals from "../components/NewArrivals";

const Landing = () => {
  return (
    <main className="w-full overflow-x-hidden">
      <Header />

      <section>
        <Hero />
      </section>

      <section >
        <ShopOnBudget />
      </section>
      <section>
        <NewArrivals />
      </section>
      

     
    </main>
  );
};

export default Landing;
