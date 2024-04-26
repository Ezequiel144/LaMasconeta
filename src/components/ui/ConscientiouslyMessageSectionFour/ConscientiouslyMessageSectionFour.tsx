import Image from "next/image";
import TitleGeneralHome from "../TitleGeneralHome/TitleGeneralHome";
import ParagraphGeneral from "../ParagraphGeneral/ParagraphGeneral";
import ButtonGeneral from "../ButtonGeneral/ButtonGeneral";

export default function ConscientiouslyMessageSectionFour() {
  return (
    <section className="pt-16 flex flex-col items-center lg:flex-row lg:justify-around h-fit lg:h-[500px] w-full gap-x-3 gap-y-8 px-[10px] lg:px-0">
      <Image
        src={"/image/HeroImageSection4png.png"}
        width={490}
        height={490}
        alt="imagen de mensaje a consiencia"
      />
      <article className=" h-full flex flex-col justify-center gap-y-5 items-center lg:items-start max-w-[730px] w-full lg:w-[50%]">
        <div className="text-center">
          <TitleGeneralHome title="Toma conciencia a la hora de adoptar" />
        </div>
        <ParagraphGeneral>
          Al adoptar, no solo estás cambiando la vida de un animal, estás
          cambiando la tuya también. Estás dando a un ser necesitado una segunda
          oportunidad y recibiendo amor incondicional a cambio. Adopta con
          conciencia y descubre cómo un pequeño gesto puede marcar una gran
          diferencia en el mundo.
        </ParagraphGeneral>
        <div className=" lg:text-left text-center w-full flex justify-center items-center">
          <ButtonGeneral title="Adopta" />
        </div>
      </article>
    </section>
  );
}
