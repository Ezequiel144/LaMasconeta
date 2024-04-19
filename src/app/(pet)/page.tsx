import CarouselHero from "@/components/ui/CarouselHero/CarouselHero";
import HeroSectionTwo from "@/components/ui/HeroSectionTwo/HeroSectionTwo";

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col ">
      <CarouselHero />
      <HeroSectionTwo />
    </main>
  );
}
