"use client"

import React from 'react'
import { MockListCategories, menuLateralPedidos } from '../components/utils/mocks'
import Footer from '../components/footer'
import PagePedidos from './pedidos/page'

export default function PageConta() {
  return (
    <>
      <main className='w-full h-full bg-red-300'>
        <div className='w-full bg-slate-700 py-10 text-center text-white font-bold text-2xl'>
          <h1>Minha conta</h1>
        </div>

        <section className='flex w-full bg-white justify-around items-star py-5'>
          <nav className='w-1/4 p-8'>
            <ul className='flex flex-col items-center justify-center gap-2 font-normal text-base'>
              {
                menuLateralPedidos &&
                menuLateralPedidos.map((item) => (
                  <li
                    key={item}
                    className='w-full text-center p-1 border-b-2 border-black hover:text-amber-400 hover:scale-95 hover:transition-all cursor-pointer'
                  >{item}</li>
                ))
              }
            </ul>
          </nav>
            <PagePedidos />
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