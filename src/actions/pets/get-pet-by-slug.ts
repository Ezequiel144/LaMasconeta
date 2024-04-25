"use server";

import { prisma } from "@/lib/prisma";

export const getPetBySlug = async (slug: string) => {
  try {
    const petId = await prisma.post.findFirst({
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
              } 
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
    return petId;
  } catch (error) {
    return [];
  }
};
