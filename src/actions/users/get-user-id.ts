"use server";

import { prisma } from "@/lib/prisma";

export const getUserId = async (email: string) => {
  try {
    const userId = await prisma.user.findUnique({
      where: { email: email },
    });

    return userId;
  } catch (error) {
    console.log(error);
    return {
      ok: false,
      message: "Algo no salio bien en la modificación del usuario",
    };
  }
};
