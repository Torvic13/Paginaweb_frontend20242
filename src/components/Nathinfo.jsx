import './Nathinfo.css';

const Nathinfo = () => {
return <>
<div className="container d-flex justify-content-center flex-wrap">
  <div className="card custom-card">
    <img
      src="https://www.nathpetfood.com/img/bodegon-01-min.png"
      className="card-img-top custom-img"
      alt="imagen 1"
    />
  </div>
  <div className="text-container">
    <h2 className="text-blue font-weight-bold">Nutrición avanzada</h2>
    <h3 className="text-blue">Para tu mascota</h3>
    <p>
      <span className="text-blue font-weight-bold">NATH</span> nace con el
      objetivo de cuidar de todos los perros y gatos, en todas las etapas de
      su vida. Todas las recetas NATH han sido formuladas científicamente por veterinarios para <span className="text-blue font-weight-bold">garantizar la salud y el bienestar</span> de nuestras mascotas a través de una alimentación funcional de alta
      calidad que garantiza un aporte idóneo de cada nutriente.
    </p>
  </div>
</div>

<div className="container-fluid">
  <h3 className="benefits-text">BENEFICIOS NUTRICIONALES</h3>
  <div className="benefits-columns">
    <div className="benefits-item">
      <p>Desarrollo de la estructura ósea</p>
    </div>
    <div className="benefits-item">
      <p>Promueve la salud del sistema cardiovascular</p>
    </div>
    <div className="benefits-item">
      <p>Cuidado de la piel y el pelo</p>
    </div>
    <div className="benefits-item">
      <p>Protección interna</p>
    </div>
    <div className="benefits-item">
      <p>Desarrollo del sistema nervioso</p>
    </div>
    <div className="benefits-item">
      <p>Función digestiva</p>
    </div>
  </div>
</div>

</>
}
export default Nathinfo;