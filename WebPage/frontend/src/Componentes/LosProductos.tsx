import imgCafeUno from '../Img/CafeUno.jpg'
import imgCafeDos from '../Img/CafeDos.jpg'
import imgCafeTres from '../Img/CafeTres.jpg'

import { useEffect, useState,  } from 'react';
import { ListaProductos } from "./ListaProductos";
import { DatosProductos } from '../Api/DatosDelProducto';

export function LosProductos(){

    const [datos, setDatos] = useState([]);

    useEffect(() => {
        async function CargarDatos(){
            const res = await DatosProductos();
            setDatos(res.data);

        }
        CargarDatos();

    }, []);
    
    const imagenesProductos = {
        1: imgCafeUno,
        2: imgCafeDos,
        3: imgCafeTres,
        // Añade más imágenes según sea necesario
    };

    return (

        <>

        <section className='my-20 lg:flex md:mt-20 lg:mt-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl'>

            {datos.map(dato => (
                <ListaProductos
                key={dato.id}
                dato={dato} 
                img={imagenesProductos[dato.id]}/>
                
            ))}

        </section>
        
        </>

    );
}

export default LosProductos; 