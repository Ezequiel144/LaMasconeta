"use server";

import { prisma } from "@/lib/prisma";

export const putUser = async (id: string, formdata: FormData) => {
  try {
    const updateUser = await prisma.user.update({
      where: { id },
      data: {
        ...formdata,
      },
    });
  } catch (error) {
    console.log(error);
    return {
      ok: false,
      message: "Algo no salio bien en la modificación del usuario",
    };
  }
};
