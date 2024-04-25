import imgCafeUno from '../Img/CafeUno.jpg'
import imgCafeDos from '../Img/CafeDos.jpg'
import imgCafeTres from '../Img/CafeTres.jpg'

import { ListaProductos } from "./ListaProductos"

export function LosProductos(){

    return (

        <>
        
        <section className='my-20 lg:flex md:mt-20 lg:mt-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl'>
            
            <ListaProductos 
                img={imgCafeUno}
                titulo='Nombre Prodcuto'
                texto='Dolor ut illum dicta repudiandae sed deleniti dolorum minima rerum neque, ipsam sequi autem.'
            />

            <ListaProductos
                img={imgCafeDos}
                titulo='Nombre Prodcuto'
                texto='Dolor ut illum dicta repudiandae sed deleniti dolorum minima rerum neque, ipsam sequi autem.'
            />

            <ListaProductos
                img={imgCafeTres}
                titulo='Nombre Prodcuto'
                texto='Dolor ut illum dicta repudiandae sed deleniti dolorum minima rerum neque, ipsam sequi autem.'
            />

        </section>
        
        </>

    );
}

export default LosProductos; 