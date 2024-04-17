import CarouselHero from "@/components/ui/CarouselHero/CarouselHero";
import HeroSectionTwo from "@/components/ui/HeroSectionTwo/HeroSectionTwo";
import TitleGeneralHome from "@/components/ui/TitleGeneralHome/TitleGeneralHome";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col ">
      <CarouselHero />
      <HeroSectionTwo />
      <section>
        <article className="w-full text-right">
          <TitleGeneralHome>title lorem lorem</TitleGeneralHome>
        </article>
        <article></article>
      </section>
    </main>
  );
}
