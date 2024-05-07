// Definimos una función que realiza la llamada a la API y devuelve los resultados
export async function buscarProductos(query, tagFilters) {
  const url = `http://127.0.0.1:8000/API/products/search/?q=${query}&tag=${tagFilters}`;
  
  try {
      const response = await fetch(url);
      const data = await response.json();
      return data.hits;
  } catch (error) {
      console.error('Error al buscar productos:', error);
      return [];
  }
}

