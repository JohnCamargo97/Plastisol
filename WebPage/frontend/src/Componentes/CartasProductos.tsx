import verMas from '../Img/Icono-ver-mas-flecha.png';


export function CartasProductos({img, titulo, texto}){

    return (

        <div className="flex justify-center h-full sm:w-full shadow-none lg:shadow-xl lg:rounded-lg transition-all ease-in-out delay-250 hover:-translate-y-2 duration-500 will-change-transform">
            <div className=" lg:w-[290px] w-[80%] h-[auto]  border border-slate-200 md:rounded-lg rounded-xl hover:border hover:border-black shadow-2xl lg:shadow-none">
                <div className="w-[full] h-[250px] relative">
                    <img className="absolute inset-0 w-full h-full object-cover md:rounded-lg rounded-xl" src={img} alt="" />
                </div>
                <div className="w-[auto] h-[auto] mt-2 p-2">
                    <p className="font-bold w-[100%] h-[100%] mb-2">{titulo}</p>
                    <p className=" w-[100%] h-[100%]">{texto}</p>
                </div>
                <div className="p-2 mb-4 w-[45%]">
                    <a className="vermas flex items-center hover:justify-center font-semibold text-[12px] hover:bg-black hover:text-white" href="/Productos">VER MÁS<img className="w-[20px] ml-1" src={verMas} alt="" /></a>
                </div>
            </div>
        </div>

    );
}

export default CartasProductos; 