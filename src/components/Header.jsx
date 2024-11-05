// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { CiMenuBurger } from 'react-icons/ci';
import { CgClose } from 'react-icons/cg';

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="flex items-center justify-between xl:justify-center w-full py-4 px-8 h-[10vh] z-50">
      {/* Logo: Solo visible cuando el menú está cerrado en modo móvil */}
      <div className={`xl:w-1/6 text-center -mt-4 ${showMenu ? 'hidden' : 'block'}`}>
        <a href="#" className="text-2xL font-bold text-center relative">
          Student Connect <span className="text-secundary text-3xl">.</span>{' '}
        </a>
      </div>
      
      {/* Menú: ocupa una parte de la pantalla en modo móvil */}
      <nav
        className={`fixed top-0 left-0 w-[80%] md:w-[50%] h-full bg-white z-40 flex flex-col items-center justify-center gap-5 transition-all duration-500 ${
          showMenu ? 'block' : 'hidden'
        } xl:flex xl:static xl:w-auto xl:h-auto xl:flex-row xl:bg-transparent`}
      >
        <a
          href="#"
          className="text-secundary border border-secundary/10 bg-transparent py-2 px-5 rounded transition-colors hover:bg-secundary hover:text-white"
        >
          Inicio
        </a>
        <a
          href="#"
          className="text-secundary border border-secundary/10 bg-transparent py-2 px-5 rounded transition-colors hover:bg-secundary hover:text-white"
        >
          Sobre nosotros
        </a>
        <a
          href="#"
          className="text-secundary border border-secundary/10 bg-transparent py-2 px-5 rounded transition-colors hover:bg-secundary hover:text-white"
        >
          Características
        </a>
        <a
          href="#"
          className="text-secundary border border-secundary/10 bg-transparent py-2 px-5 rounded transition-colors hover:bg-secundary hover:text-white"
        >
          Requisitos
        </a>
        <a
          href="#"
          className="text-secundary border border-secundary/10 bg-transparent py-2 px-5 rounded transition-colors hover:bg-secundary hover:text-white"
        >
          Rutas
        </a>
      </nav>

      {/* Botón de menú */}
      <button
        onClick={() => setShowMenu(!showMenu)}
        className="xl:hidden text-2xl p-2 z-50"
      >
        {showMenu ? <CgClose /> : <CiMenuBurger />}
      </button>
    </header>
  );
};

export default Header;
