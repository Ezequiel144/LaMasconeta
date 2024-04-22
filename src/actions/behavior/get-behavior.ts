"use server";

import { prisma } from "@/lib/prisma";

export const getBehaviors = async () => {
  try {
    const category = await prisma.behavior.findMany({
      orderBy: {
        name: "asc",
      },
    });

    return category;
  } catch (error) {
    return [];
  }
};
