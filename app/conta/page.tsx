"use client"

import React from 'react'
import NavBar from '../components/navBar'
import { AbBotao } from 'ds-alurabooks'
import { MockListCategories } from '../components/utils/mocks'
import Footer from '../components/footer'

export default function PageConta() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main className='w-full h-full bg-red-300'>
        <div className='w-full bg-slate-700 py-10 text-center text-white font-bold text-2xl'>
          <h1>Minha conta</h1>
        </div>

        <section className='flex w-full bg-white justify-around items-center py-5'>
          <nav className='w-1/4'>
            <ul className='flex flex-col items-center justify-center gap-2 font-normal text-base'>
              <li>Pedidos</li>
              <li>Troca</li>
              <li>Cupons</li>
              <li>Seus dados</li>
            </ul>
          </nav>

          <article className='w-9/12 flex justify-between'>
            <div className='flex flex-col gap-2'>
              <h2 className='font-bold text-xl'>Últimos pedidos</h2>
              <ul className='pl-3'>
                <li>Pedido:</li>
                <li>Data do pedido:</li>
                <li>Valor do pedido:</li>
                <li>Entrega realizada em:</li>
              </ul>
            </div>
            <div className='flex flex-col justify-end pr-3'>
              <AbBotao texto='Detalhes' />
            </div>
          </article>
        </section>

        <section className='w-full bg-violet-700 flex flex-col sm:px-2 py-8 gap-4 items-center'>
          <h2 className='text-white font-light text-2xl'>CATEGORIAS MAIS BUSCADAS</h2>
          <div className='w-fit grid sm:grid-cols-3 grid-cols-4 sm:grid-rows-1 sm:text-justify gap-4'>
            { MockListCategories &&
              MockListCategories.map((item, index) => (
                <p
                  key={index}
                  className='bg-amber-400 sm:py-4 p-1 text-lg font-medium text-center text-white'
                >
                  {item}
                </p>
              ))
            }
          </div>
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}

// export default PageConta