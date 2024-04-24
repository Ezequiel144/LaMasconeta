import { getPetBySlug } from "@/actions";

interface Props {
  params: {
    slug: string;
  };
}

export default async function PetNamePage({ params }: Props) {
  const namePet = params.slug;

  const namePetResponse = await getPetBySlug(namePet);

  return (
    <div>
      <pre>{JSON.stringify(namePetResponse,null,2)}</pre>
    </div>
  );
}
