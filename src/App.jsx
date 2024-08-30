import React, { useContext } from 'react';
import './style.scss';
import Nav from "./components/Navbar/Navbar.jsx";
import { DarkModeContext } from "./context/darkModeContext";
import Inicio from './components/Inicio/Inicio.jsx';
import Proyectos from './components/Proyectos/Proyectos.jsx';
import Footer from './components/Footer/Footer.jsx';
import Contact from "./components/Contact/Contact.jsx";
import Sobremi from "./components/Sobre Mi/Sobremi.jsx";
import { StyledEngineProvider } from '@mui/material/styles';

import ReactDOM from 'react-dom'
import { library } from '@fortawesome/fontawesome-svg-core'



function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={`theme-${darkMode ? "dark" : "light"}`}>
    <StyledEngineProvider injectFirst>
      <Nav />

      <section id="inicio">
        <Inicio />

      </section>

      <section id="sobre-mi">
        <Sobremi />
      </section>

      <section id="proyecto">
        <Proyectos />
      </section>

      <section id="contacto-container">
        <Contact />
      </section>

      {/* <section id="footer-container">
        <Footer />
      </section> */}
      </StyledEngineProvider>
    </div>
  );
}

export default App;
