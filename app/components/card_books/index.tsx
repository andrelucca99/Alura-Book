import Image from "next/image";
import React from "react";

export default function CardBooks({ img, alt }: { img: string, alt: string }) {
  return (
    <>
      <Image className="hover:scale-110 cursor-pointer transition-all" src={img} alt={alt} width={180} height={220} />
    </>
  )
}