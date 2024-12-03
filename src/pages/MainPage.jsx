import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";
import Marcas from "../components/Marcas";
import Promociones from "../components/Promociones";
import Footer from "../components/Footer";
import Recomendados from "../components/Recomendados";
const MainPage = () => {
  return (
    <div>
        <Navbar />
        <Carousel/>
        <Marcas />
        <Promociones />
        <Recomendados  />
        <Footer />
    </div>
);

}

export default MainPage 