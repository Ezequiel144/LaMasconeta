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
  textButton: string;
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
    infoMain: `Lorem ipsum dolor sit amet consectetur. Suspendisse vestibulum urna
      adipiscing ultrices. Risus cras sit auctor vulputate rhoncus. Nisi
      arcu libero ac non amet ultrices augue mattis cursus. Viverra
      vulputate luctus volutpat in. Sit rhoncus egestas scelerisque amet
      quis. Ut justo eu vitae pellentesque nullam. A nam enim nam maecenas
      tristique lectus eu tortor.`,
    textButton: "info mision",
  },
  {
    title: "Vision",
    infoMain: `Lorem ipsum dolor sit amet consectetur. Suspendisse vestibulum urna
      adipiscing ultrices. Risus cras sit auctor vulputate rhoncus. Nisi
      arcu libero ac non amet ultrices augue mattis cursus. Viverra
      vulputate luctus volutpat in. Sit rhoncus egestas scelerisque amet
      quis. Ut justo eu vitae pellentesque nullam. A nam enim nam maecenas
      tristique lectus eu tortor.`,
    textButton: "info vision",
  },
  {
    title: "Nosotros",
    infoMain: `Lorem ipsum dolor sit amet consectetur. Suspendisse vestibulum urna
      adipiscing ultrices. Risus cras sit auctor vulputate rhoncus. Nisi
      arcu libero ac non amet ultrices augue mattis cursus. Viverra
      vulputate luctus volutpat in. Sit rhoncus egestas scelerisque amet
      quis. Ut justo eu vitae pellentesque nullam. A nam enim nam maecenas
      tristique lectus eu tortor.`,
    textButton: "info nosotros",
  },
  {
    title: "Mision",
    infoMain: `Lorem ipsum dolor sit amet consectetur. Suspendisse vestibulum urna
      adipiscing ultrices. Risus cras sit auctor vulputate rhoncus. Nisi
      arcu libero ac non amet ultrices augue mattis cursus. Viverra
      vulputate luctus volutpat in. Sit rhoncus egestas scelerisque amet
      quis. Ut justo eu vitae pellentesque nullam. A nam enim nam maecenas
      tristique lectus eu tortor.`,
    textButton: "info mision",
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
          <TitleGeneralHome>
            {listInfoContain[isInfoContain]?.title}
          </TitleGeneralHome>
        </div>
        <p
          className={`max-w-[650px] text-base font-normal text-center sm:text-left`}
        >
          {listInfoContain[isInfoContain]?.infoMain}
        </p>
        <ButtonGeneral>
          {listInfoContain[isInfoContain]?.textButton}
        </ButtonGeneral>
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
