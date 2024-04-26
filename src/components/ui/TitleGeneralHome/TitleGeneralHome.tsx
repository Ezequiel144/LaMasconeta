type Prop = {
  title: string;
};

export default function TitleGeneralHome({ title }: Prop) {
  return (
    <h2 className=" text-4xl lg:text-5xl font-bold text-violetGrow-700 mr-20 my-4">
      {title}
    </h2>
  );
}
