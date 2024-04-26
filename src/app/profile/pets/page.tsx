import { getAllPetsUser } from "@/actions";
import { auth } from "@/auth";
import { Title } from "@/components";
import { ContainerPetsProfile } from "./ui/ContainerPetsProfile";

export default async function PetsUsersPage() {
  const session = await auth();
  const userId = session!.user.id;

  const pets = await getAllPetsUser(userId);
  
  return (
    <div>
      <Title title="Mis publicaciones" />
      <ContainerPetsProfile pets={pets} />
    </div>
  );
}
