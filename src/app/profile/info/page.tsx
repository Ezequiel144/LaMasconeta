import { auth } from "@/auth";
import Image from "next/image";
import { FormProfile } from "./ui/FormProfile";

export default async function ProfilePage() {
  const session = await auth();
  const user = session?.user;

  return (
    <div>
      <FormProfile user={user} />
    </div>
  );
}
