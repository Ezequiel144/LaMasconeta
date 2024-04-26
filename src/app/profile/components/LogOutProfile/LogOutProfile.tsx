"use client";
import { logout } from "@/actions";

export const LogOutProfile = () => {
  return (
    <button
      onClick={() => logout()}
      className=" px-3 py-1 border border-orangeGrow-600 rounded-lg w-full text-left text-lg font-medium hover:bg-orangeGrow-300 hover:border-orangeGrow-300 hover:text-white transition-all duration-300"
    >
      Cerrar sesion
    </button>
  );
};
