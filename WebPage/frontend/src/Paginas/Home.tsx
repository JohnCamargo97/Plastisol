import { Navbar } from '../Componentes/Navbar'
import { Footer } from '../Componentes/Footer'
import { MainArticle } from '../Componentes/MainArticle'
import { ContenedorCartas } from '../Componentes/ContenedorCartas' 

export function Home(){

    return (
        <>  
            <header className='mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl px-5'>
                <Navbar />
            </header>

            <section>
                <MainArticle />
            </section>

            <section>
                <ContenedorCartas />
            </section>

            <footer>
                <Footer />
            </footer>

        </>
    )
}

export default Home;