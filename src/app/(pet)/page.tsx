import ButtonGeneral from "@/components/ui/ButtonGeneral/ButtonGeneral";
import CardsPetsAllSectionThree from "@/components/ui/CardsPetsAllSectionThree/CardsPetsAllSectionThree";
import CarouselHero from "@/components/ui/CarouselHero/CarouselHero";
import ConscientiouslyMessageSectionFour from "@/components/ui/ConscientiouslyMessageSectionFour/ConscientiouslyMessageSectionFour";
import DataSectionFive from "@/components/ui/DataSectionFive/DataSectionFive";
import HeroSectionTwo from "@/components/ui/HeroSectionTwo/HeroSectionTwo";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <CarouselHero />
      <HeroSectionTwo />
      <CardsPetsAllSectionThree />
      <ConscientiouslyMessageSectionFour />
      <DataSectionFive />
    </main>
  );
}
