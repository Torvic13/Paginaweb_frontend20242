import './Hillsinfo.css';

const Hilsinfo = () => {
  return (
    <>
      <div className="container d-flex justify-content-center flex-wrap">
        <div className="card custom-card">
          <img
            src="https://www.hillspet.com.pe/content/dam/cp-sites/hills/hills-pet/es_es/general/hp-hero-banner-homepage.png.rendition.744.547.png"
            className="card-img-top custom-img"
            alt="imagen 1"
          />
        </div>
        <div className="text-container">
          <h2 className="text-blue font-weight-bold">HILL’S PET NUTRITION:</h2>
          <h3 className="text-blue">
            alimentos premium para mascotas respaldados por la ciencia
          </h3>
          <p>
            Desde sus días como cachorros y gatitos hasta sus años como perros y gatos mayores, nuestra nutrición comienza con la ciencia para diferencias que puedes ver, sentir y en las que puedes confiar.
          </p>
        </div>
      </div>

      {/* Sección de las tarjetas con imágenes */}
      <div className="diet-cards-container">
        <div className="diet-card prescription-diet">
          <img
            src="https://www.hillspet.com.pe/content/dam/cp-sites/hills/hills-pet/global/2020-homepage-redesign/logo-pd.png.rendition.335.275.png"
            alt="Hill's Prescription Diet"
            className="diet-logo"
          />
          <p>Nutrición terapéutica para ayudar a los veterinarios a transformar la vida de tu mascota.</p>
          <p>
            Si tu mascota se enfrenta a una condición de salud específica o requiere recetas especializadas, los alimentos <strong>Hill's Prescription Diet</strong> ofrecen una nutrición clínicamente probada que le cambiará la vida.
          </p>
        </div>

        <div className="diet-card science-diet">
          <img
            src="https://www.hillspet.com.pe/content/dam/cp-sites/hills/hills-pet/global/2020-homepage-redesign/logo-sd.png.rendition.335.275.png"
            alt="Hill's Science Diet"
            className="diet-logo"
          />
          <p>Nutrición diaria para cada etapa de vida de una mascota saludable.</p>
          <p>
            Las mascotas tienen necesidades únicas que varían según la raza y la edad. Los alimentos <strong>Hill's Science Diet</strong> te ayudan a proporcionar la nutrición que respalda sus vidas en constante cambio.
          </p>
        </div>
      </div>
    </>
  );
};

export default Hilsinfo;
