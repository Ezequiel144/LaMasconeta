"use server";

import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { Gender } from "@prisma/client";
import { z } from "zod";

// Definimos el esquema para validar los datos del formulario
const postSchema = z.object({
  name: z.string().min(1).max(20), // Modificado el mínimo de caracteres a 1
  description: z.string().min(1).max(200), // Modificado el mínimo de caracteres a 1
  gender: z.nativeEnum(Gender),
  age: z.string().min(0).max(10),
  // age: z
  //   .number()
  //   .min(0)
  //   .transform((val) => Number(val)),
  phone: z.string().min(1).max(15), // Modificado el mínimo de caracteres a 1
  history: z.string().min(1).max(255), // Modificado el mínimo de caracteres a 1
  weight: z.string().min(0).max(20), // Cambiado a number
  height: z.string().min(0).max(20), // Cambiado a number
  userId: z.string().optional(), // No es opcional, asumimos que siempre se recibe
});

export const createPost = async (formData: FormData) => {
  const data = Object.fromEntries(formData);
  const postParsed = postSchema.safeParse(data);

  const session = await auth();
  const user = session?.user?.id;

  if (!user) {
    return { ok: false, message: "No estás autenticado" };
  }

  if (!postParsed.success) {
    console.log(postParsed.error);
    return { ok: false, message: "Datos del formulario no válidos" };
  }

  const postData = postParsed.data;
  const { userId, ...rest } = postData;

  try {
    const post = await prisma.post.create({
      data: {
        ...rest,
        user: { connect: { id: user } },
      },
    });

    return { ok: true, post };
  } catch (error) {
    console.log(error);
    return { ok: false, message: "Error al crear el post" };
  }
};
