import Image from "next/image";

export default function ListMenu({ text, img, alt }: { text: string, img: string, alt: string }) {
  return (
    <ul className="flex flex-col gap-2 mt-4">
      <li className="flex gap-1 font-normal text-sm items-center">
        <Image
          src={ img }
          alt={ alt }
          width={30}
          height={30}
        />
        {text}
      </li>
    </ul>
  )
}