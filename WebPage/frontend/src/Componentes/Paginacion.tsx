export function Paginacion() {
    return (

        <div className="flex justify-center h-full sm:w-full">

            <div className="flex justify-around w-[50%]">

            <button className="bg-blue-700 py-2 px-8 text-white font-semibold">Anteior</button>

            <div className="flex">
                <p className="ml">1</p>
                <p>2</p>
                <p>3</p>
                <p>4</p>
            </div>

            <button className="bg-blue-700 py-2 px-8 text-white font-semibold">Siguiente</button>

            </div>
            
        </div>

    );
}

export default Paginacion;