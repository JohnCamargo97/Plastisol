import PruebaMovil from '../Img/PruebaMovil.png'
import PruebaPc from '../Img/PruebaMovil.png'

export function MainArticle(){

    return (
        
        <section className='mb-12'>
            <picture>
                <source media='(max-width: 640px)' srcSet={PruebaMovil} />
                <source media='(min-width: 641px)' srcSet={PruebaPc} />
                <div className='w-100 h-64 relative'>
                    <img className='absolute inset-0 w-full h-full object-cover' src={PruebaMovil} alt='Articulos'/>
                </div>
            </picture>

            <div className='sm:flex sm:justify-center sm:items-center sm:h-[400px]'>
                <div className='flex-1 py-6'>
                    <h2 className='text-[40px] font-bold sm:text-[50px] leading-none'>Lorem, ipsum dolor sit amet consectetur?</h2>
                </div>

                <div className='flex-1 pt-2 sm:pt-6 sm:ml-6'>
                    <p className='text-[15px] mb-5 sm:text-[18px]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum voluptates sapiente nam id sequi quas at, saepe modi similique fugiat minus aspernatur omnis dolorem assumenda debitis quo nesciunt culpa voluptatum.</p>
                    <button className='bg-blue-500 hover:bg-blue-600 w-[200px] h-[50px] uppercase text-white font-bold'>Leer Más</button>
                </div>
            </div>

        </section>

    );
}