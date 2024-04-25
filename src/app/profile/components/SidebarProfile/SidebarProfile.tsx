import { logout } from "@/actions";
import Link from "next/link";
import { LogOutProfile } from "../LogOutProfile/LogOutProfile";

export const SidebarProfile = () => {
  return (
    <div className="w-4/12">
      <div>
        <Link href={"/profile"}>Perfil</Link>
      </div>
      <div>
        <Link href={"/profile/followup"}>Casos de interes</Link>
      </div>{" "}
      <div>
        <Link href={"/profile/pets"}>Mis casos</Link>
      </div>
      <LogOutProfile />
    </div>
  );
};
