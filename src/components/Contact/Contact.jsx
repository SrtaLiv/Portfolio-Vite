import './contact.scss';
import * as React from 'react';
import { useState } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Separator from '../Separator/Separator';

import SendIcon from '@mui/icons-material/Send';
import { Button, IconButton, Snackbar, TextField } from '@mui/material';
import Footer from '../Footer/Footer';
import { ShareIcon } from 'lucide-react';

function Contact() {
    const [open, setOpen] = useState(false);

    const handleSubmit = (e) => {
        console.log("Submit")
    }

    const handleClick = () => {
        navigator.clipboard.writeText('anaoliviatodesco@gmail.com') // 
            .then(() => {
                setOpen(true);
                setTimeout(() => setOpen(false), 2000); // Cierra el Snackbar después de 2 segundos
            })
            .catch(err => console.error('Failed to copy: ', err));
    };
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
                <TextField id="standard-basic" label="Tu nombre" variant="standard" />
                
                
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
                    Enviar
                </Button>

            </form>

            <a className='btn-cv' href="src/assets/CURRICULUM.pdf" download="CURRICULUM.pdf" class="btn-download">
                <FontAwesomeIcon icon="fa-solid fa-circle-arrow-down" />
                Descargar CV
            </a>

            <a onClick={handleClick}>
                <FontAwesomeIcon icon="fa-solid fa-copy" />
                Copiar Email
            </a>

            <Snackbar
                message="Copied to clibboard"
                anchorOrigin={{ vertical: "top", horizontal: "center" }}
                autoHideDuration={2000}
                onClose={() => setOpen(false)}
                open={open}
            />
        </div >
    )
}

export default Contact;