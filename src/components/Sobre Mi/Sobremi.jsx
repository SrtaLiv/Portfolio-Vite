import { useEffect, useState } from 'react';
import './sobremi.scss';

function Sobremi() {
    return (
        <div className='sobremi'>
            <img alt="Foto perfil" draggable="true" src="https://pbs.twimg.com/profile_images/1802921319207407616/9X6R2I2f_400x400.jpg" />
            <h3>Desarrolladora de <span>Software</span></h3>
            <div className='descripcion'>
                <p>
                    Hola! Mi Ana Olivia Todesco, tengo 19 años y soy de Argentina.
                    Empecé en el mundo de la programacion en el 2021 con cursos de Desarrollo Web.
                    <br></br>
                    <br></br>

                    Aprendi de forma autodidacta hasta que en 2023 empece una Tecnicatura Universitaria en Desarrollo de Aplicaciones Informaticas para continuar mi formación.
                    Me considero una persona que no se conforma fácil y que da lo mejor de si.
                    <br></br>
                    <br></br>

                    Además de estudiar creo contenido en <span>redes sociales</span> donde recomiendo recursos para programadores.
                    Busco desarrollar interfaces creativas y faciles de usar.
                    Muchas gracias por pasarte por aquí.
                </p>
            </div>
        </div>
    )
}

export default Sobremi;

