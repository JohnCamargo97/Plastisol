import cerrarMenu from '../Img/Icono-cruz.png';
import menuBurger from '../Img/Icono-barras-escalonadas.png';
import anguloAbajo from '../Img/Icono-angulo-hacia-abajo.png';
import correo from '../Img/Icono-sobre.png';
import logo from '../Img/StarbucksLogo.png';
import { useState } from 'react';

export function Navbar() {
  
  const Links = [
    { nombre: 'Nosotros', link: '/' },
  ];

  const Productos = [
    { nombre: 'Parafinado', link: '/Perfil' },
    { nombre: 'Plasticos', link: '/' },
    { nombre: 'Papel', link: '/' },
  ];

  const Contacto = [
    { nombre: 'ejemplo@gmail.com', link: '/Perfil' },
    { nombre: '3202345678', link: '/' },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [isProductosOpen, setIsProductosOpen] = useState(false);
  const [isContactoOpen, setIsContactoOpen] = useState(false); 

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleProductosMenu = () => {
    setIsProductosOpen(!isProductosOpen);
  };

  const toggleContacto = () => {
    setIsContactoOpen(!isContactoOpen)
  }

  const closeMenus = () => {
    setIsOpen(false);
    setIsProductosOpen(false);
    setIsContactoOpen(false);
  };


return (
  <nav className="w-full md:flex mx:auto">
    <div className="flex items-center justify-between bg-white py-2">

      <div className='flex items-center space-x-4'>
        <img className='w-16 h-16 cursor-pointer' src={logo} alt="Logo" />
      </div>

      <div className='flex items-center space-x-4'>
        <div onClick={toggleMenu} className='w-10 h-10 flex items-center justify-center cursor-pointer md:hidden'>
          <img className='h-6 w-6' src={isOpen ? cerrarMenu :  menuBurger } alt="Menú" />
        </div>
      </div>

    </div>

    <ul className={`md:flex md:items-center md:space-x-10  md:ml-auto mt-2 bg-white md:relative md:z-auto z-10 w-full md:w-auto md:pl-0 transition-all duration-500 ease-in ${isOpen ? 'block' : 'hidden md:block'}`}>
      {Links.map((link, index) => (
        <li key={index} className='font-semibold my-2 md:my-0 md:ml-4'>
          <a className='md:border-b-2 border-white transition ease-in duration-400 md:hover:border-solid md:hover:border-b-2 hover:border-black' href={link.link} onClick={closeMenus}>
            {link.nombre}
          </a>
        </li>
      ))}

      <li className='font-semibold my-2 md:my-0 relative mt-4'>
        <a className='flex items-center md:border-b-2 border-white transition ease-in duration-300 md:hover:border-solid md:hover:border-b-2 hover:border-black' href="/" onClick={(e) => {e.preventDefault(); toggleContacto();}}>Contactanos <img className='h-[25px] w-[25px] mt-1' src={anguloAbajo} alt="" /></a>
        <ul className={`mt-2 ${isContactoOpen ? 'block' : 'hidden'} cursor-pointer md:absolute md:left-0 md:top-full md:w-[auto] md:h-[auto] md:bg-white md:shadow-md md:z-20 md:border md:border-gray-200 md:py-2`}>
          {Contacto.map((contacto, index) => (
            <li key={index} className='font-medium md:text-[14px] mb-2 mx-2 md:border-b-2 border-white transition ease-in duration-400 md:hover:border-solid md:hover:border-b-2 hover:border-black'>
              <a href={contacto.link} onClick={closeMenus}>
                {contacto.nombre}
              </a>
            </li>
          ))}
        </ul>
      </li>

      <li className='font-semibold my-2 md:my-0 relative mt-4'>
        <a className='flex items-center md:border-b-2 border-white transition ease-in duration-300 md:hover:border-solid md:hover:border-b-2 hover:border-black' href="/" onClick={(e) => {e.preventDefault(); toggleProductosMenu();}}>Productos <img className='h-[25px] w-[25px] mt-1' src={anguloAbajo} alt="" /></a>
        <ul className={`mt-2 ${isProductosOpen ? 'block' : 'hidden'} cursor-pointer md:absolute md:left-0 md:top-full md:w-[120px] md:h-[auto] md:bg-white md:shadow-md md:z-20 md:border md:border-gray-200 md:py-2`}>
          {Productos.map((producto, index) => (
            <li key={index} className='font-medium md:text-[14px] mb-2 mx-2 md:border-b-2 border-white transition ease-in duration-400 md:hover:border-solid md:hover:border-b-2 hover:border-black'>
              <a href={producto.link} onClick={closeMenus}>
                {producto.nombre}
              </a>
            </li>
          ))}
        </ul>
      </li>

      <span className="h-1 bg-black bg-opacity-60 w-full sm:hidden block"></span>
        
      <li className='font-semibold my-2 md:my-0 mt-4'>
        <a className='bg-blue-500 py-2 px-8 text-white  hover:animate-pulse ' href="/">Cotización</a>
      </li>
    </ul>

  </nav>
);

}

