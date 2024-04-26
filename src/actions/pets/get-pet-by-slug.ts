"use server";

import { PetData } from "@/interfaces/petData";
import { prisma } from "@/lib/prisma";

export const getPetBySlug = async (slug: string): Promise<PetData | null> => {
  try {
    const pet = await prisma.post.findFirst({
      where: {
        slug,
      },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            lastName: true,
            email: true,
            image: true,
            posts: {
              select: {
                id: true,
              },
            },
          },
        },
        province: true,
        species: true,
        postToDiseases: {
          select: {
            enumDiseases: true,
          },
        },
        postToEnumBehavior: {
          select: {
            enumBehavior: true,
          },
        },
        postToHowDelivered: {
          select: {
            howDelivered: true,
          },
        },
      },
    });

    return pet;
  } catch (error) {
    console.error("Error fetching pet:", error);
    return null;
  }
};
