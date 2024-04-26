"use client";
import { logout } from "@/actions";

export const LogOutProfile = () => {
  return (
    <button
      onClick={() => logout()}
      className=" px-3 py-1 border border-orangeGrow-600 rounded-lg w-full text-left text-lg font-medium"
    >
      Cerrar sesion
    </button>
  );
};
