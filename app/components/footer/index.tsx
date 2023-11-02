import React from "react";
import ListMenu from "../utils/list_menu";
import { MockListMenuComunidade, MockListMenuEducacao, MockListMenuEducacaoOn } from "../utils/mocks";

export default function Footer() {

  return (
    <section className="grid sm:grid-cols-1 grid-cols-4 bg-slate-200 p-6 text-left">
      <div className="w-full text-center sm:border-r-0 border-r-2 border-gray-400">
        <h3 className="sm:text-left font-normal text-2xl">Grupo Alura</h3>
      </div>
      <div className="sm:hidden sm:invisible visible w-full border-r-2 border-gray-400 pl-4">
        <h3 className="font-normal text-sm text-gray-600">EDUCAÇÃO</h3>
        {
          MockListMenuEducacao.map((item) => (
            <ListMenu key={item.text} text={item.text} img={item.img} alt={item.alt} />
          ))
        }
      </div>
      <div className="sm:hidden sm:invisible visible w-full border-r-2 border-gray-400 pl-4">
        <h3 className="font-normal text-sm text-gray-600">EDUCAÇÃO ONLINE</h3>
        {
          MockListMenuEducacaoOn.map((item) => (
            <ListMenu key={item.text} text={item.text} img={item.img} alt={item.alt} />
          ))
        }
      </div>
      <div className="sm:hidden sm:invisible visible w-full pl-4">
        <h3 className="font-normal text-sm text-gray-600">COMUNIDADE</h3>
        {
          MockListMenuComunidade.map((item) => (
            <ListMenu key={item.text} text={item.text} img={item.img} alt={item.alt} />
          ))
        }
      </div>
    </section>
  )
}