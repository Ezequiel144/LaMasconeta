"use client";
import { ListMenu } from "@/interfaces";
import Link from "next/link";
import { usePathname } from "next/navigation";

const listMenu: ListMenu[] = [
  {
    name: "Inicio",
    href: "/",
  },
  {
    name: "Mascotas",
    href: "/pets",
  },
/*   {
    name: "Idea del proyecto",
    href: "/idea",
  }, */
];

export default function ListMenuLink() {
  const pathname = usePathname();

  return (
    <ul className="hidden lg:flex items-center gap-x-5">
      {listMenu.map((item, index) => {
        const isActive = pathname === item.href;
        return (
          <li key={index}>
            <Link href={item.href}>
              <span
                className={`text-base font-normal ${
                  isActive ? "text-violetGrow-600 border border-violetGrow-600 p-1 rounded-lg" : "text-gray-500"
                }`}
              >
                {item.name}
              </span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
