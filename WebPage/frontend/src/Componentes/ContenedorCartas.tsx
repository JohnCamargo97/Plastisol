import imgCafeUno from '../Img/CafeUno.jpg'
import imgCafeDos from '../Img/CafeDos.jpg'
import imgCafeTres from '../Img/CafeTres.jpg'

import { CartasProductos } from "./CartasProductos"

export function ContenedorCartas(){

    return (

        <>
            <div className='md:p-10 p-5'>
                <div className='mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl xl:px-5 md:py-0 flex justify-center lg:justify-start'>
                    <h3 className='font-bold text-2xl'>Productos más buscados</h3>
                </div>
            </div>

            <div className="lg:flex lg:justify-center mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-4 md:w-[100%] lg:w-[90%]">
                    <CartasProductos 
                        img={imgCafeUno}
                        titulo='Nombre Producto'
                        texto='Ut sed rerum nesciunt inventore maxime ducimus nihil expedita aliquid. Dolorem, animi.'
                    />

                    <CartasProductos
                        img={imgCafeDos}
                        titulo='Nombre Producto'
                        texto='Ut sed rerum nesciunt inventore maxime ducimus nihil expedita aliquid. Dolorem, animi.'
                    />

                    <CartasProductos
                        img={imgCafeTres}
                        titulo='Nombre Producto'
                        texto='Dolor ut illum dicta repudiandae sed deleniti dolorum minima rerum neque, ipsam sequi autem.'
                    />

                    <CartasProductos
                        img={imgCafeTres}
                        titulo='Nombre Producto'
                        texto='Dolor ut illum dicta repudiandae sed deleniti dolorum minima rerum neque, ipsam sequi autem.'
                    />
                </div>
                
            </div>   

        </>

    );
}

export default ContenedorCartas; 