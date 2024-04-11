export function Articulos({titulo, texto}){

    return (

        <article className="h-auto border-b-2 py-7 last:border-none">
            <h2 className="text-white font-bold text-[18px] mb-2">{titulo}</h2>
            <p className="text-[16px]">{texto}</p>
        </article>
    )
}
