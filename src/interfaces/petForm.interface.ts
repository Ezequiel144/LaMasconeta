export interface FormInputs {
  name: string;
  slug: string;
  gender: "male" | "female" | "other";
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
}
