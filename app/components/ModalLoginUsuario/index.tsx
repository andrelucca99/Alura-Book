"use client"

import { AbBotao, AbCampoTexto, AbModal } from "ds-alurabooks"
import { useState } from "react";
import Image from "next/image"
import Link from "next/link";

import imagemPrincipal from '../ModalCadastroUsuario/assets/login.svg';
import http from "@/app/http";

const ModalLoginUsuario = ({ aberta, aoFechar, aoEfetuarLogin }: { aberta: boolean, aoFechar: () => void, aoEfetuarLogin: () => void }) => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const aoSubmeterFormulario = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault();

    const login = {
      email,
      senha
    }

    http.post('public/login', login)
    .then((resposta) => {
      alert('Seja bem-vindo!');
      sessionStorage.setItem('token', resposta.data.access_token);
      setEmail('');
      setSenha('');
      aoFechar();
      aoEfetuarLogin();
    })
    .catch((erro) => {
      if (erro?.response?.data?.message) {
        alert(erro?.response?.data?.message);
      } else {
        alert('Error ao logar na aplicação');
      }
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
