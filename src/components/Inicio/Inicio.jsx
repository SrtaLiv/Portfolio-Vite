import { useEffect, useState } from 'react';
import './inicio.scss';
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Inicio() {
    return (
        <div className='inicio'>
            <h4>Hola, soy Olivia</h4>
            <p>Desarrollo interfaces creativas y faciles de usar.</p>
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

