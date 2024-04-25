import { auth } from "@/auth";
import Image from "next/image";

export default async function ProfilePage() {
  const session = await auth();
  const user = session?.user;
  const userImage = user?.image || "/profile_image_default.webp";
console.log(user);

  return (
    <div>
      {user && ( // Verificar si user no es undefined
        <div className="w-full flex flex-row-reverse items-center gap-10">
          <h1>Mi perfil | Masconeta</h1>

          <Image
            src={userImage}
            alt="Imagen de perfil"
            width={150}
            height={150}
            className="rounded-full border"
          />
          <p>{user.role}</p>
        </div>
      )}
      <div></div>
    </div>
  );
}
