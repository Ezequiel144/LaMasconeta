"use client";
import { objectListData } from "@/interfaces";
import InputFilter from "../InputFilter/InputFilter";
import Link from "next/link";
import { useState } from "react";
import { getSpecies } from "@/actions";

const listOptionsFilterSex: objectListData[] = [
  {
    value: " ",
    data: "Cualquiera",
  },
  {
    value: "male",
    data: "Macho",
  },
  {
    value: "female",
    data: "Hembra",
  },
  {
    value: "other",
    data: "Otro",
  },
];

const listOptionsFilterSpecie: objectListData[] = [
  {
    value: " ",
    data: "Cualquiera",
  },
  {
    value: "horse",
    data: "Caballo",
  },
  {
    value: "horse",
    data: "Cabra",
  },
  {
    value: "pig",
    data: "Cerdo",
  },
  {
    value: "guineaPig",
    data: "Cobayo",
  },
  {
    value: "rabbit",
    data: "Conejo",
  },
  {
    value: "hedgehog",
    data: "Erizo",
  },
  {
    value: "cat",
    data: "Gato",
  },
  {
    value: "hamster",
    data: "Hamster",
  },
  {
    value: "ferret",
    data: "Hurón",
  },
  {
    value: "bird",
    data: "Pajaro",
  },
  {
    value: "dog",
    data: "Perro",
  },
  {
    value: "fish",
    data: "Pez",
  },
  {
    value: "reptile",
    data: "Reptil",
  },
  {
    value: "tortoise",
    data: "Tortuga",
  },
];

const listOptionFilterProvince: objectListData[] = [
  { value: " ", data: "Cualquiera" },
  { value: "buenosaires", data: "Buenos Aires" },
  { value: "catamarca", data: "Catamarca" },
  { value: "chaco", data: "Chaco" },
  { value: "chubut", data: "Chubut" },
  { value: "córdoba", data: "Córdoba" },
  { value: "corrientes", data: "Corrientes" },
  { value: "entrerios", data: "Entre Ríos" },
  { value: "formosa", data: "Formosa" },
  { value: "jujuy", data: "Jujuy" },
  { value: "lapampa", data: "La Pampa" },
  { value: "larioja", data: "La Rioja" },
  { value: "mendoza", data: "Mendoza" },
  { value: "misiones", data: "Misiones" },
  { value: "neuquén", data: "Neuquén" },
  { value: "rionegro", data: "Río Negro" },
  { value: "salta", data: "Salta" },
  { value: "sanjuan", data: "San Juan" },
  { value: "sanluis", data: "San Luis" },
  { value: "santacruz", data: "Santa Cruz" },
  { value: "santafe", data: "Santa Fe" },
  { value: "santiagodelestero", data: "Santiago del Estero" },
  { value: "tierradelfuego", data: "Tierra del Fuego" },
  { value: "tucumán", data: "Tucumán" },
];

const listOptionFilterAge: objectListData[] = [
  {
    value: " ",
    data: "Cualquiera",
  },
  {
    value: "0a1",
    data: "0-1 años",
  },
  {
    value: "1a3",
    data: "1-3 años",
  },
  {
    value: "3a6",
    data: "3-6 años",
  },
  {
    value: "6a10",
    data: "6-10 años",
  },
  {
    value: "10a15",
    data: "10-15 años",
  },
  {
    value: "15mas",
    data: "15+ años",
  },
];


export default function FilterContain({ petsSpecies, petsProvinces }: any) {
  const [valueOption, setValueOption] = useState({
    urlSex: "",
    urlSpecie: "",
    urlProvince: "",
    urlAge: "",
  });

  console.log(petsProvinces?.name)

  return (
    <form action="">
      <section className="flex gap-x-5">
        <InputFilter
          listData={listOptionsFilterSex}
          name={"Sexo"}
          setValueOption={setValueOption}
          valueOption={valueOption}
        />
        <InputFilter
          listData={listOptionsFilterSpecie}
          name={"Especies"}
          setValueOption={setValueOption}
          valueOption={valueOption}
        />
        <InputFilter
          listData={listOptionFilterProvince}
          name={"Provincia"}
          setValueOption={setValueOption}
          valueOption={valueOption}
        />
        <InputFilter
          listData={listOptionFilterAge}
          name={"Edad"}
          setValueOption={setValueOption}
          valueOption={valueOption}
        />
      </section>
      {/* <Link
        href={
          valueOption.urlSex
            ? `/pets?gender=${valueOption.urlSex}`
            : valueOption.urlSpecie
            ? `pets?gender=${valueOption.urlSpecie}`
            : ""
        }
      >
        Buscar
      </Link> */}
      <Link href={valueOption.urlSex && `/pets?gender=${valueOption.urlSex}` || valueOption.urlSpecie && `/pets?species=${valueOption.urlSpecie}` || valueOption.urlProvince && `/pets?province=${valueOption.urlProvince}` || valueOption.urlAge && `/pets?age=${valueOption.urlAge}`}>Buscar</Link>
    </form>
  );
}
