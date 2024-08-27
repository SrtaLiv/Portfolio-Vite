import { useEffect, useState } from 'react';
import './inicio.scss';
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Inicio() {
    return (
        <div className='inicio'>
            <h4>Hola, mi nombre es</h4>
            <h1>Olivia.</h1>
            <p>Me gusta desarrollar interfaces creativas y faciles de usar.</p>
            <p>Actualmente estudio una Tecnicatura en Desarrollo de Aplicaciones. Tambien me encuentro haciendo proyectos para ganar experiencia y subo recursos para desarrolladores en mis redes</p>
            <button>DOWNLOAD CV</button>
            <Link className='nav-link' to='contacto-container' smooth={true} duration={600}>
                <FontAwesomeIcon className='nav-icon' icon="fa-solid fa-heart" />
                CONTACTO
            </Link>
        </div>
    )
}

export default Inicio;

