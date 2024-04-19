import bcryptjs from "bcryptjs";

interface SeedUser {
  email: string;
  password: string;
  name: string;
  gender: "male" | "female" | "other";
}

interface SeedSpecies {
  name: string;
}

interface SeedHealthCondition {
  condition: string;
}

interface SeedBehavior {
  trait: string;
  isBoolean: boolean;
}

interface SeedAdoptionInfo {
  adoptionInfo: string;
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
  adoptionInfo: SeedAdoptionInfo[];
}

export const initialData: SeedData = {
  users: [
    {
      email: "usuario1@example.com",
      name: "Usuario 1",
      password: bcryptjs.hashSync("password1", 10),
      gender: "male",
    },
    {
      email: "usuario2@example.com",
      name: "Usuario 2",
      password: bcryptjs.hashSync("password2", 10),
      gender: "female",
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
    { trait: "Agresividad", isBoolean: true },
    { trait: "Ansiedad por separación", isBoolean: true },
    { trait: "Miedo a los ruidos fuertes", isBoolean: true },
    { trait: "Ladrido excesivo", isBoolean: true },
    { trait: "Comportamiento destructivo", isBoolean: true },
    { trait: "Persiguiendo la cola", isBoolean: true },
    { trait: "Escalada", isBoolean: true },
    { trait: "Rascado", isBoolean: true },
    { trait: "Morder", isBoolean: true },
    { trait: "Marcaje con orina", isBoolean: true },
  ],
  adoptionInfo: [
    { adoptionInfo: "Requiere espacios abiertos" },
    { adoptionInfo: "Apto para departamentos" },
    { adoptionInfo: "Convive bien con otros animales" },
    { adoptionInfo: "Requiere cuidados especiales" },
    { adoptionInfo: "Apto para principiantes" },
    { adoptionInfo: "No apto para familias con niños pequeños" },
    { adoptionInfo: "Requiere mucho ejercicio" },
    { adoptionInfo: "Requiere poco mantenimiento" },
    { adoptionInfo: "Apto para familias con niños pequeños" },
    { adoptionInfo: "Requiere supervisión veterinaria constante" },
  ],
};
