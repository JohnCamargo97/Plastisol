import menuHamburguesa from '../Img/Icono-menu-hamburguesa.png'
import logo from '../Img/StarbucksLogo.png'

export function Navbar(){

    return (

        <>

        <header className="flex place-content-between items-center">
            <img className='w-[60px] h-[60px]' src={logo} alt="Logo" />

            <ul className="w-50 hidden sm:flex text-[18px] sm:w-[438px] sm:place-content-around sm:items-center font-semibold">

                <li>
                    <a href="#">Llamanos</a>
                </li>
                <li>
                    <a href="#">Carrrito</a>
                </li>
                <li>
                    <a href="#">Registrarse</a>
                </li>
                <li>
                    <a href="#">Iniciar Sesión</a>
                </li>

            </ul>
        
            <img className='w-[40px] h-[40px] cursor-pointer sm:hidden' src={menuHamburguesa} alt="Menú" />
        </header>
        
        </>
    )
}