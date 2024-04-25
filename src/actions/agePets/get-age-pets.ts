"use server";

import { prisma } from "@/lib/prisma";

export const agePets = async () => {
  try {
    const agePetsSet = new Set();
    const pets = await prisma.post.findMany({
      orderBy: {
        name: "asc",
      },
      select: {
        age: true,
      },
    });

    pets.forEach((pet) => {
      agePetsSet.add(pet.age);
    });

    const uniqueAges = Array.from(agePetsSet);

    return uniqueAges;
  } catch (error) {
    return [];
  }
};
