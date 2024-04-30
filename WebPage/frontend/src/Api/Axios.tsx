import { useState, useEffect } from "react";
import axios from "axios";

interface Product {
  product_id: string;
  url: string;
  category_data: {
      category: string;
  };
  description: string;
  amount: number;
  unit_price: string;
}

const Axios = () => {
  const [data, setData] = useState<Product[]>([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/API/products/1/")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="contenedor-mayor">
      <h1 className="titulo">Datos desde Django REST Framework</h1>
      <div className="contenedor-menor">
        {data.map((product) => (
          <ul key={product.product_id} className="contenedor-lista">
            <li>ID Producto: {product.product_id}</li>
            <li>Categoria: {product.category_data.category}</li>
            <li>Descripción: {product.description}</li>
            <li>Cantidad: {product.amount}</li>
            <li>Precio unidad: {product.unit_price}</li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default Axios;
