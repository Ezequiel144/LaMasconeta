import {
  getBehaviors,
  getDiseases,
  getHowDelivered,
  getProvinces,
  getSpecies,
} from "@/actions";
import { PetForm } from "./post/ui/PetForm";

export default async function Profile() {
  const provinces = await getProvinces();
  const behaviors = await getBehaviors();
  const species = await getSpecies();
  const howDelivered = await getHowDelivered();
  const diseases = await getDiseases();

  return (
    <div>
      <PetForm
        provinces={provinces}
        behaviors={behaviors}
        species={species}
        howDelivered={howDelivered}
        diseases={diseases}
      />
    </div>
  );
}
