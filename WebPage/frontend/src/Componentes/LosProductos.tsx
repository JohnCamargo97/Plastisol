import { useEffect, useState } from 'react';
import { ListaProductos } from './ListaProductos';
import { DatosProductos } from '../Api/DatosDelProducto';
import { Paginacion } from '../Componentes/Paginacion';
import { Footer } from '../Componentes/Footer'

import imgCafeUno from '../Img/CafeUno.jpg';
import imgCafeDos from '../Img/CafeDos.jpg';
import imgCafeTres from '../Img/CafeTres.jpg';

const LosProductos = () => {

    interface Product {
        product_id: string;
        url: string;
        category_data: {
            category: string;
        };
        description: string;
        amount: number;
        unit_price: string;
    }


    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        async function cargarDatos() {
            const res = await DatosProductos();
            setProducts(res);
        }
        cargarDatos();
    }, []);

    const imagenesProductos = {
        "00101": imgCafeUno,
        "00102": imgCafeDos,
        "00103": imgCafeTres,
        // Añade más imágenes según sea necesario
    };

    return (

        <>
        <section className="my-20 lg:flex lg:justify-center md:mt-20 lg:mt-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 lg:w-[85%]">
                {products.map((product) => (
                    <ListaProductos
                        key={product.product_id}
                        product={product}
                        img={imagenesProductos[product.product_id]}
                    />
                ))}

            </div>

        </section>

        <section className="my-20 lg:flex lg:justify-center md:mt-20 lg:mt-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">

            <Paginacion />

        </section>

        <footer>
            <Footer />
        </footer>

        </>
    );
}

export default LosProductos;