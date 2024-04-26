import { getAllPetsUser } from "@/actions";
import { auth } from "@/auth";

export default async function PetsUsersPage() {
  const session = await auth();
  const userId = session!.user.id;

  const pets = await getAllPetsUser(userId);

  return (
    <div>
      <pre>{JSON.stringify(pets, null, 2)}</pre>
    </div>
  );
}
