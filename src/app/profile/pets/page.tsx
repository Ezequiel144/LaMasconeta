import { getAllPetsUser } from "@/actions";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function PetsUsersPage() {
  const session = await auth();

  if (!session?.user) {
    redirect("/");
  }

  const userId = session.user.id;

  if (userId) {
    const pets = await getAllPetsUser(userId);
  }
  
  return (
    <div>
      <h1>Hello Page</h1>
    </div>
  );
}
