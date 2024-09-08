import { useEffect, useState } from 'react';
import './sobremi.scss';

function Sobremi() {
    return (
        <div className='sobre-mi'>
            <h2>Sobre mi</h2>
            <div className='descripcion'>
                <img alt="Foto perfil" draggable="true" src="https://pbs.twimg.com/profile_images/1802921319207407616/9X6R2I2f_400x400.jpg" />
                <p>
                    Mi nombre es <span>Ana Olivia Todesco</span>, soy de Argentina y me especializo en el Desarrollo Web. Me apasiona la tecnología y la programación, y disfruto de aprender cosas nuevas cada día.
                    <br /><br />
                    Actualmente, estudio una <span>Tecnicatura Universitaria en Desarrollo de Aplicaciones </span>Informáticas para continuar mi formación. En cada desafío doy lo mejor de mí y busco crecer como profesional en este ámbito. Además de estudiar, creo contenido en <a href="https://www.instagram.com/oliviatodesco/" target="_blank" rel="noopener noreferrer">Instagram</a>, donde recomiendo recursos para programadores y diseñadores.
                    <br /><br />
                </p>
            </div>
        </div>
    )
}

export default Sobremi;

