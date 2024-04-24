import {
  getBehaviors,
  getDiseases,
  getHowDelivered,
  getPetBySlug,
  getProvinces,
  getSpecies,
} from "@/actions";
import { PetForm } from "./ui/PetForm";
import { Title } from "@/components";
import { redirect } from "next/navigation";

interface Props {
  params: {
    slug: string;
  };
}
export default async function Profile({ params }: Props) {
  const { slug } = params;

  const [pet, provinces, behaviors, species, howDelivered, diseases] =
    await Promise.all([
      getPetBySlug(slug),
      getProvinces(),
      getBehaviors(),
      getSpecies(),
      getHowDelivered(),
      getDiseases(),
    ]);

  if (!pet && slug !== "new") {
    redirect("/profile/posts");
  }

  const title = slug === "new" ? "Nueva publicación" : "Editar publicación";

  return (
    <div>
      <Title title={title} />

      <PetForm
        pet={pet ?? {}}
        provinces={provinces}
        behaviors={behaviors}
        species={species}
        howDelivered={howDelivered}
        diseases={diseases}
      />
    </div>
  );
}
