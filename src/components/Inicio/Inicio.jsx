import { useEffect, useState } from 'react';
import './inicio.scss';
import { text } from '@fortawesome/fontawesome-svg-core';

function Inicio() {
    return (
        <div className='inicio'>
            <h4>Hola, mi</h4>
            <h1>nombre es<span> Oli</span>.</h1>
            <h3>Soy desarrolladora de <span>Software</span></h3>


            <a href='/about'>Leer mas sobre mi →</a>

            <img alt="Abre foto de perfil" draggable="true" src="https://pbs.twimg.com/profile_images/1770285890998296576/UJM16-fy_200x200.jpg" />

            <div className='intentando'>

                <div class="personaje">
                    <div class="ojo"></div>
                    <div class="ojo"></div>
                </div>
            </div>

        </div>
    )
}

export default Inicio;

