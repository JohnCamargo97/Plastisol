import cerrarMenu from '../Img/Icono-cruz.png';
import menuBurger from '../Img/Icono-barras-escalonadas.png';
import logo from '../Img/StarbucksLogo.png';
import { useState } from 'react';

export function Navbar() {
  const Links = [
    { nombre: 'Llamanos', link: '/' },
    { nombre: 'Carrito', link: '/' },
    { nombre: 'Registrarse', link: '/' },
    { nombre: 'Iniciar Sesión', link: '/' },
  ];

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="w-full">
      <div className="flex items-center justify-between bg-white px-4 py-2">

        <div className='flex items-center space-x-4'>
          <img className='w-16 h-16 cursor-pointer' src={logo} alt="Logo" />
        </div>

        <div className='flex items-center space-x-4'>
          <div onClick={toggleMenu} className='w-10 h-10 flex items-center justify-center cursor-pointer md:hidden'>
            <img className='h-6 w-6' src={isOpen ? menuBurger : cerrarMenu } alt="Menú" />
          </div>
        </div>

      </div>

      <ul className={`md:flex md:items-center md:space-x-4 md:ml-auto mt-2 bg-white md:relative md:z-auto z-10 w-full md:w-auto md:pl-0 pl-4 transition-all duration-500 ease-in ${isOpen ? 'block' : 'hidden md:block'}`}>
        {Links.map((link, index) => (
          <li key={index} className='font-semibold my-2 md:my-0 md:ml-4'>
            <a href={link.link} onClick={closeMenu}>
              {link.nombre}
            </a>
          </li>
        ))}
      </ul>

    </nav>
  );
}
