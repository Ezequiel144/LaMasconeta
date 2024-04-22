"use server";

import { prisma } from "@/lib/prisma";

export const getPosts = async () => {
  try {
    const posts = await prisma.post.findMany({
      orderBy: {
        name: "asc",
      },
      include: {
        province: true,
        species: true,
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
    return posts;
  } catch (error) {
    return [];
  }
};
