export interface FormInputs {
  id: string;
  userId: string;
  name: string;
  slug: string;
  gender: "male" | "female" | "other";
  statusAdoption: "adoption" | "adopted";
  activity: "low" | "mid" | "high";
  age: number;
  birthdate: string;
  phone: number;
  history: string;
  photos: string[];
  weight: number;
  size: "little" | "medium" | "big";
  provinceId: string;
  speciesId: string;
  behaviors: string[];
  howDelivered: string[];
  diseases: string[];
  images?: string[];
}
