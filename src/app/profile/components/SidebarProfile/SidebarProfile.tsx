'use client';
import Link from "next/link";
import { LogOutProfile } from "../LogOutProfile/LogOutProfile";
import { usePathname } from 'next/navigation'

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
  const params = usePathname()

  return (
    <div className="w-full md:w-4/12 h-fit flex flex-col gap-y-5 ">
      {listLinksUser.map(item => {
        return(
          <Link className={` ${params === `${item.href}/info` || params === item.href ? "bg-orangeGrow-300 border-orangeGrow-300 text-white" : "border-orangeGrow-600" } px-3 py-1 border rounded-lg w-full text-lg font-medium hover:bg-orangeGrow-300 hover:border-orangeGrow-300 hover:text-white transition-all duration-300`} key={item.name} href={item.href}>{item.name}</Link>
        )
      })}
      <LogOutProfile/>
    </div>
  );
};
