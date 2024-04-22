import Image from "next/image";

export default function DetailsIdPage() {
  return (
    <main className=" w-full min-h-screen px-3">
      <section className=" flex flex-col w-full gap-y-3">
        <Image
          src={"/image/imageMainDetails.png"}
          width={330}
          height={330}
          className=" mx-auto rounded-3xl"
          alt="imagen principal de detail"
        />
        {/* carrusel */}
        <article className=" flex w-full justify-between items-center px-3">
          <Image
            src={"/image/imageCarouselDetail.png"}
            width={70}
            height={70}
            alt="imagen del carrusel {numero...}"
          />
          <Image
            src={"/image/imageCarouselDetail.png"}
            width={70}
            height={70}
            alt="imagen del carrusel {numero...}"
          />
          <Image
            src={"/image/imageCarouselDetail.png"}
            width={70}
            height={70}
            alt="imagen del carrusel {numero...}"
          />
          <Image
            src={"/image/imageCarouselDetail.png"}
            width={70}
            height={70}
            alt="imagen del carrusel {numero...}"
          />
        </article>
      </section>
      <section className=" flex gap-x-5 items-center w-fit max-h-[130px] mt-8">
        <Image
          src={"/image/imagePerfilUserDetails.png"}
          className="rounded-full h-[120px]"
          width={120}
          height={120}
          alt="Imagen del {nombre del dueño de la mascota}"
        />
        <article className=" flex flex-col gap-y-1">
          <h2 className=" text-base font-semibold">Armando Diego Barreda</h2>
          <div className=" flex items-center gap-x-1">
            <Image
              src={"/MapDetailsUser.svg"}
              width={20}
              height={16}
              alt="svg de localizacion"
            />
            <p className=" text-sm font-normal">Buenos Aires, Argentina</p>
          </div>
          <div className=" px-3 py-2 rounded-md bg-orangeGrow-300 text-white text-sm font-normal">
            3 casos de adopcion
          </div>
          <div className="px-3 py-2 rounded-md bg-violetGrow-300 text-white text-sm font-normal">
            Envio: A la misma provincia
          </div>
        </article>
      </section>
      <button className="mt-8 uppercase border border-[#E41818] py-1 px-2 text-[#E41818] rounded-md w-full hover:transition-all hover:duration-300 hover:bg-[#E41818] hover:text-white text-base font-normal">
        Caso Extraño
      </button>
      <section className="flex flex-col">
        <button className="text-[#EF6183] text-xl font-normal flex items-center gap-x-1">
          <Image src={"/Favorite.svg"} width={24} height={24} alt="favoritos" />
          <p>Interesado</p>
        </button>
        <div className=" bg-orangeGrow-300 px-4 py-3 rounded-xl text-white">
          <h2 className=" uppercase text-4xl font-bold">Ramoncito</h2>
          <p className=" text-base font-normal">Buenos Aires, La matanza</p>
        </div>
      </section>
    </main>
  );
}
