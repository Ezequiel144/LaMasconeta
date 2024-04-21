"use client";
import { objectCardPets } from "@/interfaces";
import TitleGeneralHome from "../TitleGeneralHome/TitleGeneralHome";
import CardPets from "../CardPets/CardPets";
import ButtonGeneral from "../ButtonGeneral/ButtonGeneral";
/* carrusel */
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

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

export default function CardsPetsAllSectionThree() {
  return (
    <section className=" flex flex-col gap-y-5 pt-16 ">
      <article className="w-full text-center lg:text-right">
        <TitleGeneralHome>title lorem lorem</TitleGeneralHome>
      </article>
      <Swiper
        className="w-full"
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
        {listCardPets.map((item, index) => {
          const { name, province, location, typeOfAnimal, image } = item;
          return (
            <SwiperSlide key={index}>
              <article className=" flex items-center justify-around h-fit">
                <CardPets
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
      <article className="w-full text-center">
        <ButtonGeneral>MOSTRAR MAS</ButtonGeneral>
      </article>
    </section>
  );
}