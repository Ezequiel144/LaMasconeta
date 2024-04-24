// actions.ts

import { FilterParams } from "@/interfaces";
import { prisma } from "@/lib/prisma";
import { Gender } from "@prisma/client";

export const getPetByParams = async ({ searchParams }: FilterParams) => {
  try {
    let whereClause: any = {};

    if (searchParams.gender) {
      whereClause.gender = searchParams.gender as Gender;
    }

    if (searchParams.province) {
      whereClause.province = {
        slug: searchParams.province,
      };
    }

    if (searchParams.species) {
      whereClause.species = {
        name: searchParams.species,
      };
    }

    if (searchParams.age) {
      whereClause.age = Number(searchParams.age);
    }

    const pets = await prisma.post.findMany({
      where: whereClause,
      include: { province: true, species: true}
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
