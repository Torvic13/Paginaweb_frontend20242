import React, { useState, useEffect } from 'react';

const CRUD = () => {
  const [productos, setProductos] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({ nombre: '', categoria: '', precio: '', imagen: '' });
  const [currentProductId, setCurrentProductId] = useState(null);

  // Llamada al backend para obtener los productos
  useEffect(() => {
    fetch('http://localhost:3000/productos')  // Asegúrate de que esta URL esté bien configurada
      .then((response) => response.json())
      .then((data) => {
        setProductos(data); // Asignamos los productos a nuestro estado
      })
      .catch((error) => {
        console.error('Error al cargar los productos:', error);
      });
  }, []); // Solo se ejecuta una vez al montar el componente

  // Mostrar el modal para agregar o editar producto
  const handleShow = (product = null) => {
    setCurrentProductId(product ? product.id : null);
    setFormData(product ? { ...product } : { nombre: '', categoria: '', precio: '', imagen: '' });
    setShowModal(true);
  };

  const handleClose = () => setShowModal(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Agregar o actualizar un producto
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const url = currentProductId
      ? `http://localhost:3000/productos/${currentProductId}` // URL para actualizar
      : 'http://localhost:3000/productos'; // URL para crear un nuevo producto

    const method = currentProductId ? 'PUT' : 'POST'; // Si hay id es PUT (actualizar), sino POST (crear)

    fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        if (currentProductId) {
          // Actualizamos el estado si estamos editando un producto
          setProductos(
            productos.map((producto) =>
              producto.id === currentProductId ? { ...producto, ...formData } : producto
            )
          );
        } else {
          // Agregamos el nuevo producto al estado
          setProductos([...productos, data]);
        }
        setFormData({ nombre: '', categoria: '', precio: '', imagen: '' });
        setShowModal(false);
      })
      .catch((error) => {
        console.error('Error al agregar o actualizar producto:', error);
      });
  };

  // Eliminar un producto
  const handleDelete = (id) => {
    fetch(`http://localhost:3000/productos/${id}`, {
      method: 'DELETE',
    })
      .then(() => {
        setProductos(productos.filter((producto) => producto.id !== id)); // Actualizamos el estado
      })
      .catch((error) => {
        console.error('Error al eliminar el producto:', error);
      });
  };

  return (
    <div className="container mt-4">
      <h1>Productos</h1>

      <h2 className="mt-4">Lista de Productos</h2>
      <table className="table table-bordered mt-3">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Categoría</th>
            <th>Precio</th>
            <th>Imagen</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {productos.length === 0 ? (
            <tr>
              <td colSpan="5">No hay productos disponibles</td>
            </tr>
          ) : (
            productos.map((producto) => (
              <tr key={producto.id}>
                <td>{producto.nombre}</td>
                <td>{producto.categoria}</td>
                <td>{producto.precio}</td>
                <td><img src={producto.imagen} alt={producto.nombre} width="50" /></td>
                <td>
                  <button className="btn btn-info me-2" onClick={() => handleShow(producto)}>Editar</button>
                  <button className="btn btn-danger ml-2 me-2" onClick={() => handleDelete(producto.id)}>Eliminar</button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      {/* Modal para agregar o editar producto */}
      {showModal && (
        <div className="modal show" style={{ display: 'block' }} tabIndex="-1" role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{currentProductId ? 'Editar Producto' : 'Agregar Producto'}</h5>
                <button type="button" className="btn-close" onClick={handleClose} aria-label="Close" />
              </div>
              <div className="modal-body">
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label>Nombre</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Ingresa el nombre del producto"
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Categoría</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Ingresa la categoría del producto"
                      name="categoria"
                      value={formData.categoria}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Precio</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Ingresa el precio del producto"
                      name="precio"
                      value={formData.precio}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Imagen (URL)</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Ingresa la URL de la imagen"
                      name="imagen"
                      value={formData.imagen}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <button type="submit" className="btn btn-primary">
                    {currentProductId ? 'Actualizar Producto' : 'Agregar Producto'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CRUD;
