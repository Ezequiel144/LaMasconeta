'use client'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";

const listCardPets: objectCardPets[] = [
  {
    name: "nombre del perro",
    province: "province",
    location: "localidad",
    typeOfAnimal: "tipo de animal",
    image: "/image/imagePet.png",
  },
  {
    name: "nombre del perro",
    province: "province",
    location: "localidad",
    typeOfAnimal: "tipo de animal",
    image: "/image/imagePet.png",
  },
  {
    name: "nombre del perro",
    province: "province",
    location: "localidad",
    typeOfAnimal: "tipo de animal",
    image: "/image/imagePet.png",
  },
  {
    name: "nombre del perro",
    province: "provincia",
    location: "localidad",
    typeOfAnimal: "tipo de animal",
    image: "/image/imagePet.png",
  },
];

import { Autoplay } from "swiper/modules";
import { objectCardPets } from "@/interfaces";
import CardsPets from "@/components/ui/CardPets/CardPets";
export default function RelatedCarousel() {
  return (
    <Swiper
      className="w-full mt-5 lg:mt-16"
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
      {listCardPets.map((item, index) => {
        const { name, province, location, typeOfAnimal, image } = item;
        return (
          <SwiperSlide key={index}>
            <article className=" flex items-center justify-around h-fit">
              <CardsPets
                name={name}
                province={province}
                location={location}
                typeOfAnimal={typeOfAnimal}
                image={image}
              />
            </article>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
