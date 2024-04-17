"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import ButtonGeneral from "../ButtonGeneral/ButtonGeneral";
/* import "swiper/swiper.min.css"; */

export default function CarouselHero() {
  return (
    <Swiper
      className=" w-full h-[580px] relative"
      pagination
      modules={[Navigation]}
      navigation={{
        nextEl: "#arrowNext",
        prevEl: "#arrowPrev",
      }}
    >
      <SwiperSlide>
        <div className=" flex flex-row items-center justify-between">
          <article className="flex flex-col gap-y-8 pl-20">
            <h4 className=" text-violetGrow-700 font-bold text-xl">
              lorem lorem lorem lorem
            </h4>
            <h1 className=" text-violetGrow-700 font-bold text-5xl">
              Adopcion lorem lorem
            </h1>
            <ButtonGeneral> Adoptar Ahora </ButtonGeneral>
          </article>
          <Image
            src={"/image/HeroSlide1.png"}
            width={588}
            height={588}
            alt="slide-1"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className=" flex flex-row items-center justify-between">
          <article className="flex flex-col gap-y-8 pl-20">
            <h4 className=" text-violetGrow-700 font-bold text-xl">
              lorem lorem lorem lorem
            </h4>
            <h1 className=" text-violetGrow-700 font-bold text-5xl">
              Adopcion lorem lorem
            </h1>
            <ButtonGeneral> Adoptar Ahora </ButtonGeneral>
          </article>
          <Image
            src={"/image/HeroSlide1.png"}
            width={588}
            height={588}
            alt="slide-1"
          />
        </div>
      </SwiperSlide>
      <button className="absolute top-1/2 left-10 z-10 cursor-pointer" id="arrowPrev">
        <Image
          src={"../ArrowLeft.svg"}
          width={13}
          height={24}
          alt="arrowLeft "
        />
      </button>
      <button className="absolute top-1/2 right-10 z-10 cursor-pointer" id="arrowNext">
        <Image
          src={"../ArrowRight.svg"}
          width={13}
          height={24}
          alt="arrowRight"
        />
      </button>
    </Swiper>
  );
}
