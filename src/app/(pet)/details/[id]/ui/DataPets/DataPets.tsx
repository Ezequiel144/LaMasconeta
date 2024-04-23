const listDataPet = [
    {
      name: "Sexo",
      data: "Macho",
    },
    {
      name: "Especie",
      data: "Perro",
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
      data: "2-4 años",
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
      name: "Adoptar junto a",
      data: "Solo",
    },
    {
      name: "peso",
      data: "3",
    },
  ];

export default function DataPets() {
  return (
    <section>
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
