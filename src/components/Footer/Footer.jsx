import './footer.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Footer() {
    const redes = {
        x: 'https://twitter.com/olii_todesco',
        instagram: 'https://www.instagram.com/olii_todesco/',
        linkedin: 'https://www.linkedin.com/in/ana-olivia-todesco-324958288/',
        github: 'https://github.com/SrtaLiv',
    }
    return (
        <footer>
                <div className='contenedor-footer'>
                    <div className='icons-footer'>
                        <a href={redes.x} className='delay' target="_blank">
                            <FontAwesomeIcon icon="fa-brands fa-x-twitter" size='2x' />
                        </a>

                        <a href={redes.instagram} target="_blank">
                            <FontAwesomeIcon icon="fa-brands fa-instagram" size='2x' />
                        </a>

                        <a href={redes.linkedin} className='delay' target="_blank">
                            <FontAwesomeIcon icon="fa-brands fa-linkedin-in" size='2x' />
                        </a>

                        <a href={redes.github} target="_blank">
                            <FontAwesomeIcon icon="fa-brands fa-github" size='2x' />
                        </a>
                    </div>
                </div>

                <a href='https://github.com/SrtaLiv/Portfolio-Vite'>Diseñado y Creado por Ana Olivia Todesco</a>
        </footer >
    )
}

export default Footer;