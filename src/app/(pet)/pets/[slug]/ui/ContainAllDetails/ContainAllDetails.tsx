"use client";
import ButtonGeneral from "@/components/ui/ButtonGeneral/ButtonGeneral";
import BehaviorPet from "../BehaviorPet/BehaviorPet";
import ButtonEmergency from "../ButtonEmergency/ButtonEmergency";
import CardUser from "../CardUser/CardUser";
import ConditionPet from "../ConditionPet/ConditionPet";
import DataPets from "../DataPets/DataPets";
import DiseasesPet from "../DiseasesPet/DiseasesPet";
import HistoryPet from "../HistoryPet/HistoryPet";
import MainImageWithCarousel from "../MainImageWithCarousel/MainImageWithCarousel";
import MainTitleCartAndButton from "../MainTitleCartAndButton/MainTitleCartAndButton";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import { useState } from "react";

type Props = {
  namePetResponse: any;
};

export default function ContainAllDetails({ namePetResponse }: Props) {
  /* console.log(namePetResponse); */
  const [isOpen, setIsOpen] = useState<boolean>();
  const { name, slug, gender, age, province, photos } = namePetResponse;
  return (
    <div className="flex flex-col md:flex-row gap-x-8">
      <div className=" flex flex-col lg:w-[35%]">
        <MainImageWithCarousel photos={photos} />
        <div className=" flex flex-col items-start w-full xl:w-[500px] mx-auto">
          <CardUser />
          <ButtonEmergency>Denunciar caso</ButtonEmergency>
        </div>
      </div>
      <div className=" flex flex-col lg:w-[75%]">
        <MainTitleCartAndButton
          name={name}
          province={province.name}
          location={"Argentina"}
        />
        <DataPets />
        <BehaviorPet />
        <DiseasesPet />
        <ConditionPet />
        <HistoryPet />
        <section className=" pt-5 w-fit mx-auto ">
          {/* <ButtonGeneral >Consultar adopcion</ButtonGeneral> */}
          <button
            className=" w-full max-w-[620px] sm:w-fit text-violetGrow-700 text-xl font-semibold uppercase px-[15px] py-[10px] rounded-lg border-2 border-violetGrow-700 hover:transition-all hover:duration-300 hover:bg-violetGrow-700 hover:text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            Consultar adopcion
          </button>
        </section>
      </div>
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
            <ModalHeader className="flex flex-col gap-1">
              Modal Title
            </ModalHeader>
            <ModalBody>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                pulvinar risus non risus hendrerit venenatis. Pellentesque sit
                amet hendrerit risus, sed porttitor quam.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                pulvinar risus non risus hendrerit venenatis. Pellentesque sit
                amet hendrerit risus, sed porttitor quam.
              </p>
              <p>
                Magna exercitation reprehenderit magna aute tempor cupidatat
                consequat elit dolor adipisicing. Mollit dolor eiusmod sunt ex
                incididunt cillum quis. Velit duis sit officia eiusmod Lorem
                aliqua enim laboris do dolor eiusmod. Et mollit incididunt nisi
                consectetur esse laborum eiusmod pariatur proident Lorem eiusmod
                et. Culpa deserunt nostrud ad veniam.
              </p>
            </ModalBody>
          </ModalContent>
        </Modal>
      </div>
    </div>
  );
}
