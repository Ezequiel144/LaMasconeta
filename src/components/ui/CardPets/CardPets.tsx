import Image from "next/image";

type Prop = {
  name: string;
  province: string;
  image: string;
  location: string;
  typeOfAnimal: string;
};

export default function CardsPets({
  image,
  name,
  province,
  location,
  typeOfAnimal,
}: Prop) {
  return (
    <div className=" h-fit w-[280px] rounded-xl relative">
      <Image src={image} width={280} height={255} alt={name} />
      <div className=" w-full h-[106px] py-[20px] px-[10px] flex flex-col justify-between relative bottom-5 bg-white rounded-xl shadow-shadowCardPets">
        <h3 className=" text-sm font-semibold uppercase">{name}</h3>

        <section className=" flex items-center justify-start gap-x-1">
            <Image src={"../MapCardUbication.svg"} width={10} height={12} alt="ubicacion"/>
          <p className="text-sm font-normal capitalize">
            {province},{location}
          </p>
        </section>

        <div className=" w-full flex items-center justify-between">
          <p className="text-sm font-normal capitalize">{typeOfAnimal}</p>
          <button className=" text-sm font-semibold px-2 py-1 rounded-md bg-violetGrow-500 text-white flex items-center justify-between">
            Saber mas
            <Image
              src={"../arrowCard.svg"}
              width={15}
              height={15}
              alt="ir a detalle de mascota"
            />
          </button>
        </div>
      </div>
    </div>
  );
}