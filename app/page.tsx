import NavBar from './components/navBar'

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
      </main>
    </>
  )
}
