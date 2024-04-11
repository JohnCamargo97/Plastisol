import { Header } from '../Componentes/Header'
import { MainArticle } from '../Componentes/MainArticle'
import { ContenedorArticulos } from '../Componentes/ContenedorArticulos'
import { ContenedorProductos } from '../Componentes/ContenedorProdcutos' 

export function Home(){

    return (
        <>
            <Header />

            <section className='pt-6 sm:flex sm:gap-8'>

                <MainArticle />
                <ContenedorArticulos />

            </section>



            <ContenedorProductos />

        </>
    )
}
