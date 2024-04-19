import { prisma } from "../lib/prisma";
import { initialData } from "./seed";

async function seedDatabase() {
  try {
    console.log("Eliminando registros existentes...");
    await prisma.country.deleteMany();
    await prisma.user.deleteMany();
    await prisma.post.deleteMany();
    await prisma.species.deleteMany();
    await prisma.behavior.deleteMany();
    await prisma.healthCondition.deleteMany();

    console.log("Creando nuevos registros...");

    // Crear usuarios
    await prisma.user.createMany({
      data: initialData.users,
    });

    // Crear países
    await prisma.country.createMany({
      data: initialData.provinces,
    });

    // Crear especies
    await prisma.species.createMany({
      data: initialData.species,
    });

    // Crear condiciones de salud
    await prisma.healthCondition.createMany({
      data: initialData.healthConditions,
    });

    // Crear comportamientos
    await prisma.behavior.createMany({
      data: initialData.behaviors,
    });

    console.log("Semilla cargada exitosamente");
  } catch (error) {
    console.error("Error al cargar la semilla:", error);
  } finally {
    await prisma.$disconnect();
    console.log("Cliente de Prisma desconectado");
  }
}

(async () => {
  if (process.env.NODE_ENV !== "production") {
    await seedDatabase();
  } else {
    console.log("El proceso de siembra no se ejecuta en producción.");
  }
})();
