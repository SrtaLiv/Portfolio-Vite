import './contact.scss';
import * as React from 'react';
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faSignature, faCopy, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { Button, Snackbar, TextField, Box } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import Separator from '../Separator/Separator';

function Contact() {
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        navigator.clipboard.writeText('anaoliviatodesco@gmail.com')
            .then(() => {
                setOpen(true);
                setTimeout(() => setOpen(false), 2000); // Close the Snackbar after 2 seconds
            })
            .catch(err => console.error('Failed to copy: ', err));
    };

    return (
        <div className='container-contact'>
            <Separator />
            <div>
                <h1>Contactame</h1>
                <div variant="h4" component="h2">
                    <p>Tienes alguna <span>propuesta</span>
                        <br />o solo quieres saludar? ¡Adelante!</p>
                </div>
            </div>

            <form action="https://submit-form.com/Ncyecq4Ay">
                <label htmlFor="name">
                    <FontAwesomeIcon icon={faSignature} />
                    NOMBRE
                </label>
                <input type="text" placeholder='Nombre*' required />

                <label htmlFor="email">
                    <FontAwesomeIcon icon={faEnvelope} />
                    EMAIL
                </label>
                <input type="email" name='email' placeholder='Email' required />

                <label htmlFor="message">
                    <FontAwesomeIcon icon={faEnvelope} /> MENSAJE
                </label>
                <textarea
                    id="message"
                    name="message"
                    placeholder="Deja tu mensaje"
                    required
                ></textarea>

                <Button type="submit" variant="contained" endIcon={<SendIcon />}>
                    Enviar
                </Button>
            </form>

            <a className='btn-cv' href="src/assets/CURRICULUM.pdf" download="CURRICULUM.pdf">
                <FontAwesomeIcon icon={faArrowDown} />
                Descargar CV
            </a>

            <a onClick={handleClick} className="btn-copy-email">
                <FontAwesomeIcon icon={faCopy} />
                Copiar Email
            </a>

            <Snackbar
                message="Email copiado al portapapeles"
                anchorOrigin={{ vertical: "top", horizontal: "center" }}
                autoHideDuration={2000}
                onClose={() => setOpen(false)}
                open={open}
            />
        </div>
    );
}

export default Contact;
