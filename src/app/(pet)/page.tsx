import ButtonGeneral from "@/components/ui/ButtonGeneral/ButtonGeneral";
import CardsPetsAllSectionThree from "@/components/ui/CardsPetsAllSectionThree/CardsPetsAllSectionThree";
import CarouselHero from "@/components/ui/CarouselHero/CarouselHero";
import HeroSectionTwo from "@/components/ui/HeroSectionTwo/HeroSectionTwo";
import TitleGeneralHome from "@/components/ui/TitleGeneralHome/TitleGeneralHome";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <CarouselHero />
      <HeroSectionTwo />
      <CardsPetsAllSectionThree />
      <section className="pt-16 flex flex-col items-center lg:flex-row lg:justify-around h-fit lg:h-[500px] w-full gap-x-3 px-[10px] lg:px-0">
        <Image
          src={"/image/HeroImageSection4png.png"}
          width={490}
          height={490}
          alt="imagen de mensaje a consiencia"
        />
        <article className=" h-full flex flex-col justify-center gap-y-5 items-center lg:items-start max-w-[730px] w-full lg:w-[50%]">
          <TitleGeneralHome>Title lorem text</TitleGeneralHome>
          <p className=" text-base font-normal text-center lg:text-left">
            Lorem ipsum dolor sit amet consectetur. Suspendisse vestibulum urna
            adipiscing ultrices. Risus cras sit auctor vulputate rhoncus. Nisi
            arcu libero ac non amet ultrices augue mattis cursus. Viverra
            vulputate luctus volutpat in. Sit rhoncus egestas scelerisque amet
            quis. Ut justo eu vitae pellentesque nullam. A nam enim nam maecenas
            tristique lectus eu tortor. Maecenas id nulla ut euismod quisque
            nisi. Vestibulum aenean enim malesuada nunc sem hendrerit. Id augue
            nibh nascetur euismod sit in tortor. Eu viverra urna molestie
            convallis massa nulla dictum eget cursus. Erat et ac turpis a.
          </p>
          <div className=" lg:text-left text-center w-full">
            <ButtonGeneral>lorem button</ButtonGeneral>
          </div>
        </article>
      </section>
    </main>
  );
}
