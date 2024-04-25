import TitleDetailsGeneral from "../TitleDetailsGeneral/TitleDetailsGeneral";

const listDataBehaviorPet = [
  "Bueno con los gatos",
  "Protector",
  "Le gusta la compañia",
  "Revelde",
  "Mal temperamento",
];

export default function BehaviorPet() {
  return (
    <section className=" flex flex-col gap-y-3 pt-5">
      <TitleDetailsGeneral>Comportamiento</TitleDetailsGeneral>
      <article className=" flex flex-row flex-wrap gap-4">
        {listDataBehaviorPet.map((item, index) => {
          return (
            <div
              key={index}
              className=" text-white text-base font-medium w-fit h-fit px-2 py-1 bg-violetGrow-300 border-l-2 border-r-2 rounded-se-lg rounded-bl-lg border-violetGrow-700"
            >
              {item}
            </div>
          );
        })}
      </article>
    </section>
  );
}
