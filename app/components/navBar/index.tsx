import Image from "next/image";
import ModalCadastroUsuario from "../ModalCadastroUsuario";

export default function NavBar() {
  return (
    <nav className="w-full h-20 bg-slate-50 flex justify-around p-2">
      <div className="w-6/12 flex sm:justify-between sm:pl-5 items-center gap-4">
        <Image className="sm:visible invisible" src={'assets/menu-icon.svg'} alt="ícone de menu hamburguer" width={40} height={40} />
        <Image src={'assets/Logo.svg'} alt="logo" width={40} height={40} />
        <ul className="flex gap-4 sm:invisible visible">
          <li className="font-medium"><b>Alura</b>Books</li>
          <li className="font-normal">Categorias</li>
        </ul>
      </div>

      <div className="w-6/12">
        <ul className="flex sm:justify-between md:justify-center justify-center gap-2 pt-3 items-center sm:pl-7">
          <li className="sm:visible invisible"><Image src={'assets/favorite-icon.svg'} alt="ícone de favotitar" width={40} height={40} /></li>
          <li className="sm:visible invisible"><Image src={'assets/car-icon.svg'} alt="ícone do carrinho" width={40} height={40} /></li>
          <li><Image src={'assets/user-icon.svg'} alt="ícone de usuario" width={30} height={30} /></li>
          <li className="sm:invisible visible font-normal">Login</li>
          <li className="sm:invisible visible font-normal">
            Cadastrar
            <ModalCadastroUsuario />
          </li>
        </ul>
      </div>
    </nav>
  )
}