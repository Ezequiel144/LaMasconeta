import CarouselHero from "@/components/ui/CarouselHero/CarouselHero";
import HeroSectionTwo from "@/components/ui/HeroSectionTwo/HeroSectionTwo";
import TitleGeneralHome from "@/components/ui/TitleGeneralHome/TitleGeneralHome";
import { objectCardPets } from "@/interfaces";
import Image from "next/image";

const listCardPets: objectCardPets[] = [
  {
    name: "nombre del perro",
    province: "province",
    location: "localidad",
    typeOfAnimal: "tipo de animal",
    image: "/image/imagePet.png",
  },
  {
    name: "nombre del perro",
    province: "province",
    location: "localidad",
    typeOfAnimal: "tipo de animal",
    image: "/image/imagePet.png",
  },
  {
    name: "nombre del perro",
    province: "province",
    location: "localidad",
    typeOfAnimal: "tipo de animal",
    image: "/image/imagePet.png",
  },
  {
    name: "nombre del perro",
    province: "provincia",
    location: "localidad",
    typeOfAnimal: "tipo de animal",
    image: "/image/imagePet.png",
  },
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col ">
      <CarouselHero />
      <HeroSectionTwo />
      <section>
        <article className="w-full text-right">
          <TitleGeneralHome>title lorem lorem</TitleGeneralHome>
        </article>
        <article className=" flex ">
          {listCardPets.map((item,index) => {
            return (
              <div key={index} className="border h-[330px] w-[280px] rounded-xl">
                <Image src={item.image} width={280} height={255} alt={item.name} />
              </div>
            );
          })}
        </article>
      </section>
    </main>
  );
}
