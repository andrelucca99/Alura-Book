"use client"
import { AbBotao, AbCampoTexto, AbModal } from "ds-alurabooks"

import imagemPrincipal from "./assets/login.svg";
import Image from "next/image";
import { useState } from "react";

const ModalCadastroUsuario = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [endereco, setEndereco] = useState('');
  const [complemento, setComplemento] = useState('');
  const [cep, setCep] = useState('');
  const [senha, setSenha] = useState('');
  const [senhaConfirmada, setSenhaConfirmada] = useState('');

  return (
    <AbModal
      titulo="Cadastrar"
      aberta={true}
      aoFechar={() => console.log('fecha ai')}
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
        <form className="max-w-xs w-full">
          <AbCampoTexto
            value={nome}
            label='Nome'
            onChange={setNome}
          />
          <AbCampoTexto
            value={email}
            label='Email'
            onChange={setEmail}
          />
          <AbCampoTexto
            value={endereco}
            label='Endereço'
            onChange={setEndereco}
          />
          <AbCampoTexto
            value={complemento}
            label='Complemento'
            onChange={setComplemento}
          />
          <AbCampoTexto
            value={cep}
            label='CEP'
            onChange={setCep}
          />
          <AbCampoTexto
            value={senha}
            label='Senha'
            onChange={setSenha}
          />
          <AbCampoTexto
            value={senhaConfirmada}
            label='Confirmar senha'
            onChange={setSenhaConfirmada}
          />
          <footer className="mt-10 text-center">
            <AbBotao texto="Cadastrar"/>
          </footer>
        </form>
      </div>
    </AbModal>
  )
}

export default ModalCadastroUsuario;