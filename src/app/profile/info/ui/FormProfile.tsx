"use client";
import { logout, putUser } from "@/actions";
import app from "@/utils/firebase";
import clsx from "clsx";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";
import InputsPerfil from "./InputsPerfil/InputsPerfil";
import { User } from "@/interfaces";

const storage = getStorage(app);

interface FormProfileProps {
  user: User | undefined;
}

interface inputForm {
  name: string;
  lastName: string;
  gender: string;
  email: string;
  phone: string;
}

export const FormProfile = ({ user }: FormProfileProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [imageUrl, setImageUrl] = useState<string | undefined>(user?.image);
  const [buttonText, setButtonText] = useState<string>("Subir imagen");
  const [inputChange, setInputChange] = useState<inputForm>({
    name: "",
    lastName: "",
    gender: "",
    email: "",
    phone: "",
  });

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

  const handleChangeForm = (e: {
    target: { id: string; value: string | number | undefined };
  }) => {
    const { id, value } = e.target;
    setInputChange({ ...inputChange, [id]: value });
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
              width={210}
              height={210}
              className="rounded-full border"
            />
            <div className=" flex flex-col gap-y-3">
              <h1 className=" text-4xl font-bold">Mi perfil | Masconeta</h1>
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
          <section className="  flex flex-wrap gap-5 max-w-[770px]">
            <div className="  flex flex-col max-w-[200px]">
              <label>Nombre:</label>
              <input
                className="mb-5 rounded-xl border bg-white px-3 py-2 border-violetGrow-700 shadow-shadowInput outline-none"
                type="text"
                id="name"
                {...register("name", {
                  maxLength: {
                    value: 20,
                    message: "El nombre debe tener menos de 20 caracteres",
                  },
                })}
                onChange={handleChangeForm}
              />
              {errors.name && <p>{errors.name.message}</p>}
            </div>
            {/* <InputsPerfil
              type={"text"}
              name={"name"}
              sms={"El nombre debe tener menos de 20 caracteres"}
              errors={errors?.name}
              errorsMessage={errors?.name?.message}
              value={20}
              register={register}
              title={"Nombre"}
            /> */}
            <div className="  flex flex-col max-w-[200px]">
              <label>Apellido:</label>
              <input
                className="mb-5 rounded-xl border bg-white px-3 py-2 border-violetGrow-700 shadow-shadowInput outline-none"
                type="text"
                id="lastName"
                {...register("lastName", {
                  maxLength: {
                    value: 20,
                    message: "El apellido debe tener menos de 20 caracteres",
                  },
                })}
                onChange={handleChangeForm}
              />
              {errors.lastName && <p>{errors.lastName.message}</p>}
            </div>
            {/*  <InputsPerfil
              type={"text"}
              name={"lastName"}
              sms={"El apellido debe tener menos de 20 caracteres"}
              errors={errors?.lastName}
              errorsMessage={errors?.lastName?.message}
              value={20}
              register={register}
              title={"Apellido"}
            /> */}
            <div className="  flex flex-col max-w-[200px]">
              <label>Género:</label>
              <select
                {...register("gender")}
                className="mb-5 rounded-xl border bg-white px-3 py-2 border-violetGrow-700 shadow-shadowInput outline-none"
                onChange={handleChangeForm}
                id="gender"
              >
                <option value="male">Masculino</option>
                <option value="female">Femenino</option>
                <option value="other">Otro</option>
              </select>
              {errors.gender && <p>{errors.gender.message}</p>}
            </div>
            <div className="  flex flex-col max-w-[200px]">
              <label htmlFor="email">Email:</label>
              <input
                className="mb-5 rounded-xl border bg-white px-3 py-2 border-violetGrow-700 shadow-shadowInput outline-none"
                type="email"
                id="email"
                {...register("email", {
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Por favor ingrese un correo electrónico válido",
                  },
                })}
                onChange={handleChangeForm}
              />
              {errors.email && <p>{errors.email.message}</p>}
            </div>
            {/* <InputsPerfil
              type={"email"}
              name={"email"}
              sms={"Por favor ingrese un correo electrónico válido"}
              errors={errors?.email}
              errorsMessage={errors?.email?.message}
              value={/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i}
              register={register}
              title={"Email"}
            /> */}
            <div className="  flex flex-col max-w-[200px]">
              <label>Telefono:</label>
              <input
                className="mb-5 rounded-xl border bg-white px-3 py-2 border-violetGrow-700 shadow-shadowInput outline-none"
                type="text"
                id="phone"
                {...register("phone", {
                  maxLength: {
                    value: 20,
                    message: "El telefono debe tener menos de 20 digitos",
                  },
                })}
                onChange={handleChangeForm}
              />
              {errors.phone && <p>{errors.phone.message}</p>}
            </div>
            {/* <InputsPerfil
              type={"text"}
              name={"phone"}
              sms={"El telefono debe tener menos de 20 digitos"}
              errors={errors?.phone}
              errorsMessage={errors?.phone?.message}
              value={20}
              title={"Telefono"}
            /> */}
          </section>

          {inputChange.name ||
          inputChange.lastName ||
          inputChange.gender ||
          inputChange.email ||
          inputChange.phone ? (
            <button
              type="submit"
              className=" w-full max-w-[620px] sm:w-fit text-violetGrow-700 text-xl font-semibold uppercase px-[15px] py-[10px] rounded-lg border-2 border-violetGrow-700 hover:transition-all hover:duration-300 hover:bg-violetGrow-700 hover:text-white"
            >
              Guardar
            </button>
          ) : (
            <button
              type="submit"
              className=" w-full max-w-[620px] sm:w-fit text-gray-500 text-xl font-semibold uppercase px-[15px] py-[10px] rounded-lg border-2 border-gray-500 hover:transition-all hover:duration-300"
              disabled
            >
              Guardar
            </button>
          )}
          {/* <button
            type="submit"
            className=" w-full max-w-[620px] sm:w-fit text-violetGrow-700 text-xl font-semibold uppercase px-[15px] py-[10px] rounded-lg border-2 border-violetGrow-700 hover:transition-all hover:duration-300 hover:bg-violetGrow-700 hover:text-white"
          >
            Guardar
          </button> */}
        </form>
      )}
    </div>
  );
};
