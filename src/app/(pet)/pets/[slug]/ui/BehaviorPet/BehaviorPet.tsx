import { Key } from "react";
import TitleDetailsGeneral from "../TitleDetailsGeneral/TitleDetailsGeneral";

const listDataBehaviorPet = [
  "Bueno con los gatos",
  "Protector",
  "Le gusta la compañia",
  "Revelde",
  "Mal temperamento",
];

interface ObjectEnumBehavior{
  enumBehavior: any;
  map: any;
  id: string,
  name?: string,
}

type Props = {
  postToEnumBehavior: ObjectEnumBehavior;
};

export default function BehaviorPet({ postToEnumBehavior }: Props) {
  /* console.log(postToEnumBehavior) */
  const listEnumBehavior = postToEnumBehavior.map((item: ObjectEnumBehavior) => item.enumBehavior)
  return (
    <section className=" flex flex-col gap-y-3 pt-5">
      <TitleDetailsGeneral>Comportamiento</TitleDetailsGeneral>
      <article className=" flex flex-row flex-wrap gap-4">
        {listEnumBehavior?.map((item : string, index: Key | null | undefined) => {
          return (
            <div
              key={index}
              className=" text-white text-base font-medium w-fit h-fit px-2 py-1 bg-violetGrow-300 border-l-2 border-r-2 rounded-se-lg rounded-bl-lg border-violetGrow-700"
            >
              {item.name}
            </div>
          );
        })}
      </article>
    </section>
  );
}
