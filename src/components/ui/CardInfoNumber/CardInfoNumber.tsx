type Props = {
    numberTitle: string,
    description: string,
}

export default function CardInfoNumber ({ numberTitle, description }: Props) {
    return(
        <article className=" flex flex-col  w-fit gap-y-1 text-white">
          <h2 className=" text-7xl font-bold">{numberTitle}</h2>
          <p className=" text-lg font-bold text-center">{description}</p>
        </article>
    )
}