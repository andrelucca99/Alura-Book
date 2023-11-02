import NavBar from './components/navBar'
import SectionBooks from './components/section_books'
import Footer from './components/footer'

export default function Home() {

  const categories = ['Android', 'OO', 'Marketing Digital', 'Agile', 'Startups', 'HTML & CSS', 'Java', 'Python']

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
            { categories &&
              categories.map((item, index) => (
                <p
                  key={index}
                  className='bg-amber-400 p-1 text-lg font-medium text-center text-white'
                >
                  {item}
                </p>
              ))
            }
          </div>
        </section>

        <section className='w-full bg-white justify-center gap-4 flex text-center py-10'>
          <div className='text-left'>
            <h3 className='font-medium text-cyan-800 text-2xl'>Fique por dentro das novidades!</h3>
            <p className='font-light text-base'>Atualizações de e-books, novos livros, promoções e outros.</p>
          </div>
          <input className='rounded-2xl text-center border-sky-400 h-10' type="email" placeholder='Cadastre seu e-mail' />
        </section>
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  )
}
