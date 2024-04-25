type Prop = {
    children: string,
    onClickModal: any,
    setIdModal: any
}

export default function ButtonEmergency({ children, onClickModal, setIdModal}: Prop) {
  return (
    <button onClick={() => {onClickModal(true), setIdModal("modalReport")}} className="mt-8 uppercase border border-[#E41818] py-1 px-2 text-[#E41818] rounded-md w-full sm:w-fit hover:transition-all hover:duration-300 hover:bg-[#E41818] hover:text-white text-base font-normal">
      { children }
    </button>
  );
}
