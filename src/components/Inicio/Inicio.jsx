import { useEffect, useState } from 'react';
import './inicio.scss';
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Inicio() {
    return (
        <div className='inicio'>
            <h1 className='olivia'>Hola, mi nombre es Olivia</h1>

            <p>Me gusta desarrollar interfaces creativas y usables. </p>
            <br />
            {/* <button>DOWNLOAD CV</button>
            <Link className='nav-link' to='contacto-container' smooth={true} duration={600}>
                <FontAwesomeIcon className='nav-icon' icon="fa-solid fa-heart" />
                CONTACTO
            </Link> */}
        </div>
    )
}

export default Inicio;

