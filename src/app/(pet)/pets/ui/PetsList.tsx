import { getProvinces, getSpecies } from "@/actions";
import { getPetByParams } from "@/actions/pets/get-pet-by-params";
import { FilterParams } from "@/interfaces";
import FilterContain from "../../filters/ui/FilterContain/FilterContain";

export const PetsList = async ({ searchParams }: FilterParams) => {
  const pets = await getPetByParams({ searchParams });
  const petsSpecies = await getSpecies();
  const petsProvinces = await getProvinces();
  
  return (
    <div>
      <FilterContain petsSpecies={petsSpecies} petsProvinces={petsProvinces}/>
      {pets.map((pet) => (
        <pre key={pet.id}>{JSON.stringify(pet,null,2)}</pre>
      ))}
    </div>
  );
};
