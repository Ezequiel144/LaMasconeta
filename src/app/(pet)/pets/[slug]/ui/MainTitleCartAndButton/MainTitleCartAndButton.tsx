import ButtonInterested from "../ButtonInterested/ButtonInterested";

type Prop = {
  name: string;
  province?: string,
  location?: string,
}

export default function MainTitleCartAndButton({ name, province, location }: Prop) {
  return (
    <section className="flex flex-col lg:flex-row-reverse justify-end gap-x-8 gap-y-3 pt-5 lg:p-0">
      <ButtonInterested>Interesado</ButtonInterested>
      <div className=" bg-orangeGrow-300 px-4 py-3 rounded-xl text-white">
        <h2 className=" uppercase text-4xl font-bold">{name}</h2>
        <p className=" text-base font-normal">{province}, {location}</p>
      </div>
    </section>
  );
}
