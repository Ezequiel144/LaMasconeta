import CarouselHero from "@/components/ui/CarouselHero/CarouselHero";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col ">
      <CarouselHero />
      {/* <img src={"/image/ImageSection2Numbers.png"} className="w-full h-fit pt-10" alt="imagenBackgroundAdopcion"/> */}
    </main>
  );
}
