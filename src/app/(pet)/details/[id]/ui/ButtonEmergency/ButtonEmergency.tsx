type Prop = {
    children: string
}

export default function ButtonEmergency({ children }: Prop) {
  return (
    <button className="mt-8 uppercase border border-[#E41818] py-1 px-2 text-[#E41818] rounded-md w-full hover:transition-all hover:duration-300 hover:bg-[#E41818] hover:text-white text-base font-normal">
      { children }
    </button>
  );
}
