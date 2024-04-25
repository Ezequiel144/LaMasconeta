"use client";
import Image from "next/image";
import SidebarMenu from "../SidebarMenu/SidebarMenu";
import { useState } from "react";

export default function ResponsiveHeader() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <>
      <Image
        src={"/MenuHeader.svg"}
        className="lg:hidden block"
        width={32}
        height={32}
        alt="menu Header"
        onClick={() => setIsOpen(!isOpen)}
      />
      <SidebarMenu isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
}
