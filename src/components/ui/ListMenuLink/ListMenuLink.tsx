import { objectListMenu } from "@/interfaces";
import Link from "next/link";

const listMenu: objectListMenu[] = [
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

export default function ListMenuLink() {
  return (
    <ul className=" flex items-center gap-x-8">
      {listMenu.map((item, index) => {
        return (
          <li key={index}>
            <Link href={item.href} className=" text-base font-normal ">
              {item.name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
