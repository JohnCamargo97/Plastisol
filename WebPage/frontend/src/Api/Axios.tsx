import { useState, useEffect } from "react";
import axios from "axios";

const Axios = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/product/").then((response) => {
        setData(response.data);
      })

  }, []);

  return (

    <div className="contenedor-mayor">
      <h1 className="titulo">Datos desde Django REST Framework</h1>
      <div className="contenedor-menor">
        {data.map((item) => (
          <ul key={item.id} className="contenedor-lista">

            <li>ID: {item.id}</li>
            <li>ID Producto: {item.product_id}</li>
            <li>Categoria: {item.category}</li>
            <li>Descripción: {item.description}</li>
            <li>Cantidad: {item.amount}</li>
            <li>Precio unidad: {item.unit_price}</li>

          </ul>
        ))}
      </div>
    </div>

  );
};

export default Axios;