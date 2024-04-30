export function ListaProductos({ img, product }) {
    return (

        <div className="flex justify-center h-full sm:w-full">
            <div className="w-[325px] lg:w-[290px] md:w-[60%] h-[auto] mb-10 cursor-pointer border border-white hover:border-solid hover:border hover:border-black transition duration-700 ease-in-out">
                <div className="w-[full] h-[250px] relative">
                    <img className="absolute inset-0 w-full h-full object-cover" src={img} alt="" />
                </div>
                <div className="w-[auto] h-[auto] mb-5 mt-2 p-2">
                    <div className="flex items-center justify-between">
                        <h2 className="font-bold mb-[10px] text-[18px]">{product.product_id}</h2>
                    </div>
                    <p className="text-[18px] w-[100%] h-[100%] mb-5">{product.description}</p>
                    <p className="text-[18px] w-[100%] h-[100%] mb-5">{product.unit_price}</p>
                    <p className="text-[18px] w-[100%] h-[100%] mb-5">{product.amount}</p>
                </div>
            </div>
        </div>

    );
}

export default ListaProductos;
