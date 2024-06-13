import React, { FC } from "react";
import Header from "../widgets/Header";
import Hero from "../widgets/Hero";
import Solutions from "../widgets/Solutions";
import HowItWorks from "../widgets/HowItWorks";
import Clients from "../widgets/Clients";
import Contact from "../widgets/Contact";
import Footer from "../widgets/Footer";
const index: FC = () => {
  return (
    <div className="container mx-auto p-4">
      <Header />
      <main className="mt-20">
        <Hero />
        <section className="md:p-20">
          <Solutions />
        </section>
        <section className="mt-20">
          <HowItWorks />
        </section>
        <section className="mt-20 md:w-3/5 mx-auto">
          <Clients />
        </section>
        <section className="mt-20">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
};
export default index;
