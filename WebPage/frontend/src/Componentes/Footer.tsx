import ubicacion from '../Img/UbicacionPlastisol.png';

export function Footer() {
  return (
    
    <footer className="bg-slate-950 text-white py-8">

      <div className="container mx-auto md:p-10 p-0 md:flex md:justify-between md:text-left  text-center">

        <div className="md:w-[250px] xl:w-[300px]  md:mr-5 mb-10 p-5 md:p-0">
          <h3 className="mb-4 font-bold text-lg">Plastisol</h3>
          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, praesentium nesciunt. Distinctio beatae est tempore voluptatibus adipisci odit a, iusto delectus assumenda id ullam, possimus dolores sapiente, dignissimos deserunt cum!</span>
        </div>

        <div className="md:w-[150px]  md:mr-5 mb-10">
          <h3 className="mb-4 font-bold text-lg">Proveedores</h3>
          <ul>
            <li className="mb-2 hover:text-slate-300"><a href="/">Plastisol S.A.S</a></li>
            <li className="mb-2 hover:text-slate-300"><a href="/">Plastisol S.A.S</a></li>
            <li className="mb-2 hover:text-slate-300"><a href="/">Plastisol S.A.S</a></li>
            <li className="hover:text-slate-300"><a href="/">Plastisol S.A.S</a></li>
          </ul>
        </div>

        <div className="md:w-[150px]  md:mr-5 mb-10">
          <h3 className="mb-4 font-bold text-lg">Información</h3>
          <ul>
            <li className="mb-2 hover:text-slate-300"><a href="/">Cra 26 # 37-10</a></li>
            <li className="mb-2 hover:text-slate-300"><a href="/">+57 3184278532</a></li>
            <li><a className="hover:text-slate-300" href="/">info@misitioweb.com</a></li>
          </ul>
        </div>

        <div className="md:w-[250px]  flex-col items-center">
          <h3 className="mb-4 font-bold text-lg">Ubicación</h3>
          <div className="flex justify-center">
            <img className="md:w-full w-[50%] h-[200px] object-cover rounded-[15px]" src={ubicacion} alt="" />
          </div>
        </div>


      </div>

      {/* Derechos de autor */}
      <div className="mt-8 text-center">
        <p>&copy; 2024 Plastisol. Todos los derechos reservados.</p>
      </div>

    </footer>
  );
}

export default Footer;
