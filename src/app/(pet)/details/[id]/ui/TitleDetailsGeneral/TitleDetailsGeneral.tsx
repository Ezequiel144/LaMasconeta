type Prop = {
    children: string
}

export default function TitleDetailsGeneral({ children }:Prop) {
  return (
    <h2 className=" text-xl font-semibold text-violetGrow-500">
      {children}
    </h2>
  );
}
