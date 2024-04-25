"use client";
import { logout, putUser } from "@/actions";
import app from "@/utils/firebase";
import clsx from "clsx";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";
const storage = getStorage(app);

interface User {
  id: string;
  name: string;
  lastName: string;
  email: string;
  image?: string | undefined;
  phone: string;
  gender: string;
}

interface FormProfileProps {
  user: User | undefined;
}

export const FormProfile = ({ user }: FormProfileProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [imageUrl, setImageUrl] = useState<string | undefined>(user?.image);
  const [buttonText, setButtonText] = useState<string>("Subir imagen");

  useEffect(() => {
    if (user) {
      setIsLoading(false);
    }
  }, [user]);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<User>({
    defaultValues: {
      ...user,
    },
  });

  const upImage = async (e: any) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const uniqueFileName = `${uuidv4()}_${file.name}`;
    const storageRef = ref(storage, `profile/${uniqueFileName}`);

    try {
      await uploadBytes(storageRef, file);
      const url = await getDownloadURL(storageRef);
      setImageUrl(url);
      setButtonText("Imagen subida");
      console.log("URL de la imagen subida:", url);
    } catch (error) {
      console.error("Error al subir la imagen:", error);
    }
  };

  const onSubmit = async (data: User) => {
    const formData = new FormData();

    console.log("Datos del formulario:", data);
    console.log("URL de la imagen:", imageUrl);
    formData.append("name", data.name);
    formData.append("lastName", data.lastName);
    formData.append("gender", data.gender);
    formData.append("email", data.email);
    formData.append("phone", data.phone);
    formData.append("image", imageUrl || "");

    const { ok } = await putUser(user!.email, formData);

    setIsLoading(false);

    if (!ok) {
      console.log(errors);
      return;
    }

    if (ok) {
      alert("Vamos a cerrar sesión para aplicar los cambios");
      await logout();
    }
  };

  return (
    <div>
      {isLoading ? (
        <p>Cargando...</p>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="w-full flex items-center gap-10">
            <Image
              src={imageUrl || "/profile_image_default.webp"}
              alt="Imagen de perfil"
              width={150}
              height={150}
              className="rounded-full border"
            />
            <div>
              <h1>Mi perfil | Masconeta</h1>
              <input type="file" onChange={upImage} className="hidden" />
              <button
                type="button"
                onClick={() =>
                  (
                    document.querySelector(
                      "input[type='file']"
                    ) as HTMLInputElement
                  )?.click()
                }
                disabled={buttonText !== "Subir imagen"}
                className={clsx(
                  "px-4 py-2 rounded-md text-white transition-colors duration-300",
                  {
                    "bg-blue-500": buttonText === "Subir imagen",
                    "bg-green-500": buttonText === "Imagen subida",
                  }
                )}
              >
                {buttonText}
              </button>
            </div>
          </div>

          <div>
            <label>Nombre:</label>
            <input
              type="text"
              {...register("name", {
                maxLength: {
                  value: 20,
                  message: "El nombre debe tener menos de 20 caracteres",
                },
              })}
            />
            {errors.name && <p>{errors.name.message}</p>}
          </div>
          <div>
            <label>Apellido:</label>
            <input
              type="text"
              {...register("lastName", {
                maxLength: {
                  value: 20,
                  message: "El apellido debe tener menos de 20 caracteres",
                },
              })}
            />
            {errors.lastName && <p>{errors.lastName.message}</p>}
          </div>
          <div>
            <label>Género:</label>
            <select {...register("gender")}>
              <option value="male">Masculino</option>
              <option value="female">Femenino</option>
              <option value="other">Otro</option>
            </select>
            {errors.gender && <p>{errors.gender.message}</p>}
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              {...register("email", {
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Por favor ingrese un correo electrónico válido",
                },
              })}
            />
            {errors.email && <p>{errors.email.message}</p>}
          </div>
          <div>
            <label>Telefono:</label>
            <input
              type="text"
              {...register("phone", {
                maxLength: {
                  value: 20,
                  message: "El telefono debe tener menos de 20 digitos",
                },
              })}
            />
            {errors.phone && <p>{errors.phone.message}</p>}
          </div>

          <button type="submit">Guardar</button>
        </form>
      )}
    </div>
  );
};
