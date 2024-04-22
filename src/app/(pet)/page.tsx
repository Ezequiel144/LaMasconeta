import CardsPetsAllSectionThree from "@/components/ui/CardsPetsAllSectionThree/CardsPetsAllSectionThree";
import CarouselHero from "@/components/ui/CarouselHero/CarouselHero";
import ConscientiouslyMessageSectionFour from "@/components/ui/ConscientiouslyMessageSectionFour/ConscientiouslyMessageSectionFour";
import HeroSectionTwo from "@/components/ui/HeroSectionTwo/HeroSectionTwo";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <CarouselHero />
      <HeroSectionTwo />
      <CardsPetsAllSectionThree />
      <ConscientiouslyMessageSectionFour />
      <section className="h-[620px] border pt-16">
        
      </section>
    </main>
  );
}
