import './proyectos.scss';
import proyectosData from './ProyectosData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Proyectos() {
    return (
        <div className='proyectos'>
            <h2>Proyectos</h2>
            <div className="proyectos-container">
                {proyectosData.map(proyecto => (
                    <div key={proyecto.id} className="proyecto-card">
                        <h3 className='title'>
                            {proyecto.titulo}
                        </h3>
                        <img src={proyecto.imagenUrl} alt="" />

                        <a href={proyecto.enlace} target="_blank" className='title'>
                            <FontAwesomeIcon icon="fa-brands fa-github" size='2x' />
                            <p>{proyecto.descripcion}</p>
                        </a>

                        <div className='tecnologias'>
                            {proyecto.tecnologias.map((tecnologia, index) => (
                                <h4 key={index} className="badge">{tecnologia}</h4>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Proyectos;
