import './Navbar.css';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <>
     {/* Barra de navegación principal */}
<nav className="navbar navbar-expand-lg navbar-dark bg-danger">
  <div className="container">
    {/* Logo SuperPet */}
    <Link
      to="/"
      className="navbar-brand text-white font-weight-bold"
      style={{ textDecoration: 'none' }}
    >
      SuperPet
    </Link>

    {/* Botón de hamburguesa para pantallas pequeñas */}
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>

    {/* Menú de navegación */}
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav mx-auto">
        {/* Enlaces de navegación */}
        <li className="nav-item">
            <Link to="/Perro" className="nav-link">Perro</Link>
        </li>
        <li className="nav-item">
            <Link to="/Gato" className="nav-link">Gato</Link>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">Nosotros</a>
        </li>
      </ul>

      {/* Iconos de usuario y carrito */}
      <div className="navbar-nav ml-auto">
        <Link to="/usuario">
          <button className="btn btn-light">
            <img
              src="https://www.superpet.pe/on/demandware.static/Sites-SuperPet-Site/-/default/dw8012cc24/images/header/user.png"
              alt="Usuario"
            />
          </button>
        </Link>
        <button className="btn btn-light">
          <img
            src="https://www.superpet.pe/on/demandware.static/Sites-SuperPet-Site/-/default/dwbccd2f8f/images/header/cart.png"
            alt="Carrito"
          />
        </button>
      </div>
    </div>
  </div>
</nav>

    </>
  );
};

export default Navbar;
