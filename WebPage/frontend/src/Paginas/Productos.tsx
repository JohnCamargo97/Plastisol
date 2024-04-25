import { Navbar } from '../Componentes/Navbar';
import { Filtros } from '../Componentes/Filtros';
import { LosProductos } from '../Componentes/LosProductos'

export function Productos(){

    return (
        <>
        
        <header className='mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl px-5'>
            <Navbar />
        </header>
        

        <section>
            <Filtros />
        </section>

        <section>
            <LosProductos />
        </section>

        </>
    );
}

export default Productos;