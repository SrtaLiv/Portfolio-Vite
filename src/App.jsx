import React, { useContext } from 'react';
import './style.scss';
import Nav from "./components/Navbar/Navbar.jsx";
import { DarkModeContext } from "./context/darkModeContext";
import Inicio from './components/Inicio/Inicio.jsx';
import Proyectos from './components/Proyectos/Proyectos.jsx';
import Footer from './components/Footer/Footer.jsx';
import Contact from "./components/Contact/Contact.jsx";
import Sobremi from "./components/Sobre Mi/Sobremi.jsx";

function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={`main theme-${darkMode ? "dark" : "light"}`}>
      <Nav />
        <Inicio />
        <Sobremi />
        <Proyectos />
        <Contact />
        <Footer />
    </div>
  );
}

export default App;