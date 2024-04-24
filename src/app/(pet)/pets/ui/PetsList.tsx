import { getPetByParams } from "@/actions/pets/get-pet-by-params";
import { FilterParams } from "@/interfaces";

export const PetsList = async ({ searchParams }: FilterParams) => {
  const pets = await getPetByParams({ searchParams });

  return (
    <div>
      {pets.map((pet) => (
        <pre key={pet.id}>{JSON.stringify(pet,null,2)}</pre>
      ))}
    </div>
  );
};
