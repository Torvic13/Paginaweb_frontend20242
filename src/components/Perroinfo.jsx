import React, { useEffect, useState } from 'react';
import './Perroinfo.css';

const Perroinfo = () => {
  const [productos, setProductos] = useState([]);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('');

  useEffect(() => {
    // Aquí pasamos la categoría como parámetro de consulta
    const url = categoriaSeleccionada
      ? `http://localhost:3000/productos/perros?categoria=${categoriaSeleccionada}`
      : 'http://localhost:3000/productos/perros';

    fetch(url)
      .then(response => response.json())
      .then(data => setProductos(data))
      .catch(error => console.error("Error al cargar productos:", error));
  }, [categoriaSeleccionada]);

  return (
    <div className="perroinfo-container">
      <aside className="filtro-categoria">
        <h3>Filtrar por Categoría</h3>
        <ul>
          <li onClick={() => setCategoriaSeleccionada('')}>Todos</li>
          <li onClick={() => setCategoriaSeleccionada('perro pequeño')}>Comida para Perro Pequeño</li>
          <li onClick={() => setCategoriaSeleccionada('perro mediano')}>Comida para Perro Mediano</li>
          <li onClick={() => setCategoriaSeleccionada('perro grande')}>Comida para Perro Grande</li>
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

export default Perroinfo;
