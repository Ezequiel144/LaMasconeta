import TitleDetailsGeneral from "../TitleDetailsGeneral/TitleDetailsGeneral";

type Props = {
  history: string;
};

export default function HistoryPet({ history }: Props) {
  return (
    <section className=" pt-5">
      <TitleDetailsGeneral>Historia</TitleDetailsGeneral>
      <p className=" text-base font-normal">{history}</p>
    </section>
  );
}
