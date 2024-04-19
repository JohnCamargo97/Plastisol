import imgCafeUno from '../Img/CafeUno.jpg'
import imgCafeDos from '../Img/CafeDos.jpg'
import imgCafeTres from '../Img/CafeTres.jpg'

import { Productos } from "./Productos"

export function ContenedorProductos(){

    return (

        <>
        
        <section className=" my-20 lg:flex md:mt-20 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
            <Productos 
                img={imgCafeUno}
                titulo='Nombre Prodcuto'
                precio='$50.00'
                texto='ut sed rerum nesciunt inventore maxime ducimus nihil expedita aliquid. Dolorem, animi.'
            />

            <Productos 
                img={imgCafeDos}
                titulo='Nombre Prodcuto'
                precio='$75.00'
                texto='ut sed rerum nesciunt inventore maxime ducimus nihil expedita aliquid. Dolorem, animi.'
            />

            <Productos
                img={imgCafeTres}
                titulo='Nombre Prodcuto'
                precio='$100'
                texto='Dolor ut illum dicta repudiandae sed deleniti dolorum minima rerum neque, ipsam sequi autem.'
            />

        </section>
        
        </>

    );
}
