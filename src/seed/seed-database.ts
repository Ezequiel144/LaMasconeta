import { prisma } from "../lib/prisma";
import { initialData } from "./seed";

async function seedDatabase() {
  try {
    // Eliminar registros existentes
    await prisma.user.deleteMany();
    await prisma.adoptionInfo.deleteMany();
    await prisma.behavior.deleteMany();
    await prisma.healthCondition.deleteMany();
    await prisma.post.deleteMany();
    await prisma.country.deleteMany();
    await prisma.species.deleteMany();

    // Crear
    const {
      users,
      provinces,
      species,
      healthConditions,
      adoptionInfo,
      behaviors,
    } = initialData;

    await prisma.user.createMany({
      data: users,
    });

    await prisma.country.createMany({
      data: provinces,
    });

    await prisma.species.createMany({
      data: species,
    });

    await prisma.healthCondition.createMany({
      data: healthConditions,
    });

    await prisma.adoptionInfo.createMany({
      data: adoptionInfo,
    });

    await prisma.behavior.createMany({
      data: behaviors,
    });

    console.log("Seed cargado exitosamente");
  } catch (error) {
    console.error("Seed no se pudo cargar:", error);
  } finally {
    await prisma.$disconnect();
  }
}

(() => {
  if (process.env.NODE_ENV === "production") return;
  seedDatabase();
})();
