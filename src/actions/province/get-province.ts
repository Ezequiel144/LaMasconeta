"use server";

import { prisma } from "@/lib/prisma";

export const getProvinces = async () => {
  try {
    const category = await prisma.province.findMany({
      orderBy: {
        name: "asc",
      },
    });

    return category;
  } catch (error) {
    return [];
  }
};
