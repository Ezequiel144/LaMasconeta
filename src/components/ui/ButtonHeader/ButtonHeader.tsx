import Image from "next/image";

export default function ButtonHeader(){
    return(
        <button className="flex items-center gap-x-3 px-[10px] py-2 border-2 rounded-lg text-violetGrow-600  border-violetGrow-600">
          <p className=" text-base font-semibold ">Iniciar Sesion</p>
          <Image
            src="../../../../InitialSession.svg"
            width={32}
            height={32}
            alt="InitialSession"
          />
        </button>
    )
}