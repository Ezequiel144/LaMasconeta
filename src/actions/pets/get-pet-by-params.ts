// actions.ts

import { FilterParams } from "@/interfaces";
import { prisma } from "@/lib/prisma";
import { Gender } from "@prisma/client";

export const getPetByParams = async ({ searchParams }: FilterParams) => {
  try {
    const pets = await prisma.post.findMany({
      where: {
        gender: searchParams.gender as Gender,
        province: searchParams.province as any,
      },
    });
    return pets;
  } catch (error) {
    console.error("Error fetching pets:", error);
    throw error; 
  }
};

// species
// province
// age
