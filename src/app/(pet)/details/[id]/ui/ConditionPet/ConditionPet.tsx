import Image from "next/image";
import TitleDetailsGeneral from "../TitleDetailsGeneral/TitleDetailsGeneral";

const listConditionPet = [
  {
    name: "Vacunado",
    condition: true,
  },
  {
    name: "Cartilla sanitaria",
    condition: true,
  },
  {
    name: "Desparacitacion",
    condition: true,
  },
  {
    name: "Esterelizado",
    condition: false,
  },
];

export default function ConditionPet() {
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
