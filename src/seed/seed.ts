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

interface enumBehaviorInt {
  name: string;
  description?: string;
}

interface SeedData {
  users: SeedUser[];
  howDelivered: HowDeliveredInt[];
  behavior: enumBehaviorInt[];
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
    { name: "certificado_de_salud" },
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
};
