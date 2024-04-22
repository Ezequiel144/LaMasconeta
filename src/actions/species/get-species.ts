"use server";

import { prisma } from "@/lib/prisma";

export const getSpecies = async () => {
  try {
    const species = await prisma.species.findMany({
      orderBy: {
        name: "asc",
      },
    });

    return species;
  } catch (error) {
    return [];
  }
};
