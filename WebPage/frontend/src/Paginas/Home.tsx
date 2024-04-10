import { Header } from '../Componentes/Header'
import { MainArticle } from '../Componentes/MainArticle'

export function Home(){

    return (
        <>
            <Header />

            <section className='pt-6'>

                <MainArticle />

            </section>
        </>
    )
}
