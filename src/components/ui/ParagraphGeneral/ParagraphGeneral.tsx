type Props = {
    children: string;
}
export default function ParagraphGeneral({children}: Props){
    return(
        <p className="text-base font-normal text-center lg:text-left">{children}</p>
    )
}