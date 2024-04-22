import ButtonGeneral from "@/components/ui/ButtonGeneral/ButtonGeneral";
import CardsPetsAllSectionThree from "@/components/ui/CardsPetsAllSectionThree/CardsPetsAllSectionThree";
import CarouselHero from "@/components/ui/CarouselHero/CarouselHero";
import ConscientiouslyMessageSectionFour from "@/components/ui/ConscientiouslyMessageSectionFour/ConscientiouslyMessageSectionFour";
import HeroSectionTwo from "@/components/ui/HeroSectionTwo/HeroSectionTwo";
import TitleGeneralHome from "@/components/ui/TitleGeneralHome/TitleGeneralHome";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <CarouselHero />
      <HeroSectionTwo />
      <CardsPetsAllSectionThree />
      <ConscientiouslyMessageSectionFour />
      <section className="h-[620px] mt-16 relative flex">
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
        <article className="w-fit border-2 h-fit px-10 py-12 flex flex-col gap-y-5 bg-white">
          <TitleGeneralHome>Lorem lorem</TitleGeneralHome>
          <p className=" max-w-[650px] text-base font-normal">
            Lorem ipsum dolor sit amet consectetur. Suspendisse vestibulum urna
            adipiscing ultrices. Risus cras sit auctor vulputate rhoncus. Nisi
            arcu libero ac non amet ultrices augue mattis cursus. Viverra
            vulputate luctus volutpat in. Sit rhoncus egestas scelerisque amet
            quis. Ut justo eu vitae pellentesque nullam. A nam enim nam maecenas
            tristique lectus eu tortor.{" "}
          </p>
          <ButtonGeneral>Lorem button</ButtonGeneral>
        </article>
        <article></article>
      </section>
    </main>
  );
}
