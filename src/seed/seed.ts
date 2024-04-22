import bcryptjs from "bcryptjs";

interface SeedUser {
  email: string;
  password: string;
  name: string;
  role: "admin" | "user";
}

interface HowDeliveredInt {
  name: string;
  description?: string;
}

interface EnumBehaviorInt {
  name: string;
  description?: string;
}

interface Species {
  name: string;
}

interface Diseases {
  name: string;
}

interface SeedData {
  users: SeedUser[];
  howDelivered: HowDeliveredInt[];
  behavior: EnumBehaviorInt[];
  species: Species[];
  diseases: Diseases[];
}

export const initialData: SeedData = {
  users: [
    {
      email: "mauri@mauri.com",
      name: "Mauricio",
      password: bcryptjs.hashSync("123123", 10),
      role: "admin",
    },
    {
      email: "reina@reina.com",
      name: "Reina",
      password: bcryptjs.hashSync("123123", 10),
      role: "user",
    },
    {
      email: "luna@luna.com",
      name: "Luna",
      password: bcryptjs.hashSync("123123", 10),
      role: "user",
    },
  ],
  howDelivered: [
    { name: "vacunado" },
    { name: "certificado de salud" },
    { name: "desparasitado" },
    { name: "esterilizado" },
    { name: "otro" },
  ],
  behavior: [
    { name: "amigable" },
    { name: "timido" },
    { name: "curioso" },
    { name: "tranquilo" },
    { name: "jugueton" },
    { name: "leal" },
    { name: "docil" },
    { name: "inteligente" },
    { name: "afectuoso" },
    { name: "obediente" },
    { name: "feliz" },
    { name: "energetico" },
    { name: "paciente" },
    { name: "adaptable" },
    { name: "alerta" },
    { name: "sensible" },
  ],
  species: [
    { name: "perro" },
    { name: "gato" },
    { name: "conejo" },
    { name: "pajaro" },
    { name: "pez" },
    { name: "hamster" },
    { name: "cobayo" },
    { name: "reptil" },
    { name: "huron" },
    { name: "erizo" },
    { name: "tortuga" },
    { name: "caballo" },
    { name: "cerdo" },
    { name: "cabra" },
    { name: "otro" },
  ],
  diseases: [
    { name: "parvovirus canino" },
    { name: "leptospirosis" },
    { name: "panleucopenia felina" },
    { name: "dermatitis alérgica por pulgas" },
    { name: "mastitis bovina" },
    { name: "otro" },
  ],
};
