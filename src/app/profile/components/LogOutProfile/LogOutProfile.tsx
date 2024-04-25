"use client";
import { logout } from "@/actions";

export const LogOutProfile = () => {
  return (
    <div>
      <button onClick={() => logout()}>Cerrar sesion</button>
    </div>
  );
};
