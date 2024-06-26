import Nav from "./components/Navbar/Navbar.jsx";
import React, { useContext } from 'react';
import './style.scss';
import { DarkModeContext } from "./context/darkModeContext.jsx";
import Inicio from './components/Inicio/Inicio.jsx';
import Proyectos from './components/Proyectos/Proyectos';
import Tecnologias from './components/Tecnologias/Tecnologias.jsx';
import Footer from './components/Footer/Footer.jsx';

import ReactDOM from 'react-dom'
import { library } from '@fortawesome/fontawesome-svg-core'


//browserroute rnos permite
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

      <Footer/>
    </div>
  );
}

export default App;
