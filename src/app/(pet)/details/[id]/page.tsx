import ButtonGeneral from "@/components/ui/ButtonGeneral/ButtonGeneral";
import Image from "next/image";
import MainImageWithCarousel from "./ui/MainImageWithCarousel/MainImageWithCarousel";
import CardUser from "./ui/CardUser/CardUser";
import ButtonEmergency from "./ui/ButtonEmergency/ButtonEmergency";
import ButtonInterested from "./ui/ButtonInterested/ButtonInterested";
import MainTitleCartAndButton from "./ui/MainTitleCartAndButton/MainTitleCartAndButton";
import DataPets from "./ui/DataPets/Datapets";

const listDataBehaviorPet = [
  "Bueno con los gatos",
  "Protector",
  "Le gusta la compañia",
  "Revelde",
  "Mal temperamento",
];

const listConditionPet = [
  {
    name: "Vacunado",
    condition: true,
  },
  {
    name: "Cartilla sanitaria",
    condition: true,
  },
  {
    name: "Desparacitacion",
    condition: true,
  },
  {
    name: "Esterelizado",
    condition: false,
  },
];

export default function DetailsIdPage() {
  return (
    <main className=" w-full min-h-screen px-3">
      <MainImageWithCarousel />
      <CardUser />
      <ButtonEmergency>Caso extraño</ButtonEmergency>
      <MainTitleCartAndButton />
      <DataPets />
      <section className=" flex flex-col gap-y-3">
        <h2 className=" text-xl font-semibold text-violetGrow-500">
          Comportamiento
        </h2>
        <article className=" grid grid-cols-gridResponsiveBehavior gap-3">
          {listDataBehaviorPet.map((item, index) => {
            return (
              <div
                key={index}
                className=" text-white text-base font-medium w-fit h-fit px-2 py-1 bg-violetGrow-300 border-l-2 border-r-2 rounded-se-lg rounded-bl-lg border-violetGrow-700"
              >
                {item}
              </div>
            );
          })}
        </article>
      </section>
      <section>
        <h2 className=" text-xl font-semibold text-violetGrow-500">
          Enfermedades
        </h2>
        <article>
          <div className=" text-white text-base font-medium w-fit h-fit px-2 py-1 bg-orangeGrow-300 border-l-2 border-r-2 rounded-se-lg rounded-bl-lg border-orange-700">
            En tratamiento medico
          </div>
        </article>
      </section>
      <section>
        <h2 className=" text-xl font-semibold text-violetGrow-500">
          Condicion en el que esta
        </h2>
        <article className=" grid grid-cols-gridResponsiveBehavior gap-3">
          {listConditionPet.map((item) => {
            const { name, condition } = item;
            return (
              <div
                key={name}
                className={` ${
                  condition ? "bg-green-400" : " bg-[#E41818] "
                } rounded-xl  text-white w-fit flex gap-x-1 px-3 py-2`}
              >
                <p className=" text-base font-medium">{name}</p>
                {condition ? (
                  <Image
                    src={"/conditionOk.svg"}
                    width={21}
                    height={15}
                    alt="estado ok"
                  />
                ) : (
                  <Image
                    src={"/conditionFalse.svg"}
                    width={13}
                    height={13}
                    alt="estado false"
                  />
                )}
              </div>
            );
          })}
        </article>
      </section>
      <section>
        <h2 className=" text-xl font-semibold text-violetGrow-500">Historia</h2>
        <p className=" text-base font-normal">
          Lorem ipsum dolor sit amet consectetur. Nunc fames tellus dignissim
          justo augue lectus viverra. Volutpat eleifend mattis dignissim
          pharetra tellus amet augue tortor facilisi. Mi diam lobortis eu
          feugiat vulputate nulla iaculis tortor vitae. Tellus diam suspendisse
          neque purus leo turpis morbi enim. Aliquet magna urna rhoncus eget.
          Platea lobortis augue habitant id elementum adipiscing adipiscing
          massa faucibus.{" "}
        </p>
      </section>
      <section>
        <ButtonGeneral>Consultar adopcion</ButtonGeneral>
      </section>
    </main>
  );
}
