import { agePets, getProvinces, getSpecies } from "@/actions";
import { getPetByParams } from "@/actions/pets/get-pet-by-params";
import { FilterParams } from "@/interfaces";
import FilterContain from "./FilterContain/FilterContain";
import RenderCardAndPagination from "./RenderCardAndPagination/RenderCardAndPagination";

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
      <RenderCardAndPagination pets={pets}/>
    </div>
  );
};
