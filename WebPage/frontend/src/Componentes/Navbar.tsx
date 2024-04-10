import menuHamburguesa from '../Img/Icono-menu-hamburguesa.png'

export function NavBar(){

    return (

        <>

        <ul className="w-50 hidden sm:flex text-[18px] sm:w-[438px] sm:place-content-around sm:items-center">

            <li>
                <a href="#">Inicio</a>
            </li>
            <li>
                <a href="#">Registrarse</a>
            </li>
            <li>
                <a href="#">Perfil</a>
            </li>
            <li>
                <a href="#">Compras</a>
            </li>
            <li>
                <a href="#">Llamanos</a>
            </li>

        </ul>
        <img className='w-[40px] h-[40px] cursor-pointer sm:hidden' src={menuHamburguesa} alt="Menú" />

        </>
    )
}