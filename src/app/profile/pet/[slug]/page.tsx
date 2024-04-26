import {
  getBehaviors,
  getDiseases,
  getHowDelivered,
  getPetBySlug,
  getProvinces,
  getSpecies,
} from "@/actions";
import { Title } from "@/components";
import { redirect } from "next/navigation";
import { PetForm } from "./ui/PetForm";
import { auth } from "@/auth";


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

  const session = await auth();
  const userIdAuth = session?.user.id;

  if (!pet && slug !== "new") {
    redirect("/profile/pets");
  }

  if (pet && pet.userId !== userIdAuth) {
    redirect("/profile/pets");
  }

  const title = slug === "new" ? "Nueva publicación" : "Editar publicación";

  return (
    <div>
      <Title title={title} />

      <PetForm
        pet={pet ?? {}}
        userIdAuth={userIdAuth ?? ""}
        provinces={provinces}
        behaviors={behaviors}
        species={species}
        howDelivered={howDelivered}
        diseases={diseases}
      />
    </div>
  );
}
