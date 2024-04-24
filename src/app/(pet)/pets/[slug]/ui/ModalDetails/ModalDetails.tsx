"use client";

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  RadioGroup,
  Radio,
} from "@nextui-org/react";
import { useState } from "react";

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
  const [formConsulting, setFormConsulting] = useState({
    tel: "",
    sms: "",
  });

  const [formReport,setFormReport] = useState ({
    optionReport: "",
    smsReport: ""
  })

  const [] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleSubmitReport = (e) => {
    e.preventDefault();
    
  };

  const handleChangeInputsConsulting = (e) => {
    const { name, value }: any = e.target;
    setFormConsulting({ ...formConsulting, [name]: value });
  };

  const handleChangeInputsReport = (e) => {
    /* console.log(e.target.value) */
    const { name, value } = e.target
    setFormReport({...formReport, [name]: value})
  }

  console.log(formReport)
  /* console.log(formConsulting); */
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
              <form onSubmit={handleChangeInputsConsulting}>
                <label className="flex flex-col">
                  Telefono de contacto
                  <input
                    type="tel"
                    className="border"
                    id="phone"
                    name="tel"
                    value={formConsulting.tel}
                    onChange={handleChangeInputs}
                  />
                </label>
                <label className="flex flex-col">
                  Mensaje
                  <textarea
                    name="sms"
                    className="border"
                    value={formConsulting.sms}
                    onChange={handleChangeInputs}
                  ></textarea>
                </label>
                <div className="flex gap-x-3">
                  <button className=" bg-gray-300 p-3">Enviar</button>
                  <button className=" bg-gray-300 p-3">Cancelar</button>
                </div>
              </form>
            ) : (
              <form action="">
                {listMotiveReport.map((item, index) => (
                  <label className="flex" key={item.name}>
                    <input
                      type="radio"
                      value={item.value}
                      name="optionReport"
                      id={`opcion ${index}`}
                      onChange={handleChangeInputsReport}
                    />
                    <p>{item.name}</p>
                  </label>
                ))}

                <label className="flex flex-col">
                  Por que
                  <textarea name="smsReport" className="border" onChange={handleChangeInputsReport}></textarea>
                </label>
                <div className="flex gap-x-3">
                  <button className=" bg-gray-300 p-3">Enviar</button>
                  <button className=" bg-gray-300 p-3">Cancelar</button>
                </div>
              </form>
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
}
