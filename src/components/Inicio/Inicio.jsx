import { useEffect, useState } from 'react';
import './inicio.scss';
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Inicio() {
    return (
        <div className='inicio'>
            <h1>Olivia Todesco</h1>
            <h3>Full Stack Developer  • Creadora de contenido</h3>
            <h4>Desarrollo interfaces creativas y faciles de usar.</h4>
            <section>
                <button>DOWNLOAD CV</button>
                <Link className='nav-link' to='contacto-container' smooth={true} duration={600}>
                    <button>
                        Contacto
                    </button>
                </Link>
            </section>
        </div>
    )
}

export default Inicio;

