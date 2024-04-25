import imgCafeUno from '../Img/CafeUno.jpg'
import imgCafeDos from '../Img/CafeDos.jpg'
import imgCafeTres from '../Img/CafeTres.jpg'

import { CartasProductos } from "./CartasProductos"

export function ContenedorCartas(){

    return (

        <>
        
        <section className='my-20 lg:flex md:mt-20 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl'>
            <CartasProductos 
                img={imgCafeUno}
                titulo='Nombre Prodcuto'
                texto='ut sed rerum nesciunt inventore maxime ducimus nihil expedita aliquid. Dolorem, animi.'
            />

            <CartasProductos
                img={imgCafeDos}
                titulo='Nombre Prodcuto'
                texto='ut sed rerum nesciunt inventore maxime ducimus nihil expedita aliquid. Dolorem, animi.'
            />

            <CartasProductos
                img={imgCafeTres}
                titulo='Nombre Prodcuto'
                texto='Dolor ut illum dicta repudiandae sed deleniti dolorum minima rerum neque, ipsam sequi autem.'
            />

        </section>
        
        </>

    );
}

export default ContenedorCartas; 