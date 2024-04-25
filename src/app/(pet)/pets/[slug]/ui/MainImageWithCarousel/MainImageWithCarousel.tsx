"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useState } from "react";
import { objectImageCarousel } from "@/interfaces";

type Props = {
  photos: string[]
}

const listImageCarousel: objectImageCarousel[] = [
  {
    name: "imagen main",
    url: "/image/imageCarouselDetail.png",
    imageMain: "/image/imageMainDetails.png",
  },
  {
    name: "imagen carousel 1",
    url: "/image/imageCarouselDetail.png",
    imageMain: "/image/imagePet2.png",
  },
  {
    name: "imagen carousel 2",
    url: "/image/imageCarouselDetail.png",
    imageMain: "/image/imagePet3.png",
  },
  {
    name: "imagen carousel 3",
    url: "/image/imageCarouselDetail.png",
    imageMain: "/image/imagePet4.png",
  },
  {
    name: "imagen carousel 4",
    url: "/image/imageCarouselDetail.png",
    imageMain: "/image/imageMainDetails.png",
  },
];

export default function MainImageWithCarousel({ photos }: Props) {
  const [indexCarousel, setIndexCarousel] = useState<number>(0);
  return (
    <section className=" flex flex-col w-full gap-y-3">
      {photos?.map((item, index) => {
        return (
          <div key={index}>
            {index === indexCarousel && (
                <Image
                  
                  src={item}
                  width={490}
                  height={490}
                  className={`mx-auto rounded-3xl border`}
                  alt={`imagen  ${index + 1}`}
                />
            )}
          </div>
        );
      })}

      {/* carrusel */}

      <Swiper
        className=" flex items-center justify-center w-full md:max-w-[500px]"
        spaceBetween={0}
        slidesPerView={4}
        breakpoints={{
          550: {
            slidesPerView: 5,
            spaceBetween: 0,
            slidesPerGroup: 5,
          },
        }}
      >
        {photos.map((item, index) => {
          /* const { name, url } = item; */
          return (
            <SwiperSlide key={index}>
              <Image
                src={item}
                width={70}
                height={70}
                className="mx-auto border rounded-2xl"
                alt={`imagen carrusel numero ${index + 1}`}
                onClick={() => setIndexCarousel(index)}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}
