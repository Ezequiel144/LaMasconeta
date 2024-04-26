"use client";
import { createPost } from "@/actions";
import { FormInputs } from "@/interfaces";
import app from "@/utils/firebase";
import {
  Behavior,
  Diseases,
  HowDelivered,
  Province,
  Species,
} from "@prisma/client";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";
const storage = getStorage(app);

export interface Props {
  pet: any;
  userIdAuth: string;
  provinces: Province[];
  behaviors: Behavior[];
  species: Species[];
  howDelivered: HowDelivered[];
  diseases: Diseases[];
}

export const PetForm = ({
  pet,
  userIdAuth,
  provinces,
  behaviors,
  species,
  howDelivered,
  diseases,
}: Props) => {
  const router = useRouter();

  const {
    handleSubmit,
    register,
    formState: { isValid },
    getValues,
    setValue,
    watch,
  } = useForm<FormInputs>({
    defaultValues: {
      ...pet,
      behaviors:
        pet.postToEnumBehavior?.map((item: any) => item.enumBehavior.id) ?? [],
      howDelivered:
        pet.postToHowDelivered?.map((item: any) => item.howDelivered.id) ?? [],
      diseases:
        pet.postToDiseases?.map((item: any) => item.enumDiseases.id) ?? [],
      images: pet.photos ?? [],
    },
  });
  const [loading, setLoading] = useState(false);
  const [imageUrls, setImageUrls] = useState<string[]>(pet.photos);
  const fileHandler = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileList = Array.from(e.target.files || []);
    setLoading(true);

    const uploadTasks = fileList.map(async (file) => {
      const uniqueFileName = `${uuidv4()}_${file.name}`;
      const storageRef = ref(storage, `${uniqueFileName}`);
      await uploadBytes(storageRef, file);
      return getDownloadURL(storageRef);
    });

    // Esperar a que todas las tareas de carga de archivos se completen y obtener las URL
    Promise.all(uploadTasks)
      .then((urls) => {
        setImageUrls(urls);
        setLoading(false);
        console.log("URLs de las imágenes subidas:", urls);
        setValue("photos", urls);
      })
      .catch((error) => {
        console.error("Error al subir las imágenes:", error);
        setLoading(false);
      });
  };

  watch(["behaviors", "howDelivered", "diseases", "images"]);

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

  // console.log(userIdAuth);

  const onSubmit = async (data: FormInputs) => {
    const formData = new FormData();
    const slug = data.name.toLowerCase().replace(/ /g, "-").trim();

    if (pet?.id) {
      formData.append("id", pet.id ?? "");
    }
    if (pet?.user?.id) {
      formData.append("userId", pet.user.id);
    } else {
      formData.append("userId", userIdAuth);
    }

    formData.append("name", data.name);
    formData.append("slug", slug);
    formData.append("gender", data.gender);
    formData.append("statusAdoption", data.statusAdoption);
    formData.append("activity", data.activity);
    formData.append("age", data.age.toString());
    formData.append("birthdate", data.birthdate.toString());
    formData.append("phone", data.phone.toString());
    formData.append("history", data.history);
    formData.append("weight", data.weight.toString());
    formData.append("size", data.size.toString());
    formData.append("provinceId", data.provinceId);
    formData.append("speciesId", data.speciesId);

    if (data.images) {
      for (let i = 0; i < data.images.length; i++) {
        formData.append("images", data.images[i]);
      }
    }

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

    const { ok, postPet } = await createPost(
      formData,
      data.behaviors,
      data.howDelivered,
      data.diseases,
      data.photos
    );

    if (!ok) {
      alert("Producto no se pudo crear");
      return;
    }

    router.replace(`/profile/pet/${postPet?.slug}`);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Nombre:</label>
          <input type="text" {...register("name", { required: true })} />
        </div>
        {/* <div className="mb-2 flex flex-col">
          <span>Slug</span>
          <input
            type="text"
            className="rounded-md border bg-gray-200 p-2"
            {...register("slug", { required: true })}
          />
        </div> */}
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
          <label>Estado:</label>
          <select {...register("statusAdoption", { required: true })}>
            <option value="adoption">En adopción</option>
            <option value="adopted">Adoptado</option>
          </select>
        </div>
        <div>
          <label>Actividad:</label>
          <select {...register("activity", { required: true })}>
            <option value="low">Baja</option>
            <option value="mid">Media</option>
            <option value="high">Alta</option>
          </select>
        </div>
        <div>
          <label>Edad:</label>
          <input type="number" {...register("age", { required: true })} />
        </div>
        <div>
          <label>Fecha de nacimiento:</label>
          <input type="date" {...register("birthdate", { required: true })} />
        </div>

        <div>
          <label>Teléfono:</label>
          <input type="number" {...register("phone", { required: true })} />
        </div>
        <div>
          <label>Historia:</label>
          <textarea {...register("history", { required: true })} />
        </div>
        <div>
          <label>Peso:</label>
          <input type="number" {...register("weight", { required: true })} />
        </div>
        <div>
          <label>Tamaño:</label>
          <select {...register("size", { required: true })}>
            <option value="little">Pequeño</option>
            <option value="medium">Mediano</option>
            <option value="big">Grande</option>
          </select>
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
            {behaviors.map((behavior: Behavior) => (
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
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200"
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

        <div>
          <div>
            Fotos:
            <input
              type="file"
              onChange={fileHandler}
              multiple
              accept="image/*"
            />
            {loading && (
              <div className="w-full flex justify-center">
                <p className="py-2 border-b-2">Subiendo...</p>
              </div>
            )}
          </div>
          {imageUrls?.length > 0 && (
            <div>
              <p className="text-sm">Imágenes subidas:</p>
              <ul className="grid grid-cols-6">
                {imageUrls.map((url, index) => (
                  <li key={index}>
                    <Image
                      src={url}
                      width={150}
                      height={150}
                      alt={`Imagen ${index}`}
                      className="w-[200px] h-[200px] rounded"
                    />
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <button>Guardar</button>
      </form>
    </div>
  );
};
