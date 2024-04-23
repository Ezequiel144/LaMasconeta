import ButtonInterested from "../ButtonInterested/ButtonInterested";

export default function MainTitleCartAndButton() {
  return (
    <section className="flex flex-col lg:flex-row-reverse justify-end gap-x-8 pt-5 lg:p-0">
      <ButtonInterested>Interesado</ButtonInterested>
      <div className=" bg-orangeGrow-300 px-4 py-3 rounded-xl text-white">
        <h2 className=" uppercase text-4xl font-bold">Ramoncito</h2>
        <p className=" text-base font-normal">Buenos Aires, La matanza</p>
      </div>
    </section>
  );
}
