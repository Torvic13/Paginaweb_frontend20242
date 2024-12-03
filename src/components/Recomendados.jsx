import './Recomendados.css';
import { useState, useEffect, useRef } from 'react';

const Recomendados = () => {
    const [productos, setProductos] = useState([]);
    const scrollRef = useRef(null);

    // Función para cargar productos recomendados
    useEffect(() => {
        fetch("http://localhost:3000/api/recomendados")
            .then(response => response.json())
            .then(data => setProductos(data))
            .catch(error => console.error("Error al cargar productos:", error));
    }, []);

    const scroll = (direction) => {
        if (direction === 'left') {
            scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
        } else {
            scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
        }
    };

    return (
        <>
            <div className="logo">Productos Recomendados</div>
            <div className="recommended-products container mt-4">
                <div className="d-flex align-items-center">
                    <button
                        className="btn btn-light me-2 d-none d-md-block"
                        onClick={() => scroll('left')}
                    >
                        <span className="carousel-control-prev-icon"></span>
                        <i className="bi bi-chevron-left"></i>
                    </button>
                    <div
                        className="row flex-nowrap overflow-auto"
                        ref={scrollRef}
                        style={{ width: '100%', scrollBehavior: 'smooth' }}
                    >
                        {productos.map((product) => (
                            <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4" key={product.id}>
                                <div className="card product-card">
                                    {product.badge && (
                                        <div className="badge bg-warning text-dark">
                                            {product.badge}
                                        </div>
                                    )}
                                    {product.extraBadge && (
                                        <div className="extra-badge bg-danger text-white">
                                            {product.extraBadge}
                                        </div>
                                    )}
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="card-img-top"
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title">{product.name}</h5>
                                        <p className="card-text text-danger">
                                            {product.priceRange}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <button
                        className="btn btn-light ms-2 d-none d-md-block"
                        onClick={() => scroll('right')}
                    >
                        <span className="carousel-control-next-icon"></span>
                        <i className="bi bi-chevron-right"></i>
                    </button>
                </div>
            </div>
        </>
    );
};

export default Recomendados;
