"use client";

import React from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import { marqueeImages } from "../data/data";

const HomeMarquee = () => (
  <div>
    <Marquee gradient={true} gradientWidth={100}>
      {marqueeImages.map((image) => {
        return (
          <img
            key={image.alt}
            src={image.img}
            alt={image.alt}
            className="mr-[10px] w-auto h-[55px] "
          />
        );
      })}
    </Marquee>
  </div>
);

export default HomeMarquee;
