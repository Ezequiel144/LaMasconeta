import { EnumBehavior } from "@prisma/client";
import bcryptjs from "bcryptjs";

interface SeedUser {
  email: string;
  password: string;
  name: string;
  gender: "male" | "female" | "other";
  role: "admin" | "user";
}

interface SeedSpecies {
  name: string;
}

interface SeedHealthCondition {
  condition: string;
}

interface SeedBehavior {
  name: EnumBehavior;
}

interface SeedCountry {
  name: string;
}

interface SeedData {
  users: SeedUser[];
  provinces: SeedCountry[];
  species: SeedSpecies[];
  healthConditions: SeedHealthCondition[];
  behaviors: SeedBehavior[];
}

export const initialData: SeedData = {
  users: [
    {
      email: "admin@example.com",
      name: "Admin",
      password: bcryptjs.hashSync("adminpassword", 10),
      gender: "male",
      role: "admin",
    },
    {
      email: "user@example.com",
      name: "User",
      password: bcryptjs.hashSync("userpassword", 10),
      gender: "female",
      role: "user",
    },
  ],
  provinces: [
    { name: "Buenos Aires" },
    { name: "Catamarca" },
    { name: "Chaco" },
    { name: "Chubut" },
    { name: "Córdoba" },
    { name: "Corrientes" },
    { name: "Entre Ríos" },
    { name: "Formosa" },
    { name: "Jujuy" },
    { name: "La Pampa" },
    { name: "La Rioja" },
    { name: "Mendoza" },
    { name: "Misiones" },
    { name: "Neuquén" },
    { name: "Río Negro" },
    { name: "Salta" },
    { name: "San Juan" },
    { name: "San Luis" },
    { name: "Santa Cruz" },
    { name: "Santa Fe" },
    { name: "Santiago del Estero" },
    { name: "Tierra del Fuego" },
    { name: "Tucumán" },
  ],
  species: [
    { name: "Perro" },
    { name: "Gato" },
    { name: "Conejo" },
    { name: "Pájaro" },
    { name: "Hamster" },
    { name: "Tortuga" },
    { name: "Cobaya" },
    { name: "Hurón" },
    { name: "Iguana" },
    { name: "Pez" },
    { name: "Cangrejo" },
    { name: "Serpiente" },
    { name: "Araña" },
    { name: "Rata" },
    { name: "Erizo" },
    { name: "Ave" },
    { name: "Lagarto" },
    { name: "Cerdito" },
    { name: "Caballo" },
    { name: "Canguro" },
    { name: "Otro" },
  ],
  healthConditions: [
    { condition: "Parvovirus" },
    { condition: "Moquillo" },
    { condition: "Leishmaniasis" },
    { condition: "Gastritis" },
    { condition: "Dermatitis" },
    { condition: "Insuficiencia renal" },
    { condition: "Diabetes" },
    { condition: "Obesidad" },
    { condition: "Alergias" },
    { condition: "Hipotiroidismo" },
  ],
  behaviors: [
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
