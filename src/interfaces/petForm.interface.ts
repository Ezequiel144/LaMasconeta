export interface FormInputs {
  name: string;
  gender: "male" | "female" | "other";
  age: number;
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
