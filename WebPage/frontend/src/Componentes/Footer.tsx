import ubicacion from '../Img/UbicacionPlastisol.png';

export function Footer() {
  return (
    <footer className="bg-gray-800 text-white pt-10 pb-4">

      <div className="container mx-auto p-5">
        <div className="md:flex justify-between">

          {/* Sección de Plastisol */}
          <div className="w-full mb-8">
            <h3 className="text-lg mb-4 font-semibold">Plastisol</h3>
            <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur aperiam alias, dicta eius quas nemo soluta consequatur sapiente, reiciendis iste excepturi! Dicta tenetur quisquam quibusdam voluptatum autem. Provident, cumque doloremque?</span>
          </div>

          <div className='w-full md:flex md:mx-12'>

            {/* Sección de información */}
            <div className="w-full mb-8">
              <h3 className="text-lg mb-4 font-semibold">Proveedores</h3>
              <p className="mb-2">Plastisol S.A.S</p>
              <p className="mb-2">Plastisol S.A.S</p>
              <p className="mb-2">Plastisol S.A.S</p>
              <p className="mb-2">Plastisol S.A.S</p>
            </div>

            {/* Sección de información */}
            <div className="w-full mb-8">
              <h3 className="text-lg mb-4 font-semibold">Información</h3>
              <p className="mb-2">Dirección: Cra 26 # 37-10</p>
              <p className="mb-2">Teléfono: +57 3184278532</p>
              <p>Email: info@misitioweb.com</p>
            </div>

          </div>

          {/* Sección de información */}
          <div className="w-[50%] h-[200px] mb-20">
            <h3 className="text-lg mb-4 font-semibold">Ubicación</h3>
            <img className='w-full h-[100%] object-cover rounded-[15px]' src={ubicacion} alt="" />
          </div>

        </div>
        {/* Derechos de autor */}
        <div className="mt-8 text-center">
          <p>&copy; 2024 Plastisol. Todos los derechos reservados.</p>
        </div>
      </div>

    </footer>
  );
};

export default Footer;


