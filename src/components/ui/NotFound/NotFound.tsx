import { titleFont } from "@/config/fonts";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const PageNotFound = () => {
  return (
    <div className=" h-[600px] w-full flex flex-col items-center  justify-center align-middle gap-10">
      <div className="mx-3 px-3 ">
        <Image
          src={"/pageNotFound.svg"}
          alt="Starman"
          className="p-5 sm:p-0 "
          width={300}
          height={300}
        />
      </div>
      <h2 className={`${titleFont.className} text-3xl antialiased`}>
        Página no encontrada
      </h2>
      <span>
        Lo siento, no pudimos encontrar la página que estabas buscando
      </span>
      <Link
        href={"/"}
        className={`${titleFont.className} border font-bold antialiased border-violetGrow-600 p-2 rounded-2xl text-violetGrow-600`}
      >
        <span>Ir al inicio</span>
      </Link>
    </div>
  );
};
