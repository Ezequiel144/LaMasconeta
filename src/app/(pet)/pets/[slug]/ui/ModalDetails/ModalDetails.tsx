"use client";

import sendEmail from "@/utils/sendEmail";
import { Modal, ModalContent, ModalHeader, ModalBody } from "@nextui-org/react";
import { useState } from "react";

import React, { useRef } from "react";

type Props = {
  isOpen?: boolean;
  setIsOpen: /* () => void  */ any;
  idModal?: string | null;
  user?: any;
};

interface objectMotiveReport {
  name: string;
  value: string;
}

const listMotiveReport: objectMotiveReport[] = [
  {
    name: "Estafa",
    value: "scam",
  },
  {
    name: "No contesta mensajes",
    value: "notResponse",
  },
  {
    name: "Pide dinero para la adopcion",
    value: "moneyForAdoption",
  },
  {
    name: "Datos de contacto falsos",
    value: "falseData",
  },
  {
    name: "Datos del animal falsos",
    value: "falseDataAnimal",
  },
];

export default function ModalDetails({
  isOpen,
  setIsOpen,
  idModal,
  user,
}: Props) {
  const form: any = useRef<HTMLFormElement | null>();

  const [formConsulting, setFormConsulting] = useState({
    from_tel: "",
    message: "",
  });

  const [formReport, setFormReport] = useState({
    optionReport: "",
    smsReport: "",
  });

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
  };

  const handleSubmitReport = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log(formReport);
  };

  const handleChangeInputsConsulting = (e: { target: any }) => {
    const { name, value }: any = e.target;
    setFormConsulting({ ...formConsulting, [name]: value });
  };

  const handleChangeInputsReport = (e: {
    target: { name: any; value: any };
  }) => {
    /* console.log(e.target.value) */
    const { name, value } = e.target;
    setFormReport({ ...formReport, [name]: value });
  };

  return (
    <div>
      <Modal
        isOpen={isOpen}
        onOpenChange={() => setIsOpen(false)}
        classNames={{
          backdrop:
            "bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20",
        }}
      >
        <ModalContent className=" bg-white rounded-xl">
          <ModalHeader className="flex flex-col gap-1 border-b-2 border-orangeGrow-300">
            <h2 className=" text-xl font-semibold">
              {idModal === "ModalConsulting"
                ? "Formulario de consulta"
                : "Formulario de Denuncia"}
            </h2>
            <h5 className=" text-base font-medium text-violetGrow-600 uppercase">
              Mis Datos
            </h5>
            <p className=" text-sm font-normal">Nombre: {user.name}</p>
            <p className=" text-sm font-normal">Email: {user.email}</p>
          </ModalHeader>
          <ModalBody>
            {idModal === "ModalConsulting" ? (
              <form
                ref={form}
                onSubmit={handleSubmit}
                className=" flex flex-col gap-y-4"
              >
                {/* <label>
                </label> */}
                {/* <input
                  type="text"
                  className=" shadow-shadowInput p-3 rounded-lg border border-violetGrow-700"
                  name="from_name"
                  id="from_name"
                  value={user.name}
                />
                <input
                  type="text"
                  className=" shadow-shadowInput p-3 rounded-lg border border-violetGrow-700"
                  name="from_email"
                  id="from_email"
                  value={user.email}
                /> */}
                {/* <label>
                </label> */}
                <label className="flex flex-col">
                  Telefono de contacto
                  <input
                    type="tel"
                    className=" shadow-shadowInput p-3 rounded-lg border border-violetGrow-700"
                    name="from_tel"
                    id="from_tel"
                    value={formConsulting.from_tel}
                    onChange={handleChangeInputsConsulting}
                  />
                </label>
                <label className="flex flex-col">
                  Mensaje
                  <textarea
                    id="message"
                    name="message"
                    className="border shadow-shadowInput p-3 rounded-lg border-violetGrow-700"
                    value={formConsulting.message}
                    onChange={handleChangeInputsConsulting}
                  ></textarea>
                </label>
                <div className="flex gap-3 items-center justify-end sm:flex-row flex-col">
                  <div
                    className=" cursor-pointer w-full max-w-[620px] sm:w-fit text-red-600 text-center text-lg font-semibold uppercase px-[15px] py-[10px] rounded-lg border-2 border-red-600 hover:transition-all hover:duration-300 hover:bg-red-500 hover:text-white"
                    onClick={() => setIsOpen(false)}
                  >
                    Cancelar
                  </div>
                  <button
                    type="submit"
                    className=" w-full max-w-[620px] sm:w-fit text-violetGrow-700 text-lg font-semibold uppercase px-[15px] py-[10px] rounded-lg border-2 border-violetGrow-700 hover:transition-all hover:duration-300 hover:bg-violetGrow-700 hover:text-white"
                  >
                    Enviar
                  </button>
                </div>
              </form>
            ) : (
              <form
                onSubmit={handleSubmitReport}
                className=" flex flex-col gap-y-4"
              >
                {listMotiveReport.map((item, index) => (
                  <label className="flex gap-x-2" key={item.name}>
                    <input
                      type="radio"
                      value={item.value}
                      name="optionReport shadow-shadowInput"
                      id={`opcion ${index}`}
                      onChange={handleChangeInputsReport}
                    />
                    <p>{item.name}</p>
                  </label>
                ))}

                <label className="flex flex-col">
                  Por que
                  <textarea
                    name="smsReport"
                    className="border shadow-shadowInput p-3 rounded-lg border-violetGrow-700"
                    onChange={handleChangeInputsReport}
                  ></textarea>
                </label>
                <div className="flex gap-3 items-center justify-end sm:flex-row flex-col ">
                  <div
                    className=" cursor-pointer w-full max-w-[620px] sm:w-fit text-red-600 text-center text-lg font-semibold uppercase px-[15px] py-[10px] rounded-lg border-2 border-red-600 hover:transition-all hover:duration-300 hover:bg-red-500 hover:text-white"
                    onClick={() => setIsOpen(false)}
                  >
                    Cancelar
                  </div>
                  <button className=" w-full max-w-[620px] sm:w-fit text-violetGrow-700 text-lg font-semibold uppercase px-[15px] py-[10px] rounded-lg border-2 border-violetGrow-700 hover:transition-all hover:duration-300 hover:bg-violetGrow-700 hover:text-white">
                    Enviar
                  </button>
                </div>
              </form>
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
}
