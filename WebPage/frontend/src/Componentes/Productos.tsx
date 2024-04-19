export function Productos({img, precio, titulo, texto}){

    return (
        <article className='flex justify-center h-full sm:w-full'> {/* Añade justify-center aquí */}

            <div className='w-[325px] h-full bg-slate-100 rounded-[15px] shadow-2xl'>

                <div className='w-[full] h-[300px] relative mx-5 my-5 '>
                    <img className='absolute inset-0 w-full h-full object-cover rounded-[15px]' src={img} alt="" />
                </div>

                <div className='mx-5 w-[auto] h-[auto] mb-5'>
                    <div className="flex items-center justify-between">
                        <h2 className='font-bold mb-[10px] text-[18px]'>{titulo}</h2>
                        <p className='text-slate-500 text-2xl mb-[10px] font-bold'>{precio}</p>
                    </div>
                    <p className='text-slate-400 text-[18px] w-[100%] h-[100%] mb-5'>{texto}</p>
                </div>

            </div>

        </article>
    );
}

