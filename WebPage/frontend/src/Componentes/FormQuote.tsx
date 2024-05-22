import { useState } from 'react';
import axios from 'axios';

import ImgForm from '../Img/ImagenForm.png'

export function FormQuote() {
    const [formData, setFormData] = useState({
        author: '',
        identification: '',
        description: '',
        ReceiverAddress: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://127.0.0.1:8000/API/products/cotizacion/', formData);
            console.log('Success:', response.data);
            // Manejar la respuesta exitosa, como limpiar el formulario o mostrar un mensaje de éxito
        } catch (error) {
            console.error('Error:', error);
            // Manejar el error, como mostrar un mensaje de error
        }
    };

    return (
        <>
            <h3 className="font-bold text-2xl mb-5">Realice una nueva cotización</h3>
            <div className="border-2 rounded border-slate-100 p-5 shadow-2xl">
                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-0.5  h-auto">
                        <div className="">
                            <div className="mb-4">
                                <h3 className="font-semibold mb-2 px-2">Nombre del Cotizante</h3>
                                <input
                                    className="w-[80%] py-2 px-2 border-2 rounded focus:outline-slate-950"
                                    type="text"
                                    name="author"
                                    placeholder="Nombre Completo"
                                    value={formData.author}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="mb-4 h-auto">
                                <h3 className="font-semibold mb-2 px-2">Identificación del Cotizante</h3>
                                <input
                                    className="w-[50%] py-2 px-2 border-2 rounded focus:outline-slate-950"
                                    type="text"
                                    name="identification"
                                    placeholder="CC"
                                    value={formData.identification}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="mb-5">
                                <h3 className="font-semibold mb-2">Correo del Cotizante</h3>
                                <input
                                    className="w-[80%] py-2 px-2 border-2 rounded focus:outline-slate-950"
                                    type="text"
                                    name="ReceiverAddress"
                                    placeholder="Dirección"
                                    value={formData.ReceiverAddress}
                                    onChange={handleChange}
                                />
                            </div>
                            
                            <div className="mb-5">
                                <h3 className="font-semibold mb-2">Descripción</h3>
                                <textarea
                                    className="w-[100%] md:w-[80%] py-2 px-2 border-2 rounded focus:outline-slate-950"
                                    name="description"
                                    placeholder="Descripción"
                                    value={formData.description}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="mt-4">
                                <button
                                    className="bg-slate-950 text-white px-[100px] py-2 font-semibold text-lg hover:bg-slate-900"
                                    type="submit"
                                >
                                    Enviar
                                </button>
                            </div>

                        </div>

                        <div className='hidden sm:flex items-center justify-center'>
                            <div className="w-[80%] h-[80%]">
                                <img className='w[100%] h-[100%]' src={ImgForm} alt="" />
                            </div>
                        </div>

                    </div>
                </form>
            </div>
        </>
    );
}

export default FormQuote;
