import './Marcas.css'
import React from 'react';
import { Link } from 'react-router-dom';

const Marcas = () => {
  return (
    <>
      <div className="logo">Nuestras marcas favoritas para tus mascotas</div>
      <div className="container d-flex justify-content-center" style={{ marginTop: '40px', marginBottom: '40px' }}>

        <div className="card" style={{ width: '13rem', margin: '1rem' }}>
          <img 
            src="https://www.superpet.pe/on/demandware.static/-/Library-Sites-SuperPetSharedLibrary/default/dw16d32e02/SuperPet/Homepage/2022/logo-bolitas/logo-nath.jpg" 
            className="card-img-top" 
            alt="Imagen 1" 
          />
          <Link to="/NATH" className="btn btn-danger">Saber más</Link>
        </div>

        <div className="card" style={{ width: '13rem', margin: '1rem' }}>
          <img 
            src="https://www.superpet.pe/on/demandware.static/-/Library-Sites-SuperPetSharedLibrary/default/dw9029a873/SuperPet/Homepage/2022/logo-bolitas/HILLS.jpg" 
            className="card-img-top" 
            alt="Imagen 2" 
          />
          <Link to="/HILLS" className="btn btn-danger">Saber más</Link>
        </div>

        <div className="card" style={{ width: '13rem', margin: '1rem' }}>
          <img 
            src="https://www.superpet.pe/on/demandware.static/-/Library-Sites-SuperPetSharedLibrary/default/dw3450331d/SuperPet/Homepage/2022/logo-bolitas/pro-plan.jpg" 
            className="card-img-top" 
            alt="Imagen 3"
          />
          <Link to="/PROPLAN" className="btn btn-danger">Saber más</Link>
        </div>

        <div className="card" style={{ width: '13rem', margin: '1rem' }}>
          <img 
            src="https://www.superpet.pe/on/demandware.static/-/Library-Sites-SuperPetSharedLibrary/default/dw39064d4c/SuperPet/Homepage/2022/logo-bolitas/CANBOv2.jpg" 
            className="card-img-top" 
            alt="Imagen 4"
          />
          <Link to="/CANBO" className="btn btn-danger">Saber más</Link>
        </div>

      </div>
    </>
  );
};

export default Marcas;
