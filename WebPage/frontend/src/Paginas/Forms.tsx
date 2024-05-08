import { Navbar } from '../Componentes/Navbar';
import { Footer } from '../Componentes/Footer'
import { FormQuote } from '../Componentes/FormQuote';


export function Forms(){

    return (
        <>
        
        <header className="mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl px-5">
            <Navbar />
        </header>

        <section className='mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl px-5 py-10'>
            <FormQuote />
        </section>

        <footer>
            <Footer />
        </footer>

        </>
    );
}

export default Forms;