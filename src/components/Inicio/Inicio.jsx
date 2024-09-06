import { useEffect, useState } from 'react';
import './inicio.scss';
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



function Inicio() {
    return (
        <div className='inicio'>
            <h1>Olivia Todesco</h1>
            <h3>Full Stack Developer • Creadora de contenido</h3>
            <h4>Desarrollo interfaces creativas y faciles de usar.</h4>
            <section>
                <Link className='nav-link' to='contacto-container' smooth={true} duration={600}>
                    <button className='btn-contacto'>Contacto</button>
                </Link>
                <button href="src/assets/CURRICULUM.pdf" download="-.pdf">Curriculum</button>
            </section>
        </div>
    )
}

export default Inicio;

