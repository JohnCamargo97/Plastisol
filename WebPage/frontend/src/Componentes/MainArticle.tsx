import { useState, useEffect } from 'react';
import FotoUno from '../Img/FotoUno.jpg';
import FotoDos from '../Img/FotoDos.jpg';
import FotoTres from '../Img/FotoTres.jpg';
import FotoCuatro from '../Img/FotoCuatro.png';


export function MainArticle(){

    const imagenes = [FotoUno, FotoDos, FotoTres, FotoCuatro];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);


    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImageIndex(prevIndex => (prevIndex + 1) % imagenes.length);
        }, 5000); // Cambia la imagen cada 5 segundos

        return () => clearInterval(intervalId); // Limpia el intervalo cuando el componente se desmonta

    }, []);

    return (
        
        <section className='relative pt-2'>

                <picture className='w-full'>
                    <source media='(max-width: 640px)' srcSet={imagenes[currentImageIndex]} />
                    <source media='(min-width: 641px)' srcSet={imagenes[(currentImageIndex + 1) % imagenes.length]} />
                    <div className='w-full h-auto relative'>
                        <img className='absolute inset-0 w-full h-full object-cover opacity-30' src={imagenes[currentImageIndex]} alt='Articulos'/>
                        
                        <div className='h-[auto] text-white font-bold '>
                            <div className='bg-black h-full md:p-10 p-5'>
                                <div className='mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl xl:p-5'>
                                    <h2 className='text-[40px] sm:text-[50px] leading-none'>¿Por qué trabajar con nosotros?</h2>
                                    <p className='text-[15px] mt-5 sm:text-[18px]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum voluptates sapiente nam id sequi quas at, saepe modi similique fugiat minus aspernatur omnis dolorem assumenda debitis quo nesciunt culpa voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos tempora voluptate laudantium, aliquid quae omnis nihil tempore? Hic qui recusandae quidem quas pariatur perspiciatis magnam asperiores, explicabo ex fuga excepturi? </p>
                                    <ul className='mt-5'>
                                        <li>Text1</li>
                                        <li>Text2</li>
                                        <li>Text3</li>
                                        <li>Text4</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                </picture>

        </section>
    );
}
