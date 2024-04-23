import { titleFont } from "@/config/fonts";
import { LoginForm } from "./ui/LoginForm";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen flex-col pt-10">
      <section className=" flex items-center justify-between">
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
      </section>

      <LoginForm />
    </div>
  );
}
