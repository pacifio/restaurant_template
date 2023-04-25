import Head from "next/head";
import React from "react";
import StoryHeader from "../components/Sections/Story/StoryHeader";
import Content1 from "../components/Sections/Story/Content1";
import Content2 from "../components/Sections/Story/Content2";
import Content3 from "../components/Sections/Story/Content3";
import Team from "../components/Sections/Story/Team";
import Delivery from "../components/Sections/Story/Delivery";
import Footer from "../components/Shared/Footer";

function Story() {
  return (
    <>
      <Head>
        <title>Welcome to Saturn</title>
      </Head>
      <StoryHeader />
      <Content1 />
      <Content2 />
      <Content3 />
      <Team />
      <Delivery />
      <Footer />
    </>
  );
}

export default Story;
