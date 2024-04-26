"use server";

import { prisma } from "@/lib/prisma";

export const getAllPetsUser = async (id: string) => {
  try {
    const allPets = await prisma.post.findMany({
      where: {
        userId: id,
      },
      include: {
        province: true,
        species: true,
      },
    });

    return allPets;
  } catch (error) {
    console.log(error);
    return {
      ok: false,
      message: "Algo no salio bien en la modificación del usuario",
    };
  }
};
