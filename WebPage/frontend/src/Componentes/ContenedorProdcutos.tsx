import imgCafeUno from '../Img/CafeUno.jpg'
import imgCafeDos from '../Img/CafeDos.jpg'
import imgCafeTres from '../Img/CafeTres.jpg'

import { Productos } from "./Productos"

export function ContenedorProductos(){

    return (

        <>
        
        <section className="mt-10 lg:flex sm:mt-20">
            <Productos 
                img={imgCafeUno}
                numero='01'
                titulo='Producto Uno'
                texto='Lorem ipsum dolor sit amet consectetur adipisicing elit.'
            />

            <Productos 
                img={imgCafeDos}
                numero='02'
                titulo='Producto Dos'
                texto='ut sed rerum nesciunt inventore maxime ducimus nihil expedita aliquid. Dolorem, animi.'
            />

            <Productos
                img={imgCafeTres}
                numero='03'
                titulo='Producto Tres'
                texto='Dolor ut illum dicta repudiandae sed deleniti dolorum minima rerum neque, ipsam sequi autem.'
            />

        </section>
        
        </>

    );
}
