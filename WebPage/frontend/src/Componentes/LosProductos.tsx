import { useState, useEffect } from "react";

import Filtros from '../Componentes/Filtros'
import axios from "axios";
import Footer from "./Footer";


import imgCafeUno from '../Img/CafeUno.jpg';
import imgCafeDos from '../Img/CafeDos.jpg';
import imgCafeTres from '../Img/CafeTres.jpg';
import flechaIzq from '../Img/Icono-izquierda-black.png';
import flechaDer from '../Img/Icono-derecha-black.png';



    const LosProductos = () => {
    const [products, setProducts] = useState([]);
    const [nextPage, setNextPage] = useState("");
    const [prevPage, setPrevPage] = useState("");

    useEffect(() => {
        fetchProducts("http://127.0.0.1:8000/API/products/");
    }, []);

    const fetchProducts = async (url) => {
        try {
        const response = await axios.get(url);
        setProducts(response.data.results);
        setNextPage(response.data.next);
        setPrevPage(response.data.previous);
        } catch (error) {
        console.error("Error fetching products:", error);
        }
    };

    const handleSearchResults = (results) => {
        setProducts(results);
    };

    const handleNextPage = () => {
        fetchProducts(nextPage);
    };

    const handlePrevPage = () => {
        fetchProducts(prevPage);
    };
    

    const imagenesProductos = {
        "00101": imgCafeUno,
        "00102": imgCafeDos,
        "00103": imgCafeTres,
        // Añade más imágenes según sea necesario
    };


    return (

        <>
        
        {/* Barra de búsqueda */}
        <Filtros
        onSearchResults={handleSearchResults}
        onClearSearch={() => fetchProducts("http://127.0.0.1:8000/API/products/")}
        />

        <div className="lg:flex lg:justify-center lg:mt-6 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4 md:w-[100%] lg:w-[90%]">
                {products.map((product) => (
                    <li className="list-none" key={product.product_id}>
                        <div className="flex justify-center h-full sm:w-full shadow-none lg:shadow-xl lg:rounded-lg transition-all ease-in-out delay-250 hover:-translate-y-2 duration-500 will-change-transform">
                            <div className="transition-all duration-800 ease-in-out lg:w-[290px] w-[80%] h-[auto] cursor-pointer border border-slate-200 rounded-lg hover:border hover:border-black lg:shadow-none shadow-2xl">
                                <div className="w-[full] h-[250px] relative">
                                    <img className="absolute inset-0 w-full h-full object-cover rounded-lg" src={imagenesProductos[product.product_id]} alt="" />
                                </div>
                                <div className="w-[auto] h-[auto] mt-2 p-2">
                                    <p className="text-[16px] w-[100%] h-[100%] font-bold mb-5">{product.description}</p>
                                    <p className="text-[14px] text-gray-600 w-[100%] h-[100%] font-semibold mb-5">Unidades: {product.amount}</p>
                                    <p className="text-[16px] text-gray-600 w-[100%] h-[100%] font-semibold">${product.unit_price}</p>
                                </div>
                            </div>
                        </div>
                    </li>
                ))}
            </div>

        </div>

        <div className="my-10 lg:flex lg:justify-center mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">

            <div className="flex justify-center w-[100%]">

                <div className="w-[80%] sm:w-[50%] lg:w-[30%] xl:w-[30%] flex justify-between">

                    <button
                        className= "botones-siguiente bg-white hover:bg-black text-black hover:text-white font-bold py-1 px-2 border-b-[2px] border-black  flex items-center transition-all duration-700 ease-in-out"
                        onClick={handlePrevPage}
                        disabled={!prevPage}>
                        <img className="w-[22px] h-[22px] " src={flechaIzq} alt="" />
                        Anterior
                    </button>
                    
                    <button
                        className="botones-siguiente bg-white hover:bg-black text-black hover:text-white font-bold py-1 px-2 border-b-[2px] border-black flex items-center transition-all duration-700 ease-in-out"
                        onClick={handleNextPage}
                        disabled={!nextPage}>
                        Siguiente
                        <img className="w-[22px] h-[22px] " src={flechaDer} alt="" />
                    </button>

                </div>

            </div>
            
        </div>


        <footer>
            <Footer/>
        </footer>

        </>

    );
};

export default LosProductos;