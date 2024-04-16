import { Navbar } from '../Componentes/Navbar'
import { Footer } from '../Componentes/Footer'
import { MainArticle } from '../Componentes/MainArticle'
import { ContenedorArticulos } from '../Componentes/ContenedorArticulos'
import { ContenedorProductos } from '../Componentes/ContenedorProdcutos' 

export function Home(){

    return (
        <>  
            <header className='mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl'>
                <Navbar />
            </header>

            <section className='pt-6 lg:flex lg:gap-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl'>

                <MainArticle />
                <ContenedorArticulos />

            </section>

            <ContenedorProductos />

            <footer>
                <Footer />
            </footer>

        </>
    )
}
