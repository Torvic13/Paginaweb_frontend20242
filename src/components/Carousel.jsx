import './Carousel.css'
const Carousel  = () => {
    return <>
    <div  className="logo"> Las tienda para mascotas engreidas</div>
    <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="https://www.superpet.pe/on/demandware.static/-/Library-Sites-SuperPetSharedLibrary/default/dwae571d1f/SuperPet/Homepage/2024/main_banner/cyber/cyberpet-arenas-desktop.jpg"
            className="d-block w-100"
            alt="Imagen 1"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://www.superpet.pe/on/demandware.static/-/Library-Sites-SuperPetSharedLibrary/default/dw772bd1fb/SuperPet/Homepage/2024/main_banner/cyber/cyberpet-gimnasios-desktop.jpg"
            className="d-block w-100"
            alt="Imagen 2"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://www.superpet.pe/on/demandware.static/-/Library-Sites-SuperPetSharedLibrary/default/dwc222a240/SuperPet/Homepage/2024/main_banner/cyber/cyberpet-juguetes-desktop.jpg"
            className="d-block w-100"
            alt="Imagen 3"
          />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
    </> 
}

export default Carousel;