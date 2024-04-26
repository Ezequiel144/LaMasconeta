"use client";

import { authenticate } from "@/actions";
import clsx from "clsx";
import Link from "next/link";
import { useEffect } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { IoInformationOutline } from "react-icons/io5";

export const LoginForm = () => {
  const [state, dispatch] = useFormState(authenticate, undefined);

  useEffect(() => {
    if (state === "Success ") {
      // router.replace("/");
      /* Se hace refresh */
      window.location.replace("/");
    }
  }, [state]);

  return (
    <form action={dispatch} className="flex flex-col gap-y-2 py-3">
      <label htmlFor="email">Email</label>
      <input
        className="mb-5 rounded-xl border bg-white px-3 py-2 border-violetGrow-700 shadow-shadowInput outline-none"
        type="email"
        name="email"
        placeholder="ej:correo@gmail.com"
      />

      <label htmlFor="password">Contraseña</label>
      <input
        className=" rounded-xl border bg-white px-3 py-2 border-violetGrow-700 shadow-shadowInput outline-none"
        type="password"
        name="password"
        placeholder="*******"
      />
      <div
        className="flex h-8 items-end space-x-1"
        aria-live="polite"
        aria-atomic="true"
      >
        {state === "Credenciales inválidas." && (
          <div className="mb-2 flex flex-row">
            <IoInformationOutline className="h-5 w-5 text-red-500" />
            <p className="text-sm text-red-500">
              Credenciales no son correctas
            </p>
          </div>
        )}
      </div>
      <Link href={"#"} className=" text-sm font-normal">
        Olvidaste tu contraseña?
      </Link>
      <LoginButton />
    </form>
  );
};

function LoginButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className={`${clsx({
        "btn-disabled": pending,
      })} bg-white w-full mx-auto text-violetGrow-700 text-base font-semibold uppercase px-[15px] py-[8px] rounded-lg border-2 border-violetGrow-700 hover:transition-all hover:duration-300 hover:bg-violetGrow-700 hover:text-white`}
      disabled={pending}
    >
      Ingresar
    </button>
  );
}
