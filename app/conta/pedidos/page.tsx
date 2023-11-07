import { AbBotao } from "ds-alurabooks";
import React from "react";

export default function PagePedidos() {
  return (
    <section className="w-9/12 p-8">
      <h1 className='font-bold text-xl mt-0'>Últimos pedidos</h1>
      <article className='flex items-end justify-between border-b-2 border-black p-3'>
        <ul className='pl-3'>
          <li>Pedido: <strong>123456</strong></li>
          <li>Data do pedido: <strong>01/11/2023</strong></li>
          <li>Valor do pedido: <strong>R$ 45.00</strong></li>
          <li>Entrega realizada em: <strong>20/11/2023</strong></li>
        </ul>
        
        <AbBotao texto='Detalhes' />
      </article>

      <article className='flex items-end justify-between border-b-2 border-black p-3'>
        <ul className='pl-3'>
          <li>Pedido: <strong>123456</strong></li>
          <li>Data do pedido: <strong>01/11/2023</strong></li>
          <li>Valor do pedido: <strong>R$ 45.00</strong></li>
          <li>Entrega realizada em: <strong>20/11/2023</strong></li>
        </ul>
        
        <AbBotao texto='Detalhes' />
      </article>
    </section>
  )
}