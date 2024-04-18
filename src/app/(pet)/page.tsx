import CardsPetsAllSectionThree from "@/components/ui/CardsPetsAllSectionThree/CardsPetsAllSectionThree";
import CarouselHero from "@/components/ui/CarouselHero/CarouselHero";
import HeroSectionTwo from "@/components/ui/HeroSectionTwo/HeroSectionTwo";



export default function Home() {
  return (
    <main className="flex min-h-screen flex-col ">
      <CarouselHero />
      <HeroSectionTwo />
      <CardsPetsAllSectionThree />
    </main>
  );
}
