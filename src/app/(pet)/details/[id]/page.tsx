import Image from "next/image";

export default function DetailsIdPage() {
  return (
    <main className=" w-full min-h-screen ">
      <section className=" flex flex-col w-full gap-y-3">
        <Image
          src={"/image/imageMainDetails.png"}
          width={330}
          height={330}
          className=" mx-auto bg-red-300 rounded-3xl"
          alt="imagen principal de detail"
        />
        {/* carrusel */}
        <article className=" flex w-full justify-between items-center px-3">
            <Image src={"/image/imageCarouselDetail.png"} width={70} height={70} alt="imagen del carrusel {numero...}"/>
            <Image src={"/image/imageCarouselDetail.png"} width={70} height={70} alt="imagen del carrusel {numero...}"/>
            <Image src={"/image/imageCarouselDetail.png"} width={70} height={70} alt="imagen del carrusel {numero...}"/>
            <Image src={"/image/imageCarouselDetail.png"} width={70} height={70} alt="imagen del carrusel {numero...}"/>
        </article>  
      </section>
      <section>
        
      </section>
    </main>
  );
}
