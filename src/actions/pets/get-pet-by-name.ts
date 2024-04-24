"use server";

import { prisma } from "@/lib/prisma";

export const getPetByName = async (name: string) => {
  try {
    const petId = await prisma.post.findFirst({
      where: {
        name,
      },
    });
    return petId;
  } catch (error) {
    return [];
  }
};
