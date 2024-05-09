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
                <h1>Contactame</h1>

        
                <a className='btn-cv' href='#'>Download CV
                    <FontAwesomeIcon icon="fa-solid fa-circle-arrow-down" />
                </a>
                <a className='btn-cv' href='#'>Copy email
                <FontAwesomeIcon icon="fa-solid fa-copy" />
                </a>

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
        </footer >
    )
}

export default Footer;