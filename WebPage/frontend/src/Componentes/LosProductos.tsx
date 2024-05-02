import { useState, useEffect } from "react";
import axios from "axios";

import Footer from "./Footer";

import imgCafeUno from '../Img/CafeUno.jpg';
import imgCafeDos from '../Img/CafeDos.jpg';
import imgCafeTres from '../Img/CafeTres.jpg';

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

        <section>

            <div className="my-20 lg:flex lg:justify-center md:mt-20 lg:mt-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 lg:w-[85%]">
                    {products.map((product) => (
                        <li className="list-none" key={product.product_id}>
                            <div className="flex justify-center h-full sm:w-full">
                                <div className="w-[325px] lg:w-[290px] md:w-[60%] h-[auto] mb-10 cursor-pointer border border-white hover:border-solid hover:border hover:border-black transition duration-700 ease-in-out">
                                    <div className="w-[full] h-[250px] relative">
                                        <img className="absolute inset-0 w-full h-full object-cover" src={imagenesProductos[product.product_id]} alt="" />
                                    </div>
                                    <div className="w-[auto] h-[auto] mt-2 p-2">
                                        <p className="text-[18px] w-[100%] h-[100%] mb-5">{product.description}</p>
                                        <p className="text-[18px] w-[100%] h-[100%] mb-5">{product.unit_price}</p>
                                        <p className="text-[18px] w-[100%] h-[100%] mb-5">{product.amount}</p>
                                    </div>
                                </div>
                            </div>
                        </li>
                    ))}
                </div>

            </div>

            <div className="my-20 lg:flex lg:justify-center md:mt-20 lg:mt-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">

                <div className="w-[25%] flex justify-between">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        onClick={handlePrevPage}
                        disabled={!prevPage}>
                        Anterior
                    </button>
                    
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        onClick={handleNextPage}
                        disabled={!nextPage}>
                        Siguiente
                    </button>
                </div>
                
            </div>

        </section>

        <footer>
            <Footer/>
        </footer>

        </>

    );
};

export default LosProductos;