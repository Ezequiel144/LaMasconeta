import { ListMenu } from "@/interfaces";
import Image from "next/image";
import Link from "next/link";

const listMenu: ListMenu[] = [
  {
    name: "Inicio",
    href: "/",
  },
  {
    name: "Mascotas",
    href: "/",
  },
  {
    name: "Veterinarias",
    href: "/",
  },
  {
    name: "Tiendas",
    href: "/",
  },
  {
    name: "Idea del proyecto",
    href: "/",
  },
  {
    name: "FAC",
    href: "/",
  },
];

type Props = {
    isOpen: boolean
};

export default function SidebarMenu({ isOpen }:Props) {
  return (
    <aside className={`min-h-full w-3/4 bg-orangeGrow-400 absolute top-0 ${isOpen ? "left-0" : "-left-3/4"} transition-all duration-300`}>
      <nav className=" border-2 flex flex-col w-fit h-full m-auto justify-center">
        {listMenu.map((menu) => (
          <Link href={menu.href} key={menu.name}>
            {menu.name}
          </Link>
        ))}
      </nav>
      <Image src={"/bg-sidebarMenu.svg"} width={580} height={553} className="absolute bottom-0 right-0" alt="fondo del sidebarMenu"/>
    </aside>
  );
}
