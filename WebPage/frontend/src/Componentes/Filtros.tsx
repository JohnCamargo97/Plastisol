import { useState } from 'react';
import { buscarProductos } from '../Api/ApiFiltro';

import buscar from '../Img/IconoBusqueda.png';

function BarraBusqueda({ onSearchResults, onClearSearch }) {
    const [query, setQuery] = useState('');
    const [productos, setProductos] = useState([]);

    const handleInputChange = async (event) => {
        const inputValue = event.target.value;
        setQuery(inputValue);

        if (inputValue.trim() !== '') {
            const results = await buscarProductos(inputValue, 'parafinado');
            setProductos(results);
            // Pasar los resultados a LosProductos
            onSearchResults(results);
        } else {
            setProductos([]);
            // Pasar un array vacío a LosProductos para borrar los resultados de la búsqueda
            onSearchResults([]);
        }
    };

    const handleKeyUp = (event) => {
        if (event.key === 'Backspace' && query === '') {
            // Si la tecla presionada es Backspace y el campo de búsqueda está vacío
            // llamar a la función para borrar la búsqueda en LosProductos
            onClearSearch();
        }
    };

    return (
        
        <section className='mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl px-6 mt-5 mb-5'>

            <div className='border-t-[1px] border-black flex justify-center lg:justify-between items-center h-[100px] w-[100%]'>

                <div>
                    <h3 className='font-bold text-5xl'>Productos</h3>
                </div>

                <div className='lg:py-5'>
                    <div className='bg-white w-full flex justify-between items-center cursor-pointer rounded border-2 border-black'>
                        <input
                            className="w-[300px] md:w-[50%] h-[50px] outline-none border-none p-4"
                            type="text"
                            placeholder="Buscar"
                            value={query}
                            onChange={handleInputChange}
                            onKeyUp={handleKeyUp}
                        />
                        <img className='w-[20px] h-[20px] mr-2' src={buscar} alt="" />
                    </div>
                </div>

            </div>

        </section>

    );
}

export default BarraBusqueda;