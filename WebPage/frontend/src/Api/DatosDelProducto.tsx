import axios from "axios";

export const DatosProductos = async () => {
    
    try {
        const response = await axios.get('http://127.0.0.1:8000/API/products/');
        return response.data.results;
    } catch (error) {
        console.error('Error fetching data:', error);
        return [];
    }
};

export default DatosProductos;
