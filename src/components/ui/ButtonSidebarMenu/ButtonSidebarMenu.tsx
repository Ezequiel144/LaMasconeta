"use client";

import { logout } from "@/actions";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { IoLogInOutline, IoLogOutOutline } from "react-icons/io5";


export default function ButtonSidebarMenu() {
  const { data: session, status } = useSession();
  const isAuthenticated = !!session?.user;
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, [status]);

  if (isLoading) {
    return (
      <div className="w-28 h-10 animate-pulse bg-gray-300 lg:hidden block z-10" />
    );
  }

  return (
    <div className="flex items-center gap-x-3 border-2 rounded-lg text-white border-white lg:hidden z-10 hover:border-violetGrow-600 hover:bg-violetGrow-600 hover:transition-all hover:duration-300">
      {isAuthenticated ? (
        <Link
          href={"/profile"}
          className="flex w-full items-center rounded p-2 transition-all "
          // onClick={() => logout()}
        >
          <IoLogOutOutline size={26} /> 
          <span className="ml-3 text-base font-medium">Crear POST</span>
        </Link>
      ) : (
        <Link
          href={"/auth/login"}
          className="flex items-center rounded p-2 transition-all "
        >
          <IoLogInOutline size={26} />
          <span className="ml-3 text-base font-medium">Iniciar Sesion</span>
        </Link>
      )}
    </div>
  );
}
