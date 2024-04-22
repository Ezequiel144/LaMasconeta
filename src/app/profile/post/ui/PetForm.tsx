"use client";
import { createPost } from "@/actions";
import {
  Behavior,
  Diseases,
  HowDelivered,
  Province,
  Species,
} from "@prisma/client";
import { useForm } from "react-hook-form";

interface Props {
  provinces: Province[];
  behaviors: Behavior[];
  species: Species[];
  howDelivered: HowDelivered[];
  diseases: Diseases[];
}

interface FormInputs {
  name: string;
  gender: "male" | "female" | "other";
  age: number;
  phone: number;
  history: string;
  weight: number;
  size: "little" | "medium" | "big";
  provinceId: string;
  speciesId: string;
  behaviors: string[];
  howDelivered: string[];
  diseases: string[];
}

export const PetForm = ({
  provinces,
  behaviors,
  species,
  howDelivered,
  diseases,
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
      diseases: [],
    },
  });

  watch(["behaviors", "howDelivered", "diseases"]);

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

  const onDiseasesChanged = (diseasesId: string) => {
    const selectedDiseases = new Set(getValues("diseases"));
    if (selectedDiseases.has(diseasesId)) {
      selectedDiseases.delete(diseasesId);
    } else {
      selectedDiseases.add(diseasesId);
    }
    setValue("diseases", Array.from(selectedDiseases));
  };

  const onSubmit = async (data: FormInputs) => {
    const formData = new FormData();

    formData.append("name", data.name);
    formData.append("gender", data.gender);
    formData.append("age", data.age.toString());
    formData.append("phone", data.phone.toString());
    formData.append("history", data.history);
    formData.append("weight", data.weight.toString());
    formData.append("size", data.size.toString());
    formData.append("provinceId", data.provinceId);
    formData.append("speciesId", data.speciesId);

    // Verificar que behaviors no sea undefined
    if (data.behaviors) {
      data.behaviors.forEach((behavior) => {
        formData.append("behaviors", behavior);
      });
    }

    // Verificar que howDelivered no sea undefined
    if (data.howDelivered) {
      data.howDelivered.forEach((delivered) => {
        formData.append("howDelivered", delivered);
      });
    }

    // Verificar que onHowDeliveredChanged no sea undefined
    if (data.diseases) {
      data.diseases.forEach((disease) => {
        formData.append("diseases", disease);
      });
    }

    const { ok } = await createPost(
      formData,
      data.behaviors,
      data.howDelivered,
      data.diseases
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
            Tamaño:
            <select {...register("size", { required: true })}>
              <option value="little">Pequeño</option>
              <option value="medium">Mediano</option>
              <option value="big">Grande</option>
            </select>
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
          <span>Alguna enfermedad?</span>
          <div className="flex flex-wrap">
            {diseases.map((disease) => (
              <div
                key={disease.id}
                onClick={() => onDiseasesChanged(disease.id)}
                className={`mb-2 mr-2 w-40 cursor-pointer rounded-md border p-2 text-center transition-all capitalize ${
                  getValues("diseases").includes(disease.id)
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200"
                }`}
              >
                <span>{disease.name}</span>
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
