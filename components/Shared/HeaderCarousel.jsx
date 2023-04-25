import { Carousel } from "@mantine/carousel";
import { Image } from "@mantine/core";
import React from "react";

function HeaderCarousel() {
  return (
    <Carousel
      maw={"100vw"}
      mx="auto"
      height={"80vh"}
      slideGap="xs"
      controlSize={32}
      loop
    >
      <Carousel.Slide>
        <Image src="/images/kitchen/1.jpg" alt="1" fit="cover" />
      </Carousel.Slide>
      <Carousel.Slide>
        <Image src="/images/kitchen/2.jpg" alt="2" fit="cover" />
      </Carousel.Slide>
    </Carousel>
  );
}

export default HeaderCarousel;
