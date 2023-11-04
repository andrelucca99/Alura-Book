"use client"

import Image from "next/image";
import { useState } from "react";
import ModalLoginUsuario from "../ModalLoginUsuario";
import ModalCadastroUsuario from "../ModalCadastroUsuario";


export default function ActionDeslogado({ click, aoEfetuarLogin }: { click: boolean, aoEfetuarLogin: () => void }) {
  const [modalLoginAberto, setModalLoginAberto] = useState(false);
  const [modalCadastroAberto, setModalCadastroAberto] = useState(false);

  return (
    <>
      <li className="flex justify-between gap-1 sm:invisible visible font-normal">
        <Image src={'assets/user-icon.svg'} alt="ícone de usuario" width={30} height={30} />
        <button onClick={() => setModalLoginAberto(click)}>Login</button>
        <ModalLoginUsuario
          aberta={modalLoginAberto}
          aoFechar={() => setModalLoginAberto(false)}
          aoEfetuarLogin={aoEfetuarLogin}
        />
      </li>
      <li className="flex justify-between gap-1 sm:invisible visible font-normal">
        <Image src={'assets/user-icon.svg'} alt="ícone de usuario" width={30} height={30} />
        <button onClick={() => setModalCadastroAberto(click)}>Cadastrar</button>
        <ModalCadastroUsuario
          aberta={modalCadastroAberto}
          aoFechar={() => setModalCadastroAberto(false)}
        />
      </li>
    </>
  )
}