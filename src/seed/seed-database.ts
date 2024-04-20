import { prisma } from "../lib/prisma";
import { initialData } from "./seed";

async function main() {
  // 1. Borrar registros previos
  // await Promise.all([
  await prisma.user.deleteMany();

  // 2. Crear

  await prisma.user.createMany({
    data: initialData.users,
  });

  console.log("Ejecutado correctamente");
}

(() => {
  if (process.env.NODE_ENV === "production") return;
  main();
})();
