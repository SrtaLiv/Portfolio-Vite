import './contact.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Contact() {
    return (
            <form action="">
                <div className='container-contact'>
                    <h1>Contactame</h1>
                    <input type="text" placeholder='Nombre' />
                    <input type="text" placeholder='Email' />
                    <input className='message' type="text" placeholder='Mensaje' />
                    
                    <input type="submit" className="submit" id="" />

                    <a className='btn-cv' href='#'>Descargar CV
                        <FontAwesomeIcon icon="fa-solid fa-circle-arrow-down" />
                    </a>
                    <a className='btn-email' href='#'>Copiar email
                        <FontAwesomeIcon icon="fa-solid fa-copy" />
                    </a>
                </div>
            </form>
    )
}

export default Contact;