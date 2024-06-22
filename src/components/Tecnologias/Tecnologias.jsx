import Tecnologia from '../Tecnologia/Tecnologia';
import './tecnologias.scss';
import tecnologiasData from './TecnologiasData';

function Tecnologias() {
    return (
        <div className='tecnologias-container'>
            <h1>Habilidades</h1>
            <div className='tecnologias'>
                {tecnologiasData.map(tecnologia => (
                    <div key={tecnologia.id}>
                        <img src={tecnologia.imagenUrl} alt={tecnologia.titulo} />
                        <h4>{tecnologia.titulo}</h4>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Tecnologias;

