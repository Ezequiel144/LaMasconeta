import { FilterParams } from "@/interfaces";
import { PetsList } from "./ui/PetsList";

export default function NamePage({ searchParams }: FilterParams) {
  return (
    <div>
      <PetsList searchParams={searchParams} />
    </div>
  );
}
