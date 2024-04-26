import Image from "next/image";
import Link from "next/link";

export interface PetData {
  id: string;
  name: string;
  slug: string;
  gender: string | null;
  statusAdoption: string | null;
  activity: string | null;
  birthdate: string | null;
  age: number;
  phone: number;
  history: string;
  photos: string[];
  weight: number;
  size: string;
  enabled: boolean;
  complaints: number;
  date: Date;
  userId: string;
  provinceId: string;
  speciesId: string;
  province: {
    id: string;
    name: string;
    slug: string;
  };
  species: {
    id: string;
    name: string;
  };
}

export default function CardPetsProfile({
  photos,
  name,
  province,
  species,
  slug,
}: PetData) {
  return (
    <div className=" h-fit w-[280px] rounded-xl relative">
      <Image src={photos[0]} width={280} height={255} alt={name} />
      <div className=" w-full h-[106px] py-[20px] px-[10px] flex flex-col justify-between relative bottom-5 bg-white rounded-xl shadow-shadowCardPets">
        <h3 className=" text-sm font-semibold uppercase">{name}</h3>

        <section className=" flex items-center justify-start gap-x-1">
          <Image
            src={"../MapCardUbication.svg"}
            width={10}
            height={12}
            alt="ubicacion"
          />
          <p className="text-sm font-normal capitalize max-w-[200px] truncate">
            {province.name},{"ARG"}
          </p>
        </section>

        <div className=" w-full flex items-center justify-between">
          <p className="text-sm font-normal capitalize">{species.name}</p>
          <Link
            href={`/pets/${slug}`}
            className=" text-sm font-semibold px-2 py-1 rounded-md bg-violetGrow-500 text-white flex items-center justify-between"
          >
            Saber más
            <Image
              src={"../arrowCard.svg"}
              width={15}
              height={15}
              alt="ir a detalle de mascota"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
