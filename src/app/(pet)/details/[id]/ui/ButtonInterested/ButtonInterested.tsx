import Image from "next/image";

type Prop = {
    children:string
}

export default function ButtonInterested({ children }:Prop) {
    return(
        <button className="text-[#EF6183] text-xl font-normal flex items-center gap-x-1">
          <Image src={"/Favorite.svg"} width={24} height={24} alt="favoritos" />
          <p>{children}</p>
        </button>
    )
}