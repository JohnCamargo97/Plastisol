export function CartasProductos({img, titulo, texto}){

    return (

        <div className="flex justify-center h-full sm:w-full shadow-none lg:shadow-xl lg:rounded-lg ">
            <div className="transition-all duration-800 ease-in-out lg:w-[290px] w-[80%] h-[auto] cursor-pointer border lg:border-slate-100 border-black lg:rounded-lg hover:border hover:border-black">
                <div className="w-[full] h-[250px] relative">
                    <img className="absolute inset-0 w-full h-full object-cover lg:rounded-lg" src={img} alt="" />
                </div>
                <div className="w-[auto] h-[auto] mt-2 p-2">
                    <p className="font-bold w-[100%] h-[100%] mb-2">{titulo}</p>
                    <p className=" w-[100%] h-[100%]">{texto}</p>
                </div>
            </div>
        </div>

    );
}

export default CartasProductos; 