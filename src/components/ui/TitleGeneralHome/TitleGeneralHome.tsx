type Prop = {
    children: string
}

export default function TitleGeneralHome ({ children }: Prop) {
    return(
        <h2 className=" text-4xl lg:text-5xl font-bold text-violetGrow-700">{ children }</h2>
    )
}