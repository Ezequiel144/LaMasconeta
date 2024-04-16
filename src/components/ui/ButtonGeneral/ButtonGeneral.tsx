type Props = {
    children: string
}

export default function ButtonGeneral({ children }: Props) {
  return (
    <button className=" w-fit text-violetGrow-700 text-xl font-semibold uppercase px-[15px] py-[10px] rounded-lg border-2 border-violetGrow-700 hover:transition-all hover:duration-300 hover:bg-violetGrow-700 hover:text-white">
      {children}
    </button>
  );
}
