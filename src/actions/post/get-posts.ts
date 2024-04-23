"use server";

import { prisma } from "@/lib/prisma";

export const getPosts = async () => {
  try {
    const posts = await prisma.post.findMany({
      orderBy: {
        name: "asc",
      },
      select: {
        id: true,
        name: true,
        gender: true,
        phone: true,
        history: true,
        photos: true,
        weight: true,
        size: true,
        enabled: true,
        complaints: true,
        date: true,
        province: true,
        species: true,
        postToEnumBehavior: {
          select: {
            enumBehavior: true,
          },
        },
        postToHowDelivered: {
          select: {
            howDeliveredId: true,
          },
        },
        postToDiseases: {
          select: {
            enumDiseases: true,
          },
        },
        user: {
          select: {
            id: true,
            name: true,
            lastName: true,
            email: true,
            image: true,
          },
        },
      },
    });
    return posts;
  } catch (error) {
    return [];
  }
};
