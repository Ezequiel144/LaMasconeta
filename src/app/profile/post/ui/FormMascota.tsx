"use client";
import { createPost } from "@/actions";
import { Province } from "@prisma/client";
import { useForm } from "react-hook-form";

interface Props {
  provinces: Province[];
}

interface FormInputs {
  name: string;
  description: string;
  gender: "male" | "female" | "other";
  age: string;
  phone: string;
  history: string;
  weight: string;
  height: string;
  provinceId: string;
}

export const MascotaForm = ({ provinces }: Props) => {
  const {
    handleSubmit,
    register,
    formState: { isValid },
    getValues,
    setValue,
    watch,
  } = useForm<FormInputs>();
  const onSubmit = async (data: FormInputs) => {
    const formData = new FormData();

    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("gender", data.gender);
    formData.append("age", data.age);
    formData.append("phone", data.phone);
    formData.append("history", data.history);
    formData.append("weight", data.weight.toString());
    formData.append("height", data.height.toString());
    formData.append("provinceId", data.provinceId);
    
    const { ok } = await createPost(formData);

    if (!ok) {
      alert("Producto no se pudo crear");
      return;
    }
  };

  return (
    <div>
      <h1>Crear nueva mascota</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>
            Nombre:
            <input type="text" {...register("name", { required: true })} />
          </label>
        </div>
        <div>
          <label>
            Descripción:
            <textarea {...register("description", { required: true })} />
          </label>
        </div>
        <div>
          <label>
            Género:
            <select {...register("gender", { required: true })}>
              <option value="male">Masculino</option>
              <option value="female">Femenino</option>
              <option value="other">Otro</option>
            </select>
          </label>
        </div>
        <div>
          <label>
            Edad:
            <input type="text" {...register("age", { required: true })} />
          </label>
        </div>
        <div>
          <label>
            Teléfono:
            <input type="text" {...register("phone", { required: true })} />
          </label>
        </div>
        <div>
          <label>
            Historia:
            <textarea {...register("history", { required: true })} />
          </label>
        </div>
        <div>
          <label>
            Peso:
            <input type="text" {...register("weight", { required: true })} />
          </label>
        </div>
        <div>
          <label>
            Altura:
            <input type="text" {...register("height", { required: true })} />
          </label>
        </div>

        <div className="mb-2 flex flex-col">
          <span>[Provincias]</span>
          <select
            className="rounded-md border bg-gray-200 p-2"
            {...register("provinceId", { required: true })}
          >
            <option value="">[Seleccione]</option>
            {provinces.map((province) => (
              <option key={province.id} value={province.id}>
                {province.name}
              </option>
            ))}
          </select>
        </div>
        <button>Crear Mascota</button>
      </form>
    </div>
  );
};
