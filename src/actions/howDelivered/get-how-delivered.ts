"use server";

import { prisma } from "@/lib/prisma";

export const getHowDelivered = async () => {
  try {
    const delivered = await prisma.howDelivered.findMany({
      orderBy: {
        name: "asc",
      },
    });

    return delivered;
  } catch (error) {
    return [];
  }
};
