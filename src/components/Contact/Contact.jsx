import './contact.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { TextField } from '@mui/material';

function Contact() {
    return (
        <form action="">
            <div className='container-contact'>
                <h1 style={{ color: "#63E6BE" }}>Mandame un mensaje!</h1>
                <p>Tienes alguna propuesta
                    <br />o solo quieres decir hola? Pues adelante</p>

                <label htmlFor="">
                    <FontAwesomeIcon icon="fa-solid fa-signature" />NOMBRE
                </label>
                <input type="text" placeholder='Nombre' required />


                <label htmlFor="">
                    <FontAwesomeIcon icon={faEnvelope} style={{ color: "#63E6BE", }} />EMAIL
                </label>
                <input type="Email" placeholder='Email' required />

                <label style={{ color: "#63E6BE" }} htmlFor="">
                    <FontAwesomeIcon icon={faEnvelope} style={{ color: "#63E6BE", }} />MENSAJE</label>
                <input className='message' type="text" placeholder='Deja tu mensaje' required />

                <input type="submit" className="submit" id="" />
                <a className='btn-cv' href="src/assets/CURRICULUM.pdf" download="CURRICULUM.pdf" class="btn-download">
                <FontAwesomeIcon icon="fa-solid fa-circle-arrow-down" />

                Descargar CV</a>

                <a className='btn-email' href='#'>Copiar email
                    <FontAwesomeIcon icon="fa-solid fa-copy" />
                </a>
            </div>
        </form>
    )
}

export default Contact;