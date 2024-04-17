import { objectInfoNumber } from "@/interfaces";
import CardInfoNumber from "../CardInfoNumber/CardInfoNumber";

const listInfoNumber : objectInfoNumber[]= [
  {
    numberTitle: "1.3K+",
    description: "lorem lorem",
  },
  {
    numberTitle: "1K+",
    description: "lorem lorem",
  },
  {
    numberTitle: "1.2K+",
    description: "lorem lorem",
  },
  {
    numberTitle: "0.7K+",
    description: "lorem lorem",
  },
];

export default function HeroSectionTwo() {
  return (
    <section className=" w-full h-[350px] border flex justify-center items-center gap-x-14 bg-hero-sectionTwo bg-no-repeat bg-cover">
      {listInfoNumber.map((item,index) => (
        <CardInfoNumber key={index}  numberTitle={item.numberTitle} description={item.description} />
      ))}
    </section>
  );
}
