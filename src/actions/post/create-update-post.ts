"use server";

import { prisma } from "@/lib/prisma";
import { Gender, Post } from "@prisma/client";
import { z } from "zod";

const postSchema = z.object({
  id: z.string().uuid().optional().nullable(),
  name: z.string().min(2).max(16),
  dateOfBirth: z.date(),
  gender: z.nativeEnum(Gender),
  age: z
    .number()
    .min(0)
    .transform((val) => Number(val)),
  province: z.string(),
  transportation: z.boolean(),
  contactPhone: z.string(),
  history: z.string().min(30).max(255),
  healthConditions: z.array(z.string()),
  userId: z.string().uuid(),
  speciesId: z.string().uuid(),
  breedId: z.string().uuid(),
  countryId: z.string().uuid(),
});

export const createPost = async (formData: FormData) => {
  const data = Object.fromEntries(formData);
  const postParsed = postSchema.safeParse(data);

  if (!postParsed.success) {
    console.log(postParsed.error);
    return { ok: false };
  }

  const postData = postParsed.data;
  postData.name = postData.name.trim().toLowerCase();

  const { id, healthConditions, ...rest } = postData;

  try {
    let post: Post;

    post = await prisma.post.create({
      data: {
        ...rest,
        healthConditions: {
          createMany: {
            data: healthConditions.map((condition) => ({ condition })),
          },
        },
      },
    });

    return { ok: true, post };
  } catch (error) {
    console.log(error);
    return { ok: false, message: "Error al crear el post" };
  }
};
