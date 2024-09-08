import './contact.scss';
import * as React from 'react';
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faSignature, faCopy, faArrowDown } from '@fortawesome/free-solid-svg-icons';

function Contact() {
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
                    <div className="svg-wrapper-1">
                        <div className="svg-wrapper">
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
        </div>
    );
}

export default Contact;
