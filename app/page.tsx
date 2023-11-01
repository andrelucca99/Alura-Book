import NavBar from './components/navBar'
import SectionBooks from './components/section_books'

export default function Home() {

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main className="w-full flex flex-col">
        <section className='w-full h-80 bg-violet-700 text-center flex flex-col justify-center items-center gap-3'>
          <h1 className='font-bold text-3xl text-white'>Já sabe por onde começar?</h1>
          <p className='font-medium text-base text-white'>Encontre em nossa estante o que precisa para seu desenvolvimento!</p>
          <input
            className='w-80 rounded-2xl py-2 px-6 opacity-80'
            type="text"
            placeholder='Qual será sua próxima leitura?'
          />
        </section>

        <section className='w-full bg-white'>
          <SectionBooks
            titulo="ÚLTIMOS LANÇAMENTOS"
            categorie="Liderança em Design"
            description="Habilidades de gestão para alavancar sua carreira"
            autor="Vitor Zanini"
          />

          <SectionBooks
            titulo="MAIS VENDIDOS"
            categorie="JavaScript Assertivo"
            description="Testes e qualidade de código em todas as camadas da aplicação"
            autor="Gabriel Ramos"
          />
        </section>

        <section className='w-full bg-violet-700 flex flex-col py-8 gap-4 items-center'>
          <h2 className='text-white font-light text-2xl'>CATEGORIAS MAIS BUSCADAS</h2>
          <div className='w-fit grid grid-cols-4 gap-4'>
            <span className='bg-amber-400 p-2 text-2xl font-medium text-center text-white'>Android</span>
            <span className='bg-amber-400 p-2 text-2xl font-medium text-center text-white'>OO</span>
            <span className='bg-amber-400 p-2 text-2xl font-medium text-center text-white'>Marketing Digital</span>
            <span className='bg-amber-400 p-2 text-2xl font-medium text-center text-white'>Agile</span>
            <span className='bg-amber-400 p-2 text-2xl font-medium text-center text-white'>Startups</span>
            <span className='bg-amber-400 p-2 text-2xl font-medium text-center text-white'>HTML & CSS</span>
            <span className='bg-amber-400 p-2 text-2xl font-medium text-center text-white'>Java</span>
            <span className='bg-amber-400 p-2 text-2xl font-medium text-center text-white'>Python</span>          
          </div>
        </section>
      </main>
    </>
  )
}
