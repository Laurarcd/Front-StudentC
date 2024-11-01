// eslint-disable-next-line no-unused-vars
import React, {useState} from 'react'
import { CiMenuBurger } from "react-icons/ci";
import { CgClose } from "react-icons/cg";

const Header = () => {
  const [showMenu,setShowMenu] = useState (false);
  return (
    <header className='flex items-center justify-between xl:justify-start w-full py-4 px-8 h-[10vh] z-50'>
        <div className='xl:w-1/6 text-center -mt-4'>
            <a href='#' className='text-2xL font-bold text-center relative'>
                Student Connect <span className='text-primary text-3xl'>.</span>{" "}
            </a>
        </div>
        <nav className={`fixed bg-white w-[80%] md:w-[40%] xl:w-full h-full ${showMenu ? 'left-0' : '-left-full'} 
        top-0 xl:static flex-1 flex flex-col xl:flex-row items-center justify-center gap-10 transition-all duration-500`}>
            <a href='#' className=''> Inicio  </a>
            <a href='#' className=''> Sobre nosotros  </a>
            <a href='#' className=''> Caracteristicas  </a>
            <a href='#' className=''> Requisitos  </a>
            <a href='#' className=''> Rutas </a>

        </nav>
        <button onClick={() => setShowMenu(!showMenu)} className='xl:hidden text-2xl p-2'>
          {showMenu ? <CgClose/> : <CiMenuBurger/>}
          

          </button>
    </header>
  )
}

export default Header;
