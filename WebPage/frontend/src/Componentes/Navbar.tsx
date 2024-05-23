import { useState, useEffect } from 'react';

import cerrarMenu from '../Img/IconoX.png';
import menuBurger from '../Img/Icono-barras-escalonadas.png';
import anguloAbajo from '../Img/Icono-angulo-hacia-abajo.png';
import siguiente from '../Img/Icono-flecha.png';
import logo from '../Img/StarbucksLogo.png';


export function Navbar() {
  const Productos = [
    { nombre: 'Parafinado', link: '/Productos' },
    { nombre: 'Plasticos', link: '/Productos' },
    { nombre: 'Papel', link: '/Productos' },
  ];

  const Contacto = [
    { nombre: 'ejemplo@gmail.com', link: '/Home' },
    { nombre: '+57 3202345678', link: '/Home' },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [isProductosOpen, setIsProductosOpen] = useState(false);
  const [isContactoOpen, setIsContactoOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prevState) => !prevState);
    if (!isOpen) {
      closeSubMenus();
    }
  };

  const toggleProductosMenu = () => {
    setIsProductosOpen((prevState) => !prevState);
    setIsContactoOpen(false);
  };

  const toggleContacto = () => {
    setIsContactoOpen((prevState) => !prevState);
    setIsProductosOpen(false);
  };

  const closeMenus = () => {
    setIsOpen(false);
    closeSubMenus();
  };

  const closeSubMenus = () => {
    setIsProductosOpen(false);
    setIsContactoOpen(false);
  };

  const handleClickOutside = (event) => {
    if (!event.target.closest('.menu-item') && !event.target.closest('.menu-toggle')) {
      closeMenus();
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);


  return (
    <nav className="w-full md:flex mx:auto">
      <div className="flex items-center justify-between bg-white py-2">
        <div className="flex items-center space-x-4">
          <a href="/Home">
            <img className="w-16 h-16 cursor-pointer" src={logo} alt="Logo" />
          </a>
        </div>

        <div className="flex items-center space-x-4">
          <div
            onClick={toggleMenu}
            className="w-10 h-10 flex items-center justify-center cursor-pointer md:hidden menu-toggle"
          >
            <img className="h-6 w-6" src={isOpen ? cerrarMenu : menuBurger} alt="Menú" />
          </div>
        </div>
      </div>

      <ul
        className={`md:flex md:items-center md:space-x-10 md:ml-auto mt-2 bg-white md:relative md:z-auto z-10 w-full md:w-auto md:pl-0 transition-all duration-500 ease-in ${isOpen ? 'block' : 'hidden md:block'}`}
      >
        <li className="font-semibold my-2 md:my-0 relative mt-4 menu-item">
          <a
            className="flex items-center md:border-b-2 border-white md:hover:border-solid md:hover:border-b-2 hover:border-slate-800"
            href="#"
            onClick={(e) => {
              e.preventDefault();
              toggleContacto();
            }}
          >
            Contactanos
            <img
              className={`h-[25px] w-[25px] mt-1 transform transition-transform duration-700 ${
                isContactoOpen ? 'rotate-180' : 'rotate-0'
              }`}
              src={anguloAbajo}
              alt=""
            />
          </a>
          <ul
            className={`mt-2 ${isContactoOpen ? 'block' : 'hidden'} cursor-pointer md:absolute md:left-0 md:top-full md:w-auto md:bg-white md:shadow-md md:z-20 md:border-solid md:border-2 md:border-gray-900 md:py-2`}
          >
            {Contacto.map((contacto, index) => (
              <li key={index} className="hover:bg-slate-950 hover:text-white h-10 flex items-center">
                <a className="font-medium md:text-[16px] p-2" href={contacto.link} onClick={closeMenus}>
                  {contacto.nombre}
                </a>
              </li>
            ))}
          </ul>
        </li>

        <li className="font-semibold my-2 md:my-0 relative mt-4 menu-item">
          <a
            className="flex items-center md:border-b-2 border-white md:hover:border-solid md:hover:border-b-2 hover:border-slate-800"
            href="#"
            onClick={(e) => {
              e.preventDefault();
              toggleProductosMenu();
            }}
          >
            Productos
            <img
              className={`h-[25px] w-[25px] mt-1 transform transition-transform duration-700 ${
                isProductosOpen ? 'rotate-180' : 'rotate-0'
              }`}
              src={anguloAbajo}
              alt=""
            />
          </a>
          <ul
            className={`mt-2 ${isProductosOpen ? 'block' : 'hidden'} cursor-pointer md:absolute md:left-0 md:top-full md:w-[120px] md:bg-white md:shadow-md md:z-20 md:border-solid md:border-2 md:border-gray-900 md:py-2`}
          >
            {Productos.map((producto, index) => (
              <li key={index} className="hover:bg-slate-950 hover:text-white h-10 flex items-center">
                <a className="font-medium md:text-[16px] p-2" href={producto.link} onClick={closeMenus}>
                  {producto.nombre}
                </a>
              </li>
            ))}
          </ul>
        </li>

        <div className="font-semibold my-4 md:my-0 border border-black items-start w-[50%] md:w-[40%] mt-6 md:mt-0">
          <div className="mb-1 mr-1">
            <a className="bg-slate-950 hover:bg-slate-900 text-white py-2 px-8 -ml-2 -mt-2 flex items-center" href="/Forms">
              <span>Cotización</span>
              <span className="ml-1">
                <img className="w-[25px] h-[25px]" src={siguiente} alt="" />
              </span>
            </a>
          </div>
        </div>
      </ul>
    </nav>
  );
}

export default Navbar;
