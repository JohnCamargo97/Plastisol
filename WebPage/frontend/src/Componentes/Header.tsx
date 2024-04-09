import logo from '../Img/StarbucksLogo.png'
import { NavBar } from './Navbar'

export function Header(){

    return (

        <header className="bg-red-500 flex place-content-between">
            <img className='w-32 h-32' src={logo} alt="Logo" />
            <NavBar />
        </header>
    )
}