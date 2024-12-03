import './Proplainfo.css';

const Proplainfo = () => {
  return (
    <>
      <div className="container d-flex justify-content-center flex-wrap">
        <div className="card custom-card">
          <img
            src="https://piensoymascotas.com/themes/pym_template/assets/img//landing/1628/purina_banner_3.png"
            className="card-img-top custom-img"
            alt="imagen 1"
          />
        </div>
        <div className="text-container">
          <h2 className="text-blue font-weight-bold">Siempre avanzando. Sin concesiones.</h2>
          <p>
            En Purina Pro Plan, nunca dejaremos de investigar, descubrir ni mejorar el alimento que ayuda a diario a tu mascota. Por todo lo que nos dan, nuestras mascotas merecen la nutrición más avanzada del mundo.
          </p>
        </div>
      </div>

      {/* Nueva sección de tarjetas */}
      <div className="proplan-cards-container">
      <h2 className="proplan-title">¿Por qué Purina Pro Plan es el mejor alimento para tu mascota?</h2>
      </div>
      <div className="proplan-cards-container"> 
        <div className="proplan-card">
          <img
            src="https://www.purina.com/.netlify/images?url=https%3A%2F%2Fwww.purina.com%2Fsites%2Fdefault%2Ffiles%2F2023-03%2Fproplan_icons-no-circle_9-year-study_0.png&cd=d8e625ff219e496ecd10a8567a1b526b&w=600&h=360&fm=avif&q=75"
            alt="Innovación científica"
            className="proplan-icon"
          />
          <h3>Nutrición innovadora con el respaldo de más de 500 científicos</h3>
          <p>
            Nuestra innovadora nutrición está impulsada por un equipo de más de 500 nutricionistas, veterinarios y científicos.
          </p>
        </div>

        <div className="proplan-card">
          <img
            src="https://www.purina.com/.netlify/images?url=https%3A%2F%2Fwww.purina.com%2Fsites%2Fdefault%2Ffiles%2F2023-03%2Fproplan_icons-no-circle_nutrient-dense-bite-sized-kibble-dog-tri.png&cd=ebcd58e530e86424703346edb07e6c1d&w=600&h=360&fm=avif&q=75"
            alt="Fórmulas específicas"
            className="proplan-icon"
          />
          <h3>Más de 140 fórmulas específicas</h3>
          <p>
            Pro Plan ofrece más de 140 fórmulas específicas para ayudar a tu mascota a prosperar durante cada etapa de su vida.
          </p>
        </div>

        <div className="proplan-card">
          <img
            src="https://www.purina.com/.netlify/images?url=https%3A%2F%2Fwww.purina.com%2Fsites%2Fdefault%2Ffiles%2F2023-03%2Fproplan_icons_vet-recommended-brand_new.png&cd=d73882d8b84f0e58096ffb7b87b133d4&w=600&h=360&fm=avif&q=75" /* Imagen de ejemplo */
            alt="Recomendado por veterinarios"
            className="proplan-icon"
          />
          <h3>Recomendado por veterinarios</h3>
          <p>
            La nutrición avanzada de Purina Pro Plan es una elección confiable de expertos y veterinarios en todo el país.
          </p>
        </div>

        <div className="proplan-card">
          <img
            src="https://www.purina.com/.netlify/images?url=https%3A%2F%2Fwww.purina.com%2Fsites%2Fdefault%2Ffiles%2F2023-03%2Fproplan_icons-no-circle_champion-trophy.png&cd=92c35a3ef6e617e0f82a8041bfaed6f4&w=600&h=360&fm=avif&q=75" /* Imagen de ejemplo */
            alt="Campeones"
            className="proplan-icon"
          />
          <h3>La elección de campeones</h3>
          <p>
            Descubre por qué los campeones de caza y de exhibición eligen Pro Plan más que cualquier otra marca.
          </p>
        </div>
      </div>
    </>
  );
};

export default Proplainfo;
