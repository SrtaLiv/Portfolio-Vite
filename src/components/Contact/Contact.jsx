import './contact.scss';
import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Separator from '../Separator/Separator';

import SendIcon from '@mui/icons-material/Send';
import { Button } from '@mui/material';
import Footer from '../Footer/Footer';

function Contact() {
    const [loading, setLoading] = React.useState(true);
    function handleClick() {
        setLoading(true);
    }
    return (
        <div className='container-contact'>
            <Separator />
            <div>
                <h1>Contactame</h1>
                <p variant="h4" component="h2">
                    <p>Tienes alguna <span>propuesta</span>
                        <br />o solo quieres saludar? Adelante!</p>
                </p>
            </div>

            <form action="https://submit-form.com/Ncyecq4Ay">
                <label htmlFor="name">
                    <FontAwesomeIcon icon="fa-solid fa-signature" /> NOMBRE
                </label>
                <input type="text" placeholder='Nombre*' required />
                {/* <TextField id="standard-basic" label="Tu nombre" variant="standard" /> */}
                <label htmlFor="email">
                    <FontAwesomeIcon icon={faEnvelope} /> EMAIL
                </label>
                <input type="Email" name='email' placeholder='Email' required />

                <label htmlFor="">
                    <FontAwesomeIcon icon={faEnvelope} /> MENSAJE</label>
                <textarea
                    id="message"
                    name="message"
                    placeholder="Deja tu mensaje"
                    required=""
                ></textarea>

                <Button type="submit" variant="contained" endIcon={<SendIcon />}>
                    ENVIAR MENSAJE
                </Button>
                {/* <LoadingButton
                    size="small"
                    onClick={handleClick}
                    endIcon={<SendIcon />}
                    loading={loading}
                    loadingPosition="end"
                    variant="contained"
                >
                    Send
                </LoadingButton> */}
            </form>

            <a className='btn-cv' href="src/assets/CURRICULUM.pdf" download="CURRICULUM.pdf" class="btn-download">
                <FontAwesomeIcon icon="fa-solid fa-circle-arrow-down" />
                Descargar CV</a>

            <a className='btn-email' href='#'>Copiar email
                <FontAwesomeIcon icon="fa-solid fa-copy" />
            </a>
            <Footer />
        </div >
    )
}

export default Contact;