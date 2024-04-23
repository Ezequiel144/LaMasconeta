import { titleFont } from "@/config/fonts";
import { RegisterForm } from "./ui/RegisterForm";
import Link from "next/link";

export default function NewAccountPage() {
  return (
    <div className="flex min-h-screen flex-col pt-10">
      <section className=" flex items-center justify-between">
        <Link
          href="/auth/login"
          className={`${titleFont.className} p-1  text-xl font-semibold  w-fit`}
        >
          Iniciar sesion
        </Link>
        <h2
          className={`${titleFont.className} p-1 text-violetGrow-500 text-xl font-semibold border-b-2 border-violetGrow-500 w-fit`}
        >
          Registrar
        </h2>
      </section>

      <RegisterForm />
    </div>
  );
}
