import React, { useEffect, useState } from 'react';
import './Gatoinfo.css';

const Gatoinfo = () => {
  const [productos, setProductos] = useState([]);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('');

  useEffect(() => {
    // Aquí pasamos la categoría como parámetro de consulta
    const url = categoriaSeleccionada
      ? `http://localhost:3000/productos/gatos?categoria=${categoriaSeleccionada}`
      : 'http://localhost:3000/productos/gatos';

    fetch(url)
      .then(response => response.json())
      .then(data => setProductos(data))
      .catch(error => console.error("Error al cargar productos:", error));
  }, [categoriaSeleccionada]);

  return (
    <div className="gatoinfo-container">
      <aside className="filtro-categoria">
        <h3>Filtrar por Categoría</h3>
        <ul>
          <li onClick={() => setCategoriaSeleccionada('')}>Todos</li>
          <li onClick={() => setCategoriaSeleccionada('gato pequeño')}>Comida para Gato Pequeño</li>
          <li onClick={() => setCategoriaSeleccionada('gato mediano')}>Comida para Gato Mediano</li>
          <li onClick={() => setCategoriaSeleccionada('gato grande')}>Comida para Gato Grande</li>
        </ul>
      </aside>

      <main className="productos-grid">
        {productos.map(producto => (
          <div className="producto-card" key={producto.id}>
            <img src={producto.imagen} alt={producto.nombre} className="producto-imagen" />
            <h4>{producto.nombre}</h4>
            <p>{producto.precio}</p>
          </div>
        ))}
      </main>
    </div>
  );
};

export default Gatoinfo;
