import CardPetsProfile from "./CardPetsProfile";

interface PetData {
  id: string;
  name: string;
  slug: string;
  statusAdoption: string | null;
  photos: string[];
  province: {
    id: string;
    name: string;
    slug: string;
  };
  species: {
    id: string;
    name: string;
  };
}

interface ContainerPetsProfileProps {
  pets: PetData[] | { ok: boolean; message: string };
}

export const ContainerPetsProfile = ({ pets }: ContainerPetsProfileProps) => {
  if ("ok" in pets && "message" in pets) {
    return <div>Error: {pets.message}</div>;
  }

  return (
    <div className="grid grid-cols-3 gap-6">
      {pets.map((pet: PetData) => (
        <CardPetsProfile
          key={pet.slug}
          name={pet.name}
          slug={pet.slug}
          statusAdoption={pet.statusAdoption}
          photos={pet.photos}
          province={pet.province}
          species={pet.species}
        />
      ))}
    </div>
  );
};
