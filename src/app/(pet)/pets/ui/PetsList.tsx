import { agePets, getProvinces, getSpecies } from "@/actions";
import { getPetByParams } from "@/actions/pets/get-pet-by-params";
import { FilterParams } from "@/interfaces";
import FilterContain from "./FilterContain/FilterContain";

export const PetsList = async ({ searchParams }: FilterParams) => {
  const pets = await getPetByParams({ searchParams });
  const petsSpecies = await getSpecies();
  const petsProvinces = await getProvinces();
  const petsAges = await agePets()
  
  return (
    <div>
      <FilterContain petsSpecies={petsSpecies} petsProvinces={petsProvinces} petsAges={petsAges} />
      {pets.map((pet) => (
        <pre key={pet.id}>{JSON.stringify(pet,null,2)}</pre>
      ))}
    </div>
  );
};
