"use client";
import { createPost } from "@/actions";
import { Behavior, HowDelivered, Province, Species } from "@prisma/client";
import { useForm } from "react-hook-form";

interface Props {
  provinces: Province[];
  behaviors: Behavior[];
  species: Species[];
  howDelivered: HowDelivered[];
}

interface FormInputs {
  name: string;
  description: string;
  gender: "male" | "female" | "other";
  age: number;
  phone: number;
  history: string;
  weight: number;
  height: number;
  behaviors: string[];
  provinceId: string;
  speciesId: string;
  howDelivered: string[];
}

export const MascotaForm = ({
  provinces,
  behaviors,
  species,
  howDelivered,
}: Props) => {
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
      howDelivered: [],
    },
  });

  watch(["behaviors", "howDelivered"]);

  const onBehaviorChanged = (behaviorId: string) => {
    const selectedBehaviors = new Set(getValues("behaviors"));
    if (selectedBehaviors.has(behaviorId)) {
      selectedBehaviors.delete(behaviorId);
    } else {
      selectedBehaviors.add(behaviorId);
    }
    setValue("behaviors", Array.from(selectedBehaviors));
  };

  const onHowDeliveredChanged = (howDeliveredId: string) => {
    const selectedHowDelivered = new Set(getValues("howDelivered"));
    if (selectedHowDelivered.has(howDeliveredId)) {
      selectedHowDelivered.delete(howDeliveredId);
    } else {
      selectedHowDelivered.add(howDeliveredId);
    }
    setValue("howDelivered", Array.from(selectedHowDelivered));
  };

  const onSubmit = async (data: FormInputs) => {
    const formData = new FormData();

    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("gender", data.gender);
    formData.append("age", data.age.toString());
    formData.append("phone", data.phone.toString());
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
    // Verificar que onHowDeliveredChanged no sea undefined
    if (data.howDelivered) {
      data.howDelivered.forEach((delivered) => {
        formData.append("howDelivered", delivered);
      });
    }

    const { ok } = await createPost(
      formData,
      data.behaviors,
      data.howDelivered
    );

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
            <input type="number" {...register("age", { required: true })} />
          </label>
        </div>
        <div>
          <label>
            Teléfono:
            <input type="number" {...register("phone", { required: true })} />
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
          <span>Forma de entrega</span>
          <div className="flex flex-wrap">
            {howDelivered.map((delivered) => (
              <div
                key={delivered.id}
                onClick={() => onHowDeliveredChanged(delivered.id)}
                className={`mb-2 mr-2 w-40 cursor-pointer rounded-md border p-2 text-center transition-all capitalize ${
                  getValues("howDelivered").includes(delivered.id)
                    ? "bg-blue-500 text-white" // Aquí asignamos la clase CSS si el valor está seleccionado
                    : "bg-gray-200" // Aquí asignamos la clase CSS si el valor no está seleccionado
                }`}
              >
                <span>{delivered.name}</span>
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
