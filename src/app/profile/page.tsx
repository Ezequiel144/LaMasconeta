import { getBehaviors, getProvinces } from "@/actions";
import { MascotaForm } from "./post/ui/FormMascota";

export default async function Profile() {
  const provinces = await getProvinces();
  const behaviors = await getBehaviors();

  return (
    <div>
      <MascotaForm provinces={provinces} behaviors={behaviors}/>
    </div>
  );
}
