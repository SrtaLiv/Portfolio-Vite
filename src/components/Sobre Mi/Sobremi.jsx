import { useEffect, useState } from 'react';
import './sobremi.scss';
import Footer from '../Footer/Footer';

const languages = [
    { id: 1, name: 'JavaScript', type: 'Frontend' },
    { id: 2, name: 'Angular', type: 'Frontend' },
    { id: 3, name: 'Java', type: 'Backend' },
    { id: 4, name: 'TypeScript', type: 'Frontend' },
    { id: 5, name: 'C#', type: 'Backend' },
    { id: 6, name: 'HTML', type: 'Frontend' },
    { id: 7, name: 'CSS', type: 'Frontend' },
];
function Sobremi() {
    const [filter, setFilter] = useState(''); //estado que va a cambiar segun el boton que clickeemos
    
    const handleClick = (filterType) => { //pide como parametro Frontend, Backend..
        setFilter(filterType); //setea el estado con el parametro que le pasamos
    };

    return (
        <div className='sobremi'>
            <h1>Sobre mi</h1>
            <img alt="Foto perfil" draggable="true" src="https://pbs.twimg.com/profile_images/1802921319207407616/9X6R2I2f_400x400.jpg" />
            <div className='descripcion'>
                <p>
                    Mi nombre es <span>Ana Olivia Todesco</span>, tengo 19 años y soy de Argentina. Comencé en el mundo de la programación de forma autodidacta en 2021.
                    <br /><br />
                    Actualmente, estudio una Tecnicatura Universitaria en Desarrollo de Aplicaciones Informáticas para continuar mi formación. En cada desafío doy lo mejor de mí y busco crecer como profesional en este ámbito. Me apasiona el Desarrollo Web y el Diseño de Interfaces, áreas en las que me especializo.
                    <br /><br />
                    Además de estudiar, creo contenido en <a href="https://www.instagram.com/oliviatodesco/" target="_blank" rel="noopener noreferrer">Instagram</a>, donde recomiendo recursos para programadores y diseñadores.
                    <br /> <br />
                    Algunas de las tecnologias que mejor utilizo son
                    <br /> <br />

                    <div>
                        <button onClick={() => handleClick('FullStack')} className='btn'>FullStack</button>
                        <button onClick={() => handleClick('Frontend')} className='btn'>Frontend</button>
                        <button onClick={() => handleClick('Backend')} className='btn'>Backend</button>

                        <ul>
                            {
                                //si el filtro esta vacio muestra todo. (estado inicial)
                                //si coincide con el language.type == Frontend, Backend muestra SOLO los que coincidan con el filtro
                                //si el filtro es FullStack muestra todo.
                            }
                            {languages
                                .filter(language => filter === '' || language.type === filter || filter === 'FullStack') 
                                .map(language => (
                                    <li key={language.id}>{language.name}</li>
                                ))
                            }
                        </ul>
                    </div>

                    <Footer />
                </p>
            </div>
        </div>
    )
}

export default Sobremi;

