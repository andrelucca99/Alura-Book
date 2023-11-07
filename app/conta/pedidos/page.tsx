import { AbBotao } from "ds-alurabooks";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { IPedido } from "../../interfaces/IPedido.ts";

export default function PagePedidos() {
  const formatador = Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' });
  const [pedidos, setPedidos] = useState<IPedido[]>([]);

  useEffect(() => {
    const token = sessionStorage.getItem('token');

    axios.get<IPedido[]>('http://localhost:8000/pedidos', {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    }).then(res => setPedidos(res.data))
    .catch(erro => console.log(erro))
  }, [])

  const excluir = (pedido: IPedido) => {
    const token = sessionStorage.getItem('token');

    axios.delete<IPedido>(`http://localhost:8000/pedidos/${pedido.id}`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    }).then(() => {
      setPedidos(pedidos.filter(p => p.id !== pedido.id))
    })
    .catch(erro => console.log(erro))
  }

  return (
    <section className="w-9/12 p-8">
      <h1 className='font-bold text-xl mt-0'>Últimos pedidos</h1>
      {pedidos.map((pedido) => (
        <article key={pedido.id} className='flex items-end justify-between border-b-2 border-black p-3'>
          <ul className='pl-3'>
            <li>Pedido: <strong>{pedido.id}</strong></li>
            <li>Data do pedido: <strong>{new Date(pedido.data).toLocaleDateString()}</strong></li>
            <li>Valor do pedido: <strong>{formatador.format(pedido.total)}</strong></li>
            <li>Entrega realizada em: <strong>{new Date(pedido.entrega).toLocaleDateString()}</strong></li>
            <li>
              <button onClick={() => excluir(pedido)}>Excluir</button>
            </li>
          </ul>
          
          <AbBotao texto='Detalhes' />
        </article>
      ))}
    </section>
  )
}