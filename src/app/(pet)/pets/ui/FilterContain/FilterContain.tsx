"use client";
import { objectListData } from "@/interfaces";
import InputFilter from "../InputFilter/InputFilter";
import Link from "next/link";
import { useState } from "react";
import ButtonFilter from "../ButtonFilter/ButtonFilter";

/* cambiar por data por name y value por slug */
const listOptionsFilterSex: objectListData[] = [
  /* {
    slug: " ",
    name: "Cualquiera",
  }, */
  {
    slug: "male",
    name: "Macho",
  },
  {
    slug: "female",
    name: "Hembra",
  },
  {
    slug: "other",
    name: "Otro",
  },
];

const listOptionsFilterSpecie: objectListData[] = [
  {
    slug: " ",
    name: "Cualquiera",
  },
  {
    slug: "horse",
    name: "Caballo",
  },
  {
    slug: "horse",
    name: "Cabra",
  },
  {
    slug: "pig",
    name: "Cerdo",
  },
  {
    slug: "guineaPig",
    name: "Cobayo",
  },
  {
    slug: "rabbit",
    name: "Conejo",
  },
  {
    slug: "hedgehog",
    name: "Erizo",
  },
  {
    slug: "cat",
    name: "Gato",
  },
  {
    slug: "hamster",
    name: "Hamster",
  },
  {
    slug: "ferret",
    name: "Hurón",
  },
  {
    slug: "bird",
    name: "Pajaro",
  },
  {
    slug: "dog",
    name: "Perro",
  },
  {
    slug: "fish",
    name: "Pez",
  },
  {
    slug: "reptile",
    name: "Reptil",
  },
  {
    slug: "tortoise",
    name: "Tortuga",
  },
];

const listOptionFilterProvince: objectListData[] = [
  { slug: " ", name: "Cualquiera" },
  { slug: "buenosaires", name: "Buenos Aires" },
  { slug: "catamarca", name: "Catamarca" },
  { slug: "chaco", name: "Chaco" },
  { slug: "chubut", name: "Chubut" },
  { slug: "córdoba", name: "Córdoba" },
  { slug: "corrientes", name: "Corrientes" },
  { slug: "entrerios", name: "Entre Ríos" },
  { slug: "formosa", name: "Formosa" },
  { slug: "jujuy", name: "Jujuy" },
  { slug: "lapampa", name: "La Pampa" },
  { slug: "larioja", name: "La Rioja" },
  { slug: "mendoza", name: "Mendoza" },
  { slug: "misiones", name: "Misiones" },
  { slug: "neuquén", name: "Neuquén" },
  { slug: "rionegro", name: "Río Negro" },
  { slug: "salta", name: "Salta" },
  { slug: "sanjuan", name: "San Juan" },
  { slug: "sanluis", name: "San Luis" },
  { slug: "santacruz", name: "Santa Cruz" },
  { slug: "santafe", name: "Santa Fe" },
  { slug: "santiagodelestero", name: "Santiago del Estero" },
  { slug: "tierradelfuego", name: "Tierra del Fuego" },
  { slug: "tucumán", name: "Tucumán" },
];

const listOptionFilterAge: objectListData[] = [
  {
    slug: " ",
    name: "Cualquiera",
  },
  {
    slug: "0a1",
    name: "0-1 años",
  },
  {
    slug: "1a3",
    name: "1-3 años",
  },
  {
    slug: "3a6",
    name: "3-6 años",
  },
  {
    slug: "6a10",
    name: "6-10 años",
  },
  {
    slug: "10a15",
    name: "10-15 años",
  },
  {
    slug: "15mas",
    name: "15+ años",
  },
];

export default function FilterContain({
  petsSpecies,
  petsProvinces,
  petsAges,
}: any) {
  const [valueOption, setValueOption] = useState({
    urlSex: "",
    urlSpecie: "",
    urlProvince: "",
    urlAge: "",
  });

  const queryFilter = (): any => {
    if (
      valueOption.urlSex ||
      valueOption.urlSpecie ||
      valueOption.urlProvince ||
      valueOption.urlAge
    ) {
      return `/pets?gender=${valueOption.urlSex}&species=${valueOption.urlSpecie}&province=${valueOption.urlProvince}&age=${valueOption.urlAge}`;
    } else {
      return " ";
    }
  };

  return (
    <form className="w-full flex flex-col items-center gap-y-8">
      <section className="flex gap-5 bg-orangeGrow-300 rounded-lg w-fit mx-auto px-8 py-5 shadow-shadowCardPets flex-col md:flex-row">
        <InputFilter
          listData={listOptionsFilterSex}
          name={"Sexo"}
          setValueOption={setValueOption}
          valueOption={valueOption}
        />
        <InputFilter
          listData={petsSpecies}
          name={"Especies"}
          setValueOption={setValueOption}
          valueOption={valueOption}
        />
        <InputFilter
          listData={petsProvinces}
          name={"Provincia"}
          setValueOption={setValueOption}
          valueOption={valueOption}
        />
        <InputFilter
          listData={petsAges}
          name={"Edad"}
          setValueOption={setValueOption}
          valueOption={valueOption}
        />
      </section>
      <section className=" flex flex-col md:flex-row gap-5 items-center justify-center w-full px-3 md:px-0">
        <ButtonFilter functionQuery={queryFilter()}>Buscar</ButtonFilter>
        <ButtonFilter href="/pets">Limpiar</ButtonFilter>
      </section>
    </form>
  );
}
