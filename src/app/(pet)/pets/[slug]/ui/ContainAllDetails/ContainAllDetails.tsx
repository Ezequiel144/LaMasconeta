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

import { useState } from "react";
import ModalDetails from "../ModalDetails/ModalDetails";

type Props = {
  namePetResponse: any;
};

export default function ContainAllDetails({ namePetResponse }: Props) {
  /* console.log(namePetResponse); */
  const [isOpen, setIsOpen] = useState<boolean>();
  const [idModal,setIdModal] = useState<string|null>(null);
  const { name, slug, gender, age, province, photos, user } = namePetResponse;
  return (
    <div className="flex flex-col md:flex-row gap-x-8">
      <div className=" flex flex-col lg:w-[35%]">
        <MainImageWithCarousel photos={photos} />
        <div className=" flex flex-col items-start w-full xl:w-[500px] mx-auto">
          <CardUser />
          <ButtonEmergency onClickModal={setIsOpen} setIdModal={setIdModal}>Denunciar caso</ButtonEmergency>
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
            onClick={() => {setIsOpen(!isOpen),setIdModal("ModalConsulting")}}
          >
            Consultar adopcion
          </button>
        </section>
      </div>
      <ModalDetails isOpen={isOpen} setIsOpen={setIsOpen} idModal={idModal} user={user}/>
    </div>
  );
}
