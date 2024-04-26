"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { IoLogInOutline, IoLogOutOutline } from "react-icons/io5";

export default function ButtonHeader() {
  const { data: session, status } = useSession();
 /*  const isAuthenticated = !!session?.user; */
  const [isLoading, setIsLoading] = useState(true);
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    setIsLoading(false);
  }, [status]);

  useEffect(() => {
    setAuth(!!session?.user)
  }, [session?.user]);

  if (isLoading) {
    return (
      <div className="w-28 h-10 animate-pulse bg-gray-300 hidden lg:block" />
    );
  }

  console.log(auth);

  return (
    <div className="lg:flex items-center gap-x-3 border-2 rounded-lg text-violetGrow-600 border-violetGrow-600 hidden">
      {auth ? (
        <Link
          href={"/profile"}
          className="flex w-full items-center rounded p-2 transition-all hover:bg-gray-100"
          // onClick={() => logout()}
        >
          <IoLogOutOutline size={26} />
          <span className="ml-3 text-sm">Perfil</span>
        </Link>
      ) : (
        <Link
          href={"/auth/login"}
          className="flex items-center rounded p-2 transition-all hover:bg-gray-100"
        >
          <IoLogInOutline size={26} />
          <span className="ml-3 text-sm">Ingresar</span>
        </Link>
      )}
    </div>
  );
}
