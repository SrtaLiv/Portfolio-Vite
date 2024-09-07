import './contact.scss';
import * as React from 'react';
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faSignature, faCopy, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { Button, Snackbar, TextField, Box } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

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
            <div>
                <h1>Contactame</h1>
                <div variant="h4" component="h2">
                    <p>Tienes alguna <span>propuesta</span>
                        <br />o solo quieres saludar? ¡Adelante!</p>
                </div>
            </div>

            <form action="https://submit-form.com/Ncyecq4Ay">
                <label htmlFor="name">
                    
                </label>
                <input type="text" placeholder=' Nombre' required />

                <label htmlFor="email">
                    
                </label>
                <input type="email" name='email' placeholder=' Email' required />

                <label htmlFor="message">
                </label>
                <textarea
                    id="message"
                    name="message"
                    placeholder=" Deja tu mensaje"
                    required
                ></textarea>

                <button>
                    <div class="svg-wrapper-1">
                        <div class="svg-wrapper">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width="24"
                                height="24"
                            >
                                <path fill="none" d="M0 0h24v24H0z"></path>
                                <path
                                    fill="currentColor"
                                    d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                                ></path>
                            </svg>
                        </div>
                    </div>
                    <span>Enviar</span>
                </button>

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
