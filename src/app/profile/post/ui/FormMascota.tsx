"use client";
import { createPost } from "@/actions";
import { Behavior, Province, Species } from "@prisma/client";
import { useForm } from "react-hook-form";

interface Props {
  provinces: Province[];
  behaviors: Behavior[];
  species: Species[];
}

interface FormInputs {
  name: string;
  description: string;
  gender: "male" | "female" | "other";
  age: string;
  phone: string;
  history: string;
  weight: number;
  height: number;
  behaviors: string[];
  provinceId: string;
  speciesId: string;
}

export const MascotaForm = ({ provinces, behaviors, species }: Props) => {
  const {
    handleSubmit,
    register,
    formState: { isValid },
    getValues,
    setValue,
    watch,
  } = useForm<FormInputs>({
    defaultValues: {
      behaviors: [],
    },
  });

  watch("behaviors");

  const onBehaviorChanged = (behaviorId: string) => {
    const selectedBehaviors = new Set(getValues("behaviors"));
    if (selectedBehaviors.has(behaviorId)) {
      selectedBehaviors.delete(behaviorId);
    } else {
      selectedBehaviors.add(behaviorId);
    }
    setValue("behaviors", Array.from(selectedBehaviors));
  };

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
    formData.append("speciesId", data.speciesId);

    // Verificar que selectedBehaviors no sea undefined
    if (data.behaviors) {
      data.behaviors.forEach((behavior) => {
        formData.append("behaviors", behavior);
      });
    }

    const { ok } = await createPost(formData, data.behaviors);

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
            <input type="number" {...register("weight", { required: true })} />
          </label>
        </div>
        <div>
          <label>
            Altura:
            <input type="number" {...register("height", { required: true })} />
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
        <div className="mb-2 flex flex-col">
          <span>Comportamientos</span>
          <div className="flex flex-wrap">
            {behaviors.map((behavior) => (
              <div
                key={behavior.id}
                onClick={() => onBehaviorChanged(behavior.id)}
                className={`mb-2 mr-2 w-40 cursor-pointer rounded-md border p-2 text-center transition-all capitalize ${
                  getValues("behaviors").includes(behavior.id)
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200"
                }`}
              >
                <span>{behavior.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-2 flex flex-col">
          <span>Especie:</span>
          <select
            className="rounded-md border bg-gray-200 p-2 capitalize"
            {...register("speciesId", { required: true })}
          >
            <option value="">Seleccione</option>
            {species.map((specie) => (
              <option key={specie.id} value={specie.id}>
                {specie.name}
              </option>
            ))}
          </select>
        </div>

        <button>Crear Mascota</button>
      </form>
    </div>
  );
};
