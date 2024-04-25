import { Key } from "react";
import TitleDetailsGeneral from "../TitleDetailsGeneral/TitleDetailsGeneral";

interface ObjectEnumDiseases {
  map(arg0: (item: ObjectEnumDiseases) => any): unknown;
  enumDiseases: any;
  id: string;
  name: string;
}

type Props = {
  postToDiseases: ObjectEnumDiseases;
};

export default function DiseasesPet({ postToDiseases }: Props) {
  const listEnumDiseases = postToDiseases.map(
    (item: ObjectEnumDiseases) => item.enumDiseases
  );

  return (
    <section className=" pt-5">
      <TitleDetailsGeneral>Enfermedades</TitleDetailsGeneral>
      <article className="flex flex-row flex-wrap gap-4">
        {listEnumDiseases?.map((item: any,index: Key | null | undefined) => {
          return (
            <div key={index} className=" text-white text-base font-medium w-fit h-fit px-2 py-1 bg-orangeGrow-300 border-l-2 border-r-2 rounded-se-lg rounded-bl-lg border-orange-700">
              { item.name }
            </div>
          );
        })}
      </article>
    </section>
  );
}
