"use client";
import { User } from "@/interfaces";
import { FieldErrors, UseFormRegister } from "react-hook-form";

type Props = {
  type: string;
  name?: string | undefined;
  sms: string;
  errors: any;
  errorsMessage: string | undefined;
  value: number | any;
  register: UseFormRegister<User>;
  title: string;
};

export default function InputsPerfil({
  name,
  sms,
  errors,
  errorsMessage,
  value,
  register,
  title,
  type,
}: Props) {
  return (
    <div className=" border-2 flex flex-col max-w-[200px]">
      <label>{title}:</label>
      <input
        className="mb-5 rounded-xl border bg-white px-3 py-2 border-violetGrow-700 shadow-shadowInput outline-none"
        type={type}
        {...register("name", {
          maxLength: {
            value: value,
            message: sms,
          },
        })}
      />
      {errors && <p>{errorsMessage}</p>}
    </div>
  );
}
