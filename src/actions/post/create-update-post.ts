"use server";

import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { Gender } from "@prisma/client";
import { z } from "zod";

const postSchema = z.object({
  name: z.string().min(1).max(20),
  description: z.string().min(1).max(200),
  gender: z.nativeEnum(Gender),
  age: z.string().min(0).max(10),
  // age: z
  //   .number()
  //   .min(0)
  //   .transform((val) => Number(val)),
  phone: z.string().min(1).max(15),
  history: z.string().min(1).max(255),
  weight: z.string().min(0).max(20),
  height: z.string().min(0).max(20),
  userId: z.string().optional(),
  provinceId: z.string(),
  speciesId: z.string(),
});

export const createPost = async (formData: FormData, behaviors: string[]) => {
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

  const { userId, provinceId, speciesId, ...rest } = postData;

  try {
    const post = await prisma.post.create({
      data: {
        ...rest,
        user: { connect: { id: user } },
        province: { connect: { id: provinceId } },
        species: { connect: { id: speciesId } },
      },
    });

    const postId = post.id;

    await Promise.all(
      behaviors.map(async (behaviorId: string) => {
        await prisma.postToEnumBehavior.create({
          data: {
            postId,
            enumBehaviorId: behaviorId,
          },
        });
      })
    );

    return { ok: true, post };
  } catch (error) {
    console.log(error);
    return { ok: false, message: "Error al crear el post" };
  }
};
