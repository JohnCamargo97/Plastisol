import { Navbar } from '../Componentes/Navbar'
import { Footer } from '../Componentes/Footer'
import { MainArticle } from '../Componentes/MainArticle'
import { ContenedorProductos } from '../Componentes/ContenedorProdcutos' 

export function Home(){

    return (
        <>  
            <header className='mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl px-5'>
                <Navbar />
            </header>

            <MainArticle />

            <ContenedorProductos />

            <footer>
                <Footer />
            </footer>

        </>
    )
}
