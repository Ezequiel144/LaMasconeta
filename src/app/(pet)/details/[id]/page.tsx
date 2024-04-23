import ButtonGeneral from "@/components/ui/ButtonGeneral/ButtonGeneral";
import MainImageWithCarousel from "./ui/MainImageWithCarousel/MainImageWithCarousel";
import CardUser from "./ui/CardUser/CardUser";
import ButtonEmergency from "./ui/ButtonEmergency/ButtonEmergency";
import MainTitleCartAndButton from "./ui/MainTitleCartAndButton/MainTitleCartAndButton";
import DataPets from "./ui/DataPets/DataPets";
import BehaviorPet from "./ui/BehaviorPet/BehaviorPet";
import DiseasesPet from "./ui/DiseasesPet/DiseasesPet";
import ConditionPet from "./ui/ConditionPet/ConditionPet";
import HistoryPet from "./ui/HistoryPet/HistoryPet";
import RelatedCarousel from "./ui/RelatedCarousel/RelatedCarousel";

export default function DetailsIdPage() {
  return (
    <main className=" w-full min-h-screen px-3 ">
      <div className="flex flex-col md:flex-row gap-x-8">
        <div className=" flex flex-col lg:w-[35%]">
          <MainImageWithCarousel />
          <div className=" flex flex-col items-start w-full xl:w-[500px] mx-auto border">
            <CardUser />
            <ButtonEmergency>Caso extraño</ButtonEmergency>
          </div>
        </div>
        <div className=" flex flex-col lg:w-[75%]">
          <MainTitleCartAndButton />
          <DataPets />
          <BehaviorPet />
          <DiseasesPet />
          <ConditionPet />
          <HistoryPet />
          <section className=" pt-5 w-fit mx-auto ">
            <ButtonGeneral>Consultar adopcion</ButtonGeneral>
          </section>
        </div>
      </div>

      <RelatedCarousel />
    </main>
  );
}
