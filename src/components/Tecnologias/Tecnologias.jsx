import Tecnologia from '../Tecnologia/Tecnologia';
import './tecnologias.scss';
import tecnologiasData from './TecnologiasData';

function Tecnologias() {
    return (
        <div className='tecnologias-container'>
            <h2>Sobre mi (awantaa!!)</h2>

            <div className='descripcion'>
                <p>Desde chica que me la paso en computadoras y tecnologia en general.
                    <br></br>
                    Empece en el mundo de la programacion en el 2021 con cursos de desarrollo web y me encantó.
                    Segui estudiando y practicando de forma autodidacta hasta que en 2023 empece una Tecnicatura Universitaria en Desarrollo de Aplicaciones Informaticas.
                    Me considero una persona que no se conforma fácil y que siempre da lo mejor de si. Busco crecer y progresar cada dia.
                    <br></br>
                    <br></br>

                    Ademas de estudiar hago <span>contenido</span> a redes sociales recomendando páginas, recursos para programadores y un poco de humor. Si te gustaria saber mas sobre mi podes contactarte. Muchas gracias por pasarte por aquí.
                </p>
            </div>
            
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

