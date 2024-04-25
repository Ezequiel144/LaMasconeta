import { Key } from "react";
import TitleDetailsGeneral from "../TitleDetailsGeneral/TitleDetailsGeneral";

interface Behavior{
  id: string;
  name: string;
}

interface EnumBehavior{
  enumBehavior: Behavior;
}

type Props = {
  postToEnumBehavior: EnumBehavior[];
};

export default function BehaviorPet({ postToEnumBehavior }: Props) {
  const listEnumBehavior = postToEnumBehavior.map((item: EnumBehavior) => item.enumBehavior)

  return (
    <section className=" flex flex-col gap-y-3 pt-5">
      <TitleDetailsGeneral>Comportamiento</TitleDetailsGeneral>
      <article className=" flex flex-row flex-wrap gap-4">
        {listEnumBehavior?.map((item : Behavior, index: Key | null | undefined) => {
          console.log()
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
