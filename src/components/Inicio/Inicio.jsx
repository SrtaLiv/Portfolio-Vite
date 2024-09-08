import { useEffect, useState } from 'react';
import './inicio.scss';
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faSignature, faCopy, faArrowDown } from '@fortawesome/free-solid-svg-icons';

function Inicio() {
    return (
        <div className='inicio'>
            <h1>Ana Olivia Todesco</h1>
            <h3>Full Stack Developer • Creadora de contenido</h3>
            <div class="buttons">
                <a href="src/assets/CURRICULUM.pdf" download="CURRICULUM.pdf" >
                    <button className='btn-cv'>
                        <FontAwesomeIcon icon={faArrowDown} />
                        Curriculum
                    </button>
                </a>

                <Link className='nav-link' to='container-contact' smooth={true} duration={600}>
                    <button className='btn-contacto'>Contacto</button>
                </Link>
            </div>
        </div>
    )
}

export default Inicio;

