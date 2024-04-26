export interface PetData {
    id: string;
    name: string;
    slug: string;
    gender: string | null;
    statusAdoption: string | null;
    activity: string | null;
    birthdate: string | null;
    age: number;
    phone: number;
    history: string;
    photos: string[];
    weight: number;
    size: string;
    enabled: boolean;
    complaints: number;
    date: Date;
    userId: string;
    provinceId: string;
    speciesId: string;
    user: {
      id: string;
      name: string | null;
      lastName: string | null;
      email: string;
      image: string | null;
      posts: { id: string }[];
    };
    province: {
      id: string;
      name: string;
      slug: string;
    };
    species: {
      id: string;
      name: string;
    };
    postToDiseases: {
      enumDiseases: {
        id: string;
        name: string;
      } | null;
    }[];
    postToEnumBehavior: {
      enumBehavior: {
        id: string;
        name: string;
      } | null;
    }[];
    postToHowDelivered: {
      howDelivered: {
        id: string;
        name: string;
      } | null;
    }[];
  }