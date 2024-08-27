import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { DarkModeContextProvider } from "./context/darkModeContext";
// Importar los componentes necesarios de FontAwesome
import { faTwitter, faFontAwesome, faInstagram, faXTwitter, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faMoon, faSun, faHouse, faDiagramProject, faHeart, faCircleArrowDown, faCopy, faSignature, faEnvelope } from '@fortawesome/free-solid-svg-icons';

import './style.scss'
import { library } from '@fortawesome/fontawesome-svg-core';
// Register Font Awesome icons
library.add(
  faTwitter, faFontAwesome, faInstagram, faXTwitter,
  faLinkedinIn, faGithub, faMoon, faSun, faHouse,
  faDiagramProject, faHeart, faCircleArrowDown, faCopy, faSignature, faEnvelope, faEnvelope
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DarkModeContextProvider>
      <App />
    </DarkModeContextProvider>
  </React.StrictMode>
);