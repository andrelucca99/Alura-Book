import Link from "next/link";
import { ReactNode } from "react";

export default function ActionLogin({ children }:{ children: ReactNode }) {
  return (
    <>
      <li>
        <Link href="/conta">Minha Conta</Link> 
      </li>
      <li>
        {children}
      </li>
    </>
  )
}