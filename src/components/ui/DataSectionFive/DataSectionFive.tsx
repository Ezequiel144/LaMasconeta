"use client";
import Image from "next/image";
import TitleGeneralHome from "../TitleGeneralHome/TitleGeneralHome";
import ButtonGeneral from "../ButtonGeneral/ButtonGeneral";
import { useState } from "react";

interface ObjectSecFive {
  name: string;
  url: string;
}
interface ObjectInfoContain {
  title: string;
  infoMain: string;
}

const listSecfive: ObjectSecFive[] = [
  {
    name: "Mision",
    url: "/MissionHeart.svg",
  },
  {
    name: "Vision",
    url: "/VitionUp.svg",
  },
  {
    name: "Nosotros",
    url: "/UsersAboutme.svg",
  },
  {
    name: "Mision",
    url: "/MissionHeart.svg",
  },
];

const listInfoContain: ObjectInfoContain[] = [
  {
    title: "Mision",
    infoMain: `Nuestra misión es crear un puente de amor entre mascotas necesitadas y hogares amorosos, promoviendo la adopción responsable y el bienestar animal.`,
  },
  {
    title: "Vision",
    infoMain: `Nuestra visión es un mundo donde cada mascota recibe el amor y el cuidado que merece, y donde cada hogar encuentra la compañía perfecta.`,
  },
  {
    title: "Nosotros",
    infoMain: `Somos dos amantes de los animales convertidos en desarrolladores web, dedicados a hacer posible la adopción y la conexión entre mascotas y familias.`,
  },
  {
    title: "Amor",
    infoMain: `En cada lamida, ronroneo y abrazo, encontramos la verdadera esencia del amor. Celebremos juntos la alegría de compartir nuestras vidas con las mascotas que tanto amamos.`,
  },
];

export default function DataSectionFive() {
  const [isInfoContain, setIsInfoContain] = useState(0);
  return (
    <section className="h-fit lg:h-[620px] mt-16 relative flex lg:flex-row flex-col-reverse items-center justify-around gap-y-7 gap-x-5 px-3">
      <Image
        src={"/EllipseBlurOrange.svg"}
        className=" absolute -bottom-20 left-0 -z-10"
        width={380}
        height={380}
        alt="Elipse Naranja"
      />
      <Image
        src={"/EllipseBlurViolet.svg"}
        className=" absolute -top-28 right-0 -z-10"
        width={380}
        height={380}
        alt="Elipse violeta"
      />
      <article className="w-fit h-fit px-10 py-12 flex flex-col gap-y-5 bg-white shadow-shadowContainSecFive rounded-xl">
        <div className=" text-center sm:text-left">
          <TitleGeneralHome title={listInfoContain[isInfoContain]?.title} />
        </div>
        <p
          className={`max-w-[650px] text-base font-normal text-center sm:text-left`}
        >
          {listInfoContain[isInfoContain]?.infoMain}
        </p>
      </article>
      <article className=" grid grid-cols-2 grid-rows-2 gap-6 md:gap-10 h-fit">
        {listSecfive.map((item, index) => {
          return (
            <div
              key={index}
              className={` ${
                index === 1 || index === 3 ? "mt-8" : ""
              } w-[140px] h-[140px] sm:w-[150px] sm:h-[150px] rounded-2xl bg-orangeGrow-300 flex items-center justify-center shadow-shadowContainSecFive cursor-pointer transition-all duration-300 hover:border-2 hover:border-violetGrow-600 animate-animateBounceTwo `}
              onClick={() => setIsInfoContain(index)}
            >
              <Image src={item.url} width={80} height={80} alt={item.name} />
            </div>
          );
        })}
      </article>
    </section>
  );
}
