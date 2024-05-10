

export function FormQuote(){

    return (
        <>

            <h3 className="font-bold text-2xl mb-5">Realice una nueva cotización</h3>

            <div className="border-2 rounded border-slate-100 p-5 shadow-2xl">

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-0.5 mb-10 h-auto">

                    <div className="">
                        <div className="mb-4">
                            <h3 className="font-semibold mb-2 px-2">Nombre del cotizante</h3>
                            <input className="w-[80%] py-2 px-2 border-2 rounded focus:outline-slate-950" type="text" placeholder="Nombre Completo" />
                        </div>

                        <div className="mb-4 h-auto">
                            <h3 className="font-semibold mb-2 px-2">Identificación del cotizante</h3>
                            <input className="w-[50%] py-2 px-2 border-2 rounded focus:outline-slate-950" type="text" placeholder="CC" />
                        </div>

                        <div className="mb-5">
                            <h3 className="font-semibold mb-2">Dirección de correo</h3>
                            <input className="w-[80%] py-2 px-2 border-2 rounded focus:outline-slate-950" type="text" placeholder="Correo" />
                        </div>

                        <div className="mt-4 ">
                            <button className="bg-slate-950 text-white px-[100px] py-2 font-semibold text-lg hover:bg-slate-900">Enviar</button>
                            <img src="" alt="" />
                        </div>

                    </div>

                    <div>
                        <div>
                            <h3 className="font-semibold mb-1">Descripción</h3>
                            <span className="h-uto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime vel iure error porro eos harum inventore deleniti cumque reprehenderit! Illum quasi officiis cumque asperiores necessitatibus libero accusantium neque quo tempora. lorem</span>
                        </div>
                    </div>

                </div>

            </div>

        </>
    );
}

export default FormQuote;