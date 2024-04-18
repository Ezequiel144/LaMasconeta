"use client";
import { objectInfoNumber } from "@/interfaces";
import CardInfoNumber from "../CardInfoNumber/CardInfoNumber";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

const listInfoNumber: objectInfoNumber[] = [
  {
    numberTitle: "1.3K+",
    description: "lorem lorem",
  },
  {
    numberTitle: "1K+",
    description: "lorem lorem",
  },
  {
    numberTitle: "1.2K+",
    description: "lorem lorem",
  },
  {
    numberTitle: "0.7K+",
    description: "lorem lorem",
  },
];

export default function HeroSectionTwo() {
  return (
    <Swiper
      className=" w-full h-[350px] flex justify-center items-center gap-x-14 bg-hero-sectionTwo bg-no-repeat bg-cover bg-center mt-10"
      spaceBetween={0}
      slidesPerView={4}
      modules={[Autoplay]}
      autoplay={{ delay: 5000 }}
      spaceBetween={0}
      slidesPerView={1}
      breakpoints={{
        620: {
          slidesPerView: 2,
          spaceBetween: 0,
          slidesPerGroup: 2,
        },
        920: {
          slidesPerView: 3,
          spaceBetween: 0,
          slidesPerGroup: 3,
        },
        1250: {
          slidesPerView: 4,
          spaceBetween: 0,
          slidesPerGroup: 4,
        },
      }}
    >
      {listInfoNumber.map((item, index) => (
        <SwiperSlide key={index}>
          <div className="h-full w-full flex items-center justify-center">
            <CardInfoNumber
              numberTitle={item.numberTitle}
              description={item.description}
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
