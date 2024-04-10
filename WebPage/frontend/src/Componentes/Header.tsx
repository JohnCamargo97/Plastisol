import logo from '../Img/StarbucksLogo.png'
import { NavBar } from './Navbar'

export function Header(){

    return (

        <>

        <header className="flex place-content-between items-center">
            <img className='w-[60px] h-[60px]' src={logo} alt="Logo" />
            <NavBar />
        </header>

        </>
    )
}