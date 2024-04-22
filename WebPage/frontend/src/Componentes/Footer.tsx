import ubicacion from '../Img/UbicacionPlastisol.png';

export function Footer() {
  return (
    <div className='relative mt-16 bg-green-600'>
      <div className='px-4 pt-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>

        {/* Contenedor flex para el footer */}
        <div className='grid gap-16 row-gap-10 mb-8 lg:flex lg:justify-end'>

          <div className='md:max-w-md lg:col-span-2 lg:col-start-1'>

            <span className='text-xl font-bold tracking-wide text-white uppercase'>
              Plastisol
            </span>

            <div className='mt-4 lg:max-w-sm'>
              <p className='text-sm'>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam.
              </p>
              <p className='mt-4 text-sm'>
                Eaque ipsa quae ab illo inventore veritatis et quasi architecto
                beatae vitae dicta sunt explicabo.
              </p>
            </div>
          </div>

          <div className=''>
            <div>
              <p className='font-semibold tracking-wide text-teal-accent-400 text-white'>
                Contactanos
              </p>

              <ul className='mt-2 space-y-2'>
                <li>
                  <a href="/">+57 3202238383</a>
                </li>
                <li>
                  <a href="/">ejemplo@gmail.com</a>
                </li>
                <li>
                  <a href="/">Cra 25A Sur MZ D CS7</a>
                </li>
              </ul>

            </div>
          </div>

          <div className=''>
            <div>
              <p className='font-semibold tracking-wide text-teal-accent-400 text-white'>
                Proveedores
              </p>

              <ul className='mt-2 space-y-2'>
                <li>
                  <a href="/">Plasticos S.A.S</a>
                </li>
                <li>
                  <a href="/">eCommerce</a>
                </li>
                <li>
                  <a href="/">Alkosto</a>
                </li>
                <li>
                  <a href="/">La Garza</a>
                </li>
              </ul>

            </div>
          </div>

          <div className='w-full h-[300px] md:w-[30%]'>
            <img className='rounded w-full h-[100%] object-cover' src={ubicacion} alt="" />
          </div>

        </div>

        {/* Copyright siempre abajo */}
        <div className='pt-5 pb-10 border-t border-white'>
          <p className='text-sm text-white text-center lg:text-right'>
            © Copyright 2024 Plastisol.
          </p>
        </div>

      </div>
    </div>
  );
}
