import {Articulos} from './Articulos'

export function ContenedorArticulos(){

    return (

        <aside className='bg-blue-500 py-[20px] text-white px-[20px]'>
            <h1 className='text-[24px] font-bold'>Productos</h1>

            <Articulos 
                titulo='Producto Uno'
                texto='Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.'
            />

            <Articulos 
                titulo='Producto Dos'
                texto='Lorem ipsum nolor sit anet conseptour adifing elit. Lorem ipsum solor sit annet consectetur asthero elit.'
            />
            <Articulos 
                titulo='Producto Tres'
                texto='Sed nihil saepe et corporis magni laborum, labore delectus accusamus est debitis.'
            />
        </aside>
    );
}
