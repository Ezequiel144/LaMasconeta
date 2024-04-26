import Link from "next/link";

type Props = {
  title: string;
};

export default function ButtonGeneral({ title }: Props) {
  return (
    <Link href={"/pets"} className=" w-full max-w-[620px] sm:w-fit text-violetGrow-700 text-xl font-semibold uppercase px-[15px] py-[10px] rounded-lg border-2 border-violetGrow-700 hover:transition-all hover:duration-300 hover:bg-violetGrow-700 hover:text-white">
      {title}
    </Link>
  );
}
