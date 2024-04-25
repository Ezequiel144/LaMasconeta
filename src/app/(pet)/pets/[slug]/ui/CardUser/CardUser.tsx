import Image from "next/image";

export default function CardUser() {
  return (
    <section className=" flex gap-x-5 items-center w-fit h-fit pt-5 mx-auto md:mx-0">
      <Image
        src={"/image/imagePerfilUserDetails.png"}
        className="rounded-full h-[120px]"
        width={120}
        height={120}
        alt="Imagen del {nombre del dueño de la mascota}"
      />
      <article className=" flex flex-col gap-y-1">
        <h2 className=" text-base md:text-xl font-semibold">Armando Diego Barreda</h2>
        <div className=" flex items-center gap-x-1">
          <Image
            src={"/MapDetailsUser.svg"}
            width={20}
            height={16}
            className="w-auto h-auto"
            alt="svg de localizacion"
          />
          <p className=" text-sm md:text-base font-normal">Buenos Aires, Argentina</p>
        </div>
        <div className=" px-3 py-2 rounded-md bg-orangeGrow-300 text-white text-sm md:text-base font-normal">
          3 casos de adopcion
        </div>
        <div className="px-3 py-2 rounded-md bg-violetGrow-300 text-white text-sm md:text-base font-normal">
          Envio: A la misma provincia
        </div>
      </article>
    </section>
  );
}
