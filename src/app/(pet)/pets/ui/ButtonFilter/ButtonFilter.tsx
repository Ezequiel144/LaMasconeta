import Link from "next/link"

type Props={
    children: string;
    functionQuery?: () =>  void;
    href ?: string;
}

export default function ButtonFilter({ children, functionQuery, href}: Props){
    return(
        <Link
          className=" w-full max-w-[620px] md:w-fit text-violetGrow-700 text-xl font-semibold uppercase px-[15px] py-[10px] rounded-lg border-2 text-center border-violetGrow-700 hover:transition-all hover:duration-300 hover:bg-violetGrow-700 hover:text-white"
          href={`${!functionQuery ? href : functionQuery}`}
        >
          { children }
        </Link>
    )
}