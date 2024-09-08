import React, { useContext, useState } from 'react';
import { DarkModeContext } from "../../context/darkModeContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-scroll';
import "./navbar.scss";
import { color } from 'framer-motion';

function Nav() {
    const { toggle, darkMode } = useContext(DarkModeContext);
    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        console.log('click');
        setMenuOpen(!menuOpen);  // Alterna el estado del menú
    };

    return (
        <header>
            <nav className='nav'>
                <Link className='nav-link' to="inicio" smooth={true} duration={600}>
                    <h3 className='logo'>Olivia</h3>
                </Link>

                <div className={`nav-menu ${menuOpen ? 'open' : ''}`}>
                    <ul className='nav-list'>
                        <li className='burguer' onClick={handleMenuToggle}>
                            <FontAwesomeIcon icon="fa-solid fa-bars" />
                        </li>

                        <li className='nav-item'>
                            <Link className='nav-link' to="sobre-mi" smooth={true} duration={600} onClick={handleMenuToggle}>
                                Sobre mi
                            </Link>
                        </li>

                        <li className='nav-item'>
                            <Link className='nav-link' to='proyectos' smooth={true} duration={600} onClick={handleMenuToggle}>
                                Proyectos
                            </Link>
                        </li>

                        <li className='nav-item'>
                            <Link className='nav-link' to='contacto-container' smooth={true} duration={600} onClick={handleMenuToggle}>
                                Contacto
                            </Link>
                        </li>

                        <li className='nav-item'>
                            {darkMode ? (
                                <FontAwesomeIcon onClick={toggle} icon="fa-solid fa-sun" />
                            ) : (
                                <FontAwesomeIcon onClick={toggle} icon="fa-solid fa-moon" />
                            )}
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default Nav;
