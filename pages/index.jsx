import Head from "next/head";
import React from "react";
import WhyWe from "../components/Sections/Home/WhyWe";
import Articles from "../components/Sections/Home/Articles";
import Stats from "../components/Sections/Home/Stats";
import CTA from "../components/Shared/CTA";
import Footer from "../components/Shared/Footer";
import Navbar from "../components/Shared/Navbar";
import HeaderCarousel from "../components/Shared/HeaderCarousel";

function Home() {
  return (
    <>
      <Head>
        <title>Welcome to Saturn</title>
      </Head>

      <Navbar />
      <HeaderCarousel />
      <WhyWe />
      <Articles />
      <Stats />
      <CTA />
      <Footer />
    </>
  );
}

export default Home;
