
import { ListMenu } from "@/interfaces";
import Image from "next/image";
import Link from "next/link";
import ButtonSidebarMenu from "../ButtonSidebarMenu/ButtonSidebarMenu";

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
  isOpen: boolean;
  setIsOpen?: any;
};

export default function SidebarMenu({ isOpen , setIsOpen}: Props) {
  return (
    <div className={`bg-black/40 min-h-[100vh] w-full fixed top-0 z-20 lg:hidden ${
        isOpen ? "left-0" : "-left-full"
      }`}>
      <aside
        className={` z-30 min-h-[100vh] w-full sm:w-3/4 bg-orangeGrow-400 fixed top-0 ${
          isOpen ? "left-0" : "sm:-left-3/4 -left-full"
        } transition-all duration-300 flex flex-col gap-y-6 items-center justify-center lg:hidden`}
      >
        <Image src={"/CloseMenu.svg"} alt="boton para cerrar sidebarMenu" width={32} height={32} className="absolute top-2 right-2 text-white font-bold" onClick={() => setIsOpen(false)}/>
        <nav className=" flex flex-col w-fit h-full mx-auto justify-center gap-y-10 text-white font-medium text-2xl">
          {listMenu.map((menu) => (
            <Link
              href={menu.href}
              key={menu.name}
              onClick={() => setIsOpen!(!isOpen)}
              className=" hover:text-violetGrow-600"
            >
              {menu.name}
            </Link>
          ))}
        </nav>
        <ButtonSidebarMenu />
        <Image
          src={"/bg-sidebarMenu.svg"}
          width={380}
          height={353}
          className="absolute bottom-0 right-0"
          alt="fondo del sidebarMenu"
        />
      </aside>
    </div>
  );
}
