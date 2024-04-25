import { FilterParams } from "@/interfaces";
import { PetsList } from "./ui/PetsList";

export default function NamePage({ searchParams }: FilterParams) {
  return (
    <div>
      <h1>Pets</h1>
      <PetsList searchParams={searchParams} />
      
    </div>
  );
}
