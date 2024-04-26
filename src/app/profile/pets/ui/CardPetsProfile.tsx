import Image from "next/image";
import Link from "next/link";

export interface PetData {
  name: string;
  slug: string;
  statusAdoption: string | null;
  photos: string[];
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
  name,
  slug,
  statusAdoption,
  photos,
  province,
  species,
}: PetData) {
  return (
    <div className=" h-60  w-[240px] rounded-xl relative">
      <Image
        src={photos[0]}
        width={240}
        height={200}
        alt={name}
        className="w-full h-full rounded-lg"
      />
      <div className=" w-full py-3 px-3 flex flex-col justify-between relative bottom-5 bg-white rounded-lg shadow-shadowCardPets gap-y-2">
        <h2 className=" text-sm font-semibold uppercase">{name}</h2>
        <section className=" flex flex-col gap-1">
          <div className="flex items-center gap-x-2">
            <Image
              src={"../MapCardUbication.svg"}
              width={10}
              height={12}
              alt="ubicacion"
            />
            <p className="text-sm font-normal capitalize max-w-[200px] truncate">
              {province.name},{"ARG"}
            </p>
          </div>
          <p className="text-sm font-normal capitalize">{species.name}</p>
        </section>

        <div className=" w-full flex items-center justify-between">
          <Link
            href={`/pets/${slug}`}
            className=" text-sm font-semibold px-2 py-1 rounded-md bg-violetGrow-500 text-white flex items-center justify-between"
          >
            Publicación
            <Image
              src={"../arrowCard.svg"}
              width={15}
              height={15}
              alt="ir a detalle de mascota"
            />
          </Link>
          <Link
            href={`/profile/pet/${slug}`}
            className=" text-sm font-semibold px-2 py-1 rounded-md bg-violetGrow-500 text-white flex items-center justify-between"
          >
            Editar
            <Image
              src={"../arrowCard.svg"}
              width={15}
              height={15}
              alt="ir a detalle de mascota"
              layout="fixed"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
