import { getPetBySlug } from "@/actions";
import ContainAllDetails from "./ui/ContainAllDetails/ContainAllDetails";
import RelatedCarousel from "./ui/RelatedCarousel/RelatedCarousel";

interface Props {
  params: {
    slug: string;
  };
}

export default async function PetNamePage({ params }: Props) {
  const namePet = params.slug;

  const namePetResponse = await getPetBySlug(namePet);

  /* console.log(namePetResponse) */

  if(!namePetResponse){
    return(
      <div>El id buscado no existe</div> /* Ponerlo con page error */
    )
  }

  return (
    <main className=" w-full min-h-screen px-3 ">
      <ContainAllDetails namePetResponse={namePetResponse}/>
      <RelatedCarousel />
    </main>
  );
}
