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
      className=" w-full h-fit lg:max-h-[610px] relative"
      pagination
      modules={[Navigation]}
      navigation={{
        nextEl: "#arrowNext",
        prevEl: "#arrowPrev",
      }}
    >
      <SwiperSlide>
        <div className=" flex flex-col-reverse lg:flex-row items-center justify-between gap-y-3">
          <article className="flex flex-col gap-y-8 lg:pl-20">
            <h4 className=" text-violetGrow-700 font-bold text-base lg:text-xl text-center lg:text-left">
              lorem lorem lorem lorem
            </h4>
            <h1 className=" text-violetGrow-700 font-bold text-4xl lg:text-5xl text-center lg:text-left">
              Adopcion lorem lorem
            </h1>
            <div className=" w-full flex justify-center lg:justify-start">
              <ButtonGeneral> Adoptar Ahora </ButtonGeneral>
            </div>
          </article>
          <Image
            src={"/image/HeroSlide1.png"}
            width={588}
            height={588}
            className=" w-full md:w-[588px] md:h-[588px]"
            alt="slide-1"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className=" flex flex-col-reverse lg:flex-row items-center justify-between gap-y-3">
          <article className="flex flex-col gap-y-8 lg:pl-20">
            <h4 className=" text-violetGrow-700 font-bold text-base lg:text-xl text-center lg:text-left">
              lorem lorem lorem lorem
            </h4>
            <h1 className=" text-violetGrow-700 font-bold text-4xl lg:text-5xl text-center lg:text-left">
              Adopcion lorem lorem
            </h1>
            <div className=" w-full flex justify-center lg:justify-start">
              <ButtonGeneral> Adoptar Ahora </ButtonGeneral>
            </div>
          </article>
          <Image
            src={"/image/HeroSlide1.png"}
            width={588}
            height={588}
            className=" w-full md:w-[588px] md:h-[588px]"
            alt="slide-1"
          />
        </div>
      </SwiperSlide>
      <button
        className="absolute top-1/2 left-10 z-10 cursor-pointer"
        id="arrowPrev"
      >
        <Image
          src={"../ArrowLeft.svg"}
          width={13}
          height={24}
          alt="arrowLeft "
        />
      </button>
      <button
        className="absolute top-1/2 right-10 z-10 cursor-pointer"
        id="arrowNext"
      >
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
