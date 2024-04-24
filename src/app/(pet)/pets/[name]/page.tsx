import { getPetByName } from "@/actions";

interface Props {
  params: {
    name: string;
  };
}

export default async function PetNamePage({ params }: Props) {
  const namePet = params.name;

  const namePetResponse = await getPetByName(namePet);

  return (
    <div>
      <pre>{JSON.stringify(namePetResponse,null,2)}</pre>
    </div>
  );
}
