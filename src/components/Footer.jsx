import React from "react";


const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center py-4">
      <div className="container">
        <p className="mb-0">© 2024 SuperPet. Todos los derechos reservados.</p>
        <div>
          <a href="#" className="text-white mx-2">
            Política de Privacidad
          </a>
          <a href="#" className="text-white mx-2">
            Términos de Uso
          </a>
          <a href="#" className="text-white mx-2">
            Contacto
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
