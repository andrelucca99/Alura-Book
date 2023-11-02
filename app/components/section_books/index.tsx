import Image from "next/image";

import CardBooks from "../card_books";

export default function SectionBooks({ titulo, categorie, description, autor }: { titulo: string, categorie: string, description: string, autor: string }) {
  const capas = [{
    liderança: {
      img: "assets/book/capa1.svg",
      alt: "Livro Liderança em design"
    },
    apache: {
      img: "assets/book/capa2.svg",
      alt: "Livro Apache Kafka e Spring Boot"
    },
    javaScript: {
      img: "assets/book/capa3.svg",
      alt: "Livro JavaScript Assertivo"
    },
  }]

  return (
    <section className="flex flex-col items-center">
      <h2 className="font-bold text-2xl text-amber-400 p-3">{titulo}</h2>

      <section className="w-full h-auto bg-gray-300 flex sm:flex-col md:flex-col flex-row gap-4 items-center justify-around p-8">
        <div className="w-6/12 sm:w-full md:w-full flex justify-between">
          <CardBooks img={capas[0].liderança.img} alt={capas[0].liderança.alt} />
          <CardBooks img={capas[0].apache.img} alt={capas[0].apache.alt} />
          <CardBooks img={capas[0].javaScript.img} alt={capas[0].javaScript.alt} />
        </div>

        <div className="w-6/12 sm:w-full md:w-full bg-white rounded-xl pt-8 p-12 flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-2xl text-amber-400">Sobre o livro:</h3>
            <ul className="flex font-normal text-sm sm:hidden">
              <li><Image src="assets/car-icon.svg" alt="ícone de sacola" width={32} height={32} /></li>
              <li><Image src="assets/favorite-icon.svg" alt="ícone de favoritar" width={32} height={32} /></li>
            </ul>
          </div>
          <h4 className="font-bold text-1xl">{categorie}</h4>
          <p className="font-normal text-sm">{description}</p>
          <p className="font-normal text-sm">Por: {autor}</p>

          <div className="flex justify-between sm:hidden">
            <p className="font-normal text-sm">A partir de: <br /> <b className="font-bold text-3xl">R$ 29,90</b></p>
            <button className="bg-amber-400 text-white py-5 px-4">Comprar</button>
          </div>

          <div className="flex flex-col justify-between sm:inline-block hidden">
            <p className="font-normal text-sm">A partir de: <b className="font-bold text-3xl">R$ 29,90</b></p>
            <div className="flex justify-between items-center mt-4">
              <ul className="flex font-normal text-sm">
                <li><Image src="assets/car-icon.svg" alt="ícone de sacola" width={32} height={32} /></li>
                <li><Image src="assets/favorite-icon.svg" alt="ícone de favoritar" width={32} height={32} /></li>
              </ul>
              <button className="bg-amber-400 text-white py-5 px-4">Comprar</button>
            </div>
          </div>
        </div>
      </section>
    </section>
  )
}