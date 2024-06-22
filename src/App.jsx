import Nav from "./components/Navbar/Navbar.jsx";
import React, { useContext } from 'react';
import './style.scss';
import { DarkModeContext } from "./context/darkModeContext";
import Inicio from './components/Inicio/Inicio.jsx';
import Proyectos from './components/Proyectos/Proyectos.jsx';
import Tecnologias from './components/Tecnologias/Tecnologias.jsx';
import Footer from './components/Footer/Footer.jsx';

import ReactDOM from 'react-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import Contact from "./components/Contact/Contact.jsx";


function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={`theme-${darkMode ? "dark" : "light"}`}>
      <Nav />

      <section id="inicio">
        <Inicio />
      </section>

      <section id="proyecto">
        <Proyectos />
      </section>


      <section id="tecnologias-container">
        <Tecnologias />
      </section>

      <section id="contacto-container">
        <Contact />
      </section>

      <section id="footer-container">
        <Footer />
      </section>

    </div>
  );
}

export default App;
