"use server";

import { prisma } from "@/lib/prisma";

export const getDiseases = async () => {
  try {
    const diseases = await prisma.diseases.findMany({
      orderBy: {
        name: "asc",
      },
    });

    return diseases;
  } catch (error) {
    return [];
  }
};
