import Link from "next/link";
import { LogOutProfile } from "../LogOutProfile/LogOutProfile";

const listLinksUser: {name:string,href:string}[]= [
  {
    name:"Perfil",
    href:"/profile"
  },
  {
    name:"Casos de interes",
    href:"/profile/followup"
  },
  {
    name:"Mis casos",
    href:"/profile/pets"
  },
]

export const SidebarProfile = () => {
  return (
    <div className="w-4/12 h-fit flex flex-col gap-y-5 ">
      {listLinksUser.map(item => {
        return(
          <Link className=" px-3 py-1 border border-orangeGrow-600 rounded-lg w-full text-lg font-medium" key={item.name} href={item.href}>{item.name}</Link>
        )
      })}
      <LogOutProfile/>
    </div>
  );
};
