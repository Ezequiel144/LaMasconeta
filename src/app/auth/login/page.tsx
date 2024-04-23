import { titleFont } from "@/config/fonts";
import { LoginForm } from "./ui/LoginForm";
import Link from "next/link";
import Image from "next/image";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen w-full flex-col justify-center pt-10 ">
      <section className="w-5/6 md:w-[350px] mx-auto lg:ml-24 xl:ml-32">
        <article className=" flex items-center justify-between">
          <h2
            className={`${titleFont.className} p-1 text-violetGrow-500 text-xl font-semibold border-b-2 border-violetGrow-500 w-fit`}
          >
            Iniciar sesion
          </h2>
          <Link
            href="/auth/new-account"
            className={`${titleFont.className} p-1  text-xl font-semibold  w-fit`}
          >
            Registrar
          </Link>
        </article>
        <LoginForm />
      </section>

      <Image
        src={"/image/heroLogin.png"}
        width={750}
        height={750}
        className="hidden md:block absolute bottom-0 right-0 -z-10 w-[500px] h-[500px] lg:w-[750px] lg:h-[750px]"
        alt="Hero de login"
      />
      <Image
        src={"/image/HeroLogoResponsive.png"}
        className="absolute bottom-0 right-0 -z-10 md:hidden"
        width={350}
        height={350}
        alt="Hero de login Responsive"
      />
    </div>
  );
}
