import { getPetByParams } from "@/actions/pets/get-pet-by-params";
import { FilterParams } from "@/interfaces";

export const PetsList = async ({ searchParams }: FilterParams) => {
  
  const pets = await getPetByParams({searchParams});

  console.log(pets);
  
  return (
    <div>
      {pets.map((pet) => (
        <div key={pet.id}>{/* Render pet information here */}</div>
      ))}
    </div>
  );
};
