export function Productos({img, numero, titulo, texto}){

    return (

        <article className='flex mb-10 sm:w-[100%]'>
            <div className='w-[100px] h-[auto] flex-none relative'>
                <img className='absolute inset-0 w-full h-full object-cover' src={img} alt="" />
            </div>

            <div className='pl-5'>
                <p className='text-slate-400 text-3xl mb-[10px] font-bold'>{numero}</p>
                <h2 className='font-bold mb-[10px] text-[18px]'>{titulo}</h2>
                <p className='text-slate-400 text-[18px] sm:w-[85%]'>{texto}</p>
            </div>
        </article>

    );
}
