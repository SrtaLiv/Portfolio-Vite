import React from 'react';
import ReactDOM from "react-dom/client";
import App from './App';
import { DarkModeContextProvider } from "./context/darkModeContext";
// Importar los componentes necesarios de FontAwesome
import { faTwitter, faFontAwesome, faInstagram, faXTwitter, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faMoon, faSun, faHouse, faDiagramProject, faHeart } from '@fortawesome/free-solid-svg-icons';

import { library } from '@fortawesome/fontawesome-svg-core';
library.add(faTwitter, faFontAwesome, faInstagram, faXTwitter, faLinkedinIn, faGithub, faMoon, faSun, faHouse, faDiagramProject, faHeart)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DarkModeContextProvider>
      <App />
    </DarkModeContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
