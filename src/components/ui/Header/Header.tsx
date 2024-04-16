import Image from "next/image";
import Link from "next/link";

interface objectListMenu {
  name: string;
  href: string;
}

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

export default function Header() {
  return (
    <header className=" h-20 w-full bg-white flex items-center justify-between">
      <div className="flex items-center justify-between mx-auto w-full max-w-[1366px] h-full px-4">
        <Image
          src="../../../../Logo.svg"
          width={250}
          height={50}
          alt="logoSvg"
        />
        <nav className=" flex items-center gap-x-8">
          {listMenu.map((item, index) => {
            return (
              <Link
                href={item.href}
                key={index}
                className=" text-base font-normal "
              >
                {item.name}
              </Link>
            );
          })}
        </nav>
        <button className="flex items-center gap-x-3 px-[10px] py-2 border-2 rounded-lg text-violetGrow-600  border-violetGrow-600">
          <p className=" text-base font-semibold ">Iniciar Sesion</p>
          <Image
            src="../../../../InitialSession.svg"
            width={32}
            height={32}
            alt="InitialSession"
          />
        </button>
      </div>
    </header>
  );
}
