"use server";

import { prisma } from "@/lib/prisma";

export const getPosts = async () => {
  try {
    const posts = await prisma.post.findMany({
      orderBy: {
        name: "asc",
      },
      include: {
        province: {
          select: {
            name: true,
          },
        },
        postToEnumBehavior: {
          select: {
            enumBehavior: {
              select: {
                name: true,
              },
            },
          },
        },
        postToHowDelivered: {
          select: {
            howDelivered: {
              select: {
                name: true,
              },
            },
          },
        },
      },
    });
    return posts;
  } catch (error) {
    return [];
  }
};
