// export const metadata = {
//   title: "Home - Open PRO",
//   description: "Page description",
// };

import Hero from "@/components/hero";
import Features from "@/components/features";
import Introduction from "@/components/introduction";
import OurStory from "@/components/our-story";
import Policy from "@/components/policy";
import ProductList from "@/components/product-list";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import { useState, useEffect } from "react";
import data from "../../app/data/cart.json";
import { Provider } from 'react-redux';
import store from '../../redux/store';

export default function Home() {
  return (
    <>
      <Header/>
      <div className="relative">
        <Hero />
        <Features />
        <Introduction />
        <OurStory />
        <Policy />
        <div className="m-10">
        <ProductList />
        </div>
        <div
          className="absolute ml-10 h-full z-40 left-0 right-0 top-0 bottom-0"
          style={{ backgroundColor: "#D4D4D4", width: 0.1 }}
        ></div>
      </div>
      <Footer />
    </>
  );
}
