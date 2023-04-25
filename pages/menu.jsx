import Head from "next/head";
import React from "react";
import Navbar from "../components/Shared/Navbar";
import Footer from "../components/Shared/Footer";
import MenuCard from "../components/Sections/Menu/MenuCard";
import HeaderCarousel from "../components/Shared/HeaderCarousel";

function Menu() {
  return (
    <>
      <Head>
        <title>Welcome to Saturn</title>
      </Head>

      <Navbar />
      <HeaderCarousel />
      <MenuCard />
      <MenuCard reverse />
      <MenuCard />
      <MenuCard reverse />
      <Footer />
    </>
  );
}

export default Menu;
