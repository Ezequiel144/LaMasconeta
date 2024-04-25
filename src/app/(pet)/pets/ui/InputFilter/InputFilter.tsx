"use client";
import { objectListData } from "@/interfaces";
/* import { Select, SelectItem, Selection } from "@nextui-org/react"; */
import { Key, useState } from "react";
type Props = {
  listData: objectListData[];
  name: string;
  setValueOption: /* () => void */ any;
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
  /* const [valueOption, setValueOption] = useState<string>("Cualquiera"); */
  /*  const handleSelectionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setValue(e.target.value);
  }; */
  /* console.log(valueOption); */

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
            : ""
        }
        className="rounded-xl border border-violetGrow-600 p-2"
        onChange={handleChangeValueOption}
      >
        {listData.map((item: any, index: Key | null | undefined) => {
          return (
            <option key={index} value={item.value}>
              {item.data}
            </option>
          );
        })}
      </select>
      {/* <Select
        label="sexo"
        placeholder="Cualquiera"
        className="rounded-xl border border-violetGrow-600"
        items={listOptionsFilter}
        selectedKeys={[value]}
        onChange={handleSelectionChange}
        disableSelectorIconRotation
      >
        {(item) => (
          <SelectItem key={item.value} value={item.value}>
            {item.data}
          </SelectItem>
        )}
      </Select> */}
    </div>
  );
}
