import {
  getBehaviors,
  getHowDelivered,
  getProvinces,
  getSpecies,
} from "@/actions";
import { MascotaForm } from "./post/ui/FormMascota";

export default async function Profile() {
  const provinces = await getProvinces();
  const behaviors = await getBehaviors();
  const species = await getSpecies();
  const howDelived = await getHowDelivered();

  return (
    <div>
      <MascotaForm
        provinces={provinces}
        behaviors={behaviors}
        species={species}
        howDelived={howDelived}
      />
    </div>
  );
}
