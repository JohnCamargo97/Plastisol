export function Filtros(){

    return (
        <section className='mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl px-5 mt-5'>

            <div className='border-t-[1px] border-black flex justify-between items-center h-[100px]'>

                <div className='px-14 py-5'>
                    <select className='w-[180px] h-[50px] rounded cursor-pointer border-2 border-black' name="Filtro" id="">
                        <option value="" disabled selected hidden>Filtro</option>
                        <option value="1">Parafinados</option>
                        <option value="2">PVC</option>
                        <option value="3">Plástico PP</option>
                    </select>
                </div>

                <div className='px-14 py-5'>
                    <input className="w-[180px] h-[50px] cursor-pointer rounded border-2 border-black p-4" type="text" placeholder="Buscar"/>
                </div>

            </div>
            
        </section>
    );
}

export default Filtros;