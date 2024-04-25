
type Props = {
  gender:string;
  species: string;
  age: number;
  size: number;
  weight: number; 
};

export default function DataPets({
  gender,
  species,
  age,
  size,
  weight,
}: Props) {
  const listDataPet = [
    {
      name: "Sexo",
      data: gender,
    },
    {
      name: "Especie",
      data: species,
    },
    {
      name: "Raza",
      data: "Nose",
    },
    {
      name: "Fecha de nacimiento",
      data: "12/04/2022",
    },
    {
      name: "Edad",
      data: `${age} años`,
    },
    {
      name: "Estado",
      data: "En adopcion",
    },
    {
      name: "Nivel de actividad",
      data: "Baja",
    },
    {
      name: "Tamaño",
      data: size,
    },
    {
      name: "peso",
      data: `${weight}kg`,
    },
  ];
  return (
    <section className=" pt-5">
      <h2 className=" text-xl font-semibold text-violetGrow-500">Datos</h2>
      <article className=" grid grid-cols-gridResponsive gap-3 ">
        {listDataPet.map((item) => {
          const { name, data } = item;
          return (
            <div key={name} className="w-fit">
              <h3 className=" text-base font-semibold">{name}</h3>
              <p className="text-base font-normal">{data}</p>
            </div>
          );
        })}
      </article>
    </section>
  );
}
