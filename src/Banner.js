import { styled } from "@mui/material";

import { BannerData } from "./BannerData";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export const Banner = () => {
  return (
    <Carousel
      showDots={true}
      responsive={responsive}
      // means to render carousel on server-side.

      autoPlaySpeed={5000}
      keyBoardControl={true}
      containerClass="carousel-container"
    >
      {BannerData.map((image) => (
        <img
          src={image.url}
          alt="banner"
          id={image.id}
          style={{ width: "100%", height: "180", objectFit: "cover" }}
        />
      ))}
    </Carousel>
  );
};
