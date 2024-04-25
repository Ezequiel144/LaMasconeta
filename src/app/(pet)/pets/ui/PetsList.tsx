import { agePets, getProvinces, getSpecies } from "@/actions";
import { getPetByParams } from "@/actions/pets/get-pet-by-params";
import { FilterParams } from "@/interfaces";
import FilterContain from "./FilterContain/FilterContain";
import CardsPets from "@/components/ui/CardPets/CardPets";

export const PetsList = async ({ searchParams }: FilterParams) => {
  const pets = await getPetByParams({ searchParams });
  const petsSpecies = await getSpecies();
  const petsProvinces = await getProvinces();
  const petsAges = await agePets();

  return (
    <div>
      <FilterContain
        petsSpecies={petsSpecies}
        petsProvinces={petsProvinces}
        petsAges={petsAges}
      />
      {/* pets.map((pet) => (
        <pre key={pet.id}>{JSON.stringify(pet,null,2)}</pre>
      )) */}
      <section className=" grid grid-cols-gridResponsiveFilter justify-items-center gap-10 w-full pt-20 lg:px-16">
        {pets.map((item, index) => {
          const {name, slug, species, province, photos} = item;
          return (
            <CardsPets
              key={index}
              image={photos[0]}
              name={name}
              province={province.name}
              typeOfAnimal={species.name}
              slug={slug}
            />
          );
        })}
      </section>
    </div>
  );
};
