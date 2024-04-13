import { Navbar } from '../Componentes/Navbar'
import { Footer } from '../Componentes/Footer'
import { MainArticle } from '../Componentes/MainArticle'
import { ContenedorArticulos } from '../Componentes/ContenedorArticulos'
import { ContenedorProductos } from '../Componentes/ContenedorProdcutos' 

export function Home(){

    return (
        <>  
            <header>
                <Navbar />
            </header>

            <section className='pt-6 lg:flex lg:gap-8'>

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
