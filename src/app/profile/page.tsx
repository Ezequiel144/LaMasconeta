import { getProvinces } from "@/actions";
import { MascotaForm } from "./post/ui/FormMascota";

export default async function Profile() {
  const provinces = await getProvinces();

  return (
    <div>
      <MascotaForm provinces={provinces}/>
    </div>
  );
}
