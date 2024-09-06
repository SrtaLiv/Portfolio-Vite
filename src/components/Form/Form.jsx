import './contact.scss';
import * as React from 'react';
import { useState } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button, IconButton, Snackbar, TextField, Box } from '@mui/material';

function Form() {


    // form
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [error, setError] = useState({
        emailError: false,
        emailMessage: "",
        nameError: false,
        nameMessage: "",
    });

    const emailValidation = (email) => {
        const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        return regex.test(email);
    };

    const nameValidation = (name) => {
        return name.trim().length > 0; // Ensure the name is not just whitespace
    };

    const onSubmit = (e) => {
        e.preventDefault();

        const isEmailValid = emailValidation(email);
        const isNameValid = nameValidation(name);

        if (!isEmailValid || !isNameValid) {
            setError({
                emailError: !isEmailValid,
                emailMessage: !isEmailValid ? "El email no es válido" : "",
                nameError: !isNameValid,
                nameMessage: !isNameValid ? "El nombre no puede estar vacío" : "",
            });
            return;
        }

        // Submit form logic here
    };

    return (
        <div className='container-contact'>
            <div>
                <h1>Contactame</h1>
                <p variant="h4" component="h2">
                    <p>Tienes alguna <span>propuesta</span>
                        <br />o solo quieres saludar? Adelante!</p>
                </p>
            </div>

            <Box
                component="form"
                onSubmit={onSubmit}
                action="https://submit-form.com/Ncyecq4Ay"
            >
                <TextField
                    label="Email"
                    variant="outlined"
                    id="email"
                    fullWidth
                    error={error.error}
                    helperText={error.message}
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                />
                <br />
                <TextField
                    label="Nombre"
                    variant="outlined"
                    id="name"
                    fullWidth
                    error={error.error}
                    helperText={error.message}
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                />

                <Button
                    variant="outlined"
                    type="submit"
                    sx={{ mt: 2 }}
                >
                    Enviar
                </Button>
            </Box>

<br />

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

export default Form;