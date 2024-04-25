"use server";

import { prisma } from "@/lib/prisma";
import { Gender } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { z } from "zod";

const postSchema = z.object({
  id: z.string().uuid().optional().nullable(),
  name: z.string().min(1).max(20).trim().optional(),
  lastName: z.string().min(1).max(20).trim().optional(),
  gender: z.nativeEnum(Gender).optional(),
  email: z.string().email().optional(),
  phone: z.string().min(1).max(20).trim().optional(),
  image: z.string().url().optional(),
});

export const putUser = async (userEmail: string, formData: FormData) => {
  const data = Object.fromEntries(formData);
  const postParsed = postSchema.safeParse(data);

  if (!userEmail) {
    return { ok: false, message: "No estás autenticado" };
  }

  if (!postParsed.success) {
    console.log(postParsed.error);
    return { ok: false, message: "Datos del formulario no válidos" };
  }

  const postData = postParsed.data;
  const { id, ...rest } = postData;

  try {
    const updateUser = await prisma.user.update({
      where: { email: userEmail },
      data: {
        ...rest,
      },
    });

    revalidatePath("/profile/info");
    revalidatePath("/profile/followup");
    revalidatePath("/profile/pets");

    return {
      ok: true,
      message: "Usuario modificado correctamente",
      updateUser: updateUser,
    };
  } catch (error) {
    console.log(error);
    return {
      ok: false,
      message: "Algo no salio bien en la modificación del usuario",
    };
  }
};
