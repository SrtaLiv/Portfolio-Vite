import { Typography, Card, CardContent, CardMedia, CardActions, Button } from '@mui/material';
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
                        <h4>{proyecto.titulo}</h4>
                        <p>{proyecto.descripcion}</p>
                        <div className='github'>
                            <a href={proyecto.enlace} target="_blank">
                                <img src="/public/github.png" alt="" />
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Proyectos;
