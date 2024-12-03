import './Canboinfo.css';

const Canboinfo =()=>{
return <>
<div className="container d-flex justify-content-center flex-wrap">
        <div className="card custom-card">
          <img
            src="https://static.mercadonegro.pe/wp-content/uploads/2023/02/02141253/PORTAL-CANBO-5.jpg"
            className="card-img-top custom-img"
            alt="imagen 1"
          />
        </div>
        <div className="text-container">
          <h2 className="text-blue font-weight-bold">Por qué Canbo?</h2>
          <p>
            Canbo está diseñado con innovadora combinación Tri-Prebiótica: MOS, FOS, GOS Y Betaglucanos para promover un sistema digestivo saludable como punto de partida para el bienestar 360° de tu mascota.
          </p>
        </div>
      </div>
      <div className="canbo-cards-container">
      <h2 className="canbo-title">El bienestar de tu mascota empieza con un <span className="highlight-text">Sistema Digestivo Saludable</span></h2>
      </div>
      <div className="canbo-cards-container"> 
        <div className="canbo-card">
          
          <h3>01.</h3>
          <p> <span class="text-white font-weight-bold"> Manano-Oligosacáridos (MOS)</span> Aglutinador de bacterias patógenas para un equilibrio saludable de la microbiota.
          </p>
        </div>

        <div className="canbo-card">
        <h3>02.</h3>
        <p>
            <span className="text-white font-weight-bold">Fructo-Oligosacáridos (FOS)</span>  Sustrato importante para la alimentación de bacterias benéficas. Impulsan su crecimiento.
        </p>
        </div>


        <div className="canbo-card">
          <h3>03.</h3>
          <p>
          <span class="text-white font-weight-bold">Galacto-Oligosacáridos (GOS)</span> Estructura molecular símil a la leche materna que promueve una microbiota saludable.
          </p>
        </div>


      </div>
</>

}

export default Canboinfo;