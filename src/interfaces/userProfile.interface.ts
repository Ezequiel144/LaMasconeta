export interface UserProfile {
  id: string;
  name: string;
  lastName: string;
  email: string;
  image?: string | undefined;
  phone: string;
  gender: "male" | "female" | "other";
}
