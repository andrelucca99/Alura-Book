import Image from "next/image";
import React from "react";

export default function Footer() {
  return (
    <section className="grid sm:grid-cols-1 grid-cols-4 bg-slate-200 p-6 text-left">
      <div className="w-full text-center sm:border-r-0 border-r-2 border-gray-400">
        <h3 className="sm:text-left font-normal text-2xl">Grupo Alura</h3>
      </div>
      <div className="sm:hidden sm:invisible visible w-full border-r-2 border-gray-400 pl-4">
        <h3 className="font-normal text-sm text-gray-600">EDUCAÇÃO</h3>
        <ul className="flex flex-col gap-2 mt-4">
          <li className="flex gap-1 font-normal text-sm"><Image src="assets/caelum.svg" alt="ícone da caelum" width={30} height={30} />Caelum</li>
          <li className="flex gap-1 font-normal text-sm"><Image src="assets/casa_do_codigo.svg" alt="ícone da casa do codigo" width={30} height={30} />Casa do Código</li>
        </ul>
      </div>
      <div className="sm:hidden sm:invisible visible w-full border-r-2 border-gray-400 pl-4">
        <h3 className="font-normal text-sm text-gray-600">EDUCAÇÃO ONLINE</h3>
        <ul className="flex flex-col gap-2 mt-4">
          <li className="flex gap-1 font-normal text-sm"><Image src="assets/alura.svg" alt="ícone da alura" width={30} height={30} />Alura</li>
          <li className="flex gap-1 font-normal text-sm"><Image src="assets/alura_empresa.svg" alt="ícone da alura empresas" width={30} height={30} />Alura Para Empresas</li>
          <li className="flex gap-1 font-normal text-sm"><Image src="assets/alura.svg" alt="ícone da alura latam" width={30} height={30} />Alura LATAM</li>
          <li className="flex gap-1 font-normal text-sm"><Image src="assets/alura_start.svg" alt="ícone da alura start" width={30} height={30} />Alura Start</li>
          <li className="flex gap-1 font-normal text-sm"><Image src="assets/music_dot.svg" alt="ícone de musicDot" width={30} height={30} />MusicDot</li>
          <li className="flex gap-1 font-normal text-sm"><Image src="assets/alura_lingua.svg" alt="ícone da alura lingua " width={30} height={30} />Alura Língua</li>
          <li className="flex gap-1 font-normal text-sm"><Image src="assets/pm3.svg" alt="ícone de pm3 " width={30} height={30} />PM3</li>
        </ul>
      </div>
      <div className="sm:hidden sm:invisible visible w-full pl-4">
        <h3 className="font-normal text-sm text-gray-600">COMUNIDADE</h3>
        <ul className="flex flex-col gap-2 mt-4">
          <li className="flex gap-1 font-normal text-sm"><Image src="assets/hipsters_tech.svg" alt="Logo" width={30} height={30} />Hipsters ponto Tech</li>
          <li className="flex gap-1 font-normal text-sm"><Image src="assets/scuba_dev.svg" alt="Logo" width={30} height={30} />Scuba Dev</li>
          <li className="flex gap-1 font-normal text-sm"><Image src="assets/layers.svg" alt="Logo" width={30} height={30} />Layers ponto Tech</li>
          <li className="flex gap-1 font-normal text-sm"><Image src="assets/boss.svg" alt="Logo" width={30} height={30} />Like a Boss</li>
          <li className="flex gap-1 font-normal text-sm"><Image src="assets/carreira.svg" alt="Logo" width={30} height={30} />Carreira sem Fronteira</li>
          <li className="flex gap-1 font-normal text-sm"><Image src="assets/hipsters_jobs.svg" alt="Logo" width={30} height={30} />Hipsters ponto Jobs</li>
          <li className="flex gap-1 font-normal text-sm"><Image src="assets/guj.svg" alt="Logo" width={30} height={30} />GUJ</li>
        </ul>
      </div>
    </section>
  )
}