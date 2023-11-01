import NavBar from './components/navBar'

export default function Home() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className='bg-blue-600 w-36 h-36 rounded-lg flex align-ite justify-center'>titulo</div>
      </main>
    </>
  )
}
