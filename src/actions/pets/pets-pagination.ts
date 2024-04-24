"use server";

import { prisma } from "@/lib/prisma";
import { Gender } from "@prisma/client";

interface PaginationOptions {
  page?: number;
  take?: number;
  gender?: Gender;
}

export const getPaginatedProductsWithImages = async ({
  page = 1,
  take = 1,
  gender,
}: PaginationOptions) => {
  if (isNaN(Number(page))) page = 1;
  if (page < 1) page = 1;

  try {
    // 1. Obtener las mascotas
    const pets = await prisma.post.findMany({
      take: take,
      skip: (page - 1) * take,
      //! Por género
      where: {
        gender,
      },
    });

    console.log(pets);
    
    // 2. Obtener el total de páginas
    // todo:
    const totalCount = await prisma.post.count({
      where: {
        gender: gender,
      },
    });

    const totalPages = Math.ceil(totalCount / take);

    return {
      currentPage: page,
      totalPages: totalPages,
      pets: pets,
    };
  } catch (error) {
    throw new Error("No se pudo cargar los productos");
  }
};
