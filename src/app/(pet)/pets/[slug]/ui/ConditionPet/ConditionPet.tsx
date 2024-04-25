import Image from "next/image";
import TitleDetailsGeneral from "../TitleDetailsGeneral/TitleDetailsGeneral";



interface ObjectHowDelivered{
  id: string;
  name: string;
}

interface ObjectPostToHowDelivered{
  map(arg0: (item: { howDelivered: { name: string; }; }) => string): string[];
  forEach(arg0: (item: any) => void): unknown;
  howDelivered: ObjectHowDelivered;
}

type  Props = {
  postToHowDelivered: ObjectPostToHowDelivered;
}

export default function ConditionPet({ postToHowDelivered }: Props) {
  const listHowDeliveredName = postToHowDelivered.map((item: { howDelivered: { name: string; }; }) => item.howDelivered.name);
  const listConditionPet = [
    {
      name: "Vacunado",
      condition: listHowDeliveredName.find((item: string) => item === "vacunado") ,
    },
    {
      name: "Cartilla sanitaria",
      condition: listHowDeliveredName.find((item: string) => item === "cartillasanitaria"),
    },
    {
      name: "Desparacitacion",
      condition: listHowDeliveredName.find((item: string) => item === "desparasitado"),
    },
    {
      name: "Esterelizado",
      condition: listHowDeliveredName.find((item: string) => item === "esterilizado"),
    },
  ];
  return (
    <section className=" pt-5">
      <TitleDetailsGeneral>Condicion</TitleDetailsGeneral>
      <article className=" flex flex-row flex-wrap gap-4">
        {listConditionPet.map((item) => {
          const { name, condition } = item;
          return (
            <div
              key={name}
              className={` ${
                condition ? "bg-green-400" : " bg-[#E41818] "
              } rounded-xl  text-white w-fit flex gap-x-1 px-3 py-2`}
            >
              <p className=" text-base font-medium">{name}</p>
              {condition ? (
                <Image
                  src={"/conditionOk.svg"}
                  width={21}
                  height={15}
                  alt="estado ok"
                />
              ) : (
                <Image
                  src={"/conditionFalse.svg"}
                  width={13}
                  height={13}
                  alt="estado false"
                />
              )}
            </div>
          );
        })}
      </article>
    </section>
  );
}
