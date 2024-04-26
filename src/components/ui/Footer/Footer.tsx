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
    href: "/pets",
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

const listFooterSession: ListMenu[] = [
  {
    name: "Iniciar sesion",
    href: "/profile",
  },
  {
    name: "Registrarse",
    href: "/register",
  },
];

export default function Footer() {
  return (
    <footer className=" h-fit md:h-[300px] w-full bg-gradient-to-t from-purple-500 via-purple-600 to-purple-900 flex flex-col gap-y-4 justify-between px-16 lg:px-28 py-8">
      <section className=" flex md:items-start justify-between flex-col items-center gap-y-4 md:flex-row">
        <article className=" flex flex-col gap-6 items-center md:items-start ">
          <Image
            src="../../../../Logo.svg"
            width={250}
            height={50}
            className="w-[250px] h-[50px]"
            alt="logoSvg"
          />
          <div className=" flex gap-4">
            <Link href="www.facebook.com" target="_blank">
              <Image
                src={"/facebook.svg"}
                width={30}
                height={30}
                alt="facebook"
              />
            </Link>
            <Link href="www.instagram.com" target="_blank">
              <Image
                src={"/instagram.svg"}
                width={30}
                height={30}
                alt="instagram"
              />
            </Link>
          </div>
        </article>
        <article className=" text-white flex md:flex-col gap-3 flex-row flex-wrap justify-center md:justify-start">
          <h3 className=" uppercase text-lg font-medium hidden md:block">Menu</h3>
          {listMenu.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className=" text-base font-normal"
            >
              {item.name}
            </Link>
          ))}
        </article>
        <article className=" text-white flex md:flex-col gap-3 flex-row flex-wrap">
          <h3 className=" uppercase text-lg font-medium hidden md:block">Ingresar</h3>
          {listFooterSession.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className=" text-base font-normal"
            >
              {item.name}
            </Link>
          ))}
        </article>
        <article></article>
      </section>
      <div className="w-full border border-white"></div>
      <section className=" flex items-center justify-between text-white md:flex-row flex-col gap-y-4">
        <article className="text-center md:text-left">
          Creado por{" "}
          <Link href="#" className="text-base font-semibold">
            EZEQUIEL GARCIA
          </Link>{" "}
          -{" "}
          <Link href="#" className="text-base font-semibold">
            MAURICIO MONZON
          </Link>
        </article>
        <article className="text-center md:text-left">capyright 2024 LaMasconeta</article>
      </section>
    </footer>
  );
}
