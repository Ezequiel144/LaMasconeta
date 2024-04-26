"use client";

import { registerUser } from "@/actions";
import { login } from "@/actions/auth/login";
import clsx from "clsx";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
type FormInputs = {
  name: string;
  email: string;
  password: string;
};

export const RegisterForm = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>();

  const onSubmit = async (data: FormInputs) => {
    setErrorMessage("");
    const { name, email, password } = data;
    const resp = await registerUser(name, email, password);

    if (!resp.ok) {
      setErrorMessage(resp.message);
      return;
    }

    await login(email.toLowerCase(), password);
    window.location.replace("/");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
      <label htmlFor="name">Nombre Completo</label>
      <input
        className={`${clsx("mb-5 rounded border bg-gray-200 px-5 py-2", {
          "border-red-500": !!errors.name,
        })} mb-5 rounded-xl border bg-white px-3 py-2 border-violetGrow-700 shadow-shadowInput outline-none `}
        type="text"
        autoFocus
        {...register("name", { required: true })}
      />

      <label htmlFor="email">Correo electrónico</label>
      <input
        className={`${clsx("mb-5 rounded border bg-gray-200 px-5 py-2", {
          "border-red-500": !!errors.email,
        })} mb-5 rounded-xl border bg-white px-3 py-2 border-violetGrow-700 shadow-shadowInput outline-none`}
        type="email"
        {...register("email", {
          required: true,
          pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        })}
      />

      <label htmlFor="password">Contraseña</label>
      <input
        className={`${clsx("mb-5 rounded border bg-gray-200 px-5 py-2", {
          "border-red-500": !!errors.password,
        })} mb-5 rounded-xl border bg-white px-3 py-2 border-violetGrow-700 shadow-shadowInput outline-none `}
        type="password"
        {...register("password", { required: true, minLength: 4 })}
      />

      <span className="text-red-500">{errorMessage}</span>

      <button className="bg-white w-full mx-auto text-violetGrow-700 text-base font-semibold uppercase px-[15px] py-[8px] rounded-lg border-2 border-violetGrow-700 hover:transition-all hover:duration-300 hover:bg-violetGrow-700 hover:text-white">
        Crear cuenta
      </button>
    </form>
  );
};
