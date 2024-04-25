import TitleDetailsGeneral from "../TitleDetailsGeneral/TitleDetailsGeneral"

export default function DiseasesPet() {
  return (
    <section className=" pt-5">
      <TitleDetailsGeneral>Enfermedades</TitleDetailsGeneral>
      <article>
        <div className=" text-white text-base font-medium w-fit h-fit px-2 py-1 bg-orangeGrow-300 border-l-2 border-r-2 rounded-se-lg rounded-bl-lg border-orange-700">
          En tratamiento medico
        </div>
      </article>
    </section>
  );
}
