"use client";
import { objectListData } from "@/interfaces";
import { Key } from "react";
type Props = {
  listData?: objectListData[];
  name: string;
  setValueOption: any;
  valueOption: objectState;
};

interface objectState {
  urlSex?: string;
  urlSpecie?: string;
  urlProvince?: string;
  urlAge?: string;
}

export default function InputFilter({
  listData,
  name,
  setValueOption,
  valueOption,
}: Props) {
  const handleChangeValueOption = (e: { target: { value: string } }) => {
    const { value, name }: any = e.target;

    let newName = " ";
    if (name === "Sexo") {
      newName = "urlSex";
    } else if (name === "Especies") {
      newName = "urlSpecie";
    } else if (name === "Provincia") {
      newName = "urlProvince";
    } else if (name === "Edad") {
      newName = "urlAge";
    }

    setValueOption({ ...valueOption, [newName]: value });
  };

  return (
    <div>
      <h5>{name}</h5>
      <select
        name={name}
        value={
          name === "Sexo"
            ? valueOption.urlSex
            : name === "Especies"
            ? valueOption.urlSpecie
            : name === "Provincia"
            ? valueOption.urlProvince
            : name === "Edad"
            ? valueOption.urlAge
            : "cualquiera"
        }
        className="rounded-xl border border-violetGrow-600 p-2 w-full md:w-fit"
        onChange={handleChangeValueOption}
      >
        {name !== "Edad"
          ? listData?.map(
              (item: objectListData, index: Key | null | undefined) => {
                return (
                  <option
                    key={index}
                    value={item.slug ? item.slug : item.name.toLowerCase()}
                    className="capitalize"
                  >
                    {item.name}
                  </option>
                );
              }
            )
          : listData?.map((item, index) => (
              <option
                key={index}
                value={item.toString()}
                className="capitalize"
              >
                {item.toString()}
              </option>
            ))}
      </select>
    </div>
  );
}
