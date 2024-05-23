
import { useEffect } from 'react';

import Aprobado from '../Img/IconoLike.png'
import Error from '../Img/IconoError.png'


const Alert = ({ message, type, onClose }) => {
    useEffect(() => {
        const timeout = setTimeout(() => {
            onClose();
        }, 5000); // Tiempo en milisegundos, en este caso 5 segundos

        return () => clearTimeout(timeout);
    }, [onClose]);

    if (!message) return null;

    let icon;
    let alertClass;

    if (type === 'success') {
        icon = <img className='w-[40px] h-[30px] md:w-[22px] md:h-[22px]' src={Aprobado} alt="" />
        alertClass = 'border-green-500 bg-green-100';
    } else {
        icon = <img className='w-[40px] h-[25px] md:w-[22px] md:h-[22px]' src={Error} alt="" />
        alertClass = 'border-red-500 bg-red-100';
    }

    return (
        <div className={`flex items-center mt-4 p-4 border rounded md:w-[60%] ${alertClass}`}>
            <div className="mr-2">{icon}</div>
            <div>{message}</div>
        </div>
    );
};

export default Alert;
