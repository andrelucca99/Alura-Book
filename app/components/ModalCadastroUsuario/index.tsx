"use client"
import { AbBotao, AbCampoTexto, AbModal } from "ds-alurabooks"

import imagemPrincipal from "./assets/login.svg";
import Image from "next/image";
import { useState } from "react";
import axios from "axios";

const ModalCadastroUsuario = ({ aberta, aoFechar }: { aberta: boolean, aoFechar: () => void }) => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [endereco, setEndereco] = useState('');
  const [complemento, setComplemento] = useState('');
  const [cep, setCep] = useState('');
  const [senha, setSenha] = useState('');
  const [senhaConfirmada, setSenhaConfirmada] = useState('');

  const aoSubmeterFormulario = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault();

    const usuario = {
      nome,
      email,
      senha,
      endereco,
      cep,
      complemento
    }
    
    axios.post('http://localhost:8000/public/registrar', usuario)
      .then(() => {
        alert('Usuario foi cadastrado com sucesso!');
        setNome('')
        setEmail('')
        setEndereco('')
        setComplemento('')
        setCep('')
        setSenha('')
        setSenhaConfirmada('')
        aoFechar()
      })
      .catch(() => {
        alert('OPS! Alguma coisa deu errado!');
      })
  }

  return (
    <AbModal
      titulo="Cadastrar"
      aberta={aberta}
      aoFechar={aoFechar}
    >
      <div className="flex items-center p-0 gap-0">
        <figure>
          <Image
            src={imagemPrincipal}
            alt="Monitor com uma fechadura e uma pessoa com uma chave do lado"
            width={317}
            height={317}
          />
        </figure>
        <form onSubmit={aoSubmeterFormulario} className="max-w-xs w-full h-auto p-2">
          <AbCampoTexto
            value={nome}
            label='Nome'
            onChange={setNome}
            type="text"
          />
          <AbCampoTexto
            value={email}
            label='Email'
            onChange={setEmail}
            type="email"
          />
          <AbCampoTexto
            value={endereco}
            label='Endereço'
            onChange={setEndereco}
            type="text"
          />
          <AbCampoTexto
            value={complemento}
            label='Complemento'
            onChange={setComplemento}
            type="text"
          />
          <AbCampoTexto
            value={cep}
            label='CEP'
            onChange={setCep}
            type="text"
          />
          <AbCampoTexto
            value={senha}
            label='Senha'
            onChange={setSenha}
            type='password'
          />
          <AbCampoTexto
            value={senhaConfirmada}
            label='Confirmar senha'
            onChange={setSenhaConfirmada}
            type='password'
          />
          <footer className="mt-1 mb-5 text-center">
            <AbBotao texto="Cadastrar" />
          </footer>
        </form>
      </div>
    </AbModal>
  )
}

export default ModalCadastroUsuario;