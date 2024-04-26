type Props = {
  gender: string;
  species: string;
  age: number;
  size: number;
  weight: number;
  birthdate: string;
  statusAdoption: string;
  activity: string;
};

export default function DataPets({
  gender,
  species,
  age,
  size,
  weight,
  birthdate,
  statusAdoption,
  activity,
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
      data: birthdate,
    },
    {
      name: "Edad",
      data: `${age} años`,
    },
    {
      name: "Estado",
      data: statusAdoption,
    },
    {
      name: "Nivel de actividad",
      data: activity,
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
              <p className="text-base font-normal capitalize">{data}</p>
            </div>
          );
        })}
      </article>
    </section>
  );
}
