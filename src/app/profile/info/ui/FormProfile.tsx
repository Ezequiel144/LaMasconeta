"use client";
import { useState, useEffect } from "react";
import { logout, putUser } from "@/actions";
import { useForm } from "react-hook-form";
import Image from "next/image";

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
  const userImage = user?.image || "/profile_image_default.webp";

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

  const onSubmit = async (data: User) => {
    setIsLoading(true);

    const formData = new FormData();

    formData.append("name", data.name);
    formData.append("lastName", data.lastName);
    formData.append("gender", data.gender);
    formData.append("email", data.email);
    formData.append("phone", data.phone);

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
              src={userImage}
              alt="Imagen de perfil"
              width={150}
              height={150}
              className="rounded-full border"
            />
            <div>
              <h1>Mi perfil | Masconeta</h1>

              <button>Subir nueva imagen</button>
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
