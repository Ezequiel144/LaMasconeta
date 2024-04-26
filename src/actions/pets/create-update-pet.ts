"use server";

import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { Activity, Adoption, Gender, Post, Size } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { z } from "zod";

const postSchema = z.object({
  id: z.string().uuid().optional().nullable(),
  userId: z.string(),
  name: z.string().min(1).max(20).toLowerCase().trim(),
  slug: z.string().min(3).max(255),
  gender: z.nativeEnum(Gender),
  statusAdoption: z.nativeEnum(Adoption),
  activity: z.nativeEnum(Activity),
  age: z
    .string()
    .min(0)
    .max(50)
    .transform((val) => Number(val)),
  birthdate: z.string(),
  phone: z
    .string()
    .min(0)
    .transform((val) => Number(val)),
  history: z.string().min(1).max(255).trim(),
  weight: z
    .string()
    .min(0)
    .transform((val) => Number(val)),
  size: z.nativeEnum(Size),
  provinceId: z.string(),
  speciesId: z.string(),
});

export const createPost = async (
  formData: FormData,
  behaviors: string[],
  howDelivered: string[],
  diseases: string[],
  photos: string[]
) => {
  const data = Object.fromEntries(formData);
  const postParsed = postSchema.safeParse(data);

  console.log(postParsed);

  if (!postParsed.success) {
    console.log(postParsed.error);
    return { ok: false, message: "Datos del formulario no válidos" };
  }

  const postData = postParsed.data;
  postData.slug = postData.slug.toLowerCase().replace(/ /g, "-").trim();

  const { userId, provinceId, speciesId, id, ...rest } = postData;

  try {
    let postPet: Post;

    if (id) {
      postPet = await prisma.post.update({
        where: { id },
        data: {
          ...rest,
          photos: photos,
          user: { connect: { id: userId } },
          province: { connect: { id: provinceId } },
          species: { connect: { id: speciesId } },
        },
      });
    } else {
      postPet = await prisma.post.create({
        data: {
          ...rest,
          photos: photos,
          user: { connect: { id: userId } },
          province: { connect: { id: provinceId } },
          species: { connect: { id: speciesId } },
        },
      });
    }
    const postId = postPet.id;

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

    await Promise.all(
      howDelivered.map(async (howDeliveredId: string) => {
        await prisma.postToHowDelivered.create({
          data: {
            postId,
            howDeliveredId: howDeliveredId,
          },
        });
      })
    );

    await Promise.all(
      diseases.map(async (diseasesId: string) => {
        await prisma.postToDiseases.create({
          data: {
            postId,
            enumDiseasesId: diseasesId,
          },
        });
      })
    );

    revalidatePath("/");
    revalidatePath(`/profile/pet/${postData.slug}`);
    revalidatePath(`/profile/pets`);

    return { ok: true, pet: postPet };
  } catch (error) {
    console.log(error);
    return { ok: false, message: "Error al crear el post" };
  }
};
