"use client"

import { AbBotao, AbCampoTexto, AbModal } from "ds-alurabooks"
import Image from "next/image"

import imagemPrincipal from '../ModalCadastroUsuario/assets/login.svg';
import { useState } from "react";
import Link from "next/link";
import axios from "axios";

const ModalLoginUsuario = ({ aberta, aoFechar }: { aberta: boolean, aoFechar: () => void }) => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const aoSubmeterFormulario = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault();

    const login = {
      email,
      senha
    }

    axios.post('http://localhost:8000/public/login', login)
    .then(() => {
      alert('Seja bem-vindo!');
      setEmail('');
      setSenha('');
      aoFechar();
    })
    .catch(() => {
      alert('Error ao logar na aplicação');
    })
  }

  return (
    <AbModal
      titulo="LOGIN"
      aberta={aberta}
      aoFechar={aoFechar}
    >
      <div className="flex items-center pt-8">
        <figure>
          <Image
            src={imagemPrincipal}
            alt="Monitor com uma fechadura e uma pessoa com uma chave do lado"
            width={317}
            height={317}
          />
        </figure>

        <form onSubmit={aoSubmeterFormulario}>
          <AbCampoTexto
            value={email}
            label='Email'
            onChange={setEmail}
            type='email'
          />
          <AbCampoTexto
            value={senha}
            label='Senha'
            onChange={setSenha}
            type='password'
          />

          <div className="flex justify-center items-center">
            <Link href="#">Esqueci minha senha</Link>
            <AbBotao texto="Fazer login" />
          </div>
        </form>
      </div>
    </AbModal>
  )
}

export default ModalLoginUsuario;
